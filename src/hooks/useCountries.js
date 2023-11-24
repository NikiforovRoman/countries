import { useMemo } from "react"

export const useFilteredCountries = (countries, region) => {
    const filteredCountries = useMemo(() => {
        if (region) {
            return [...countries].filter(c => c.region.includes(region))
        }
        return countries;
    }, [countries, region])
    return filteredCountries;
}

export const useCountries = (countries, search, region) => {
    const filteredCountries = useFilteredCountries(countries, region);
    const filteredAndSearchedCountries = useMemo(() => {
        if (search) {
            return filteredCountries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        return filteredCountries;
    }, [filteredCountries, search])
    return filteredAndSearchedCountries;
}