import React from "react";

interface CashfreeButtonProps {
  state: string;
  disabled?: boolean;
}

const CashfreeButton: React.FC<CashfreeButtonProps> = ({ state, disabled = false }) => {
  const getPaymentUrl = () => {
    switch (state) {
      case 'Tamilnadu':
        return "https://payments.cashfree.com/forms/tvkcup2026tamilnadu";
      case 'Kerala':
        return "https://payments.cashfree.com/forms/tvkcup2026kerala";
      case 'Others':
        return "https://payments.cashfree.com/forms/tvkcup2026others";
      default:
        return "https://payments.cashfree.com/forms/tvkcup2026others";
    }
  };

  return disabled ? (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "15px",
        display: "flex",
        padding: "10px",
        width: "fit-content",
        cursor: "not-allowed",
        background: "#cccccc",
        opacity: 0.6,
      }}
    >
      <img
        src="https://cashfree-checkoutcartimages-prod.cashfree.com/CUP Number 27777777O9k8udttubl0_prod.png"
        alt="logo"
        style={{ width: "40px", height: "40px" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 10px",
        }}
      >
        <span
          style={{
            fontFamily: "Arial",
            color: "#fff",
            marginBottom: "5px",
            fontSize: "14px",
          }}
        >
          Pay
        </span>

        <span
          style={{
            fontFamily: "Arial",
            color: "#fff",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Powered By Cashfree
          <img
            src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg"
            alt="logo"
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "4px",
              verticalAlign: "middle",
            }}
          />
        </span>
      </div>
    </div>
  ) : (
    <a href={getPaymentUrl()} target="_parent">
      <div
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          display: "flex",
          padding: "10px",
          width: "fit-content",
          cursor: "pointer",
          background: "#ee8a26",
        }}
      >
        <img
          src="https://cashfree-checkoutcartimages-prod.cashfree.com/CUP Number 27777777O9k8udttubl0_prod.png"
          alt="logo"
          style={{ width: "40px", height: "40px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 10px",
          }}
        >
          <span
            style={{
              fontFamily: "Arial",
              color: "#fff",
              marginBottom: "5px",
              fontSize: "14px",
            }}
          >
            Pay
          </span>

          <span
            style={{
              fontFamily: "Arial",
              color: "#fff",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Powered By Cashfree
            <img
              src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg"
              alt="logo"
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "4px",
                verticalAlign: "middle",
              }}
            />
          </span>
        </div>
      </div>
    </a>
  );
};

export default CashfreeButton;
