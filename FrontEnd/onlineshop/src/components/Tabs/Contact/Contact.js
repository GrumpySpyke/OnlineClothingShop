import Faq from 'react-faq-component';
import "../../../index.css";
function Contact() {
    const data = {
        title: "Despre noi",
        rows: [
            {
                title: "Telefon",
                content: "0751935601"
            },
            {
                title: "Adresa",
                content: "Strada Panselutelor nr 42"
            },
            {
                title: "Email",
                content: "fashonista@gmail.com"
            }
        ]
    }
    return <div>
        <div className='w-1/2 ml-3 mt-3 border-2 border-green-500'>
        <Faq data={data}/>
        </div>
    </div>
}

export default Contact;