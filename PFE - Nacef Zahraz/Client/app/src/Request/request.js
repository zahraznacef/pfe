import axios from "axios";


const fetchAddContact = (fullname,email,subject,message) => {
    axios
    .post('http://localhost:8000/app/contact/add',fullname, email, subject, message ).then((res) => res.data);
}


export default fetchAddContact