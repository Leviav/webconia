import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact () {
    return (
        <div className = "container">
            <Navbar />
            <h1> Contacto </h1>
            <p>Ponte en contacto con nosotros a traves del siguiente formulario</p>
            <form>
                <div>
                    <label htmlFor="name"> Nombre </label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Enviar</button>
                </form>
                <Footer/>
                       
            </div>
        );
}