import { Badge, Heading } from "evergreen-ui";
import { BRAND_NAME } from "src/lib/constants";

const BrandLogo = () => {
  return (
    <Heading is="h1" fontSize="24px" className="font-alt text-center">{BRAND_NAME}</Heading>
  );
};

export default BrandLogo;
