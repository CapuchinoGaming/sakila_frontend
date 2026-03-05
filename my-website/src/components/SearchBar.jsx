import { useState, useContext } from "react";
import { sendRequest } from "../api/handler";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SessionContext } from '../contexts/SessionContext';

function SearchBar({ setTotalItems, setCustomers, setCustomerSelected, query, setQuery, searchField, setSearchField }) {
    const [open, setOpen] = useState(false);
    const { storeID } = useContext(SessionContext);
    const [form, setForm] = useState({
      store_id: storeID,
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      address: {
        address_line1: '',
        address_line2: '',
        district: '',
        city: '',
        country: '',
        postal_code: ''
      }
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = e => {
      const { name, value } = e.target;
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setForm(f => ({
          ...f,
          [parent]: {
            ...f[parent],
            [child]: value
          }
        }));
      } else {
        setForm(f => ({ ...f, [name]: value }));
      }
    };
    const handleSubmitCreate = async () => {
      try {
        await sendRequest('/customer/create', form);
      } catch(err){ console.error(err); }
      setOpen(false);
    };

    const fetchCustomers = async (e) => {
    e.preventDefault();
    setCustomerSelected(0);

    try {
        
        let data;
        if (query !== '') {
            data = await sendRequest("/query/customer", {
                store_id: storeID,
                filter_var: searchField,
                filter_value: query,
                offset: 0,
                top_n: 15,
            });
        } else {
            data = await sendRequest("/query/customer", {
                store_id: storeID,
                offset: 0,
                top_n: 15,
            });
        }

        if (data && data.customers) {
            setCustomers(data.customers);
        } else {
            setCustomers([]);
            setTotalItems(0);
        }
    } catch (error) {
        console.error("Error:", error);
    }

        console.log("Searching for:", query);
    };

    return (
        <>
            <form onSubmit={fetchCustomers} style={{ display: "flex" }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name or id..."
                    style={{ flex: 1, padding: "8px" }}
                />
                <select
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{ padding: "8px" }}
                >
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="customer_id">Customer ID</option>
                </select>
                <button type="submit" style={{ padding: "8px 12px" }}>
                    Search
                </button>
                <Button onClick={handleOpen} style={{ marginLeft: 8 }}>Create</Button>
            </form>
            <CreateDialog open={open} onClose={handleClose} form={form} onChange={handleChange} onSubmit={handleSubmitCreate} />
        </>
    )
}

export default SearchBar;

// dialog component for creating customers moved outside to avoid redefinition
function CreateDialog({ open, onClose, form, onChange, onSubmit }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>New Customer</DialogTitle>
            <DialogContent>
                <DialogContentText>Enter customer details</DialogContentText>
                <input name="first_name" placeholder="First name" value={form.first_name} onChange={onChange} />
                <input name="last_name" placeholder="Last name" value={form.last_name} onChange={onChange} />
                <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
                <input name="phone_number" placeholder="Phone number" value={form.phone_number} onChange={onChange} />
                <input name="address.address_line1" placeholder="Street address 1" value={form.address.address_line1} onChange={onChange} />
                <input name="address.address_line2" placeholder="Street address 2" value={form.address.address_line2} onChange={onChange} />
                <input name="address.district" placeholder="District/State" value={form.address.district} onChange={onChange} />
                <input name="address.city" placeholder="City" value={form.address.city} onChange={onChange} />
                <input name="address.country" placeholder="Country" value={form.address.country} onChange={onChange} />
                <input name="address.postal_code" placeholder="Postal code" value={form.address.postal_code} onChange={onChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}