class Fornecedor {
    id: number
    title: string
    category: string
    description: string
    nota: string
    image: string
  
    constructor(
      id: number,
      title: string,
      category: string,
      description: string,
      nota: string,
      image: string
    ) {
      this.id = id
      this.title = title
      this.category = category
      this.description = description
      this.nota = nota
      this.image = image
    }
  }

export default Fornecedor