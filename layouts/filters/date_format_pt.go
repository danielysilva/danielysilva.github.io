package "github.com/user/hugo-site/layouts"

import (
    "time"
    "github.com/gohugoio/hugo/helpers"
)

func DateFormatPT(date time.Time, format string) string {
    return helpers.TimeFormat(date, format, time.Parse("2006-01-02", "2006-01-02"))
}
