export const pocSearchQuery = `
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
      tradingName
      officialName
      deliveryTypes {
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      address {
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        phoneNumber
      }
    }
  }
`

export default {
  pocSearchQuery,
}
