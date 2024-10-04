import {motion} from "framer-motion";
export default function About(){
    return(
        <motion.div className="d-flex flex-row about"
    initial={{ opacity: 0, y: 100 }}  
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} >
            <span><p>At Ariv Execution, we specialize in providing top-notch IT solutions and creative services tailored to meet the unique needs of our clients. Our team of dedicated professionals is committed to delivering exceptional results through innovation, collaboration, and a deep understanding of the industries we serve.</p>
            <p className="extra">With years of experience in the field, we are equipped to handle a wide range of projects, from software development and IT consulting to branding and marketing strategies. Our holistic approach ensures that we not only meet but exceed our clients expectations.</p>
            <p className="extra">We believe in the power of technology and creativity to transform businesses. Our mission is to empower organizations to achieve their goals by leveraging the latest technologies and strategies. Join us at Ariv Execution and discover how we can elevate your business to new heights.</p></span>

        </motion.div>
    )
}