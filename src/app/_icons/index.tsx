import { Image } from "@chakra-ui/react";

const style = {
  cursor: "pointer",
};

const CompanyIconStyle = {
  width: "288px",
  height: "64px",
  objectFit: "none",
};

const CertificatedIconStyle = {
  width: "80px",
  height: "32px",
  objectFit: "contain",
};
export const ArrowDownShortIcon = () => (
  <Image
    src={"/icons/Arrow-down-short.svg"}
    style={style}
    alt="arrow down short"
  />
);

export const InboxIcon = () => (
  <Image src={"/icons/Inbox-open.svg"} alt="Inbox   " style={style} />
);

export const InboxWhiteIcon = () => (
  <Image src={"/icons/Inbox-white.svg"} alt="Inbox   " style={style} />
);

export const Logo1 = () => (
  <Image src={"/icons/Logo.svg"} alt="Logo   " style={style} />
);

export const PhoneIcon = () => (
  <Image src={"/icons/phone.svg"} alt="Call   " style={style} />
);

export const BreadcrumbIcon = () => (
  <Image src={"/icons/breadcrumb.svg"} alt="Menu   " style={style} />
);

export const CadPressoIcon = () => (
  <Image src={"/icons/cadpresso.svg"} alt="Menu   " {...CompanyIconStyle} />
);

export const DascomIcon = () => (
  <Image src={"/icons/Dascom.svg"} alt="Menu   " {...CompanyIconStyle} />
);

export const EvolisIcon = () => (
  <Image src={"/icons/Evolis.svg"} alt="Menu   " {...CompanyIconStyle} />
);

export const MaticaIcon = () => (
  <Image src={"/icons/Matica.svg"} alt="Menu   " {...CompanyIconStyle} />
);

export const ZebraIcon = () => (
  <Image src={"/icons/Zebra.svg"} alt="Menu   " {...CompanyIconStyle} />
);

export const ClimatePartnerIcon = () => (
  <Image
    src={"/icons/ClimatePartner.svg"}
    alt="Menu   "
    {...CertificatedIconStyle}
  />
);

export const DSSVIcon = () => (
  <Image src={"/icons/DSSV.svg"} alt="Menu   " {...CertificatedIconStyle} />
);

export const GantnerIcon = () => (
  <Image src={"/icons/Gantner.svg"} alt="Menu   " {...CertificatedIconStyle} />
);

export const ISOIcon = () => (
  <Image src={"/icons/Iso.svg"} alt="Menu   " {...CertificatedIconStyle} />
);

export const MadeInGermanyIcon = () => (
  <Image
    src={"/icons/MadeInGermany.svg"}
    alt="Menu   "
    {...CertificatedIconStyle}
  />
);

export const PlantedIcon = () => (
  <Image src={"/icons/Planted.svg"} alt="Menu   " {...CertificatedIconStyle} />
);

export const TUVIcon = () => (
  <Image src={"/icons/TUV.svg"} alt="Menu   " {...CertificatedIconStyle} />
);
