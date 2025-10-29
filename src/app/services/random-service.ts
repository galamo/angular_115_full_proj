import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RandomService {

    public getDelayedRandomNumber(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                try {
                    const n = Math.floor(Math.random() * 100);
                    console.log(n);
                    resolve(n);
                }
                catch (err: any) {
                    reject(err);
                }
            }, 300);
        });
    }

    public getDelayedRandomNumbers(count: number): Observable<number> {
        return new Observable<number>(observer => {
            const timerId = setInterval(() => {
                try {
                    const n = Math.floor(Math.random() * 100);
                    console.log(n);
                    observer.next(n); // Report next success number.
                }
                catch (err: any) {
                    observer.error(err); // Report error.
                }
                finally {
                    count--;
                    if (count <= 0) {
                        clearInterval(timerId);
                        observer.complete(); // Report completion.
                    }
                }
            }, 1000);
        });
    }

}
