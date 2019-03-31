# [`Duration`](/src/utils/Duration.js)

A component for generating accessible representations of time periods. Tailored for résumés, as they generally only require the month(s) and year(s).

Designed to show abbreviated month names in a visual presentation, but announce full month names to screenreaders. Additionally, screenreaders will hear "to" in place of the hyphen. For example, visual users will see "Jan 2019 - Mar 2019," but screenreader users will hear "January 2019 to March 2019."

Has four configurations based on the date props passed in:

* __Finished duration:__ When both a `startDate` and an `endDate` are passed in, the `Duration` component will present a duration of the form `Jan 2019 - Mar 2019` and announce in the form `January 2019 to March 2019`.

* __Ongoing duration:__ When only a `startDate` is passed in, the `Duration` component will present a duration of the form `Jan 2019 - present` and announce in the form `January 2019 to present`.

* __Single month:__ When only an `endDate` is passed in, the `Duration` component will present a duration of the form `Mar 2019` and announce in the form `March 2019`.

* __Null duration:__ When neither `startDate` nor `endDate` are passed in, the `Duration` component will return two empty `span`s.

## Props

| Prop | Required | Default | Type | Description |
|------|----------|---------|------|-------------|
| `className` | No | | {string} | list of CSS classes to apply to the `Duration` component |
| `endDate` | No | | {Date} | ending month and year |
| `startDate` | No | | {Date} | starting month and year |

## Additional Exports

`JANUARY=0, FEBRUARY=1 .. DECEMBER=12`

Numeric representations for each month corresponding to their numeric representation in the `Date` class. Import for human-legible months when calling the `Duration` -- the zero-based indexing of `Date`'s months can be confusing.