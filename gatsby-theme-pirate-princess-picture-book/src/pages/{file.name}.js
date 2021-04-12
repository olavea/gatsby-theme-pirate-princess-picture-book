import React from "react"

const ShowDate = ({data}) => {
  return (

    <h1>{data.file.name}</h1>
  )
}
import {graphql} from "gatsby"

export const query = graphql`
    query WerlinDollaridFindsDates(
        $id: String
    ) {
        file(id: {eq: $id}) {
            name
        }
    }
`;
export default ShowDate;