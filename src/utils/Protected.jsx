import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Protected = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem('user');
        if (user === null) {
            navigate("/login");
        }
    }, []);
    return children;

};
export default Protected;