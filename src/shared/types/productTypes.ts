export interface ProductDto {
    id: string
    createdAt: Date
    lastModifiedAt: Date
    /** Customer's product ID */
    PCI?: string
    EAN?: string
    name: string
    unitPrice: number
    purchaseUnitPrice: number
    expectedUnitsNumber: number
}

export interface SetProductDto extends Omit<ProductDto, 'id' | 'createdAt' | 'lastModifiedAt'> {
    inventoryId: string
}