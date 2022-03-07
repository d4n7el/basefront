import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceprtorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2N0X3R5cGUiOiJpbmRpdmlkdWFsLmludmVzdG9yIiwiYXVkIjoiaHR0cDovL3BsYXl1c21lZGlhLmNvbSIsImV4cCI6MTY0NjY2OTkwNywiZ3JhbnRfdHlwZSI6InBhc3N3b3JkIiwiaWF0IjoxNjQ2NjY5MzA3LCJpc3MiOiJodHRwOi8vcGxheXVzbWVkaWEuY29tIiwianRpIjoiMnJkMmEwbGViYWVsdHEyNjIwMDExMWoxIiwibGFuZyI6ImVuIiwibmJmIjoxNjQ2NjY5MzA3LCJzY29wZSI6NDg4NzY0OTMwOTc3MDA4Mjc5Njc4OTc2LCJzdWIiOiJkZWQ2NDQyNC0xMTc4LTRjZmQtOTA4Ny02ZTZlZjhkNGY0MGUifQ.u2UbROoigl8-Lbsn7iDC0qCN-bDATO3bhY-iBNaoa6dEm8294GbhxLyb-OlAQ_hiNhIo57-GfPI_ik_SOEJNud1IncXJ0qzC7K1EHwP-WLNXReDvpFY-H3C_FDmz7VfISv8byGh1XphbC5LpIyvEA00s3LKECBqFF5Ms5QVTCVsHK9ZOSCs3H23w-CxH1TRYxFKE9bcDRJEOL8Hhk7UaiVOgwOTpB8uuGZZlVRaR-U-5PXFuFd_pbFFN2xnBoBV9QIAYh_Z7d91PcCw42CklgzV6fYhqtejZgFzrg1WFgz2jrtPe6RozWU3Cw68zMiky0r3p_IkZtVfOPo90xt2lqA9CAJYdS7KLMi3sPJRcx3AWaDtDGIBrwb4EQERn9fBdYx5oi33WOoS4_4lS8-Jt0Adho6LdyzXt79DZWaGO9SdBdGjjJySzrz6x4KevtAWzp1uea4zk7Vzojq5PDTuL_1jVFjsMFeNgMnPh9NQ4WsifcI9ztE6sWgrEFZcKkWE1qWllY5d4ayh6_23etjLS6h75gAjkQTaWp5TKtG53f-v-q5jonscXBReMQPiW5qNCO2-WlrzKl5WffPkdGlfno4mgaaqNctITl-cVFnzCROtR71rCpMh9NlwY2D3Mcoh76xImejXh5csEOxjKqlMjuq8UISlhjqVMUj1MK02pD7g';
    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
