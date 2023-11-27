import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  countdown: number=0;
  timer: any;

  redeemedVoucher!: string;
  expirationTime!: number;
  voucherCode!: string

  
    myVouche={voucherid: 1, expirationTime:this.expirationTime, price: 24, voucherCode: '123456'}
  

  constructor() {
    //this.countdown = 24 * 60 * 60; // 24 hours in seconds

  }

  ngOnInit(): void {
   //this.startCountdown();
   const redeemedVoucher = localStorage.getItem('redeemedVoucher');
    const expirationTime = localStorage.getItem('expirationTime');

    if (redeemedVoucher && expirationTime) {
      this.redeemedVoucher = redeemedVoucher;
      this.expirationTime = Number(expirationTime);
      this.startCountdown();
    }
  }

  startCountdown() {
    console.log("Hello")
    this.countdown = this.getRemainingTime();
    this.timer = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000); // Update every second
  }

  stopCountdown() {
    clearInterval(this.timer);
    // You may want to reset the voucher state here if needed
  }


  formatTime(totalSeconds: number): string {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }


  getRemainingTime(): number {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const remainingTime = this.expirationTime - currentTime;
    return remainingTime > 0 ? remainingTime : 0;
  }

  redeemVoucher() {
    
    this.redeemedVoucher = this.voucherCode;
    if(this.voucherCode != this.myVouche.voucherCode){
      console.log("Invalid Voucher")
      return
    }
    console.log(typeof(this.redeemedVoucher))
    this.expirationTime = this.calculateExpirationTime();
    localStorage.setItem('redeemedVoucher', this.redeemedVoucher);
    localStorage.setItem('expirationTime', this.expirationTime.toString());
    this.startCountdown()
  }
  
  private calculateExpirationTime(): number {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return currentTimestamp -1 + 24 * 60; // 24 hours in seconds
  }
}


