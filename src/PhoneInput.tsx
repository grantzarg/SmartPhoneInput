import "./phone-input.css";
import React from "react";
import { usePhoneFormatter } from "./usePhoneFormatter";
import CountrySelect from "./CountrySelect";
import {CountryCode, getPhoneCode} from "libphonenumber-js";

export interface PhoneInputProps {
  value: string;
  onChange: (val: string) => void;
  defaultCountry?: CountryCode;
  country?: CountryCode;
  className?: string;
  inputClassName?: string;
  flagClassName?: string;
  enableCountrySelect?: boolean;
  /** Placeholder text for the phone input */
  placeholder?: string;
}

export function PhoneInput({
  value,
  onChange,
  defaultCountry,
  country,
  className,
  inputClassName,
  flagClassName,
  enableCountrySelect = true,
  placeholder
}: PhoneInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    formattedValue,
    handleChange,
    countryCode,
    flagUrl
  } = usePhoneFormatter({
    value,
    onChange,
    defaultCountry,
    country,
    inputRef
  });

  return (
      <div className={`spi-container ${className || ""}`}>
        {enableCountrySelect ? (
            <CountrySelect
                selected={countryCode}
                onSelect={(code) => onChange("+" + getPhoneCode(code))}
            />
        ) : (
            <img
                src={flagUrl}
                alt={countryCode}
                className={`spi-flag ${flagClassName || ""}`}
            />
        )}
        <div className="spi-divider"/>
        <input
            ref={inputRef}
            className={`spi-input ${inputClassName || ""}`}
            value={formattedValue}
            onChange={handleChange}
            type="tel"
            placeholder={placeholder}
        />
      </div>
  );
}