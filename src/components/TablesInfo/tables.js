const tables = [
  {
    table: "customers",
    columns: [
      "customerID",
      "companyName",
      "contactName",
      "contactTitle",
      "address",
      "city",
      "region",
      "postalCode",
      "country",
      "phone",
      "fax",
    ],
  },

  {
    table: "employees",
    columns: [
      "employeeID",
      "firstName",
      "lastName",
      "title",
      "titleOfCourtesy",
      "birthDate",
      "hireDate",
      "address",
      "city",
      "postalCode",
      "country",
      "homePhone",
      "extension",
      "reportsTo",
    ],
  },

  {
    table: "products",
    columns: [
      "productID",
      "productName",
      "supplierID",
      "categoryID",
      "quantityPerUnit",
      "unitsInStock",
      "unitsOnOrder",
      "reorderLevel",
      "discontinued",
    ],
  },

  {
    table: "orderCategories",
    columns: ["categoryId", "categoryName", "description"],
  },
];

export default tables;
