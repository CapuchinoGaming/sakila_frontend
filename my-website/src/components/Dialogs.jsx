import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export function SuccessDialog({ open, onClose, message = "Success" }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Success</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <Button onClick={onClose} style={{ margin: "8px" }}>OK</Button>
        </Dialog>
    );
}

export function FailureDialog({ open, onClose, message = "Operation failed" }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <Button onClick={onClose} style={{ margin: "8px" }}>OK</Button>
        </Dialog>
    );
}
