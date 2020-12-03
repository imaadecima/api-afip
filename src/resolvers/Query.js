const Query = {
  getAliquotTypes: async (parent, args, { afip }, info) => {
    const getAliquotTypes = await afip.ElectronicBilling.getAliquotTypes()    
    return getAliquotTypes
  }
}

export default Query