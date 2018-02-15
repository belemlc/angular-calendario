import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  month: number = 0;
  year: number = 2018;
  semanas: Array<string> = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  dias: any[] = [];

  constructor() {
		
  }

  ngOnInit() {
  	console.log(this.distributeDays());
  }

	monthDays() {
		let daysCount = new Date(this.year, this.month + 1, 0).getDate();
		return daysCount;
	}

	weekDay(day) {
		let dayNum = new Date(this.year, this.month, day);
		return dayNum.getDay();
	}

	distributeDays() {
		let day = 1;
		let daysCount = this.monthDays();
		let week;
		let weekRow = [];
		let days = [];

		while (day < daysCount) {
			week = {semana: day};
			days = [];
			for (let i = 0; i < 7; i++) {
				if (this.weekDay(day) == i) {
					days.push({dia: day, num: i});
					day++;
				} else {

				}
				if (day > daysCount) {
					break;
				}
			}
			weekRow.push({week, days});
		}
		this.dias = weekRow;
		return weekRow;
	}

}
