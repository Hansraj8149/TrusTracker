export const Currencies = [
    {value:"USD", label:"Dollar", locals:"en-US"},
    {value:"EUR", label:"Euro", locals:"en-GB"},
    {value:"JPY", label:"Yen", locals:"ja-JP"},
    {value:"GBP", label:"Pound", locals:"en-GB"},
];

export type Currency = (typeof Currencies)[0];