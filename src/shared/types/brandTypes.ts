export interface BrandDto {
    id: string
    createdAt: Date
    lastModifiedAt: Date
    name: string
    address: string
    companyRegistrationNumber: string
    valueAddedTaxIdentificationNumber: string
    dataImportFormat: string
}

export interface SetBrandDto extends Omit<BrandDto, 'id' | 'createdAt' | 'lastModifiedAt'> {}