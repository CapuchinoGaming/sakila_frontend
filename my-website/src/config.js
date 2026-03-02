export const API_URL = import.meta.env.VITE_API_URL;

if(!API_URL || API_URL == null || isNaN(API_URL)) {
    console.log("API NOT LOADED");
} else {
    console.log("API LOADED");
}