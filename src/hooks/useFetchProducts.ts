import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../models/Product";

export const fetchProducts = async (url: string): Promise<Product[]> => {
  const { data } = await axios.get(url);
  return data;
};

export interface UseFetchProductsReturn {
  loading: boolean;
  data: Product[] | undefined;
}

const useFetchProducts = (url: string): UseFetchProductsReturn => {
  const { data, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products", url],
    queryFn: () => fetchProducts(url),
  });

  return { loading: isLoading, data };
};

export default useFetchProducts;
