import React, { useState, useMemo } from 'react';
import countries from './countries';

interface CountrySelectProps {
  selected: string;
  onSelect: (code: string) => void;
}

export default function CountrySelect({ selected, onSelect }: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() => {
    return countries.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.code.toLowerCase().includes(filter.toLowerCase()) ||
      c.dialCode.includes(filter)
    );
  }, [filter]);

  const selectedCountry = countries.find(c => c.code === selected);

  return (
      <>
        <div className="spi-country-wrapper">
          <button
              type="button"
              className="spi-flag-button"
              onClick={() => setOpen(!open)}
          >
            <img
                src={`https://flagcdn.com/${selectedCountry?.code.toLowerCase()}.svg`}
                className="spi-flag"
            />
          </button>
        </div>
        {open && (
            <div className="spi-dropdown">
              <input
                  className="spi-dropdown-input"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search country..."
              />
              <div className="spi-dropdown-list">
                {filtered.map((c) => (
                    <div
                        key={c.code}
                        className="spi-dropdown-item"
                        onClick={() => {
                          onSelect(c.code);
                          setOpen(false);
                          setFilter('');
                        }}
                    >
                      <img
                          src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`}
                          className="spi-flag"
                      />
                      <span>{c.name} (+{c.dialCode})</span>
                    </div>
                ))}
              </div>
            </div>
        )}
      </>
  );
}