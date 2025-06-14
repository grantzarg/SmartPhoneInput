# SmartPhoneInput

📱 A modern React component for international phone input — now with flag-based dropdown selector, formatting, and full control.

---

## ✨ Features

- 🌍 International phone formatting (powered by `libphonenumber-js`)
- 🇺🇸 Flag-based dropdown to select country
- 🧠 Intelligent formatting and cursor handling
- 🎨 Fully styleable with `className`, `inputClassName`, `flagClassName`
- ✅ Zero external CSS frameworks
- 🧩 Usable with or without UI selector via `enableCountrySelect`
- 📝 Optional placeholder text for the input

---

## 📦 Installation

```bash
npm install smart-phone-input
```

---

## 🚀 Usage

```tsx
import { PhoneInput } from 'smart-phone-input';

function MyForm() {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      value={phone}
      onChange={setPhone}
    />
  );
}
```

> `enableCountrySelect` is **enabled by default**. You can disable it with `enableCountrySelect={false}`.

---

## 🎨 Customization

```tsx
<PhoneInput
  className="my-container"
  inputClassName="text-lg"
  flagClassName="rounded"
  placeholder="Enter phone"
  value={value}
  onChange={setValue}
/>
```

---

## 💻 Styling

All styles are in `phone-input.css`. You can override any class:
- `.spi-container`
- `.spi-input`
- `.spi-flag`
- `.spi-country-wrapper`, `.spi-dropdown`, etc.

---

## 📜 License

MIT