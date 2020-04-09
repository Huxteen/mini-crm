const DashboardLayout = () => import('@/layout/dashboard/DashboardLayout');
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";

import Login from "@/pages/Login.vue";

const CompaniesList = () => import('@/pages/Companies/CompaniesList.vue');

import CompanyEmployees from "@/pages/Companies/CompanyEmployees.vue";
import EmployeesList from "@/pages/Employees/EmployeesList.vue";
import CreateCompany from "@/pages/Companies/CreateCompanyForm.vue";
import EditCompany from "@/pages/Companies/EditCompanyForm.vue";
import ShowCompany from "@/pages/Companies/ShowCompany.vue";
import CreateEmployee from "@/pages/Employees/CreateEmployeeForm.vue";
import AddAdmin from "@/pages/Companies/AddAdminForm.vue";
import EditEmployee from "@/pages/Employees/EditEmployeeForm.vue";
import ShowEmployee from "@/pages/Employees/ShowEmployee.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/logout",
        name: "Logout",
        redirect: "/login",
      },
      {
        path: "home",
        name: "home",
        component: Dashboard
      },
      {
        path: "companies",
        name: "companies",
        component: CompaniesList
      },
      {
        path: "company/employees/:id",
        name: "Company Employees",
        component: CompanyEmployees
      },
      {
        path: "add/admin",
        name: "Add Admin",
        component: AddAdmin
      },
      {
        path: "employees",
        name: "employees",
        component: EmployeesList
      },
      {
        path: "create/company",
        name: "Create company",
        component: CreateCompany
      },
      {
        path: "create/employee",
        name: "Create employee",
        component: CreateEmployee
      },
      {
        path: "company/edit/:id",
        name: "Edit company",
        component: EditCompany
      },
      {
        path: "employee/edit/:id",
        name: "Edit Employee",
        component: EditEmployee
      },
      {
        path: "company/show/:id",
        name: "Show company",
        component: ShowCompany
      },
      {
        path: "employee/show/:id",
        name: "Show Employee",
        component: ShowEmployee
      }
    ]
  },
 
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
