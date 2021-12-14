export type InventoryState = 'notStarted' | 'inProgress' | 'finished'
export type InventoryType = 'assets' | 'supplies'

export interface InventoryDto {
    id: string
    createdAt: Date
    lastModifiedAt: Date
    estimatedStartAt: Date
    state: InventoryState
    enableOnlyUnitScan: boolean
    alwaysShowWarningAfterUnknownScan: boolean
    branchAddress: string
    branchNumber: number
    inventoryType: InventoryType
    estimatedItemsNumber: number
    useCustomerLocations: boolean
}

export interface SetInventoryDto extends Omit<InventoryDto, 'id' | 'createdAt' | 'lastModifiedAt'> {
    responsiblePersonId: string
    brandId: string
}