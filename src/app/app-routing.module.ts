import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ServicesComponent } from './Components/Services/services/services.component';
import { CarsForRentComponent } from './Components/Cars_For_Rent/cars-for-rent/cars-for-rent.component';
import { RentalLocationsContactComponent } from './Components/Rental_Locations_Contact/rental-locations-contact/rental-locations-contact.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "Services", component: ServicesComponent},
  { path: "Car_For_Rent", component: CarsForRentComponent},
  { path: "Contact", component: RentalLocationsContactComponent},

  { path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
