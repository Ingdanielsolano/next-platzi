import FormProduct from "@components/FormProducts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "@services/api";
import Alert from "@common/Alert";
import useAlert from "@hooks/useAlert";

export default function Edit() {
  const { alert, setAlert, toggleAlert } = useAlert();
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router]);

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <FormProduct setAlert={setAlert} setOpen={() => {}} product={product} />
    </>
  );
}
