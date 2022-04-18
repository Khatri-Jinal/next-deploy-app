import React from "react";
import { useRouter } from "next/router";

function ProductId() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>product is : {productId}</div>;
}

export default ProductId;
