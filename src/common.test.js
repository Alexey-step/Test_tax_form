import {getAllTaxes, getTaxFree, getEnding} from "./common";

describe(`Test functions`, () => {
  it(`getAllTaxes should work correctly`, () => {
    expect(getAllTaxes(`50000`)).toEqual([78000, 78000, 78000, 26000])
  })
  it(`getTaxFree should work correctly`, () => {
    expect(getTaxFree(`50000`)).toEqual(78000)
  })
  it(`getEnding should work correctly`, () => {
    expect(getEnding(3)).toEqual(`ий`)
  })
})

