/* eslint-disable prettier/prettier */
export class Employee {
    id: string;
    name: string;
    email: string;
    companyId: string;
    position?: string;
    department?: string;
    
    constructor(params: {
      id: string;
      name: string;
      email: string;
      companyId: string;
      position?: string;
      department?: string;
    }) {
      this.id = params.id;
      this.name = params.name;
      this.email = params.email;
      this.companyId = params.companyId;
      this.position = params.position;
      this.department = params.department;
    }
  }
  