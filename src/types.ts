export type TTab = "home" | "my-coupons" | "me";

export type TProduct = {
  brand_name: string;
  brand_image: string;
  product_name: string;
  product_image: string;
  progress: number;
  title: string;
  lane: string | null;
};
