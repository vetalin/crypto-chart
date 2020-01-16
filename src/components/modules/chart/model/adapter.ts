import { IRate } from '../interfaces'

export const ratesAdapter = (rates: IRate[]): IRate[] => {
  return rates
    .sort((a: IRate, b: IRate) => {
      const rateTransformer = ({ rateUsd }: IRate) => Number(rateUsd)
      const [aUsd, bUsd] = [rateTransformer(a), rateTransformer(b)]
      return bUsd - aUsd
    })
    .slice(0, 15)
}
