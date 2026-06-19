import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cars-for-rent',
  templateUrl: './cars-for-rent.component.html',
  styleUrls: ['./cars-for-rent.component.css']
})
export class CarsForRentComponent implements AfterViewInit {

  @ViewChildren('animEl') cards!: QueryList<ElementRef>;

  // ********************************************************************** Page Animation **********************************************************************
  ngAfterViewInit() {
    this.cards.changes.subscribe(() => {
      this.observeCards();
    });
    this.observeCards();
  }

  observeCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          setTimeout(() => {
            el.classList.add('show');
          }, index * 150);

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.2
    });

    this.cards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }

  // ********************************************************************** Classics cars List **********************************************************************
  ClassicscarsList: any = [{
    carType: 'carForRentTypeClassics',
    cars: [{
      carName: 'Hyundai i10',
      carImg: 'i1.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '2',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'Hyundai i20',
      carImg: 'i1.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'Hyundai i30',
      carImg: 'i1.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'Hyundai i20',
      carImg: 'i1.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'Hyundai i30',
      carImg: 'i1.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    }
    ]
  }]

  // ********************************************************************** Semi Premium cars List **********************************************************************
  SemiPremiumcarsList: any = [{
    carType: 'carForRentTypeSemiPremium',
    cars: [{
      carName: 'MG5',
      carImg: 'mg5.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '2',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'MG5',
      carImg: 'mg5.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'MG5',
      carImg: 'mg5.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'MG5',
      carImg: 'mg5.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    },
    {
      carName: 'MG5',
      carImg: 'mg5.avif',
      carNumberOfSeats: '5',
      carLargeSuitCases: '3',
      carEnergie: 'carForRentenergie'
    }
    ]
  }]


}
