import { Connect } from "@/app/dbconfig/dbconfig";
import PhoneFrame from "@/components/product/Phoenframe";
import Hedder from "@/components/hedder/Hedder";
import products from "@/app/models/productsmodles";
Connect();

async function topproduct() {
    try {
        const topresult = await products.aggregate([
            { $addFields: { likeCount: { $size: "$Like" } } },
            { $sort: { likeCount: -1 } },
            { $limit: 12 },
        ]);
        return {
            msg: "Products not Available At This Time",
            status: true,
            topresult: topresult,
        };
    } catch (error) {
        console.log(error);
        return {
            msg: "Products not Available At This Time",
            status: false,
        };
    }
}

const Homepage = async () => {
    const result = await topproduct();
    return (
        <>
            <Hedder />
            <div className="flex flex-wrap justify-center gap-4">
                {result.status ? (
                    result.topresult.map((product, index) => {
                        const productdata = {
                            Phone: product.Phone,
                            image: product.image,
                            likeCount: product.Like.length,
                            _id: product._id.toString(),
                        };
                        return (
                            <div key={index}>
                                <PhoneFrame specification={productdata} />
                            </div>
                        );
                    })
                ) : (
                    <div>{result.msg}</div>
                )}
            </div>
        </>
    );
};

export default Homepage;
