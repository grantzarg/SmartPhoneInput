import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { parsePhoneNumberFromString, AsYouType, CountryCode } from 'libphonenumber-js';

interface Props {
  value: string;
  onChange: (val: string) => void;
  defaultCountry?: CountryCode;
  country?: CountryCode;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function usePhoneFormatter({ value, onChange, defaultCountry, country, inputRef }: Props) {
  const [currentCountry, setCurrentCountry] = useState<CountryCode>(country || defaultCountry || 'US');


  useEffect(() => {
    if (currentCountry) setCurrentCountry(currentCountry);
  }, [currentCountry]);

  const handleChange = useCallback((e: any) => {
    const raw = e.target.value;
    const formatter = new AsYouType(currentCountry as CountryCode);
    const formatted = formatter.input(raw);
    onChange(formatted);
  }, [currentCountry, onChange]);

  const parsed = useMemo(() => {
    return parsePhoneNumberFromString(value, currentCountry);
  }, [value, currentCountry]);

  const countryCode = parsed?.country || currentCountry;
  const flagUrl = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.svg`;

  return {
    formattedValue: value,
    handleChange,
    countryCode,
    flagUrl,
  };
}