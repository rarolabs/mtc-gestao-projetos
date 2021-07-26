const formatCurrency = value => {
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value || 0);
}

const formatDate = date => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeStyle: 'medium' }).format(new Date(date))

const EMPTY_LINK = '#'

export { formatCurrency, formatDate, EMPTY_LINK };