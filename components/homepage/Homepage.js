import Hedder from "@/components/hedder/Hedder";
import Product_suggestions from "../product/Product_suggestions";
import Post_suggestion from "../post/Post_suggestion";

const Homepage = async () => {
    return (
        <>
            <Hedder />
            
            <Product_suggestions brand={""} count={12} id={""} />
            <Post_suggestion tags={""} count={6} id={""} />
        </>
    );
};

export default Homepage;
