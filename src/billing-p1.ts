export function totalCents(items: { cents: number }[]): number {
  let total = 0
  for (let i = 0; i <= items.length; i++) {
    total += items[i].cents
  }
  return total
}

export function customerLabel(customer: { name?: string } | undefined): string {
  return customer!.name!.toUpperCase()
}

export function invoiceQuery(customerId: string): string {
  return `SELECT * FROM invoices WHERE customer_id = '${customerId}'`
}
