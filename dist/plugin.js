!(function (lt, tn) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = tn(
        require('ng.forms'),
        require('ionic.storage'),
        require('ionic.angular'),
        require('ng.core'),
        require('wako-app.mobile-sdk'),
        require('ng.router'),
        require('ngx-translate.core'),
        require('tslib'),
        require('ng.common'),
        require('rxjs'),
      ))
    : 'function' == typeof define && define.amd
      ? define(
          [
            'ng.forms',
            'ionic.storage',
            'ionic.angular',
            'ng.core',
            'wako-app.mobile-sdk',
            'ng.router',
            'ngx-translate.core',
            'tslib',
            'ng.common',
            'rxjs',
          ],
          tn,
        )
      : 'object' == typeof exports
        ? (exports.plugin = tn(
            require('ng.forms'),
            require('ionic.storage'),
            require('ionic.angular'),
            require('ng.core'),
            require('wako-app.mobile-sdk'),
            require('ng.router'),
            require('ngx-translate.core'),
            require('tslib'),
            require('ng.common'),
            require('rxjs'),
          ))
        : (lt.plugin = tn(
            lt['ng.forms'],
            lt['ionic.storage'],
            lt['ionic.angular'],
            lt['ng.core'],
            lt['wako-app.mobile-sdk'],
            lt['ng.router'],
            lt['ngx-translate.core'],
            lt.tslib,
            lt['ng.common'],
            lt.rxjs,
          ));
})(typeof self < 'u' ? self : this, (Ua, lt, tn, Md, Ld, Rd, Fd, Bd, Nd, Hd) =>
  (() => {
    var z,
      Y,
      qa = {
        15: (z, Y, y) => {
          'use strict';
          (y.r(Y), y.d(Y, { GESTURE_CONTROLLER: () => G.G, createGesture: () => u }));
          var G = y(580);
          const pe = (A, R, M, te) => {
              const we = !!ue(A) && { capture: !1, passive: !!te.passive };
              let Z, se;
              return (
                A.__zone_symbol__addEventListener
                  ? ((Z = '__zone_symbol__addEventListener'), (se = '__zone_symbol__removeEventListener'))
                  : ((Z = 'addEventListener'), (se = 'removeEventListener')),
                A[Z](R, M, we),
                () => {
                  A[se](R, M, we);
                }
              );
            },
            ue = (A) => {
              if (void 0 === Q)
                try {
                  const R = Object.defineProperty({}, 'passive', {
                    get: () => {
                      Q = !0;
                    },
                  });
                  A.addEventListener('optsTest', () => {}, R);
                } catch {
                  Q = !1;
                }
              return !!Q;
            };
          let Q;
          const O = (A) => (A instanceof Document ? A : A.ownerDocument),
            u = (A) => {
              let R = !1,
                M = !1,
                te = !0,
                we = !1;
              const Z = Object.assign(
                  { disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 },
                  A,
                ),
                se = Z.canStart,
                Pe = Z.onWillStart,
                De = Z.onStart,
                Se = Z.onEnd,
                C = Z.notCaptured,
                P = Z.onMove,
                J = Z.threshold,
                fe = Z.passive,
                Ae = Z.blurOnStart,
                B = {
                  type: 'pan',
                  startX: 0,
                  startY: 0,
                  startTime: 0,
                  currentX: 0,
                  currentY: 0,
                  velocityX: 0,
                  velocityY: 0,
                  deltaX: 0,
                  deltaY: 0,
                  currentTime: 0,
                  event: void 0,
                  data: void 0,
                },
                Me = ((A, R, M) => {
                  const te = M * (Math.PI / 180),
                    we = 'x' === A,
                    Z = Math.cos(te),
                    se = R * R;
                  let Pe = 0,
                    De = 0,
                    Se = !1,
                    C = 0;
                  return {
                    start(P, J) {
                      ((Pe = P), (De = J), (C = 0), (Se = !0));
                    },
                    detect(P, J) {
                      if (!Se) return !1;
                      const fe = P - Pe,
                        Ae = J - De,
                        B = fe * fe + Ae * Ae;
                      if (B < se) return !1;
                      const Me = Math.sqrt(B),
                        Ie = (we ? fe : Ae) / Me;
                      return ((C = Ie > Z ? 1 : Ie < -Z ? -1 : 0), (Se = !1), !0);
                    },
                    isGesture: () => 0 !== C,
                    getDirection: () => C,
                  };
                })(Z.direction, Z.threshold, Z.maxAngle),
                Ie = G.G.createGesture({
                  name: A.gestureName,
                  priority: A.gesturePriority,
                  disableScroll: A.disableScroll,
                }),
                ee = () => {
                  R && ((we = !1), P && P(B));
                },
                N = () =>
                  !!Ie.capture() &&
                  ((R = !0),
                  (te = !1),
                  (B.startX = B.currentX),
                  (B.startY = B.currentY),
                  (B.startTime = B.currentTime),
                  Pe ? Pe(B).then(q) : q(),
                  !0),
                q = () => {
                  (Ae &&
                    (() => {
                      if (typeof document < 'u') {
                        const ze = document.activeElement;
                        ze?.blur && ze.blur();
                      }
                    })(),
                    De && De(B),
                    (te = !0));
                },
                ke = () => {
                  ((R = !1), (M = !1), (we = !1), (te = !0), Ie.release());
                },
                Te = (ze) => {
                  const Je = R,
                    nn = te;
                  if ((ke(), nn)) {
                    if ((ie(B, ze), Je)) return void (Se && Se(B));
                    C && C(B);
                  }
                },
                Ne = ((A, R, M, te, we) => {
                  let Z,
                    se,
                    Pe,
                    De,
                    Se,
                    C,
                    P,
                    J = 0;
                  const fe = (H) => {
                      ((J = Date.now() + 2e3),
                        R(H) &&
                          (!se && M && (se = pe(A, 'touchmove', M, we)),
                          Pe || (Pe = pe(H.target, 'touchend', B, we)),
                          De || (De = pe(H.target, 'touchcancel', B, we))));
                    },
                    Ae = (H) => {
                      J > Date.now() ||
                        (R(H) &&
                          (!C && M && (C = pe(O(A), 'mousemove', M, we)), P || (P = pe(O(A), 'mouseup', Me, we))));
                    },
                    B = (H) => {
                      (Ie(), te && te(H));
                    },
                    Me = (H) => {
                      (Re(), te && te(H));
                    },
                    Ie = () => {
                      (se && se(), Pe && Pe(), De && De(), (se = Pe = De = void 0));
                    },
                    Re = () => {
                      (C && C(), P && P(), (C = P = void 0));
                    },
                    We = () => {
                      (Ie(), Re());
                    },
                    ee = (H = !0) => {
                      H
                        ? (Z || (Z = pe(A, 'touchstart', fe, we)), Se || (Se = pe(A, 'mousedown', Ae, we)))
                        : (Z && Z(), Se && Se(), (Z = Se = void 0), We());
                    };
                  return {
                    enable: ee,
                    stop: We,
                    destroy: () => {
                      (ee(!1), (te = M = R = void 0));
                    },
                  };
                })(
                  Z.el,
                  (ze) => {
                    const Je = be(ze);
                    return (
                      !(
                        M ||
                        !te ||
                        (ae(ze, B),
                        (B.startX = B.currentX),
                        (B.startY = B.currentY),
                        (B.startTime = B.currentTime = Je),
                        (B.velocityX = B.velocityY = B.deltaX = B.deltaY = 0),
                        (B.event = ze),
                        se && !1 === se(B)) ||
                        (Ie.release(), !Ie.start())
                      ) && ((M = !0), 0 === J ? N() : (Me.start(B.startX, B.startY), !0))
                    );
                  },
                  (ze) => {
                    R
                      ? !we && te && ((we = !0), ie(B, ze), requestAnimationFrame(ee))
                      : (ie(B, ze), Me.detect(B.currentX, B.currentY) && (!Me.isGesture() || !N()) && Oe());
                  },
                  Te,
                  { passive: fe },
                ),
                Oe = () => {
                  (ke(), Ne.stop(), C && C(B));
                };
              return {
                enable(ze = !0) {
                  (ze || (R && Te(void 0), ke()), Ne.enable(ze));
                },
                destroy() {
                  (Ie.destroy(), Ne.destroy());
                },
              };
            },
            ie = (A, R) => {
              if (!R) return;
              const M = A.currentX,
                te = A.currentY,
                we = A.currentTime;
              ae(R, A);
              const Z = A.currentX,
                se = A.currentY,
                De = (A.currentTime = be(R)) - we;
              if (De > 0 && De < 100) {
                const C = (se - te) / De;
                ((A.velocityX = ((Z - M) / De) * 0.7 + 0.3 * A.velocityX), (A.velocityY = 0.7 * C + 0.3 * A.velocityY));
              }
              ((A.deltaX = Z - A.startX), (A.deltaY = se - A.startY), (A.event = R));
            },
            ae = (A, R) => {
              let M = 0,
                te = 0;
              if (A) {
                const we = A.changedTouches;
                if (we && we.length > 0) {
                  const Z = we[0];
                  ((M = Z.clientX), (te = Z.clientY));
                } else void 0 !== A.pageX && ((M = A.pageX), (te = A.pageY));
              }
              ((R.currentX = M), (R.currentY = te));
            },
            be = (A) => A.timeStamp || Date.now();
        },
        122: (z) => {
          'use strict';
          z.exports = Ua;
        },
        137: (z) => {
          function Y(y) {
            return Promise.resolve().then(() => {
              var G = new Error("Cannot find module '" + y + "'");
              throw ((G.code = 'MODULE_NOT_FOUND'), G);
            });
          }
          ((Y.keys = () => []), (Y.resolve = Y), (Y.id = 137), (z.exports = Y));
        },
        165: (z) => {
          'use strict';
          z.exports = lt;
        },
        202: (z) => {
          'use strict';
          z.exports = tn;
        },
        241: (z, Y, y) => {
          'use strict';
          y.d(Y, { d: () => pe, w: () => G });
          const G = typeof window < 'u' ? window : void 0,
            pe = typeof document < 'u' ? document : void 0;
        },
        264: (z) => {
          'use strict';
          z.exports = Md;
        },
        296: (z, Y, y) => {
          'use strict';
          y.d(Y, {
            L: () => Q,
            a: () => Ce,
            b: () => he,
            c: () => O,
            d: () => D,
            e: () => Ie,
            g: () => ee,
            w: () => Me,
          });
          var G = y(796),
            ue = (y(486), y(605));
          const Q = 'ionViewWillEnter',
            Ce = 'ionViewDidEnter',
            he = 'ionViewWillLeave',
            O = 'ionViewDidLeave',
            D = 'ionViewWillUnload',
            Me = () => new Promise((N) => (0, ue.r)(() => (0, ue.r)(() => N()))),
            Ie = (function () {
              var N = (0, G.A)(function* (H) {
                const q = H;
                if (q) {
                  if (null != q.componentOnReady) {
                    if (null != (yield q.componentOnReady())) return;
                  } else if (null != q.__registerHost) return void (yield new Promise((Te) => (0, ue.r)(Te)));
                  yield Promise.all(Array.from(q.children).map(Ie));
                }
              });
              return function (q) {
                return N.apply(this, arguments);
              };
            })(),
            ee = (N) =>
              N.classList.contains('ion-page')
                ? N
                : N.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || N;
        },
        325: (z) => {
          'use strict';
          z.exports = Ld;
        },
        346: (z) => {
          'use strict';
          z.exports = Rd;
        },
        486: (z, Y, y) => {
          'use strict';
          y.d(Y, { a: () => ae, b: () => ue, c: () => pe, d: () => Ce, e: () => be, p: () => ie, s: () => Q });
          class G {
            constructor() {
              this.m = new Map();
            }
            reset(R) {
              this.m = new Map(Object.entries(R));
            }
            get(R, M) {
              const te = this.m.get(R);
              return void 0 !== te ? te : M;
            }
            getBoolean(R, M = !1) {
              const te = this.m.get(R);
              return void 0 === te ? M : 'string' == typeof te ? 'true' === te : !!te;
            }
            getNumber(R, M) {
              const te = parseFloat(this.m.get(R));
              return isNaN(te) ? (void 0 !== M ? M : NaN) : te;
            }
            set(R, M) {
              this.m.set(R, M);
            }
          }
          const pe = new G(),
            ue = (A) => {
              try {
                const R = A.sessionStorage.getItem(D);
                return null !== R ? JSON.parse(R) : {};
              } catch {
                return {};
              }
            },
            Q = (A, R) => {
              try {
                A.sessionStorage.setItem(D, JSON.stringify(R));
              } catch {
                return;
              }
            },
            Ce = (A) => {
              const R = {};
              return (
                A.location.search
                  .slice(1)
                  .split('&')
                  .map((M) => M.split('='))
                  .map(([M, te]) => {
                    try {
                      return [decodeURIComponent(M), decodeURIComponent(te)];
                    } catch {
                      return ['', ''];
                    }
                  })
                  .filter(([M]) => he(M, O))
                  .map(([M, te]) => [M.slice(O.length), te])
                  .forEach(([M, te]) => {
                    R[M] = te;
                  }),
                R
              );
            },
            he = (A, R) => A.substr(0, R.length) === R,
            O = 'ionic:',
            D = 'ionic-persist-config';
          var u = (function (A) {
            return ((A.OFF = 'OFF'), (A.ERROR = 'ERROR'), (A.WARN = 'WARN'), A);
          })(u || {});
          const ie = (A, ...R) => {
              const M = pe.get('logLevel', u.WARN);
              if ([u.WARN].includes(M)) return console.warn(`[Ionic Warning]: ${A}`, ...R);
            },
            ae = (A, ...R) => {
              const M = pe.get('logLevel', u.ERROR);
              if ([u.ERROR, u.WARN].includes(M)) return console.error(`[Ionic Error]: ${A}`, ...R);
            },
            be = (A, ...R) => console.error(`<${A.tagName.toLowerCase()}> must be used inside ${R.join(' or ')}.`);
        },
        555: (z) => {
          'use strict';
          z.exports = Fd;
        },
        580: (z, Y, y) => {
          'use strict';
          y.d(Y, { B: () => Q, G: () => Ce });
          class pe {
            constructor(O, D, u, ie, ae) {
              ((this.id = D),
                (this.name = u),
                (this.disableScroll = ae),
                (this.priority = 1e6 * ie + D),
                (this.ctrl = O));
            }
            canStart() {
              return !!this.ctrl && this.ctrl.canStart(this.name);
            }
            start() {
              return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
            }
            capture() {
              if (!this.ctrl) return !1;
              const O = this.ctrl.capture(this.name, this.id, this.priority);
              return (O && this.disableScroll && this.ctrl.disableScroll(this.id), O);
            }
            release() {
              this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
            }
            destroy() {
              (this.release(), (this.ctrl = void 0));
            }
          }
          class ue {
            constructor(O, D, u, ie) {
              ((this.id = D), (this.disable = u), (this.disableScroll = ie), (this.ctrl = O));
            }
            block() {
              if (this.ctrl) {
                if (this.disable) for (const O of this.disable) this.ctrl.disableGesture(O, this.id);
                this.disableScroll && this.ctrl.disableScroll(this.id);
              }
            }
            unblock() {
              if (this.ctrl) {
                if (this.disable) for (const O of this.disable) this.ctrl.enableGesture(O, this.id);
                this.disableScroll && this.ctrl.enableScroll(this.id);
              }
            }
            destroy() {
              (this.unblock(), (this.ctrl = void 0));
            }
          }
          const Q = 'backdrop-no-scroll',
            Ce = new (class G {
              constructor() {
                ((this.gestureId = 0),
                  (this.requestedStart = new Map()),
                  (this.disabledGestures = new Map()),
                  (this.disabledScroll = new Set()));
              }
              createGesture(O) {
                var D;
                return new pe(
                  this,
                  this.newID(),
                  O.name,
                  null !== (D = O.priority) && void 0 !== D ? D : 0,
                  !!O.disableScroll,
                );
              }
              createBlocker(O = {}) {
                return new ue(this, this.newID(), O.disable, !!O.disableScroll);
              }
              start(O, D, u) {
                return this.canStart(O) ? (this.requestedStart.set(D, u), !0) : (this.requestedStart.delete(D), !1);
              }
              capture(O, D, u) {
                if (!this.start(O, D, u)) return !1;
                const ie = this.requestedStart;
                let ae = -1e4;
                if (
                  (ie.forEach((be) => {
                    ae = Math.max(ae, be);
                  }),
                  ae === u)
                ) {
                  ((this.capturedId = D), ie.clear());
                  const be = new CustomEvent('ionGestureCaptured', { detail: { gestureName: O } });
                  return (document.dispatchEvent(be), !0);
                }
                return (ie.delete(D), !1);
              }
              release(O) {
                (this.requestedStart.delete(O), this.capturedId === O && (this.capturedId = void 0));
              }
              disableGesture(O, D) {
                let u = this.disabledGestures.get(O);
                (void 0 === u && ((u = new Set()), this.disabledGestures.set(O, u)), u.add(D));
              }
              enableGesture(O, D) {
                const u = this.disabledGestures.get(O);
                void 0 !== u && u.delete(D);
              }
              disableScroll(O) {
                (this.disabledScroll.add(O), 1 === this.disabledScroll.size && document.body.classList.add(Q));
              }
              enableScroll(O) {
                (this.disabledScroll.delete(O), 0 === this.disabledScroll.size && document.body.classList.remove(Q));
              }
              canStart(O) {
                return !(void 0 !== this.capturedId || this.isDisabled(O));
              }
              isCaptured() {
                return void 0 !== this.capturedId;
              }
              isScrollDisabled() {
                return this.disabledScroll.size > 0;
              }
              isDisabled(O) {
                const D = this.disabledGestures.get(O);
                return !!(D && D.size > 0);
              }
              newID() {
                return (this.gestureId++, this.gestureId);
              }
            })();
        },
        605: (z, Y, y) => {
          'use strict';
          y.d(Y, {
            a: () => D,
            b: () => u,
            c: () => ue,
            d: () => Ce,
            e: () => R,
            f: () => M,
            g: () => ie,
            h: () => A,
            i: () => O,
            j: () => be,
            k: () => Q,
            l: () => se,
            o: () => Se,
            r: () => ae,
          });
          const ue = (C, P) => {
              C.componentOnReady ? C.componentOnReady().then((J) => P(J)) : ae(() => P(C));
            },
            Q = (C) => void 0 !== C.componentOnReady,
            Ce = (C, P = []) => {
              const J = {};
              return (
                P.forEach((fe) => {
                  C.hasAttribute(fe) &&
                    (null !== C.getAttribute(fe) && (J[fe] = C.getAttribute(fe)), C.removeAttribute(fe));
                }),
                J
              );
            },
            he = [
              'role',
              'aria-activedescendant',
              'aria-atomic',
              'aria-autocomplete',
              'aria-braillelabel',
              'aria-brailleroledescription',
              'aria-busy',
              'aria-checked',
              'aria-colcount',
              'aria-colindex',
              'aria-colindextext',
              'aria-colspan',
              'aria-controls',
              'aria-current',
              'aria-describedby',
              'aria-description',
              'aria-details',
              'aria-disabled',
              'aria-errormessage',
              'aria-expanded',
              'aria-flowto',
              'aria-haspopup',
              'aria-hidden',
              'aria-invalid',
              'aria-keyshortcuts',
              'aria-label',
              'aria-labelledby',
              'aria-level',
              'aria-live',
              'aria-multiline',
              'aria-multiselectable',
              'aria-orientation',
              'aria-owns',
              'aria-placeholder',
              'aria-posinset',
              'aria-pressed',
              'aria-readonly',
              'aria-relevant',
              'aria-required',
              'aria-roledescription',
              'aria-rowcount',
              'aria-rowindex',
              'aria-rowindextext',
              'aria-rowspan',
              'aria-selected',
              'aria-setsize',
              'aria-sort',
              'aria-valuemax',
              'aria-valuemin',
              'aria-valuenow',
              'aria-valuetext',
            ],
            O = (C, P) => Ce(C, he),
            D = (C, P, J, fe) => C.addEventListener(P, J, fe),
            u = (C, P, J, fe) => C.removeEventListener(P, J, fe),
            ie = (C, P = C) => C.shadowRoot || P,
            ae = (C) =>
              'function' == typeof __zone_symbol__requestAnimationFrame
                ? __zone_symbol__requestAnimationFrame(C)
                : 'function' == typeof requestAnimationFrame
                  ? requestAnimationFrame(C)
                  : setTimeout(C),
            be = (C) => !!C.shadowRoot && !!C.attachShadow,
            A = (C) => {
              if ((C.focus(), C.classList.contains('ion-focusable'))) {
                const P = C.closest('ion-app');
                P && P.setFocus([C]);
              }
            },
            R = (C, P, J, fe, Ae) => {
              {
                let B = P.querySelector('input.aux-input');
                (B ||
                  ((B = P.ownerDocument.createElement('input')),
                  (B.type = 'hidden'),
                  B.classList.add('aux-input'),
                  P.appendChild(B)),
                  (B.disabled = Ae),
                  (B.name = J),
                  (B.value = fe || ''));
              }
            },
            M = (C, P, J) => Math.max(C, Math.min(P, J)),
            se = (C, P) => {
              const J = C._original || C;
              return { _original: C, emit: Pe(J.emit.bind(J), P) };
            },
            Pe = (C, P = 0) => {
              let J;
              return (...fe) => {
                (clearTimeout(J), (J = setTimeout(C, P, ...fe)));
              };
            },
            Se = (C) => 'number' == typeof C && !isNaN(C) && isFinite(C);
        },
        652: (z) => {
          'use strict';
          z.exports = Bd;
        },
        714: (z) => {
          'use strict';
          z.exports = Nd;
        },
        796: (z, Y, y) => {
          'use strict';
          function G(ue, Q, Ce, he, O, D, u) {
            try {
              var ie = ue[D](u),
                ae = ie.value;
            } catch (be) {
              return void Ce(be);
            }
            ie.done ? Q(ae) : Promise.resolve(ae).then(he, O);
          }
          function pe(ue) {
            return function () {
              var Q = this,
                Ce = arguments;
              return new Promise(function (he, O) {
                var D = ue.apply(Q, Ce);
                function u(ae) {
                  G(D, he, O, u, ie, 'next', ae);
                }
                function ie(ae) {
                  G(D, he, O, u, ie, 'throw', ae);
                }
                u(void 0);
              });
            };
          }
          y.d(Y, { A: () => pe });
        },
        958: (z, Y, y) => {
          'use strict';
          y.d(Y, { c: () => O });
          var G = y(486),
            pe = y(241);
          let ue;
          const Ce = (D, u, ie) => {
              const ae = u.startsWith('animation')
                ? ((D) => (
                    void 0 === ue &&
                      (ue =
                        void 0 === D.style.animationName && void 0 !== D.style.webkitAnimationName ? '-webkit-' : ''),
                    ue
                  ))(D)
                : '';
              D.style.setProperty(ae + u, ie);
            },
            he = (D = [], u) => {
              if (void 0 !== u) {
                const ie = Array.isArray(u) ? u : [u];
                return [...D, ...ie];
              }
              return D;
            },
            O = (D) => {
              let u,
                ie,
                ae,
                be,
                A,
                R,
                se,
                Ae,
                B,
                Me,
                ee,
                M = [],
                te = [],
                we = [],
                Z = !1,
                Pe = {},
                De = [],
                Se = [],
                C = {},
                P = 0,
                J = !1,
                fe = !1,
                Ie = !0,
                Re = !1,
                We = !0,
                N = !1;
              const H = D,
                q = [],
                ke = [],
                Te = [],
                Ne = [],
                Oe = [],
                ze = [],
                Je = [],
                nn = [],
                $i = [],
                $n = [],
                Ge = [],
                io =
                  'function' == typeof AnimationEffect ||
                  (void 0 !== pe.w && 'function' == typeof pe.w.AnimationEffect),
                ct = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && io,
                ro = () => Ge,
                ao = (_, L) => {
                  const de = L.findIndex((je) => je.c === _);
                  de > -1 && L.splice(de, 1);
                },
                Sn = (_, L) => ((L?.oneTimeCallback ? ke : q).push({ c: _, o: L }), ee),
                so = () => {
                  ct &&
                    (Ge.forEach((_) => {
                      _.cancel();
                    }),
                    (Ge.length = 0));
                },
                Oi = () => {
                  (ze.forEach((_) => {
                    _?.parentNode && _.parentNode.removeChild(_);
                  }),
                    (ze.length = 0));
                },
                co = () => (void 0 !== A ? A : se ? se.getFill() : 'both'),
                Tn = () => (void 0 !== Ae ? Ae : void 0 !== R ? R : se ? se.getDirection() : 'normal'),
                po = () => (J ? 'linear' : void 0 !== ae ? ae : se ? se.getEasing() : 'linear'),
                Ht = () => (fe ? 0 : void 0 !== B ? B : void 0 !== ie ? ie : se ? se.getDuration() : 0),
                uo = () => (void 0 !== be ? be : se ? se.getIterations() : 1),
                ho = () => (void 0 !== Me ? Me : void 0 !== u ? u : se ? se.getDelay() : 0),
                on = () => {
                  0 !== P &&
                    (P--,
                    0 === P &&
                      ((() => {
                        ($i.forEach((Ue) => Ue()), $n.forEach((Ue) => Ue()));
                        const _ = Ie ? 1 : 0,
                          L = De,
                          de = Se,
                          je = C;
                        (Ne.forEach((Ue) => {
                          const bt = Ue.classList;
                          (L.forEach((Lt) => bt.add(Lt)), de.forEach((Lt) => bt.remove(Lt)));
                          for (const Lt in je) je.hasOwnProperty(Lt) && Ce(Ue, Lt, je[Lt]);
                        }),
                          (B = void 0),
                          (Ae = void 0),
                          (Me = void 0),
                          q.forEach((Ue) => Ue.c(_, ee)),
                          ke.forEach((Ue) => Ue.c(_, ee)),
                          (ke.length = 0),
                          (We = !0),
                          Ie && (Re = !0),
                          (Ie = !0));
                      })(),
                      se && se.animationFinish()));
                },
                bo = () => {
                  ((() => {
                    (Je.forEach((je) => je()), nn.forEach((je) => je()));
                    const _ = te,
                      L = we,
                      de = Pe;
                    Ne.forEach((je) => {
                      const Ue = je.classList;
                      (_.forEach((bt) => Ue.add(bt)), L.forEach((bt) => Ue.remove(bt)));
                      for (const bt in de) de.hasOwnProperty(bt) && Ce(je, bt, de[bt]);
                    });
                  })(),
                    M.length > 0 &&
                      ct &&
                      (Ne.forEach((_) => {
                        const L = _.animate(M, {
                          id: H,
                          delay: ho(),
                          duration: Ht(),
                          easing: po(),
                          iterations: uo(),
                          fill: co(),
                          direction: Tn(),
                        });
                        (L.pause(), Ge.push(L));
                      }),
                      Ge.length > 0 &&
                        (Ge[0].onfinish = () => {
                          on();
                        })),
                    (Z = !0));
                },
                Vt = (_) => {
                  ((_ = Math.min(Math.max(_, 0), 0.9999)),
                    ct &&
                      Ge.forEach((L) => {
                        ((L.currentTime = L.effect.getComputedTiming().delay + Ht() * _), L.pause());
                      }));
                },
                qi = (_) => {
                  (Ge.forEach((L) => {
                    L.effect.updateTiming({
                      delay: ho(),
                      duration: Ht(),
                      easing: po(),
                      iterations: uo(),
                      fill: co(),
                      direction: Tn(),
                    });
                  }),
                    void 0 !== _ && Vt(_));
                },
                dt = (_ = !1, L = !0, de) => (
                  _ &&
                    Oe.forEach((je) => {
                      je.update(_, L, de);
                    }),
                  ct && qi(de),
                  ee
                ),
                Yi = () => {
                  Z &&
                    (ct
                      ? Ge.forEach((_) => {
                          _.pause();
                        })
                      : Ne.forEach((_) => {
                          Ce(_, 'animation-play-state', 'paused');
                        }),
                    (N = !0));
                },
                xo = (_) =>
                  new Promise((L) => {
                    (_?.sync && ((fe = !0), Sn(() => (fe = !1), { oneTimeCallback: !0 })),
                      Z || bo(),
                      Re && (ct && (Vt(0), qi()), (Re = !1)),
                      We && ((P = Oe.length + 1), (We = !1)));
                    const de = () => {
                        (ao(je, ke), L());
                      },
                      je = () => {
                        (ao(de, Te), L());
                      };
                    (Sn(je, { oneTimeCallback: !0 }),
                      ((_) => {
                        Te.push({ c: _, o: { oneTimeCallback: !0 } });
                      })(de),
                      Oe.forEach((Ue) => {
                        Ue.play();
                      }),
                      ct
                        ? (Ge.forEach((_) => {
                            _.play();
                          }),
                          (0 === M.length || 0 === Ne.length) && on())
                        : on(),
                      (N = !1));
                  }),
                zn = (_, L) => {
                  const de = M[0];
                  return (
                    void 0 === de || (void 0 !== de.offset && 0 !== de.offset)
                      ? (M = [{ offset: 0, [_]: L }, ...M])
                      : (de[_] = L),
                    ee
                  );
                };
              return (ee = {
                parentAnimation: se,
                elements: Ne,
                childAnimations: Oe,
                id: H,
                animationFinish: on,
                from: zn,
                to: (_, L) => {
                  const de = M[M.length - 1];
                  return (
                    void 0 === de || (void 0 !== de.offset && 1 !== de.offset)
                      ? (M = [...M, { offset: 1, [_]: L }])
                      : (de[_] = L),
                    ee
                  );
                },
                fromTo: (_, L, de) => zn(_, L).to(_, de),
                parent: (_) => ((se = _), ee),
                play: xo,
                pause: () => (
                  Oe.forEach((_) => {
                    _.pause();
                  }),
                  Yi(),
                  ee
                ),
                stop: () => {
                  (Oe.forEach((_) => {
                    _.stop();
                  }),
                    Z && (so(), (Z = !1)),
                    (J = !1),
                    (fe = !1),
                    (We = !0),
                    (Ae = void 0),
                    (B = void 0),
                    (Me = void 0),
                    (P = 0),
                    (Re = !1),
                    (Ie = !0),
                    (N = !1),
                    Te.forEach((_) => _.c(0, ee)),
                    (Te.length = 0));
                },
                destroy: (_) => (
                  Oe.forEach((L) => {
                    L.destroy(_);
                  }),
                  ((_) => {
                    (so(), _ && Oi());
                  })(_),
                  (Ne.length = 0),
                  (Oe.length = 0),
                  (M.length = 0),
                  (q.length = 0),
                  (ke.length = 0),
                  (Z = !1),
                  (We = !0),
                  ee
                ),
                keyframes: (_) => {
                  const L = M !== _;
                  return (
                    (M = _),
                    L &&
                      ((_) => {
                        ct &&
                          ro().forEach((L) => {
                            const de = L.effect;
                            if (de.setKeyframes) de.setKeyframes(_);
                            else {
                              const je = new KeyframeEffect(de.target, _, de.getTiming());
                              L.effect = je;
                            }
                          });
                      })(M),
                    ee
                  );
                },
                addAnimation: (_) => {
                  if (null != _)
                    if (Array.isArray(_)) for (const L of _) (L.parent(ee), Oe.push(L));
                    else (_.parent(ee), Oe.push(_));
                  return ee;
                },
                addElement: (_) => {
                  if (null != _)
                    if (1 === _.nodeType) Ne.push(_);
                    else if (_.length >= 0) for (let L = 0; L < _.length; L++) Ne.push(_[L]);
                    else (0, G.a)('createAnimation - Invalid addElement value.');
                  return ee;
                },
                update: dt,
                fill: (_) => ((A = _), dt(!0), ee),
                direction: (_) => ((R = _), dt(!0), ee),
                iterations: (_) => ((be = _), dt(!0), ee),
                duration: (_) => (!ct && 0 === _ && (_ = 1), (ie = _), dt(!0), ee),
                easing: (_) => ((ae = _), dt(!0), ee),
                delay: (_) => ((u = _), dt(!0), ee),
                getWebAnimations: ro,
                getKeyframes: () => M,
                getFill: co,
                getDirection: Tn,
                getDelay: ho,
                getIterations: uo,
                getEasing: po,
                getDuration: Ht,
                afterAddRead: (_) => ($i.push(_), ee),
                afterAddWrite: (_) => ($n.push(_), ee),
                afterClearStyles: (_ = []) => {
                  for (const L of _) C[L] = '';
                  return ee;
                },
                afterStyles: (_ = {}) => ((C = _), ee),
                afterRemoveClass: (_) => ((Se = he(Se, _)), ee),
                afterAddClass: (_) => ((De = he(De, _)), ee),
                beforeAddRead: (_) => (Je.push(_), ee),
                beforeAddWrite: (_) => (nn.push(_), ee),
                beforeClearStyles: (_ = []) => {
                  for (const L of _) Pe[L] = '';
                  return ee;
                },
                beforeStyles: (_ = {}) => ((Pe = _), ee),
                beforeRemoveClass: (_) => ((we = he(we, _)), ee),
                beforeAddClass: (_) => ((te = he(te, _)), ee),
                onFinish: Sn,
                isRunning: () => 0 !== P && !N,
                progressStart: (_ = !1, L) => (
                  Oe.forEach((de) => {
                    de.progressStart(_, L);
                  }),
                  Yi(),
                  (J = _),
                  Z || bo(),
                  dt(!1, !0, L),
                  ee
                ),
                progressStep: (_) => (
                  Oe.forEach((L) => {
                    L.progressStep(_);
                  }),
                  Vt(_),
                  ee
                ),
                progressEnd: (_, L, de) => (
                  (J = !1),
                  Oe.forEach((je) => {
                    je.progressEnd(_, L, de);
                  }),
                  void 0 !== de && (B = de),
                  (Re = !1),
                  (Ie = !0),
                  0 === _
                    ? ((Ae = 'reverse' === Tn() ? 'normal' : 'reverse'),
                      'reverse' === Ae && (Ie = !1),
                      ct ? (dt(), Vt(1 - L)) : ((Me = (1 - L) * Ht() * -1), dt(!1, !1)))
                    : 1 === _ && (ct ? (dt(), Vt(L)) : ((Me = L * Ht() * -1), dt(!1, !1))),
                  void 0 !== _ && !se && xo(),
                  ee
                ),
              });
            };
        },
        961: (z) => {
          'use strict';
          z.exports = Hd;
        },
      },
      Ya = {};
    function U(z) {
      var Y = Ya[z];
      if (void 0 !== Y) return Y.exports;
      var y = (Ya[z] = { exports: {} });
      return (qa[z](y, y.exports, U), y.exports);
    }
    ((U.m = qa),
      (U.d = (z, Y) => {
        for (var y in Y) U.o(Y, y) && !U.o(z, y) && Object.defineProperty(z, y, { enumerable: !0, get: Y[y] });
      }),
      (U.f = {}),
      (U.e = (z) => Promise.all(Object.keys(U.f).reduce((Y, y) => (U.f[y](z, Y), Y), []))),
      (U.u = (z) => z + '.' + { 472: '0b33fcc4528a8498', 742: '787c95a5058944a7' }[z] + '.js'),
      (U.miniCssF = (z) => {}),
      (U.o = (z, Y) => Object.prototype.hasOwnProperty.call(z, Y)),
      (z = {}),
      (Y = 'plugin:'),
      (U.l = (y, G, pe, ue) => {
        if (z[y]) z[y].push(G);
        else {
          var Q, Ce;
          if (void 0 !== pe)
            for (var he = document.getElementsByTagName('script'), O = 0; O < he.length; O++) {
              var D = he[O];
              if (D.getAttribute('src') == y || D.getAttribute('data-webpack') == Y + pe) {
                Q = D;
                break;
              }
            }
          (Q ||
            ((Ce = !0),
            ((Q = document.createElement('script')).type = 'module'),
            (Q.charset = 'utf-8'),
            (Q.timeout = 120),
            U.nc && Q.setAttribute('nonce', U.nc),
            Q.setAttribute('data-webpack', Y + pe),
            (Q.src = U.tu(y))),
            (z[y] = [G]));
          var u = (ae, be) => {
              ((Q.onerror = Q.onload = null), clearTimeout(ie));
              var A = z[y];
              if ((delete z[y], Q.parentNode && Q.parentNode.removeChild(Q), A && A.forEach((R) => R(be)), ae))
                return ae(be);
            },
            ie = setTimeout(u.bind(null, void 0, { type: 'timeout', target: Q }), 12e4);
          ((Q.onerror = u.bind(null, Q.onerror)),
            (Q.onload = u.bind(null, Q.onload)),
            Ce && document.head.appendChild(Q));
        }
      }),
      (U.r = (z) => {
        (typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(z, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(z, '__esModule', { value: !0 }));
      }),
      (() => {
        var z;
        U.tt = () => (
          void 0 === z &&
            ((z = { createScriptURL: (Y) => Y }),
            typeof trustedTypes < 'u' &&
              trustedTypes.createPolicy &&
              (z = trustedTypes.createPolicy('angular#bundler', z))),
          z
        );
      })(),
      (U.tu = (z) => U.tt().createScriptURL(z)),
      (U.p = ''),
      (() => {
        var z = { 792: 0 };
        U.f.j = (G, pe) => {
          var ue = U.o(z, G) ? z[G] : void 0;
          if (0 !== ue)
            if (ue) pe.push(ue[2]);
            else {
              var Q = new Promise((D, u) => (ue = z[G] = [D, u]));
              pe.push((ue[2] = Q));
              var Ce = U.p + U.u(G),
                he = new Error();
              U.l(
                Ce,
                (D) => {
                  if (U.o(z, G) && (0 !== (ue = z[G]) && (z[G] = void 0), ue)) {
                    var u = D && ('load' === D.type ? 'missing' : D.type),
                      ie = D && D.target && D.target.src;
                    ((he.message = 'Loading chunk ' + G + ' failed.\n(' + u + ': ' + ie + ')'),
                      (he.name = 'ChunkLoadError'),
                      (he.type = u),
                      (he.request = ie),
                      ue[1](he));
                  }
                },
                'chunk-' + G,
                G,
              );
            }
        };
        var Y = (G, pe) => {
            var he,
              O,
              [ue, Q, Ce] = pe,
              D = 0;
            if (ue.some((ie) => 0 !== z[ie])) {
              for (he in Q) U.o(Q, he) && (U.m[he] = Q[he]);
              Ce && Ce(U);
            }
            for (G && G(pe); D < ue.length; D++) (U.o(z, (O = ue[D])) && z[O] && z[O][0](), (z[O] = 0));
          },
          y = ((typeof self < 'u' ? self : this).webpackChunkplugin =
            (typeof self < 'u' ? self : this).webpackChunkplugin || []);
        (y.forEach(Y.bind(null, 0)), (y.push = Y.bind(null, y.push.bind(y))));
      })());
    var Ci = {};
    return (
      (() => {
        'use strict';
        (U.r(Ci), U.d(Ci, { PluginModule: () => Pd, default: () => ay }));
        var z = U(555),
          Y = U(325),
          y = U(796);
        function G(n) {
          return 'function' == typeof n;
        }
        function ue(n) {
          return (e) => {
            if (
              (function pe(n) {
                return G(n?.lift);
              })(e)
            )
              return e.lift(function (t) {
                try {
                  return n(t, this);
                } catch (o) {
                  this.error(o);
                }
              });
            throw new TypeError('Unable to lift unknown Observable type');
          };
        }
        function Ce(...n) {
          (0, Y.wakoLog)('plugin.watchnow', n);
        }
        var O = U(714),
          D = U(652),
          u = U(264),
          ie = U(346),
          ae = U(296),
          be = U(961);
        const te = (function M(n) {
          const t = n((o) => {
            (Error.call(o), (o.stack = new Error().stack));
          });
          return ((t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t);
        })(
          (n) =>
            function (t) {
              (n(this),
                (this.message = t
                  ? `${t.length} errors occurred during unsubscription:\n${t.map((o, i) => `${i + 1}) ${o.toString()}`).join('\n  ')}`
                  : ''),
                (this.name = 'UnsubscriptionError'),
                (this.errors = t));
            },
        );
        function we(n, e) {
          if (n) {
            const t = n.indexOf(e);
            0 <= t && n.splice(t, 1);
          }
        }
        class Z {
          constructor(e) {
            ((this.initialTeardown = e), (this.closed = !1), (this._parentage = null), (this._finalizers = null));
          }
          unsubscribe() {
            let e;
            if (!this.closed) {
              this.closed = !0;
              const { _parentage: t } = this;
              if (t)
                if (((this._parentage = null), Array.isArray(t))) for (const r of t) r.remove(this);
                else t.remove(this);
              const { initialTeardown: o } = this;
              if (G(o))
                try {
                  o();
                } catch (r) {
                  e = r instanceof te ? r.errors : [r];
                }
              const { _finalizers: i } = this;
              if (i) {
                this._finalizers = null;
                for (const r of i)
                  try {
                    De(r);
                  } catch (a) {
                    ((e = e ?? []), a instanceof te ? (e = [...e, ...a.errors]) : e.push(a));
                  }
              }
              if (e) throw new te(e);
            }
          }
          add(e) {
            var t;
            if (e && e !== this)
              if (this.closed) De(e);
              else {
                if (e instanceof Z) {
                  if (e.closed || e._hasParent(this)) return;
                  e._addParent(this);
                }
                (this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(e);
              }
          }
          _hasParent(e) {
            const { _parentage: t } = this;
            return t === e || (Array.isArray(t) && t.includes(e));
          }
          _addParent(e) {
            const { _parentage: t } = this;
            this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
          }
          _removeParent(e) {
            const { _parentage: t } = this;
            t === e ? (this._parentage = null) : Array.isArray(t) && we(t, e);
          }
          remove(e) {
            const { _finalizers: t } = this;
            (t && we(t, e), e instanceof Z && e._removeParent(this));
          }
        }
        function Pe(n) {
          return n instanceof Z || (n && 'closed' in n && G(n.remove) && G(n.add) && G(n.unsubscribe));
        }
        function De(n) {
          G(n) ? n() : n.unsubscribe();
        }
        Z.EMPTY = (() => {
          const n = new Z();
          return ((n.closed = !0), n);
        })();
        const Se = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
          },
          C = {
            setTimeout(n, e, ...t) {
              const { delegate: o } = C;
              return o?.setTimeout ? o.setTimeout(n, e, ...t) : setTimeout(n, e, ...t);
            },
            clearTimeout(n) {
              const { delegate: e } = C;
              return (e?.clearTimeout || clearTimeout)(n);
            },
            delegate: void 0,
          };
        function P(n) {
          C.setTimeout(() => {
            const { onUnhandledError: e } = Se;
            if (!e) throw n;
            e(n);
          });
        }
        function J() {}
        const fe = Me('C', void 0, void 0);
        function Me(n, e, t) {
          return { kind: n, value: e, error: t };
        }
        let Ie = null;
        class ee extends Z {
          constructor(e) {
            (super(),
              (this.isStopped = !1),
              e ? ((this.destination = e), Pe(e) && e.add(this)) : (this.destination = ze));
          }
          static create(e, t, o) {
            return new ke(e, t, o);
          }
          next(e) {
            this.isStopped
              ? Oe(
                  (function B(n) {
                    return Me('N', n, void 0);
                  })(e),
                  this,
                )
              : this._next(e);
          }
          error(e) {
            this.isStopped
              ? Oe(
                  (function Ae(n) {
                    return Me('E', void 0, n);
                  })(e),
                  this,
                )
              : ((this.isStopped = !0), this._error(e));
          }
          complete() {
            this.isStopped ? Oe(fe, this) : ((this.isStopped = !0), this._complete());
          }
          unsubscribe() {
            this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
          }
          _next(e) {
            this.destination.next(e);
          }
          _error(e) {
            try {
              this.destination.error(e);
            } finally {
              this.unsubscribe();
            }
          }
          _complete() {
            try {
              this.destination.complete();
            } finally {
              this.unsubscribe();
            }
          }
        }
        const N = Function.prototype.bind;
        function H(n, e) {
          return N.call(n, e);
        }
        class q {
          constructor(e) {
            this.partialObserver = e;
          }
          next(e) {
            const { partialObserver: t } = this;
            if (t.next)
              try {
                t.next(e);
              } catch (o) {
                Te(o);
              }
          }
          error(e) {
            const { partialObserver: t } = this;
            if (t.error)
              try {
                t.error(e);
              } catch (o) {
                Te(o);
              }
            else Te(e);
          }
          complete() {
            const { partialObserver: e } = this;
            if (e.complete)
              try {
                e.complete();
              } catch (t) {
                Te(t);
              }
          }
        }
        class ke extends ee {
          constructor(e, t, o) {
            let i;
            if ((super(), G(e) || !e)) i = { next: e ?? void 0, error: t ?? void 0, complete: o ?? void 0 };
            else {
              let r;
              this && Se.useDeprecatedNextContext
                ? ((r = Object.create(e)),
                  (r.unsubscribe = () => this.unsubscribe()),
                  (i = {
                    next: e.next && H(e.next, r),
                    error: e.error && H(e.error, r),
                    complete: e.complete && H(e.complete, r),
                  }))
                : (i = e);
            }
            this.destination = new q(i);
          }
        }
        function Te(n) {
          Se.useDeprecatedSynchronousErrorHandling
            ? (function We(n) {
                Se.useDeprecatedSynchronousErrorHandling && Ie && ((Ie.errorThrown = !0), (Ie.error = n));
              })(n)
            : P(n);
        }
        function Oe(n, e) {
          const { onStoppedNotification: t } = Se;
          t && C.setTimeout(() => t(n, e));
        }
        const ze = {
            closed: !0,
            next: J,
            error: function Ne(n) {
              throw n;
            },
            complete: J,
          },
          Je = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        function nn(n) {
          return n;
        }
        let Ge = (() => {
          class n {
            constructor(t) {
              t && (this._subscribe = t);
            }
            lift(t) {
              const o = new n();
              return ((o.source = this), (o.operator = t), o);
            }
            subscribe(t, o, i) {
              const r = (function ro(n) {
                return (
                  (n && n instanceof ee) ||
                  ((function ct(n) {
                    return n && G(n.next) && G(n.error) && G(n.complete);
                  })(n) &&
                    Pe(n))
                );
              })(t)
                ? t
                : new ke(t, o, i);
              return (
                (function Re(n) {
                  if (Se.useDeprecatedSynchronousErrorHandling) {
                    const e = !Ie;
                    if ((e && (Ie = { errorThrown: !1, error: null }), n(), e)) {
                      const { errorThrown: t, error: o } = Ie;
                      if (((Ie = null), t)) throw o;
                    }
                  } else n();
                })(() => {
                  const { operator: a, source: s } = this;
                  r.add(a ? a.call(r, s) : s ? this._subscribe(r) : this._trySubscribe(r));
                }),
                r
              );
            }
            _trySubscribe(t) {
              try {
                return this._subscribe(t);
              } catch (o) {
                t.error(o);
              }
            }
            forEach(t, o) {
              return new (o = io(o))((i, r) => {
                const a = new ke({
                  next: (s) => {
                    try {
                      t(s);
                    } catch (l) {
                      (r(l), a.unsubscribe());
                    }
                  },
                  error: r,
                  complete: i,
                });
                this.subscribe(a);
              });
            }
            _subscribe(t) {
              var o;
              return null === (o = this.source) || void 0 === o ? void 0 : o.subscribe(t);
            }
            [Je]() {
              return this;
            }
            pipe(...t) {
              return (function $n(n) {
                return 0 === n.length
                  ? nn
                  : 1 === n.length
                    ? n[0]
                    : function (t) {
                        return n.reduce((o, i) => i(o), t);
                      };
              })(t)(this);
            }
            toPromise(t) {
              return new (t = io(t))((o, i) => {
                let r;
                this.subscribe(
                  (a) => (r = a),
                  (a) => i(a),
                  () => o(r),
                );
              });
            }
          }
          return ((n.create = (e) => new n(e)), n);
        })();
        function io(n) {
          var e;
          return null !== (e = n ?? Se.Promise) && void 0 !== e ? e : Promise;
        }
        const ao = (function Di() {
          return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
        })();
        function lo(n) {
          return new Ge((e) => {
            (function Ri(n, e) {
              var t, o, i, r;
              return (0, D.__awaiter)(this, void 0, void 0, function* () {
                try {
                  for (t = (0, D.__asyncValues)(n); !(o = yield t.next()).done; )
                    if ((e.next(o.value), e.closed)) return;
                } catch (a) {
                  i = { error: a };
                } finally {
                  try {
                    o && !o.done && (r = t.return) && (yield r.call(t));
                  } finally {
                    if (i) throw i.error;
                  }
                }
                e.complete();
              });
            })(n, e).catch((t) => e.error(t));
          });
        }
        function En(n, e, t, o, i) {
          return new Fi(n, e, t, o, i);
        }
        class Fi extends ee {
          constructor(e, t, o, i, r, a) {
            (super(e),
              (this.onFinalize = r),
              (this.shouldUnsubscribe = a),
              (this._next = t
                ? function (s) {
                    try {
                      t(s);
                    } catch (l) {
                      e.error(l);
                    }
                  }
                : super._next),
              (this._error = i
                ? function (s) {
                    try {
                      i(s);
                    } catch (l) {
                      e.error(l);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : super._error),
              (this._complete = o
                ? function () {
                    try {
                      o();
                    } catch (s) {
                      e.error(s);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : super._complete));
          }
          unsubscribe() {
            var e;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              const { closed: t } = this;
              (super.unsubscribe(), !t && (null === (e = this.onFinalize) || void 0 === e || e.call(this)));
            }
          }
        }
        U(122);
        const Dn = new u.InjectionToken('USERCONFIG');
        class fo {
          data;
          constructor(e = {}) {
            ((this.data = e),
              console.warn(
                "[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.",
              ));
          }
          get(e) {
            return this.data[e];
          }
        }
        const Ni = new u.InjectionToken('IonModalToken');
        let An = (() => {
          class n {
            zone = (0, u.inject)(u.NgZone);
            applicationRef = (0, u.inject)(u.ApplicationRef);
            config = (0, u.inject)(Dn);
            create(t, o, i) {
              return new Hi(t, o, this.applicationRef, this.zone, i, this.config.useSetInputAPI ?? !1);
            }
            static ɵfac = function (o) {
              return new (o || n)();
            };
            static ɵprov = u.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
          }
          return n;
        })();
        class Hi {
          environmentInjector;
          injector;
          applicationRef;
          zone;
          elementReferenceKey;
          enableSignalsSupport;
          elRefMap = new WeakMap();
          elEventsMap = new WeakMap();
          constructor(e, t, o, i, r, a) {
            ((this.environmentInjector = e),
              (this.injector = t),
              (this.applicationRef = o),
              (this.zone = i),
              (this.elementReferenceKey = r),
              (this.enableSignalsSupport = a));
          }
          attachViewToDom(e, t, o, i) {
            return this.zone.run(
              () =>
                new Promise((r) => {
                  const a = { ...o };
                  (void 0 !== this.elementReferenceKey && (a[this.elementReferenceKey] = e),
                    r(
                      Vi(
                        this.zone,
                        this.environmentInjector,
                        this.injector,
                        this.applicationRef,
                        this.elRefMap,
                        this.elEventsMap,
                        e,
                        t,
                        a,
                        i,
                        this.elementReferenceKey,
                        this.enableSignalsSupport,
                      ),
                    ));
                }),
            );
          }
          removeViewFromDom(e, t) {
            return this.zone.run(
              () =>
                new Promise((o) => {
                  const i = this.elRefMap.get(t);
                  if (i) {
                    (i.destroy(), this.elRefMap.delete(t));
                    const r = this.elEventsMap.get(t);
                    r && (r(), this.elEventsMap.delete(t));
                  }
                  o();
                }),
            );
          }
        }
        const Vi = (n, e, t, o, i, r, a, s, l, c, d, p) => {
            const f = on(l);
            'ion-modal' === a.tagName.toLowerCase() && f.push({ provide: Ni, useValue: a });
            const g = u.Injector.create({ providers: f, parent: t }),
              b = (0, u.createComponent)(s, { environmentInjector: e, elementInjector: g }),
              v = b.instance,
              x = b.location.nativeElement;
            if (l)
              if (
                (d &&
                  void 0 !== v[d] &&
                  console.error(
                    `[Ionic Error]: ${d} is a reserved property when using ${a.tagName.toLowerCase()}. Rename or remove the "${d}" property from ${s.name}.`,
                  ),
                !0 === p && void 0 !== b.setInput)
              ) {
                const { modal: w, popover: $, ...T } = l;
                for (const E in T) b.setInput(E, T[E]);
                (void 0 !== w && Object.assign(v, { modal: w }), void 0 !== $ && Object.assign(v, { popover: $ }));
              } else Object.assign(v, l);
            if (c) for (const w of c) x.classList.add(w);
            const k = mo(n, v, x);
            return (a.appendChild(x), o.attachView(b.hostView), i.set(x, b), r.set(x, k), x);
          },
          Wi = [ae.L, ae.a, ae.b, ae.c, ae.d],
          mo = (n, e, t) =>
            n.run(() => {
              const o = Wi.filter((i) => 'function' == typeof e[i]).map((i) => {
                const r = (a) => e[i](a.detail);
                return (t.addEventListener(i, r), () => t.removeEventListener(i, r));
              });
              return () => o.forEach((i) => i());
            }),
          go = new u.InjectionToken('NavParamsToken'),
          on = (n) => [
            { provide: go, useValue: n },
            { provide: fo, useFactory: Ui, deps: [go] },
          ],
          Ui = (n) => new fo(n),
          Vd = new u.InjectionToken('');
        let Wd = (() => {
          class n {
            outletDataSubscriptions = new Map();
            bindActivatedRouteToOutletComponent(t) {
              (this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t));
            }
            unsubscribeFromRouteData(t) {
              (this.outletDataSubscriptions.get(t)?.unsubscribe(), this.outletDataSubscriptions.delete(t));
            }
            subscribeToRouteData(t) {
              const { activatedRoute: o } = t,
                i = (0, be.combineLatest)([o.queryParams, o.params, o.data])
                  .pipe(
                    (function Bi(n, e) {
                      return ue((t, o) => {
                        let i = null,
                          r = 0,
                          a = !1;
                        const s = () => a && !i && o.complete();
                        t.subscribe(
                          En(
                            o,
                            (l) => {
                              i?.unsubscribe();
                              let c = 0;
                              const d = r++;
                              (function so(n) {
                                if (n instanceof Ge) return n;
                                if (null != n) {
                                  if (
                                    (function Si(n) {
                                      return G(n[Je]);
                                    })(n)
                                  )
                                    return (function Oi(n) {
                                      return new Ge((e) => {
                                        const t = n[Je]();
                                        if (G(t.subscribe)) return t.subscribe(e);
                                        throw new TypeError(
                                          'Provided object does not correctly implement Symbol.observable',
                                        );
                                      });
                                    })(n);
                                  if (((n) => n && 'number' == typeof n.length && 'function' != typeof n)(n))
                                    return (function ji(n) {
                                      return new Ge((e) => {
                                        for (let t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                                        e.complete();
                                      });
                                    })(n);
                                  if (
                                    (function R(n) {
                                      return G(n?.then);
                                    })(n)
                                  )
                                    return (function Pi(n) {
                                      return new Ge((e) => {
                                        n.then(
                                          (t) => {
                                            e.closed || (e.next(t), e.complete());
                                          },
                                          (t) => e.error(t),
                                        ).then(null, P);
                                      });
                                    })(n);
                                  if (
                                    (function Ei(n) {
                                      return Symbol.asyncIterator && G(n?.[Symbol.asyncIterator]);
                                    })(n)
                                  )
                                    return lo(n);
                                  if (
                                    (function Ai(n) {
                                      return G(n?.[ao]);
                                    })(n)
                                  )
                                    return (function Mi(n) {
                                      return new Ge((e) => {
                                        for (const t of n) if ((e.next(t), e.closed)) return;
                                        e.complete();
                                      });
                                    })(n);
                                  if (
                                    (function zi(n) {
                                      return G(n?.getReader);
                                    })(n)
                                  )
                                    return (function Li(n) {
                                      return lo(
                                        (function Sn(n) {
                                          return (0, D.__asyncGenerator)(this, arguments, function* () {
                                            const t = n.getReader();
                                            try {
                                              for (;;) {
                                                const { value: o, done: i } = yield (0, D.__await)(t.read());
                                                if (i) return yield (0, D.__await)(void 0);
                                                yield yield (0, D.__await)(o);
                                              }
                                            } finally {
                                              t.releaseLock();
                                            }
                                          });
                                        })(n),
                                      );
                                    })(n);
                                }
                                throw (function Ti(n) {
                                  return new TypeError(
                                    `You provided ${null !== n && 'object' == typeof n ? 'an invalid object' : `'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
                                  );
                                })(n);
                              })(n(l, d)).subscribe(
                                (i = En(
                                  o,
                                  (p) => o.next(e ? e(l, p, d, c++) : p),
                                  () => {
                                    ((i = null), s());
                                  },
                                )),
                              );
                            },
                            () => {
                              ((a = !0), s());
                            },
                          ),
                        );
                      });
                    })(([r, a, s], l) => ((s = { ...r, ...a, ...s }), 0 === l ? (0, be.of)(s) : Promise.resolve(s))),
                  )
                  .subscribe((r) => {
                    if (!t.isActivated || !t.activatedComponentRef || t.activatedRoute !== o || null === o.component)
                      return void this.unsubscribeFromRouteData(t);
                    const a = (0, u.reflectComponentType)(o.component);
                    if (a) for (const { templateName: s } of a.inputs) t.activatedComponentRef.setInput(s, r[s]);
                    else this.unsubscribeFromRouteData(t);
                  });
              this.outletDataSubscriptions.set(t, i);
            }
            static ɵfac = function (o) {
              return new (o || n)();
            };
            static ɵprov = u.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
          }
          return n;
        })();
        function qd(n) {
          return n?.componentInputBindingEnabled ? new Wd() : null;
        }
        class Xi {
          ctrl;
          constructor(e) {
            this.ctrl = e;
          }
          create(e) {
            return this.ctrl.create(e || {});
          }
          dismiss(e, t, o) {
            return this.ctrl.dismiss(e, t, o);
          }
          getTop() {
            return this.ctrl.getTop();
          }
        }
        var m = {
            allRenderFn: !1,
            element: !0,
            event: !0,
            hasRenderFn: !0,
            hostListener: !0,
            hostListenerTargetWindow: !0,
            hostListenerTargetDocument: !0,
            hostListenerTargetBody: !0,
            hostListenerTargetParent: !1,
            hostListenerTarget: !0,
            member: !0,
            method: !0,
            mode: !0,
            observeAttribute: !0,
            prop: !0,
            propMutable: !0,
            reflect: !0,
            scoped: !0,
            shadowDom: !0,
            slot: !0,
            cssAnnotations: !0,
            state: !0,
            style: !0,
            formAssociated: !1,
            svg: !0,
            updatable: !0,
            vdomAttribute: !0,
            vdomXlink: !0,
            vdomClass: !0,
            vdomFunctional: !0,
            vdomKey: !0,
            vdomListener: !0,
            vdomRef: !0,
            vdomPropOrAttr: !0,
            vdomRender: !0,
            vdomStyle: !0,
            vdomText: !0,
            watchCallback: !0,
            taskQueue: !0,
            hotModuleReplacement: !1,
            isDebug: !1,
            isDev: !1,
            isTesting: !1,
            hydrateServerSide: !1,
            hydrateClientSide: !1,
            lifecycleDOMEvents: !1,
            lazyLoad: !1,
            profile: !1,
            slotRelocation: !0,
            appendChildSlotFix: !1,
            cloneNodeFix: !1,
            hydratedAttribute: !1,
            hydratedClass: !0,
            scriptDataOpts: !1,
            scopedSlotTextContentFix: !1,
            shadowDomShim: !1,
            slotChildNodesFix: !1,
            invisiblePrehydration: !0,
            propBoolean: !0,
            propNumber: !0,
            propString: !0,
            constructableCSS: !0,
            devTools: !1,
            shadowDelegatesFocus: !0,
            initializeNextTick: !1,
            asyncLoading: !0,
            asyncQueue: !1,
            transformTagName: !1,
            attachStyles: !0,
            experimentalSlotFixes: !1,
          },
          Xd = Object.defineProperty,
          ls = ((n) => (
            (n.Undefined = 'undefined'),
            (n.Null = 'null'),
            (n.String = 'string'),
            (n.Number = 'number'),
            (n.SpecialNumber = 'number'),
            (n.Boolean = 'boolean'),
            (n.BigInt = 'bigint'),
            n
          ))(ls || {}),
          cs = ((n) => (
            (n.Array = 'array'),
            (n.Date = 'date'),
            (n.Map = 'map'),
            (n.Object = 'object'),
            (n.RegularExpression = 'regexp'),
            (n.Set = 'set'),
            (n.Channel = 'channel'),
            (n.Symbol = 'symbol'),
            n
          ))(cs || {}),
          Ji = 'type',
          er = 'value',
          tr = 'serialized:',
          ds = (n, e) => {
            var t;
            Object.entries(null != (t = e.$cmpMeta$.$members$) ? t : {}).map(([r, [a]]) => {
              if ((m.state || m.prop) && (31 & a || 32 & a)) {
                const s = n[r],
                  l = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n), r);
                (Object.defineProperty(n, r, {
                  get() {
                    return l.get.call(this);
                  },
                  set(c) {
                    l.set.call(this, c);
                  },
                  configurable: !0,
                  enumerable: !0,
                }),
                  (n[r] = e.$instanceValues$.has(r) ? e.$instanceValues$.get(r) : s));
              }
            });
          },
          Fe = (n) => {
            if (n.__stencil__getHostRef) return n.__stencil__getHostRef();
          },
          us = (n, e) => e in n,
          St = (n, e) => (0, console.error)(n, e),
          nr = m.isTesting
            ? ['STENCIL:']
            : [
                '%cstencil',
                'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
              ],
          yo = (...n) => console.error(...nr, ...n),
          On = (...n) => console.warn(...nr, ...n),
          fs = new Map(),
          jn = new Map(),
          ms = [],
          rn = 's-id',
          ko = 'sty-id',
          ws = 'http://www.w3.org/1999/xlink',
          rp = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'],
          ce = typeof window < 'u' ? window : {},
          ve = ce.HTMLElement || class {},
          re = {
            $flags$: 0,
            $resourcesUrl$: '',
            jmp: (n) => n(),
            raf: (n) => requestAnimationFrame(n),
            ael: (n, e, t, o) => n.addEventListener(e, t, o),
            rel: (n, e, t, o) => n.removeEventListener(e, t, o),
            ce: (n, e) => new CustomEvent(n, e),
          },
          Rt = m.shadowDom,
          ap = (() => {
            var n;
            let e = !1;
            try {
              null == (n = ce.document) ||
                n.addEventListener(
                  'e',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get() {
                      e = !0;
                    },
                  }),
                );
            } catch {}
            return e;
          })(),
          _o =
            !!m.constructableCSS &&
            (() => {
              try {
                return (new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync);
              } catch {}
              return !1;
            })(),
          ir =
            !!_o && !!ce.document && Object.getOwnPropertyDescriptor(ce.document.adoptedStyleSheets, 'length').writable,
          rr = 0,
          Io = !1,
          Co = [],
          Ut = [],
          ar = [],
          ks = (n, e) => (t) => {
            (n.push(t), Io || ((Io = !0), e && 4 & re.$flags$ ? So($o) : re.raf($o)));
          },
          _s = (n) => {
            for (let e = 0; e < n.length; e++)
              try {
                n[e](performance.now());
              } catch (t) {
                St(t);
              }
            n.length = 0;
          },
          Is = (n, e) => {
            let t = 0,
              o = 0;
            for (; t < n.length && (o = performance.now()) < e; )
              try {
                n[t++](o);
              } catch (i) {
                St(i);
              }
            t === n.length ? (n.length = 0) : 0 !== t && n.splice(0, t);
          },
          $o = () => {
            if ((m.asyncQueue && rr++, _s(Co), m.asyncQueue)) {
              const n = 2 == (6 & re.$flags$) ? performance.now() + 14 * Math.ceil(0.1 * rr) : 1 / 0;
              (Is(Ut, n),
                Is(ar, n),
                Ut.length > 0 && (ar.push(...Ut), (Ut.length = 0)),
                (Io = Co.length + Ut.length + ar.length > 0) ? re.raf($o) : (rr = 0));
            } else (_s(Ut), (Io = Co.length > 0) && re.raf($o));
          },
          So = (n) => Promise.resolve(void 0).then(n),
          sn = ks(Co, !1),
          Ke = ks(Ut, !0),
          sr = (n) => 'object' == (n = typeof n) || 'function' === n;
        var $s = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
          dp = class en {
            static fromLocalValue(e) {
              const t = e[Ji],
                o = er in e ? e[er] : void 0;
              switch (t) {
                case 'string':
                case 'boolean':
                  return o;
                case 'bigint':
                  return BigInt(o);
                case 'undefined':
                  return;
                case 'null':
                  return null;
                case 'number':
                  return 'NaN' === o
                    ? NaN
                    : '-0' === o
                      ? -0
                      : 'Infinity' === o
                        ? 1 / 0
                        : '-Infinity' === o
                          ? -1 / 0
                          : o;
                case 'array':
                  return o.map((c) => en.fromLocalValue(c));
                case 'date':
                  return new Date(o);
                case 'map':
                  const i = new Map();
                  for (const [c, d] of o) {
                    const p = 'object' == typeof c && null !== c ? en.fromLocalValue(c) : c,
                      f = en.fromLocalValue(d);
                    i.set(p, f);
                  }
                  return i;
                case 'object':
                  const r = {};
                  for (const [c, d] of o) r[c] = en.fromLocalValue(d);
                  return r;
                case 'regexp':
                  const { pattern: a, flags: s } = o;
                  return new RegExp(a, s);
                case 'set':
                  const l = new Set();
                  for (const c of o) l.add(en.fromLocalValue(c));
                  return l;
                case 'symbol':
                  return Symbol(o);
                default:
                  throw new Error(`Unsupported type: ${t}`);
              }
            }
            static fromLocalValueArray(e) {
              return e.map((t) => en.fromLocalValue(t));
            }
            static isLocalValueObject(e) {
              if ('object' != typeof e || null === e || !e.hasOwnProperty(Ji)) return !1;
              const t = e[Ji];
              return (
                !!Object.values({ ...ls, ...cs }).includes(t) &&
                ('null' === t || 'undefined' === t || e.hasOwnProperty(er))
              );
            }
          };
        ((n, e) => {
          for (var t in e) Xd(n, t, { get: e[t], enumerable: !0 });
        })({}, { err: () => Ss, map: () => up, ok: () => lr, unwrap: () => hp, unwrapErr: () => fp });
        var lr = (n) => ({ isOk: !0, isErr: !1, value: n }),
          Ss = (n) => ({ isOk: !1, isErr: !0, value: n });
        function up(n, e) {
          if (n.isOk) {
            const t = e(n.value);
            return t instanceof Promise ? t.then((o) => lr(o)) : lr(t);
          }
          if (n.isErr) return Ss(n.value);
          throw 'should never get here';
        }
        var Pn,
          hp = (n) => {
            if (n.isOk) return n.value;
            throw n.value;
          },
          fp = (n) => {
            if (n.isErr) return n.value;
            throw n.value;
          };
        function Es(n) {
          var e;
          const t = this.attachShadow(
            m.shadowDelegatesFocus ? { mode: 'open', delegatesFocus: !!(16 & n.$flags$) } : { mode: 'open' },
          );
          (void 0 === Pn &&
            (Pn =
              null !=
              (e = (function gp(n) {
                if (!n || !_o) return;
                const e = new CSSStyleSheet();
                return (e.replaceSync(n), e);
              })(''))
                ? e
                : null),
            Pn && (ir ? t.adoptedStyleSheets.push(Pn) : (t.adoptedStyleSheets = [...t.adoptedStyleSheets, Pn])));
        }
        var Mn = (n) => (e) => n(e.toLowerCase()),
          bp = Mn((n) => n.endsWith('.d.ts') || n.endsWith('.d.mts') || n.endsWith('.d.cts')),
          Eo =
            (Mn((n) => !bp(n) && (n.endsWith('.ts') || n.endsWith('.mts') || n.endsWith('.cts'))),
            Mn((n) => n.endsWith('.tsx') || n.endsWith('.mtsx') || n.endsWith('.ctsx')),
            Mn((n) => n.endsWith('.jsx') || n.endsWith('.mjsx') || n.endsWith('.cjsx')),
            Mn((n) => n.endsWith('.js') || n.endsWith('.mjs') || n.endsWith('.cjs')),
            (n) => {
              const e = qe(n, 'childNodes');
              n.tagName &&
                n.tagName.includes('-') &&
                n['s-cr'] &&
                'SLOT-FB' !== n.tagName &&
                Rn(e, n.tagName).forEach((o) => {
                  1 === o.nodeType && 'SLOT-FB' === o.tagName && (o.hidden = !!cr(o, ln(o), !1).length);
                });
              let t = 0;
              for (t = 0; t < e.length; t++) {
                const o = e[t];
                1 === o.nodeType && qe(o, 'childNodes').length && Eo(o);
              }
            }),
          Ln = (n) => {
            const e = [];
            for (let t = 0; t < n.length; t++) {
              const o = n[t]['s-nr'] || void 0;
              o && o.isConnected && e.push(o);
            }
            return e;
          };
        function Rn(n, e, t) {
          let r,
            o = 0,
            i = [];
          for (; o < n.length; o++) {
            if (
              ((r = n[o]),
              r['s-sr'] && (!e || r['s-hn'] === e) && (void 0 === t || ln(r) === t) && (i.push(r), typeof t < 'u'))
            )
              return i;
            i = [...i, ...Rn(r.childNodes, e, t)];
          }
          return i;
        }
        var cr = (n, e, t = !0) => {
            const o = [];
            ((t && n['s-sr']) || !n['s-sr']) && o.push(n);
            let i = n;
            for (; (i = i.nextSibling); ) ln(i) === e && (t || !i['s-sr']) && o.push(i);
            return o;
          },
          Ts = (n, e) =>
            1 === n.nodeType
              ? (null === n.getAttribute('slot') && '' === e) || n.getAttribute('slot') === e
              : n['s-sn'] === e || '' === e,
          To = (n, e, t, o) => {
            if (n['s-ol'] && n['s-ol'].isConnected) return;
            const i = document.createTextNode('');
            if (((i['s-nr'] = n), !e['s-cr'] || !e['s-cr'].parentNode)) return;
            const r = e['s-cr'].parentNode,
              a = qe(r, t ? 'prepend' : 'appendChild');
            if (m.hydrateClientSide && typeof o < 'u') {
              i['s-oo'] = o;
              const s = qe(r, 'childNodes'),
                l = [i];
              (s.forEach((c) => {
                c['s-nr'] && l.push(c);
              }),
                l.sort((c, d) =>
                  !c['s-oo'] || c['s-oo'] < (d['s-oo'] || 0) ? -1 : !d['s-oo'] || d['s-oo'] < c['s-oo'] ? 1 : 0,
                ),
                l.forEach((c) => a.call(r, c)));
            } else a.call(r, i);
            ((n['s-ol'] = i), (n['s-sh'] = e['s-hn']));
          },
          ln = (n) =>
            'string' == typeof n['s-sn'] ? n['s-sn'] : (1 === n.nodeType && n.getAttribute('slot')) || void 0;
        function Ds(n) {
          if (n.assignedElements || n.assignedNodes || !n['s-sr']) return;
          const e = (t) =>
            function (o) {
              const i = [],
                r = this['s-sn'];
              o?.flatten &&
                console.error(
                  '\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ',
                );
              const a = this['s-cr'].parentElement;
              return (
                (a.__childNodes ? a.childNodes : Ln(a.childNodes)).forEach((l) => {
                  r === ln(l) && i.push(l);
                }),
                t ? i.filter((l) => 1 === l.nodeType) : i
              );
            }.bind(n);
          ((n.assignedElements = e(!0)), (n.assignedNodes = e(!1)));
        }
        function Do(n) {
          n.dispatchEvent(new CustomEvent('slotchange', { bubbles: !1, cancelable: !1, composed: !1 }));
        }
        function dr(n, e) {
          var t;
          if (!(e = e || (null == (t = n['s-ol']) ? void 0 : t.parentElement))) return { slotNode: null, slotName: '' };
          const o = (n['s-sn'] = ln(n) || '');
          return { slotNode: Rn(qe(e, 'childNodes'), e.tagName, o)[0], slotName: o };
        }
        var pr = (n) => {
            const e = n.cloneNode;
            n.cloneNode = function (t) {
              const i = !!m.shadowDom && this.shadowRoot && Rt,
                r = e.call(this, !!i && t);
              if (m.slot && !i && t) {
                let s,
                  l,
                  a = 0;
                const c = [
                    's-id',
                    's-cr',
                    's-lr',
                    's-rc',
                    's-sc',
                    's-p',
                    's-cn',
                    's-sr',
                    's-sn',
                    's-hn',
                    's-ol',
                    's-nr',
                    's-si',
                    's-rf',
                    's-scs',
                  ],
                  d = this.__childNodes || this.childNodes;
                for (; a < d.length; a++)
                  ((s = d[a]['s-nr']),
                    (l = c.every((p) => !d[a][p])),
                    s &&
                      (m.appendChildSlotFix && r.__appendChild
                        ? r.__appendChild(s.cloneNode(!0))
                        : r.appendChild(s.cloneNode(!0))),
                    l && r.appendChild(d[a].cloneNode(!0)));
              }
              return r;
            };
          },
          ur = (n) => {
            ((n.__appendChild = n.appendChild),
              (n.appendChild = function (e) {
                const { slotName: t, slotNode: o } = dr(e, this);
                if (o) {
                  To(e, o);
                  const i = cr(o, t),
                    r = i[i.length - 1],
                    a = qe(r, 'parentNode'),
                    s = qe(a, 'insertBefore')(e, r.nextSibling);
                  return (Do(o), Eo(this), s);
                }
                return this.__appendChild(e);
              }));
          },
          vp = (n) => {
            ((n.__removeChild = n.removeChild),
              (n.removeChild = function (e) {
                return e &&
                  typeof e['s-sn'] < 'u' &&
                  Rn(this.__childNodes || this.childNodes, this.tagName, e['s-sn']) &&
                  e.isConnected
                  ? (e.remove(), void Eo(this))
                  : this.__removeChild(e);
              }));
          },
          xp = (n) => {
            ((n.__prepend = n.prepend),
              (n.prepend = function (...e) {
                e.forEach((t) => {
                  'string' == typeof t && (t = this.ownerDocument.createTextNode(t));
                  const o = (t['s-sn'] = ln(t)) || '',
                    r = Rn(qe(this, 'childNodes'), this.tagName, o)[0];
                  if (r) {
                    To(t, r, !0);
                    const s = cr(r, o)[0],
                      l = qe(s, 'parentNode'),
                      c = qe(l, 'insertBefore')(t, qe(s, 'nextSibling'));
                    return (Do(r), c);
                  }
                  return (1 === t.nodeType && t.getAttribute('slot') && (t.hidden = !0), n.__prepend(t));
                });
              }));
          },
          yp = (n) => {
            ((n.__append = n.append),
              (n.append = function (...e) {
                e.forEach((t) => {
                  ('string' == typeof t && (t = this.ownerDocument.createTextNode(t)), this.appendChild(t));
                });
              }));
          },
          wp = (n) => {
            const e = n.insertAdjacentHTML;
            n.insertAdjacentHTML = function (t, o) {
              if ('afterbegin' !== t && 'beforeend' !== t) return e.call(this, t, o);
              const i = this.ownerDocument.createElement('_');
              let r;
              if (((i.innerHTML = o), 'afterbegin' === t)) for (; (r = i.firstChild); ) this.prepend(r);
              else if ('beforeend' === t) for (; (r = i.firstChild); ) this.append(r);
            };
          },
          kp = (n) => {
            n.insertAdjacentText = function (e, t) {
              this.insertAdjacentHTML(e, t);
            };
          },
          _p = (n) => {
            n.__insertBefore ||
              ((n.__insertBefore = n.insertBefore),
              (n.insertBefore = function (t, o) {
                const { slotName: i, slotNode: r } = dr(t, this),
                  a = this.__childNodes ? this.childNodes : Ln(this.childNodes);
                if (r) {
                  let l = !1;
                  if (
                    (a.forEach((c) => {
                      if (c !== o && null !== o);
                      else {
                        if (((l = !0), null === o || i !== o['s-sn'])) return void this.appendChild(t);
                        if (i === o['s-sn']) {
                          To(t, r);
                          const d = qe(o, 'parentNode');
                          (qe(d, 'insertBefore')(t, o), Do(r));
                        }
                      }
                    }),
                    l)
                  )
                    return t;
                }
                const s = o?.__parentNode;
                return s && !this.isSameNode(s) ? this.appendChild(t) : this.__insertBefore(t, o);
              }));
          },
          Ip = (n) => {
            const e = n.insertAdjacentElement;
            n.insertAdjacentElement = function (t, o) {
              return 'afterbegin' !== t && 'beforeend' !== t
                ? e.call(this, t, o)
                : 'afterbegin' === t
                  ? (this.prepend(o), o)
                  : ('beforeend' === t && this.append(o), o);
            };
          },
          hr = (n) => {
            (_t('textContent', n),
              Object.defineProperty(n, 'textContent', {
                get: function () {
                  let e = '';
                  return (
                    (this.__childNodes ? this.childNodes : Ln(this.childNodes)).forEach(
                      (o) => (e += o.textContent || ''),
                    ),
                    e
                  );
                },
                set: function (e) {
                  ((this.__childNodes ? this.childNodes : Ln(this.childNodes)).forEach((o) => {
                    (o['s-ol'] && o['s-ol'].remove(), o.remove());
                  }),
                    this.insertAdjacentHTML('beforeend', e));
                },
              }));
          },
          fr = (n) => {
            class e extends Array {
              item(o) {
                return this[o];
              }
            }
            (_t('children', n),
              Object.defineProperty(n, 'children', {
                get() {
                  return this.childNodes.filter((t) => 1 === t.nodeType);
                },
              }),
              Object.defineProperty(n, 'childElementCount', {
                get() {
                  return this.children.length;
                },
              }),
              _t('firstChild', n),
              Object.defineProperty(n, 'firstChild', {
                get() {
                  return this.childNodes[0];
                },
              }),
              _t('lastChild', n),
              Object.defineProperty(n, 'lastChild', {
                get() {
                  return this.childNodes[this.childNodes.length - 1];
                },
              }),
              _t('childNodes', n),
              Object.defineProperty(n, 'childNodes', {
                get() {
                  const t = new e();
                  return (t.push(...Ln(this.__childNodes)), t);
                },
              }));
          },
          Cp = (n) => {
            !n ||
              void 0 !== n.__nextSibling ||
              !globalThis.Node ||
              ($p(n), Ep(n), zs(n), n.nodeType === Node.ELEMENT_NODE && (Sp(n), Tp(n)));
          },
          $p = (n) => {
            !n ||
              n.__nextSibling ||
              (_t('nextSibling', n),
              Object.defineProperty(n, 'nextSibling', {
                get: function () {
                  var e;
                  const t = null == (e = this['s-ol']) ? void 0 : e.parentNode.childNodes,
                    o = t?.indexOf(this);
                  return t && o > -1 ? t[o + 1] : this.__nextSibling;
                },
              }));
          },
          Sp = (n) => {
            !n ||
              n.__nextElementSibling ||
              (_t('nextElementSibling', n),
              Object.defineProperty(n, 'nextElementSibling', {
                get: function () {
                  var e;
                  const t = null == (e = this['s-ol']) ? void 0 : e.parentNode.children,
                    o = t?.indexOf(this);
                  return t && o > -1 ? t[o + 1] : this.__nextElementSibling;
                },
              }));
          },
          Ep = (n) => {
            !n ||
              n.__previousSibling ||
              (_t('previousSibling', n),
              Object.defineProperty(n, 'previousSibling', {
                get: function () {
                  var e;
                  const t = null == (e = this['s-ol']) ? void 0 : e.parentNode.childNodes,
                    o = t?.indexOf(this);
                  return t && o > -1 ? t[o - 1] : this.__previousSibling;
                },
              }));
          },
          Tp = (n) => {
            !n ||
              n.__previousElementSibling ||
              (_t('previousElementSibling', n),
              Object.defineProperty(n, 'previousElementSibling', {
                get: function () {
                  var e;
                  const t = null == (e = this['s-ol']) ? void 0 : e.parentNode.children,
                    o = t?.indexOf(this);
                  return t && o > -1 ? t[o - 1] : this.__previousElementSibling;
                },
              }));
          },
          zs = (n) => {
            !n ||
              n.__parentNode ||
              (_t('parentNode', n),
              Object.defineProperty(n, 'parentNode', {
                get: function () {
                  var e;
                  return (null == (e = this['s-ol']) ? void 0 : e.parentNode) || this.__parentNode;
                },
                set: function (e) {
                  this.__parentNode = e;
                },
              }));
          },
          Dp = ['children', 'nextElementSibling', 'previousElementSibling'],
          Ap = ['childNodes', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'textContent', 'parentNode'];
        function _t(n, e) {
          if (!globalThis.Node || !globalThis.Element) return;
          let t;
          (Dp.includes(n)
            ? (t = Object.getOwnPropertyDescriptor(Element.prototype, n))
            : Ap.includes(n) && (t = Object.getOwnPropertyDescriptor(Node.prototype, n)),
            t || (t = Object.getOwnPropertyDescriptor(e, n)),
            t && Object.defineProperty(e, '__' + n, t));
        }
        function qe(n, e) {
          if ('__' + e in n) {
            const t = n['__' + e];
            return 'function' != typeof t ? t : t.bind(n);
          }
          return 'function' != typeof n[e] ? n[e] : n[e].bind(n);
        }
        var zp = 0,
          It = (n, e = '') => {
            if (m.profile && performance.mark) {
              const t = `st:${n}:${e}:${zp++}`;
              return (performance.mark(t), () => performance.measure(`[Stencil] ${n}() <${e}>`, t));
            }
            return () => {};
          },
          cn = new WeakMap(),
          mr = (n, e, t) => {
            let o = jn.get(n);
            (_o && t ? ((o = o || new CSSStyleSheet()), 'string' == typeof o ? (o = e) : o.replaceSync(e)) : (o = e),
              jn.set(n, o));
          },
          gr = (n, e, t) => {
            var o;
            const i = Fn(e, t),
              r = jn.get(i);
            if (!m.attachStyles || !ce.document) return i;
            if (((n = 11 === n.nodeType ? n : ce.document), r))
              if ('string' == typeof r) {
                let s,
                  a = cn.get((n = n.head || n));
                if ((a || cn.set(n, (a = new Set())), !a.has(i))) {
                  if (m.hydrateClientSide && n.host && (s = n.querySelector(`[${ko}="${i}"]`))) s.innerHTML = r;
                  else {
                    ((s = ce.document.createElement('style')), (s.innerHTML = r));
                    const l =
                      null != (o = re.$nonce$)
                        ? o
                        : (function Cs(n) {
                            var e, t, o;
                            return null !=
                              (o =
                                null == (t = null == (e = n.head) ? void 0 : e.querySelector('meta[name="csp-nonce"]'))
                                  ? void 0
                                  : t.getAttribute('content'))
                              ? o
                              : void 0;
                          })(ce.document);
                    if (
                      (null != l && s.setAttribute('nonce', l),
                      (m.hydrateServerSide || m.hotModuleReplacement) &&
                        (2 & e.$flags$ || 128 & e.$flags$) &&
                        s.setAttribute(ko, i),
                      !(1 & e.$flags$))
                    )
                      if ('HEAD' === n.nodeName) {
                        const c = n.querySelectorAll('link[rel=preconnect]'),
                          d = c.length > 0 ? c[c.length - 1].nextSibling : n.querySelector('style');
                        n.insertBefore(s, d?.parentNode === n ? d : null);
                      } else if ('host' in n)
                        if (_o) {
                          const c = new CSSStyleSheet();
                          (c.replaceSync(r),
                            ir
                              ? n.adoptedStyleSheets.unshift(c)
                              : (n.adoptedStyleSheets = [c, ...n.adoptedStyleSheets]));
                        } else {
                          const c = n.querySelector('style');
                          c ? (c.innerHTML = r + c.innerHTML) : n.prepend(s);
                        }
                      else n.append(s);
                    1 & e.$flags$ && n.insertBefore(s, null);
                  }
                  (4 & e.$flags$ && (s.innerHTML += 'slot-fb{display:contents}slot-fb[hidden]{display:none}'),
                    a && a.add(i));
                }
              } else
                m.constructableCSS &&
                  !n.adoptedStyleSheets.includes(r) &&
                  (ir ? n.adoptedStyleSheets.push(r) : (n.adoptedStyleSheets = [...n.adoptedStyleSheets, r]));
            return i;
          },
          Fn = (n, e) => 'sc-' + (m.mode && e && 32 & n.$flags$ ? n.$tagName$ + '-' + e : n.$tagName$),
          Mp = (n) => n.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
          h = (n, e, ...t) => {
            let o = null,
              i = null,
              r = null,
              a = !1,
              s = !1;
            const l = [],
              c = (p) => {
                for (let f = 0; f < p.length; f++)
                  ((o = p[f]),
                    Array.isArray(o)
                      ? c(o)
                      : null != o &&
                        'boolean' != typeof o &&
                        ((a = 'function' != typeof n && !sr(o))
                          ? (o = String(o))
                          : m.isDev &&
                            'function' != typeof n &&
                            void 0 === o.$flags$ &&
                            yo(
                              "vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.",
                            ),
                        a && s ? (l[l.length - 1].$text$ += o) : l.push(a ? dn(null, o) : o),
                        (s = a)));
              };
            if (
              (c(t),
              e &&
                (m.isDev && 'input' === n && Fp(e),
                m.vdomKey && e.key && (i = e.key),
                m.slotRelocation && e.name && (r = e.name),
                m.vdomClass))
            ) {
              const p = e.className || e.class;
              p &&
                (e.class =
                  'object' != typeof p
                    ? p
                    : Object.keys(p)
                        .filter((f) => p[f])
                        .join(' '));
            }
            if (
              (m.isDev &&
                l.some(br) &&
                yo(
                  "The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.",
                ),
              m.vdomFunctional && 'function' == typeof n)
            )
              return n(null === e ? {} : e, l, Lp);
            const d = dn(n, null);
            return (
              (d.$attrs$ = e),
              l.length > 0 && (d.$children$ = l),
              m.vdomKey && (d.$key$ = i),
              m.slotRelocation && (d.$name$ = r),
              d
            );
          },
          dn = (n, e) => {
            const t = { $flags$: 0, $tag$: n, $text$: e, $elm$: null, $children$: null };
            return (
              m.vdomAttribute && (t.$attrs$ = null),
              m.vdomKey && (t.$key$ = null),
              m.slotRelocation && (t.$name$ = null),
              t
            );
          },
          me = {},
          br = (n) => n && n.$tag$ === me,
          Lp = { forEach: (n, e) => n.map(Ps).forEach(e), map: (n, e) => n.map(Ps).map(e).map(Rp) },
          Ps = (n) => ({
            vattrs: n.$attrs$,
            vchildren: n.$children$,
            vkey: n.$key$,
            vname: n.$name$,
            vtag: n.$tag$,
            vtext: n.$text$,
          }),
          Rp = (n) => {
            if ('function' == typeof n.vtag) {
              const t = { ...n.vattrs };
              return (n.vkey && (t.key = n.vkey), n.vname && (t.name = n.vname), h(n.vtag, t, ...(n.vchildren || [])));
            }
            const e = dn(n.vtag, n.vtext);
            return ((e.$attrs$ = n.vattrs), (e.$children$ = n.vchildren), (e.$key$ = n.vkey), (e.$name$ = n.vname), e);
          },
          Fp = (n) => {
            const e = Object.keys(n),
              t = e.indexOf('value');
            if (-1 === t) return;
            const o = e.indexOf('type'),
              i = e.indexOf('min'),
              r = e.indexOf('max'),
              a = e.indexOf('step');
            (t < o || t < i || t < r || t < a) &&
              On('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
          },
          vr = (n, e, t, o, i, r, a, s = []) => {
            let l, c, d, p;
            const f = i['s-sc'];
            if (1 === r.nodeType) {
              if (((l = r.getAttribute('c-id')), l && ((c = l.split('.')), c[0] === a || '0' === c[0]))) {
                ((d = Ms({
                  $flags$: 0,
                  $hostId$: c[0],
                  $nodeId$: c[1],
                  $depth$: c[2],
                  $index$: c[3],
                  $tag$: r.tagName.toLowerCase(),
                  $elm$: r,
                  $attrs$: { class: r.className || '' },
                })),
                  e.push(d),
                  r.removeAttribute('c-id'),
                  n.$children$ || (n.$children$ = []),
                  m.scoped && f && c[0] === a && ((r['s-si'] = f), (d.$attrs$.class += ' ' + f)));
                const b = d.$elm$.getAttribute('s-sn');
                ('string' == typeof b &&
                  ('slot-fb' === d.$tag$ && (Ls(b, c[2], d, r, n, e, t, o, s), m.scoped && f && r.classList.add(f)),
                  (d.$elm$['s-sn'] = b),
                  d.$elm$.removeAttribute('s-sn')),
                  void 0 !== d.$index$ && (n.$children$[d.$index$] = d),
                  (n = d),
                  o && '0' === d.$depth$ && (o[d.$index$] = d.$elm$));
              }
              if (r.shadowRoot)
                for (p = r.shadowRoot.childNodes.length - 1; p >= 0; p--)
                  vr(n, e, t, o, i, r.shadowRoot.childNodes[p], a, s);
              const g = r.__childNodes || r.childNodes;
              for (p = g.length - 1; p >= 0; p--) vr(n, e, t, o, i, g[p], a, s);
            } else if (8 === r.nodeType)
              ((c = r.nodeValue.split('.')),
                (c[1] === a || '0' === c[1]) &&
                  ((l = c[0]),
                  (d = Ms({
                    $hostId$: c[1],
                    $nodeId$: c[2],
                    $depth$: c[3],
                    $index$: c[4] || '0',
                    $elm$: r,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $tag$: null,
                    $text$: null,
                  })),
                  't' === l
                    ? ((d.$elm$ = Fs(r, 3)),
                      d.$elm$ &&
                        3 === d.$elm$.nodeType &&
                        ((d.$text$ = d.$elm$.textContent),
                        e.push(d),
                        r.remove(),
                        a === d.$hostId$ && (n.$children$ || (n.$children$ = []), (n.$children$[d.$index$] = d)),
                        o && '0' === d.$depth$ && (o[d.$index$] = d.$elm$)))
                    : 'c' === l
                      ? ((d.$elm$ = Fs(r, 8)), d.$elm$ && 8 === d.$elm$.nodeType && (e.push(d), r.remove()))
                      : d.$hostId$ === a &&
                        ('s' === l
                          ? Ls((r['s-sn'] = c[5] || ''), c[2], d, r, n, e, t, o, s)
                          : 'r' === l &&
                            (m.shadowDom && o
                              ? r.remove()
                              : m.slotRelocation && ((i['s-cr'] = r), (r['s-cn'] = !0))))));
            else if (n && 'style' === n.$tag$) {
              const g = dn(null, r.textContent);
              ((g.$elm$ = r), (g.$index$ = '0'), (n.$children$ = [g]));
            } else 3 === r.nodeType && !r.wholeText.trim() && !r['s-nr'] && r.remove();
            return n;
          },
          xr = (n, e) => {
            if (1 === n.nodeType) {
              const t = n[rn] || n.getAttribute(rn);
              t && e.set(t, n);
              let o = 0;
              if (n.shadowRoot) for (; o < n.shadowRoot.childNodes.length; o++) xr(n.shadowRoot.childNodes[o], e);
              const i = n.__childNodes || n.childNodes;
              for (o = 0; o < i.length; o++) xr(i[o], e);
            } else if (8 === n.nodeType) {
              const t = n.nodeValue.split('.');
              'o' === t[0] && (e.set(t[1] + '.' + t[2], n), (n.nodeValue = ''), (n['s-en'] = t[3]));
            }
          },
          Ms = (n) => ({
            $flags$: 0,
            $hostId$: null,
            $nodeId$: null,
            $depth$: null,
            $index$: '0',
            $elm$: null,
            $attrs$: null,
            $children$: null,
            $key$: null,
            $name$: null,
            $tag$: null,
            $text$: null,
            ...n,
          });
        function Ls(n, e, t, o, i, r, a, s, l) {
          ((o['s-sr'] = !0), (t.$name$ = n || null), (t.$tag$ = 'slot'));
          const c = i?.$elm$ ? i.$elm$['s-id'] || i.$elm$.getAttribute('s-id') : '';
          if (m.shadowDom && s && ce.document) {
            const d = (t.$elm$ = ce.document.createElement(t.$tag$));
            (t.$name$ && t.$elm$.setAttribute('name', n),
              i.$elm$.shadowRoot && c && c !== t.$hostId$
                ? qe(i.$elm$, 'insertBefore')(d, qe(i.$elm$, 'children')[0])
                : qe(qe(o, 'parentNode'), 'insertBefore')(d, o),
              Rs(l, e, n, o, t.$hostId$),
              o.remove(),
              '0' === t.$depth$ && (s[t.$index$] = t.$elm$));
          } else {
            const d = t.$elm$,
              p = c && c !== t.$hostId$ && i.$elm$.shadowRoot;
            (Rs(l, e, n, o, p ? c : t.$hostId$), Ds(o), p && i.$elm$.insertBefore(d, i.$elm$.children[0]));
          }
          (r.push(t), a.push(t), i.$children$ || (i.$children$ = []), (i.$children$[t.$index$] = t));
        }
        var Rs = (n, e, t, o, i) => {
            var r, a;
            let s = o.nextSibling;
            if (((n[e] = n[e] || []), s && (null == (r = s.nodeValue) || !r.startsWith('s.'))))
              do {
                (s &&
                  (((s.getAttribute && s.getAttribute('slot')) || s['s-sn']) === t ||
                    ('' === t &&
                      !s['s-sn'] &&
                      (!s.getAttribute || !s.getAttribute('slot')) &&
                      (8 === s.nodeType || 3 === s.nodeType))) &&
                  ((s['s-sn'] = t), n[e].push({ slot: o, node: s, hostId: i })),
                  (s = s?.nextSibling));
              } while (s && (null == (a = s.nodeValue) || !a.startsWith('s.')));
          },
          Fs = (n, e) => {
            let t = n;
            do {
              t = t.nextSibling;
            } while (t && (t.nodeType !== e || !t.nodeValue));
            return t;
          },
          Bn = '-shadowcsshost',
          Bs = '-shadowcssslotted',
          Ns = '-shadowcsscontext',
          yr = ')(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)',
          Vp = new RegExp('(' + Bn + yr, 'gim'),
          Wp = new RegExp('(' + Ns + yr, 'gim'),
          Up = new RegExp('(' + Bs + yr, 'gim'),
          qt = Bn + '-no-combinator',
          qp = /-shadowcsshost-no-combinator([^\s]*)/,
          Yp = [/::shadow/g, /::content/g],
          Gp = /__part-(\d+)__/g,
          Ao = /-shadowcsshost/gim,
          wr = (n) => {
            const e = $s(n);
            return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`, 'g');
          },
          Zp = wr('::slotted'),
          Xp = wr(':host'),
          Qp = wr(':host-context'),
          Jp = /\/\*\s*[\s\S]*?\*\//g,
          tu = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
          ou = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
          iu = /([{}])/g,
          ru = /(^.*?[^\\])??((:+)(.*)|$)/,
          zo = '%BLOCK%',
          Oo = (n, e) => {
            const t = lu(n);
            let o = 0;
            return t.escapedString.replace(ou, (...i) => {
              const r = i[2];
              let a = '',
                s = i[4],
                l = '';
              s && s.startsWith('{' + zo) && ((a = t.blocks[o++]), (s = s.substring(8)), (l = '{'));
              const d = e({ selector: r, content: a });
              return `${i[1]}${d.selector}${i[3]}${l}${d.content}${s}`;
            });
          },
          lu = (n) => {
            const e = n.split(iu),
              t = [],
              o = [];
            let i = 0,
              r = [];
            for (let s = 0; s < e.length; s++) {
              const l = e[s];
              ('}' === l && i--,
                i > 0 ? r.push(l) : (r.length > 0 && (o.push(r.join('')), t.push(zo), (r = [])), t.push(l)),
                '{' === l && i++);
            }
            return (r.length > 0 && (o.push(r.join('')), t.push(zo)), { escapedString: t.join(''), blocks: o });
          },
          Hs = (n, e, t) =>
            n.replace(e, (...o) => {
              if (o[2]) {
                const i = o[2].split(','),
                  r = [];
                for (let a = 0; a < i.length; a++) {
                  const s = i[a].trim();
                  if (!s) break;
                  r.push(t(qt, s, o[3]));
                }
                return r.join(',');
              }
              return qt + o[3];
            }),
          Vs = (n, e, t) => n + e.replace(Bn, '') + t,
          pu = (n, e, t) => (e.indexOf(Bn) > -1 ? Vs(n, e, t) : n + e + t + ', ' + e + ' ' + n + t),
          Ws = (n, e) => n.replace(ru, (t, o = '', i, r = '', a = '') => o + e + r + a),
          Us = (n, e, t, o, i) =>
            Oo(n, (r) => {
              let a = r.selector,
                s = r.content;
              return (
                '@' !== r.selector[0]
                  ? (a = ((n, e, t, o) =>
                      n
                        .split(',')
                        .map((i) =>
                          o && i.indexOf('.' + o) > -1
                            ? i.trim()
                            : ((n, e) =>
                                  !((n) => (
                                    (n = n.replace(/\[/g, '\\[').replace(/\]/g, '\\]')),
                                    new RegExp('^(' + n + ')([>\\s~+[.,{:][\\s\\S]*)?$', 'm')
                                  ))(e).test(n))(i, e)
                              ? ((n, e, t) => {
                                  const i = '.' + (e = e.replace(/\[is=([^\]]*)\]/g, (b, ...v) => v[0])),
                                    r = (b) => {
                                      let v = b.trim();
                                      if (!v) return '';
                                      if (b.indexOf(qt) > -1)
                                        v = ((n, e, t) => {
                                          if (((Ao.lastIndex = 0), Ao.test(n))) {
                                            const o = `.${t}`;
                                            return n.replace(qp, (i, r) => Ws(r, o)).replace(Ao, o + ' ');
                                          }
                                          return e + ' ' + n;
                                        })(b, e, t);
                                      else {
                                        const x = b.replace(Ao, '');
                                        x.length > 0 && (v = Ws(x, i));
                                      }
                                      return v;
                                    },
                                    a = ((n) => {
                                      const e = [];
                                      let t = 0;
                                      return {
                                        content: (n = (n = n.replace(
                                          /(\[\s*part~=\s*("[^"]*"|'[^']*')\s*\])/g,
                                          (r, a) => {
                                            const s = `__part-${t}__`;
                                            return (e.push(a), t++, s);
                                          },
                                        )).replace(/(\[[^\]]*\])/g, (r, a) => {
                                          const s = `__ph-${t}__`;
                                          return (e.push(a), t++, s);
                                        })).replace(/(:nth-[-\w]+)(\([^)]+\))/g, (r, a, s) => {
                                          const l = `__ph-${t}__`;
                                          return (e.push(s), t++, a + l);
                                        }),
                                        placeholders: e,
                                      };
                                    })(n);
                                  let c,
                                    s = '',
                                    l = 0;
                                  const d = /( |>|\+|~(?!=))(?=(?:[^()]*\([^()]*\))*[^()]*$)\s*/g;
                                  let f = !((n = a.content).indexOf(qt) > -1);
                                  for (; null !== (c = d.exec(n)); ) {
                                    const b = c[1],
                                      v = n.slice(l, c.index).trim();
                                    ((f = f || v.indexOf(qt) > -1), (s += `${f ? r(v) : v} ${b} `), (l = d.lastIndex));
                                  }
                                  const g = n.substring(l);
                                  return (
                                    (f = !g.match(Gp) && (f || g.indexOf(qt) > -1)),
                                    (s += f ? r(g) : g),
                                    ((n, e) =>
                                      (e = e.replace(/__part-(\d+)__/g, (t, o) => n[+o])).replace(
                                        /__ph-(\d+)__/g,
                                        (t, o) => n[+o],
                                      ))(a.placeholders, s)
                                  );
                                })(i, e, t).trim()
                              : i.trim(),
                        )
                        .join(', '))(r.selector, e, t, o))
                  : (r.selector.startsWith('@media') ||
                      r.selector.startsWith('@supports') ||
                      r.selector.startsWith('@page') ||
                      r.selector.startsWith('@document')) &&
                    (s = Us(r.content, e, t, o, i)),
                { selector: a.replace(/\s{2,}/g, ' ').trim(), content: s }
              );
            }),
          kr = (n, e) => n.replace(/-shadowcsshost-no-combinator/g, `.${e}`),
          wu = (n, e, t) => {
            const o = e + '-h',
              i = e + '-s',
              r = ((n) => n.match(tu) || [])(n);
            n = ((n) => n.replace(Jp, ''))(n);
            const a = [];
            if (t) {
              const l = (c) => {
                const d = `/*!@___${a.length}___*/`;
                return (a.push({ placeholder: d, comment: `/*!@${c.selector}*/` }), (c.selector = d + c.selector), c);
              };
              n = Oo(n, (c) =>
                '@' !== c.selector[0]
                  ? l(c)
                  : ((c.selector.startsWith('@media') ||
                      c.selector.startsWith('@supports') ||
                      c.selector.startsWith('@page') ||
                      c.selector.startsWith('@document')) &&
                      (c.content = Oo(c.content, l)),
                    c),
              );
            }
            const s = ((n, e, t, o, i) => {
              n = ((n) => {
                const e = [];
                return (
                  (n = (n = n.replace(/@supports\s+selector\s*\(\s*([^)]*)\s*\)/g, (t, o) => {
                    const i = `__supports_${e.length}__`;
                    return (e.push(o), `@supports selector(${i})`);
                  }))
                    .replace(Qp, `$1${Ns}`)
                    .replace(Xp, `$1${Bn}`)
                    .replace(Zp, `$1${Bs}`)),
                  e.forEach((t, o) => {
                    n = n.replace(`__supports_${o}__`, t);
                  }),
                  n
                );
              })(n);
              const r = ((n, e) => {
                const t = '.' + e + ' > ',
                  o = [];
                return (
                  (n = n.replace(Up, (...i) => {
                    if (i[2]) {
                      const r = i[2].trim(),
                        s = t + r + i[3];
                      let l = '';
                      for (let p = i[4] - 1; p >= 0; p--) {
                        const f = i[5][p];
                        if ('}' === f || ',' === f) break;
                        l = f + l;
                      }
                      const c = (l + s).trim(),
                        d = `${l.trimEnd()}${s.trim()}`.trim();
                      return (c !== d && o.push({ orgSelector: c, updatedSelector: `${d}, ${c}` }), s);
                    }
                    return qt + i[3];
                  })),
                  { selectors: o, cssText: n }
                );
              })((n = ((n) => Hs(n, Wp, pu))((n = ((n) => Hs(n, Vp, Vs))(n)))), o);
              return (
                (n = ((n) => Yp.reduce((e, t) => e.replace(t, ' '), n))((n = r.cssText))),
                e && (n = Us(n, e, t, o, i)),
                {
                  cssText: (n = (n = kr(n, t)).replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ')).trim(),
                  slottedSelectors: r.selectors.map((a) => ({
                    orgSelector: kr(a.orgSelector, t),
                    updatedSelector: kr(a.updatedSelector, t),
                  })),
                }
              );
            })(n, e, o, i, t);
            return (
              (n = [s.cssText, ...r].join('\n')),
              t &&
                a.forEach(({ placeholder: l, comment: c }) => {
                  n = n.replace(l, c);
                }),
              s.slottedSelectors.forEach((l) => {
                const c = new RegExp($s(l.orgSelector), 'g');
                n = n.replace(c, l.updatedSelector);
              }),
              (n = ((n) => {
                const e = /([^\s,{][^,{]*?)::part\(\s*([^)]+?)\s*\)((?:[:.][^,{]*)*)/g;
                return Oo(n, (t) => {
                  if ('@' === t.selector[0]) return t;
                  const o = t.selector.split(',').map((i) => {
                    const r = [i.trim()];
                    let a;
                    for (; null !== (a = e.exec(i)); ) {
                      const s = a[1].trimEnd(),
                        l = a[2].trim().split(/\s+/),
                        c = a[3] || '',
                        d = l
                          .flatMap((f) => (t.selector.includes(`[part~="${f}"]`) ? [] : [`[part~="${f}"]`]))
                          .join(''),
                        p = `${s} ${d}${c}`;
                      d && p !== i.trim() && r.push(p);
                    }
                    return r.join(', ');
                  });
                  return ((t.selector = o.join(', ')), t);
                });
              })(n))
            );
          },
          jo = (n, e, t) => {
            if ((m.hydrateClientSide || m.hydrateServerSide) && 'string' == typeof n && n.startsWith(tr))
              return (function mp(n) {
                return 'string' == typeof n && n.startsWith(tr) ? dp.fromLocalValue(JSON.parse(atob(n.slice(11)))) : n;
              })(n);
            if (
              'string' == typeof n &&
              (16 & e || 8 & e) &&
              ((n.startsWith('{') && n.endsWith('}')) || (n.startsWith('[') && n.endsWith(']')))
            )
              try {
                return JSON.parse(n);
              } catch {}
            return null == n || sr(n)
              ? n
              : m.propBoolean && 4 & e
                ? ((m.formAssociated && t && 'string' == typeof n) || 'false' !== n) && ('' === n || !!n)
                : m.propNumber && 2 & e
                  ? 'string' == typeof n
                    ? parseFloat(n)
                    : 'number' == typeof n
                      ? n
                      : NaN
                  : m.propString && 1 & e
                    ? String(n)
                    : n;
          },
          S = (n, e, t) => {
            const o = ((n) => {
              var e;
              return m.lazyLoad ? (null == (e = Fe(n)) ? void 0 : e.$hostElement$) : n;
            })(n);
            return {
              emit: (i) => (
                m.isDev &&
                  !o.isConnected &&
                  On(`The "${e}" event was emitted, but the dispatcher node is no longer connected to the dom.`),
                _r(o, e, { bubbles: !!(4 & t), composed: !!(2 & t), cancelable: !!(1 & t), detail: i })
              ),
            };
          },
          _r = (n, e, t) => {
            const o = re.ce(e, t);
            return (n.dispatchEvent(o), o);
          },
          Gs = (n, e, t, o, i, r, a) => {
            if (t === o) return;
            let s = us(n, e),
              l = e.toLowerCase();
            if (m.vdomClass && 'class' === e) {
              const c = n.classList,
                d = Ks(t);
              let p = Ks(o);
              if (m.hydrateClientSide && (n['s-si'] || n['s-sc']) && a) {
                const f = n['s-sc'] || n['s-si'];
                (p.push(f),
                  d.forEach((g) => {
                    g.startsWith(f) && p.push(g);
                  }),
                  (p = [...new Set(p)].filter((g) => g)),
                  c.add(...p));
              } else
                (c.remove(...d.filter((f) => f && !p.includes(f))), c.add(...p.filter((f) => f && !d.includes(f))));
            } else if (m.vdomStyle && 'style' === e) {
              if (m.updatable)
                for (const c in t)
                  (!o || null == o[c]) &&
                    (!m.hydrateServerSide && c.includes('-') ? n.style.removeProperty(c) : (n.style[c] = ''));
              for (const c in o)
                (!t || o[c] !== t[c]) &&
                  (!m.hydrateServerSide && c.includes('-') ? n.style.setProperty(c, o[c]) : (n.style[c] = o[c]));
            } else if (!m.vdomKey || 'key' !== e)
              if (m.vdomRef && 'ref' === e) o && o(n);
              else if (!m.vdomListener || (m.lazyLoad ? s : n.__lookupSetter__(e)) || 'o' !== e[0] || 'n' !== e[1]) {
                if (m.vdomPropOrAttr) {
                  const c = sr(o);
                  if ((s || (c && null !== o)) && !i)
                    try {
                      if (n.tagName.includes('-')) n[e] !== o && (n[e] = o);
                      else {
                        const p = o ?? '';
                        'list' === e
                          ? (s = !1)
                          : (null == t || n[e] != p) &&
                            ('function' == typeof n.__lookupSetter__(e) ? (n[e] = p) : n.setAttribute(e, p));
                      }
                    } catch {}
                  let d = !1;
                  (m.vdomXlink && l !== (l = l.replace(/^xlink\:?/, '')) && ((e = l), (d = !0)),
                    null == o || !1 === o
                      ? (!1 !== o || '' === n.getAttribute(e)) &&
                        (m.vdomXlink && d ? n.removeAttributeNS(ws, e) : n.removeAttribute(e))
                      : (!s || 4 & r || i) &&
                        !c &&
                        1 === n.nodeType &&
                        ((o = !0 === o ? '' : o),
                        m.vdomXlink && d ? n.setAttributeNS(ws, e, o) : n.setAttribute(e, o)));
                }
              } else if (((e = '-' === e[2] ? e.slice(3) : us(ce, l) ? l.slice(2) : l[2] + e.slice(3)), t || o)) {
                const c = e.endsWith(Zs);
                ((e = e.replace($u, '')), t && re.rel(n, e, t, c), o && re.ael(n, e, o, c));
              }
          },
          Cu = /\s/,
          Ks = (n) => (
            'object' == typeof n && n && 'baseVal' in n && (n = n.baseVal),
            n && 'string' == typeof n ? n.split(Cu) : []
          ),
          Zs = 'Capture',
          $u = new RegExp(Zs + '$'),
          Ir = (n, e, t, o) => {
            const i = 11 === e.$elm$.nodeType && e.$elm$.host ? e.$elm$.host : e.$elm$,
              r = (n && n.$attrs$) || {},
              a = e.$attrs$ || {};
            if (m.updatable) for (const s of Xs(Object.keys(r))) s in a || Gs(i, s, r[s], void 0, t, e.$flags$, o);
            for (const s of Xs(Object.keys(a))) Gs(i, s, r[s], a[s], t, e.$flags$, o);
          };
        function Xs(n) {
          return n.includes('ref') ? [...n.filter((e) => 'ref' !== e), 'ref'] : n;
        }
        var Po,
          Mo,
          Et,
          Nn = !1,
          Lo = !1,
          Ro = !1,
          tt = !1,
          Fo = (n, e, t) => {
            var o;
            const i = e.$children$[t];
            let a,
              s,
              l,
              r = 0;
            if (
              (m.slotRelocation && !Nn && ((Ro = !0), 'slot' === i.$tag$ && (i.$flags$ |= i.$children$ ? 2 : 1)),
              m.isDev &&
                i.$elm$ &&
                yo(
                  `The JSX ${null !== i.$text$ ? `"${i.$text$}" text` : `"${i.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`,
                ),
              m.vdomText && null !== i.$text$)
            )
              a = i.$elm$ = ce.document.createTextNode(i.$text$);
            else if (m.slotRelocation && 1 & i.$flags$)
              ((a = i.$elm$ = m.isDebug || m.hydrateServerSide ? Eu(i) : ce.document.createTextNode('')),
                m.vdomAttribute && Ir(null, i, tt));
            else {
              if ((m.svg && !tt && (tt = 'svg' === i.$tag$), !ce.document))
                throw new Error(
                  "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.",
                );
              if (
                ((a = i.$elm$ =
                  m.svg
                    ? ce.document.createElementNS(
                        tt ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                        !Nn && m.slotRelocation && 2 & i.$flags$ ? 'slot-fb' : i.$tag$,
                      )
                    : ce.document.createElement(!Nn && m.slotRelocation && 2 & i.$flags$ ? 'slot-fb' : i.$tag$)),
                m.svg && tt && 'foreignObject' === i.$tag$ && (tt = !1),
                m.vdomAttribute && Ir(null, i, tt),
                (m.scoped || m.hydrateServerSide) &&
                  ((n) => null != n && void 0 !== n)(Po) &&
                  a['s-si'] !== Po &&
                  a.classList.add((a['s-si'] = Po)),
                i.$children$)
              )
                for (r = 0; r < i.$children$.length; ++r) ((s = Fo(n, i, r)), s && a.appendChild(s));
              m.svg && ('svg' === i.$tag$ ? (tt = !1) : 'foreignObject' === a.tagName && (tt = !0));
            }
            return (
              (a['s-hn'] = Et),
              m.slotRelocation &&
                3 & i.$flags$ &&
                ((a['s-sr'] = !0),
                (a['s-cr'] = Mo),
                (a['s-sn'] = i.$name$ || ''),
                (a['s-rf'] = null == (o = i.$attrs$) ? void 0 : o.ref),
                Ds(a),
                (l = n && n.$children$ && n.$children$[t]),
                l && l.$tag$ === i.$tag$ && n.$elm$ && (m.experimentalSlotFixes ? Qs(n.$elm$) : Hn(n.$elm$, !1)),
                (m.scoped || m.hydrateServerSide) && ol(Mo, a, e.$elm$, n?.$elm$)),
              a
            );
          },
          Qs = (n) => {
            re.$flags$ |= 1;
            const e = n.closest(Et.toLowerCase());
            if (null != e) {
              const t = Array.from(e.__childNodes || e.childNodes).find((i) => i['s-cr']),
                o = Array.from(n.__childNodes || n.childNodes);
              for (const i of t ? o.reverse() : o)
                null != i['s-sh'] && (ut(e, i, t ?? null), (i['s-sh'] = void 0), (Ro = !0));
            }
            re.$flags$ &= -2;
          },
          Hn = (n, e) => {
            re.$flags$ |= 1;
            const t = Array.from(n.__childNodes || n.childNodes);
            if (n['s-sr'] && m.experimentalSlotFixes) {
              let o = n;
              for (; (o = o.nextSibling); ) o && o['s-sn'] === n['s-sn'] && o['s-sh'] === Et && t.push(o);
            }
            for (let o = t.length - 1; o >= 0; o--) {
              const i = t[o];
              (i['s-hn'] !== Et &&
                i['s-ol'] &&
                (ut(Vn(i).parentNode, i, Vn(i)),
                i['s-ol'].remove(),
                (i['s-ol'] = void 0),
                (i['s-sh'] = void 0),
                (Ro = !0)),
                e && Hn(i, e));
            }
            re.$flags$ &= -2;
          },
          Js = (n, e, t, o, i, r) => {
            let s,
              a = (m.slotRelocation && n['s-cr'] && n['s-cr'].parentNode) || n;
            for (m.shadowDom && a.shadowRoot && a.tagName === Et && (a = a.shadowRoot); i <= r; ++i)
              o[i] && ((s = Fo(null, t, i)), s && ((o[i].$elm$ = s), ut(a, s, m.slotRelocation ? Vn(e) : e)));
          },
          el = (n, e, t) => {
            for (let o = e; o <= t; ++o) {
              const i = n[o];
              if (i) {
                const r = i.$elm$;
                (nl(i), r && (m.slotRelocation && ((Lo = !0), r['s-ol'] ? r['s-ol'].remove() : Hn(r, !0)), r.remove()));
              }
            }
          },
          Bo = (n, e, t = !1) =>
            n.$tag$ === e.$tag$ &&
            (m.slotRelocation && 'slot' === n.$tag$
              ? n.$name$ === e.$name$
              : m.vdomKey && !t
                ? n.$key$ === e.$key$
                : (t && !n.$key$ && e.$key$ && (n.$key$ = e.$key$), !0)),
          Vn = (n) => (n && n['s-ol']) || n,
          pn = (n, e, t = !1) => {
            const o = (e.$elm$ = n.$elm$),
              i = n.$children$,
              r = e.$children$,
              a = e.$tag$,
              s = e.$text$;
            let l;
            m.vdomText && null !== s
              ? m.vdomText && m.slotRelocation && (l = o['s-cr'])
                ? (l.parentNode.textContent = s)
                : m.vdomText && n.$text$ !== s && (o.data = s)
              : (m.svg && (tt = 'svg' === a || ('foreignObject' !== a && tt)),
                (m.vdomAttribute || m.reflect) &&
                  (m.slot &&
                    'slot' === a &&
                    !Nn &&
                    m.experimentalSlotFixes &&
                    n.$name$ !== e.$name$ &&
                    ((e.$elm$['s-sn'] = e.$name$ || ''), Qs(e.$elm$.parentElement)),
                  Ir(n, e, tt, t)),
                m.updatable && null !== i && null !== r
                  ? ((n, e, t, o, i = !1) => {
                      let v,
                        x,
                        r = 0,
                        a = 0,
                        s = 0,
                        l = 0,
                        c = e.length - 1,
                        d = e[0],
                        p = e[c],
                        f = o.length - 1,
                        g = o[0],
                        b = o[f];
                      for (; r <= c && a <= f; )
                        if (null == d) d = e[++r];
                        else if (null == p) p = e[--c];
                        else if (null == g) g = o[++a];
                        else if (null == b) b = o[--f];
                        else if (Bo(d, g, i)) (pn(d, g, i), (d = e[++r]), (g = o[++a]));
                        else if (Bo(p, b, i)) (pn(p, b, i), (p = e[--c]), (b = o[--f]));
                        else if (Bo(d, b, i))
                          (m.slotRelocation && ('slot' === d.$tag$ || 'slot' === b.$tag$) && Hn(d.$elm$.parentNode, !1),
                            pn(d, b, i),
                            ut(n, d.$elm$, p.$elm$.nextSibling),
                            (d = e[++r]),
                            (b = o[--f]));
                        else if (Bo(p, g, i))
                          (m.slotRelocation && ('slot' === d.$tag$ || 'slot' === b.$tag$) && Hn(p.$elm$.parentNode, !1),
                            pn(p, g, i),
                            ut(n, p.$elm$, d.$elm$),
                            (p = e[--c]),
                            (g = o[++a]));
                        else {
                          if (((s = -1), m.vdomKey))
                            for (l = r; l <= c; ++l)
                              if (e[l] && null !== e[l].$key$ && e[l].$key$ === g.$key$) {
                                s = l;
                                break;
                              }
                          (m.vdomKey && s >= 0
                            ? ((x = e[s]),
                              x.$tag$ !== g.$tag$
                                ? (v = Fo(e && e[a], t, s))
                                : (pn(x, g, i), (e[s] = void 0), (v = x.$elm$)),
                              (g = o[++a]))
                            : ((v = Fo(e && e[a], t, a)), (g = o[++a])),
                            v &&
                              (m.slotRelocation
                                ? ut(Vn(d.$elm$).parentNode, v, Vn(d.$elm$))
                                : ut(d.$elm$.parentNode, v, d.$elm$)));
                        }
                      r > c
                        ? Js(n, null == o[f + 1] ? null : o[f + 1].$elm$, t, o, a, f)
                        : m.updatable && a > f && el(e, r, c);
                    })(o, i, e, r, t)
                  : null !== r
                    ? (m.updatable && m.vdomText && null !== n.$text$ && (o.textContent = ''),
                      Js(o, null, e, r, 0, r.length - 1))
                    : !t && m.updatable && null !== i
                      ? el(i, 0, i.length - 1)
                      : m.hydrateClientSide && t && m.updatable && null !== i && null === r && (e.$children$ = i),
                m.svg && tt && 'svg' === a && (tt = !1));
          },
          Tt = [],
          tl = (n) => {
            let e, t, o;
            const i = n.__childNodes || n.childNodes;
            for (const r of i) {
              if (r['s-sr'] && (e = r['s-cr']) && e.parentNode) {
                t = e.parentNode.__childNodes || e.parentNode.childNodes;
                const a = r['s-sn'];
                for (o = t.length - 1; o >= 0; o--)
                  if (
                    ((e = t[o]),
                    !(
                      e['s-cn'] ||
                      e['s-nr'] ||
                      e['s-hn'] === r['s-hn'] ||
                      (m.experimentalSlotFixes && e['s-sh'] && e['s-sh'] === r['s-hn'])
                    ))
                  )
                    if (Ts(e, a)) {
                      let s = Tt.find((l) => l.$nodeToRelocate$ === e);
                      ((Lo = !0),
                        (e['s-sn'] = e['s-sn'] || a),
                        s
                          ? ((s.$nodeToRelocate$['s-sh'] = r['s-hn']), (s.$slotRefNode$ = r))
                          : ((e['s-sh'] = r['s-hn']), Tt.push({ $slotRefNode$: r, $nodeToRelocate$: e })),
                        e['s-sr'] &&
                          Tt.map((l) => {
                            Ts(l.$nodeToRelocate$, e['s-sn']) &&
                              ((s = Tt.find((c) => c.$nodeToRelocate$ === e)),
                              s && !l.$slotRefNode$ && (l.$slotRefNode$ = s.$slotRefNode$));
                          }));
                    } else Tt.some((s) => s.$nodeToRelocate$ === e) || Tt.push({ $nodeToRelocate$: e });
              }
              1 === r.nodeType && tl(r);
            }
          },
          nl = (n) => {
            m.vdomRef && (n.$attrs$ && n.$attrs$.ref && n.$attrs$.ref(null), n.$children$ && n.$children$.map(nl));
          },
          ut = (n, e, t) => {
            if (m.scoped && 'string' == typeof e['s-sn'] && e['s-sr'] && e['s-cr'])
              ol(e['s-cr'], e, n, e.parentElement);
            else if (m.experimentalSlotFixes && 'string' == typeof e['s-sn']) {
              (11 !== n.getRootNode().nodeType && zs(e), n.insertBefore(e, t));
              const { slotNode: o } = dr(e);
              return (o && Do(o), e);
            }
            return m.experimentalSlotFixes && n.__insertBefore ? n.__insertBefore(e, t) : n?.insertBefore(e, t);
          };
        function ol(n, e, t, o) {
          var i, r;
          let a;
          if (
            n &&
            'string' == typeof e['s-sn'] &&
            e['s-sr'] &&
            n.parentNode &&
            n.parentNode['s-sc'] &&
            (a = e['s-si'] || n.parentNode['s-sc'])
          ) {
            const s = e['s-sn'],
              l = e['s-hn'];
            if (
              (null == (i = t.classList) || i.add(a + '-s'), o && null != (r = o.classList) && r.contains(a + '-s'))
            ) {
              let c = (o.__childNodes || o.childNodes)[0],
                d = !1;
              for (; c; ) {
                if (c['s-sn'] !== s && c['s-hn'] === l && c['s-sr']) {
                  d = !0;
                  break;
                }
                c = c.nextSibling;
              }
              d || o.classList.remove(a + '-s');
            }
          }
        }
        var Cr = (n, e, t = !1) => {
            var o, i, r, a, s;
            const l = n.$hostElement$,
              c = n.$cmpMeta$,
              d = n.$vnode$ || dn(null, null),
              f = br(e) ? e : h(null, null, e);
            if (((Et = l.tagName), m.isDev && Array.isArray(e) && e.some(br)))
              throw new Error(
                `The <Host> must be the single root component.\nLooks like the render() function of "${Et.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `,
              );
            if (
              (m.reflect &&
                c.$attrsToReflect$ &&
                ((f.$attrs$ = f.$attrs$ || {}), c.$attrsToReflect$.map(([g, b]) => (f.$attrs$[b] = l[g]))),
              t && f.$attrs$)
            )
              for (const g of Object.keys(f.$attrs$))
                l.hasAttribute(g) && !['key', 'ref', 'style', 'class'].includes(g) && (f.$attrs$[g] = l[g]);
            if (
              ((f.$tag$ = null),
              (f.$flags$ |= 4),
              (n.$vnode$ = f),
              (f.$elm$ = d.$elm$ = (m.shadowDom && l.shadowRoot) || l),
              (m.scoped || m.shadowDom) && (Po = l['s-sc']),
              (Nn = Rt && !!(1 & c.$flags$) && !(128 & c.$flags$)),
              m.slotRelocation && ((Mo = l['s-cr']), (Lo = !1)),
              pn(d, f, t),
              m.slotRelocation)
            ) {
              if (((re.$flags$ |= 1), Ro)) {
                tl(f.$elm$);
                for (const g of Tt) {
                  const b = g.$nodeToRelocate$;
                  if (!b['s-ol'] && ce.document) {
                    const v = m.isDebug || m.hydrateServerSide ? Tu(b) : ce.document.createTextNode('');
                    ((v['s-nr'] = b), ut(b.parentNode, (b['s-ol'] = v), b));
                  }
                }
                for (const g of Tt) {
                  const b = g.$nodeToRelocate$,
                    v = g.$slotRefNode$;
                  if (v) {
                    const x = v.parentNode;
                    let k = v.nextSibling;
                    if (!m.hydrateServerSide && (!m.experimentalSlotFixes || (k && 1 === k.nodeType))) {
                      let T = null == (o = b['s-ol']) ? void 0 : o.previousSibling;
                      for (; T; ) {
                        let E = null != (i = T['s-nr']) ? i : null;
                        if (E && E['s-sn'] === b['s-sn'] && x === (E.__parentNode || E.parentNode)) {
                          for (E = E.nextSibling; E === b || E?.['s-sr']; ) E = E?.nextSibling;
                          if (!E || !E['s-nr']) {
                            k = E;
                            break;
                          }
                        }
                        T = T.previousSibling;
                      }
                    }
                    (((!k && x !== (b.__parentNode || b.parentNode)) || (b.__nextSibling || b.nextSibling) !== k) &&
                      b !== k &&
                      (!m.experimentalSlotFixes &&
                        !b['s-hn'] &&
                        b['s-ol'] &&
                        (b['s-hn'] = b['s-ol'].parentNode.nodeName),
                      ut(x, b, k),
                      1 === b.nodeType && 'SLOT-FB' !== b.tagName && (b.hidden = null != (r = b['s-ih']) && r)),
                      b && 'function' == typeof v['s-rf'] && v['s-rf'](v));
                  } else 1 === b.nodeType && (t && (b['s-ih'] = null != (a = b.hidden) && a), (b.hidden = !0));
                }
              }
              (Lo && Eo(f.$elm$), (re.$flags$ &= -2), (Tt.length = 0));
            }
            if (m.experimentalScopedSlotChanges && 2 & c.$flags$) {
              const g = f.$elm$.__childNodes || f.$elm$.childNodes;
              for (const b of g)
                b['s-hn'] !== Et &&
                  !b['s-sh'] &&
                  (t && null == b['s-ih'] && (b['s-ih'] = null != (s = b.hidden) && s), (b.hidden = !0));
            }
            Mo = void 0;
          },
          Eu = (n) => {
            var e;
            return null == (e = ce.document)
              ? void 0
              : e.createComment(`<slot${n.$name$ ? ' name="' + n.$name$ + '"' : ''}> (host=${Et.toLowerCase()})`);
          },
          Tu = (n) => {
            var e;
            return null == (e = ce.document)
              ? void 0
              : e.createComment(
                  'org-location for ' + (n.localName ? `<${n.localName}> (host=${n['s-hn']})` : `[${n.textContent}]`),
                );
          },
          il = (n, e) => {
            if (m.asyncLoading && e && !n.$onRenderResolve$ && e['s-p']) {
              const t = e['s-p'].push(
                new Promise(
                  (o) =>
                    (n.$onRenderResolve$ = () => {
                      (e['s-p'].splice(t - 1, 1), o());
                    }),
                ),
              );
            }
          },
          No = (n, e) => {
            if ((m.taskQueue && m.updatable && (n.$flags$ |= 16), m.asyncLoading && 4 & n.$flags$))
              return void (n.$flags$ |= 512);
            il(n, n.$ancestorComponent$);
            const t = () => Du(n, e);
            if (!e) return m.taskQueue ? Ke(t) : t();
            queueMicrotask(() => {
              t();
            });
          },
          Du = (n, e) => {
            const t = n.$hostElement$,
              o = It('scheduleUpdate', n.$cmpMeta$.$tagName$),
              i = m.lazyLoad ? n.$lazyInstance$ : t;
            if (!i)
              throw new Error(
                `Can't render component <${t.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
              );
            let r;
            return (
              e
                ? (m.lazyLoad &&
                    m.hostListener &&
                    ((n.$flags$ |= 256),
                    n.$queuedListeners$ &&
                      (n.$queuedListeners$.map(([a, s]) => Dt(i, a, s, t)), (n.$queuedListeners$ = void 0))),
                  un(t, 'componentWillLoad'),
                  (r = Dt(i, 'componentWillLoad', void 0, t)))
                : (un(t, 'componentWillUpdate'), (r = Dt(i, 'componentWillUpdate', void 0, t))),
              un(t, 'componentWillRender'),
              (r = rl(r, () => Dt(i, 'componentWillRender', void 0, t))),
              o(),
              rl(r, () => zu(n, i, e))
            );
          },
          rl = (n, e) =>
            Au(n)
              ? n.then(e).catch((t) => {
                  (console.error(t), e());
                })
              : e(),
          Au = (n) => n instanceof Promise || (n && n.then && 'function' == typeof n.then),
          zu = (function () {
            var n = (0, y.A)(function* (e, t, o) {
              var i;
              const r = e.$hostElement$,
                a = It('update', e.$cmpMeta$.$tagName$),
                s = r['s-rc'];
              m.style &&
                o &&
                ((n) => {
                  const e = n.$cmpMeta$,
                    t = n.$hostElement$,
                    o = e.$flags$,
                    i = It('attachStyles', e.$tagName$),
                    r = gr(m.shadowDom && Rt && t.shadowRoot ? t.shadowRoot : t.getRootNode(), e, n.$modeName$);
                  ((m.shadowDom || m.scoped) &&
                    m.cssAnnotations &&
                    10 & o &&
                    ((t['s-sc'] = r), t.classList.add(r + '-h')),
                    i());
                })(e);
              const l = It('render', e.$cmpMeta$.$tagName$);
              if (
                (m.isDev && (e.$flags$ |= 1024),
                m.hydrateServerSide ? yield al(e, t, r, o) : al(e, t, r, o),
                m.isDev &&
                  ((e.$renderCount$ = void 0 === e.$renderCount$ ? 1 : e.$renderCount$ + 1), (e.$flags$ &= -1025)),
                m.hydrateServerSide)
              )
                try {
                  (ll(r),
                    o && (1 & e.$cmpMeta$.$flags$ ? (r['s-en'] = '') : 2 & e.$cmpMeta$.$flags$ && (r['s-en'] = 'c')));
                } catch (c) {
                  St(c, r);
                }
              if ((m.asyncLoading && s && (s.map((c) => c()), (r['s-rc'] = void 0)), l(), a(), m.asyncLoading)) {
                const c = null != (i = r['s-p']) ? i : [],
                  d = () => sl(e);
                0 === c.length ? d() : (Promise.all(c).then(d), (e.$flags$ |= 4), (c.length = 0));
              } else sl(e);
            });
            return function (t, o, i) {
              return n.apply(this, arguments);
            };
          })(),
          al = (n, e, t, o) => {
            const i = !!m.allRenderFn,
              r = !!m.lazyLoad,
              a = !!m.taskQueue,
              s = !!m.updatable;
            try {
              if (
                ((e = (i || e.render) && e.render()),
                s && a && (n.$flags$ &= -17),
                (s || r) && (n.$flags$ |= 2),
                m.hasRenderFn || m.reflect)
              )
                if (m.vdomRender || m.reflect) {
                  if (m.hydrateServerSide) return Promise.resolve(e).then((l) => Cr(n, l, o));
                  Cr(n, e, o);
                } else 1 & n.$cmpMeta$.$flags$ ? (t.shadowRoot.textContent = e) : (t.textContent = e);
            } catch (l) {
              St(l, n.$hostElement$);
            }
            return null;
          },
          sl = (n) => {
            const e = n.$cmpMeta$.$tagName$,
              t = n.$hostElement$,
              o = It('postUpdate', e),
              i = m.lazyLoad ? n.$lazyInstance$ : t,
              r = n.$ancestorComponent$;
            (m.isDev && (n.$flags$ |= 1024),
              Dt(i, 'componentDidRender', void 0, t),
              m.isDev && (n.$flags$ &= -1025),
              un(t, 'componentDidRender'),
              64 & n.$flags$
                ? (m.isDev && (n.$flags$ |= 1024),
                  Dt(i, 'componentDidUpdate', void 0, t),
                  m.isDev && (n.$flags$ &= -1025),
                  un(t, 'componentDidUpdate'),
                  o())
                : ((n.$flags$ |= 64),
                  m.asyncLoading && m.cssAnnotations && Ou(t),
                  m.isDev && (n.$flags$ |= 2048),
                  Dt(i, 'componentDidLoad', void 0, t),
                  m.isDev && (n.$flags$ &= -2049),
                  un(t, 'componentDidLoad'),
                  o(),
                  m.asyncLoading && (n.$onReadyResolve$(t), r || Sr(e))),
              m.method && m.lazyLoad && n.$onInstanceResolve$(t),
              m.asyncLoading &&
                (n.$onRenderResolve$ && (n.$onRenderResolve$(), (n.$onRenderResolve$ = void 0)),
                512 & n.$flags$ && So(() => No(n, !1)),
                (n.$flags$ &= -517)));
          },
          Sr = (n) => {
            var e;
            (m.asyncQueue && (re.$flags$ |= 2),
              So(() => _r(ce, 'appload', { detail: { namespace: 'app' } })),
              m.hydrateClientSide && null != (e = re.$orgLocNodes$) && e.size && re.$orgLocNodes$.clear(),
              m.profile &&
                performance.measure &&
                performance.measure(`[Stencil] app initial load (by ${n})`, 'st:app:start'));
          },
          Dt = (n, e, t, o) => {
            if (n && n[e])
              try {
                return n[e](t);
              } catch (i) {
                St(i, o);
              }
          },
          un = (n, e) => {
            m.lifecycleDOMEvents && _r(n, 'stencil_' + e, { bubbles: !0, composed: !0, detail: { namespace: 'app' } });
          },
          Ou = (n) => {
            var e, t;
            return m.hydratedClass
              ? n.classList.add(null != (e = m.hydratedSelectorName) ? e : 'hydrated')
              : m.hydratedAttribute
                ? n.setAttribute(null != (t = m.hydratedSelectorName) ? t : 'hydrated', '')
                : void 0;
          },
          ll = (n) => {
            const e = n.children;
            if (null != e)
              for (let t = 0, o = e.length; t < o; t++) {
                const i = e[t];
                ('function' == typeof i.connectedCallback && i.connectedCallback(), ll(i));
              }
          },
          cl = (n, e) => Fe(n).$instanceValues$.get(e),
          Ho = (n, e, t, o) => {
            const i = Fe(n);
            if (!i) return;
            if (m.lazyLoad && !i)
              throw new Error(
                `Couldn't find host element for "${o.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`,
              );
            const r = m.lazyLoad ? i.$hostElement$ : n,
              a = i.$instanceValues$.get(e),
              s = i.$flags$,
              l = m.lazyLoad ? i.$lazyInstance$ : r;
            t = jo(t, o.$members$[e][0], m.formAssociated && !!(64 & o.$flags$));
            const c = Number.isNaN(a) && Number.isNaN(t);
            if (
              (!m.lazyLoad || !(8 & s) || void 0 === a) &&
              t !== a &&
              !c &&
              (i.$instanceValues$.set(e, t),
              m.isDev &&
                (1024 & i.$flags$
                  ? On(
                      `The state/prop "${e}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
                      '\nElement',
                      r,
                      '\nNew value',
                      t,
                      '\nOld value',
                      a,
                    )
                  : 2048 & i.$flags$ &&
                    On(
                      `The state/prop "${e}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
                      '\nElement',
                      r,
                      '\nNew value',
                      t,
                      '\nOld value',
                      a,
                    )),
              !m.lazyLoad || l)
            ) {
              if (m.watchCallback && o.$watchers$ && 128 & s) {
                const p = o.$watchers$[e];
                p &&
                  p.map((f) => {
                    try {
                      l[f](t, a, e);
                    } catch (g) {
                      St(g, r);
                    }
                  });
              }
              if (m.updatable && 2 == (18 & s)) {
                if (l.componentShouldUpdate && !1 === l.componentShouldUpdate(t, a, e)) return;
                No(i, !1);
              }
            }
          },
          Er = (n, e, t) => {
            var o, i;
            const r = n.prototype;
            if (m.isTesting) {
              if (r.__stencilAugmented) return;
              r.__stencilAugmented = !0;
            }
            if (
              (m.formAssociated &&
                64 & e.$flags$ &&
                1 & t &&
                rp.forEach((a) => {
                  const s = r[a];
                  Object.defineProperty(r, a, {
                    value(...l) {
                      var c;
                      const d = Fe(this),
                        p = m.lazyLoad ? d?.$lazyInstance$ : this;
                      if (p) {
                        const f = m.lazyLoad ? p[a] : s;
                        'function' == typeof f && f.call(p, ...l);
                      } else
                        null == (c = d?.$onReadyPromise$) ||
                          c.then((f) => {
                            const g = f[a];
                            'function' == typeof g && g.call(f, ...l);
                          });
                    },
                  });
                }),
              (m.member && e.$members$) || (m.watchCallback && (e.$watchers$ || n.watchers)))
            ) {
              m.watchCallback && n.watchers && !e.$watchers$ && (e.$watchers$ = n.watchers);
              const a = Object.entries(null != (o = e.$members$) ? o : {});
              if (
                (a.map(([s, [l]]) => {
                  if ((m.prop || m.state) && (31 & l || ((!m.lazyLoad || 2 & t) && 32 & l))) {
                    const { get: c, set: d } = Object.getOwnPropertyDescriptor(r, s) || {};
                    (c && (e.$members$[s][0] |= 2048),
                      d && (e.$members$[s][0] |= 4096),
                      (1 & t || !c) &&
                        Object.defineProperty(r, s, {
                          get() {
                            if (m.lazyLoad) {
                              if (!(2048 & e.$members$[s][0])) return cl(this, s);
                              const p = Fe(this),
                                f = p ? p.$lazyInstance$ : r;
                              return f ? f[s] : void 0;
                            }
                            if (!m.lazyLoad) return c ? c.apply(this) : cl(this, s);
                          },
                          configurable: !0,
                          enumerable: !0,
                        }),
                      Object.defineProperty(r, s, {
                        set(p) {
                          const f = Fe(this);
                          if (f) {
                            if (
                              (m.isDev &&
                                !(1 & t) &&
                                !(4096 & e.$members$[s][0]) &&
                                0 === (f && 8 & f.$flags$) &&
                                !!(31 & l) &&
                                !(1024 & l) &&
                                On(
                                  `@Prop() "${s}" on <${e.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`,
                                ),
                              d)
                            ) {
                              const g = 32 & l ? this[s] : f.$hostElement$[s];
                              return (
                                typeof g > 'u' && f.$instanceValues$.get(s)
                                  ? (p = f.$instanceValues$.get(s))
                                  : !f.$instanceValues$.get(s) && g && f.$instanceValues$.set(s, g),
                                d.apply(this, [jo(p, l, m.formAssociated && !!(64 & e.$flags$))]),
                                void Ho(this, s, (p = 32 & l ? this[s] : f.$hostElement$[s]), e)
                              );
                            }
                            if (!m.lazyLoad) return void Ho(this, s, p, e);
                            if (m.lazyLoad) {
                              if (!(1 & t && 4096 & e.$members$[s][0]))
                                return (
                                  Ho(this, s, p, e),
                                  void (
                                    1 & t &&
                                    !f.$lazyInstance$ &&
                                    f.$onReadyPromise$.then(() => {
                                      4096 & e.$members$[s][0] &&
                                        f.$lazyInstance$[s] !== f.$instanceValues$.get(s) &&
                                        (f.$lazyInstance$[s] = p);
                                    })
                                  )
                                );
                              const g = () => {
                                const b = f.$lazyInstance$[s];
                                (!f.$instanceValues$.get(s) && b && f.$instanceValues$.set(s, b),
                                  (f.$lazyInstance$[s] = jo(p, l, m.formAssociated && !!(64 & e.$flags$))),
                                  Ho(this, s, f.$lazyInstance$[s], e));
                              };
                              f.$lazyInstance$ ? g() : f.$onReadyPromise$.then(() => g());
                            }
                          }
                        },
                      }));
                  } else
                    m.lazyLoad &&
                      m.method &&
                      1 & t &&
                      64 & l &&
                      Object.defineProperty(r, s, {
                        value(...c) {
                          var d;
                          const p = Fe(this);
                          return null == (d = p?.$onInstancePromise$)
                            ? void 0
                            : d.then(() => {
                                var f;
                                return null == (f = p.$lazyInstance$) ? void 0 : f[s](...c);
                              });
                        },
                      });
                }),
                m.observeAttribute && (!m.lazyLoad || 1 & t))
              ) {
                const s = new Map();
                ((r.attributeChangedCallback = function (l, c, d) {
                  re.jmp(() => {
                    var p;
                    const f = s.get(l);
                    if (this.hasOwnProperty(f) && m.lazyLoad) ((d = this[f]), delete this[f]);
                    else {
                      if (r.hasOwnProperty(f) && 'number' == typeof this[f] && this[f] == d) return;
                      if (null == f) {
                        const b = Fe(this),
                          v = b?.$flags$;
                        if (b && v && !(8 & v) && 128 & v && d !== c) {
                          const k = m.lazyLoad ? b.$lazyInstance$ : m.lazyLoad ? b.$hostElement$ : this,
                            w = null == (p = e.$watchers$) ? void 0 : p[l];
                          w?.forEach(($) => {
                            null != k[$] && k[$].call(k, d, c, l);
                          });
                        }
                        return;
                      }
                    }
                    const g = Object.getOwnPropertyDescriptor(r, f);
                    (d = (null !== d || 'boolean' != typeof this[f]) && d) !== this[f] &&
                      (!g.get || g.set) &&
                      (this[f] = d);
                  });
                }),
                  (n.observedAttributes = Array.from(
                    new Set([
                      ...Object.keys(null != (i = e.$watchers$) ? i : {}),
                      ...a
                        .filter(([l, c]) => 15 & c[0])
                        .map(([l, c]) => {
                          var d;
                          const p = c[1] || l;
                          return (
                            s.set(p, l),
                            m.reflect && 512 & c[0] && (null == (d = e.$attrsToReflect$) || d.push([l, p])),
                            p
                          );
                        }),
                    ]),
                  )));
              }
            }
            return n;
          },
          Tr = (function () {
            var n = (0, y.A)(function* (e, t, o, i) {
              let r;
              if (!(32 & t.$flags$)) {
                if (((t.$flags$ |= 32), m.lazyLoad && o.$lazyBundleId$)) {
                  const c = ((n, e, t) => {
                    const o = n.$tagName$.replace(/-/g, '_'),
                      i = n.$lazyBundleId$;
                    if (m.isDev && 'string' != typeof i)
                      return void yo(
                        `Trying to lazily load component <${n.$tagName$}> with style mode "${e.$modeName$}", but it does not exist.`,
                      );
                    if (!i) return;
                    const r = !m.hotModuleReplacement && fs.get(i);
                    return r
                      ? r[o]
                      : U(137)(`./${i}.entry.js${m.hotModuleReplacement && t ? '?s-hmr=' + t : ''}`).then(
                          (a) => (m.hotModuleReplacement || fs.set(i, a), a[o]),
                          (a) => {
                            St(a, e.$hostElement$);
                          },
                        );
                  })(o, t, i);
                  if (c && 'then' in c) {
                    const p = ((n, e) =>
                      m.profile && performance.mark
                        ? (0 === performance.getEntriesByName(n, 'mark').length && performance.mark(n),
                          () => {
                            0 === performance.getEntriesByName(e, 'measure').length && performance.measure(e, n);
                          })
                        : () => {})(
                      `st:load:${o.$tagName$}:${t.$modeName$}`,
                      `[Stencil] Load module for <${o.$tagName$}>`,
                    );
                    ((r = yield c), p());
                  } else r = c;
                  if (!r) throw new Error(`Constructor for "${o.$tagName$}#${t.$modeName$}" was not found`);
                  m.member &&
                    !r.isProxied &&
                    (m.watchCallback && (o.$watchers$ = r.watchers), Er(r, o, 2), (r.isProxied = !0));
                  const d = It('createInstance', o.$tagName$);
                  m.member && (t.$flags$ |= 8);
                  try {
                    new r(t);
                  } catch (p) {
                    St(p, e);
                  }
                  (m.member && (t.$flags$ &= -9), m.watchCallback && (t.$flags$ |= 128), d(), Dr(t.$lazyInstance$, e));
                } else ((r = e.constructor), customElements.whenDefined(e.localName).then(() => (t.$flags$ |= 128)));
                if (m.style && r && r.style) {
                  let c;
                  'string' == typeof r.style
                    ? (c = r.style)
                    : m.mode &&
                      'string' != typeof r.style &&
                      ((t.$modeName$ = ((n) => ms.map((e) => e(n)).find((e) => !!e))(e)),
                      t.$modeName$ && (c = r.style[t.$modeName$]),
                      m.hydrateServerSide && t.$modeName$ && e.setAttribute('s-mode', t.$modeName$));
                  const d = Fn(o, t.$modeName$);
                  if (!jn.has(d)) {
                    const p = It('registerStyles', o.$tagName$);
                    (m.hydrateServerSide && m.shadowDom && !!(128 & o.$flags$) && (c = wu(c, d, !0)),
                      mr(d, c, !!(1 & o.$flags$)),
                      p());
                  }
                }
              }
              const a = t.$ancestorComponent$,
                s = () => No(t, !0);
              m.asyncLoading && a && a['s-rc'] ? a['s-rc'].push(s) : s();
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          Dr = (n, e) => {
            m.lazyLoad && Dt(n, 'connectedCallback', void 0, e);
          },
          ju = (n) => {
            if (!ce.document) return;
            const e = (n['s-cr'] = ce.document.createComment(m.isDebug ? `content-ref (host=${n.localName})` : ''));
            ((e['s-cn'] = !0), ut(n, e, n.firstChild));
          },
          Ar = (n, e) => {
            m.lazyLoad && Dt(n, 'disconnectedCallback', void 0, e || n);
          },
          pl = (function () {
            var n = (0, y.A)(function* (e) {
              if (!(1 & re.$flags$)) {
                const t = Fe(e);
                (m.hostListener && t?.$rmListeners$ && (t.$rmListeners$.map((o) => o()), (t.$rmListeners$ = void 0)),
                  m.lazyLoad
                    ? t?.$lazyInstance$
                      ? Ar(t.$lazyInstance$, e)
                      : t?.$onReadyPromise$ && t.$onReadyPromise$.then(() => Ar(t.$lazyInstance$, e))
                    : Ar(e));
              }
              (cn.has(e) && cn.delete(e), e.shadowRoot && cn.has(e.shadowRoot) && cn.delete(e.shadowRoot));
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          ge = (n, e) => {
            const t = { $flags$: e[0], $tagName$: e[1] };
            (m.member && (t.$members$ = e[2]),
              m.hostListener && (t.$listeners$ = e[3]),
              m.watchCallback && (t.$watchers$ = n.$watchers$),
              m.reflect && (t.$attrsToReflect$ = []),
              m.shadowDom && !Rt && 1 & t.$flags$ && (t.$flags$ |= 8),
              !(1 & t.$flags$) &&
                256 & t.$flags$ &&
                (m.experimentalSlotFixes
                  ? ((n) => {
                      (pr(n), ur(n), yp(n), xp(n), Ip(n), wp(n), kp(n), _p(n), hr(n), fr(n), vp(n));
                    })(n.prototype)
                  : (m.slotChildNodesFix && fr(n.prototype),
                    m.cloneNodeFix && pr(n.prototype),
                    m.appendChildSlotFix && ur(n.prototype),
                    m.scopedSlotTextContentFix && 2 & t.$flags$ && hr(n.prototype))),
              m.hydrateClientSide &&
                m.shadowDom &&
                (() => {
                  if (!ce.document) return;
                  const n = ce.document.querySelectorAll(`[${ko}]`);
                  let e = 0;
                  for (; e < n.length; e++) mr(n[e].getAttribute(ko), Mp(n[e].innerHTML), !0);
                })());
            const o = n.prototype.connectedCallback,
              i = n.prototype.disconnectedCallback;
            return (
              Object.assign(n.prototype, {
                __hasHostListenerAttached: !1,
                __registerHost() {
                  ((n, e) => {
                    const t = { $flags$: 0, $hostElement$: n, $cmpMeta$: e, $instanceValues$: new Map() };
                    (m.isDev && (t.$renderCount$ = 0),
                      m.method &&
                        m.lazyLoad &&
                        (t.$onInstancePromise$ = new Promise((i) => (t.$onInstanceResolve$ = i))),
                      m.asyncLoading &&
                        ((t.$onReadyPromise$ = new Promise((i) => (t.$onReadyResolve$ = i))),
                        (n['s-p'] = []),
                        (n['s-rc'] = [])));
                    const o = t;
                    ((n.__stencil__getHostRef = () => o),
                      !m.lazyLoad && m.modernPropertyDecls && (m.state || m.prop) && ds(n, t));
                  })(this, t);
                },
                connectedCallback() {
                  if (!this.__hasHostListenerAttached) {
                    const r = Fe(this);
                    if (!r) return;
                    (Vo(this, r, t.$listeners$, !1), (this.__hasHostListenerAttached = !0));
                  }
                  (((n) => {
                    if (!(1 & re.$flags$)) {
                      const e = Fe(n);
                      if (!e) return;
                      const t = e.$cmpMeta$,
                        o = It('connectedCallback', t.$tagName$);
                      if ((m.hostListenerTargetParent && Vo(n, e, t.$listeners$, !0), 1 & e.$flags$))
                        (Vo(n, e, t.$listeners$, !1),
                          e?.$lazyInstance$
                            ? Dr(e.$lazyInstance$, n)
                            : e?.$onReadyPromise$ && e.$onReadyPromise$.then(() => Dr(e.$lazyInstance$, n)));
                      else {
                        let i;
                        if (((e.$flags$ |= 1), m.hydrateClientSide && ((i = n.getAttribute(rn)), i))) {
                          if (m.shadowDom && Rt && 1 & t.$flags$) {
                            const r = m.mode ? gr(n.shadowRoot, t, n.getAttribute('s-mode')) : gr(n.shadowRoot, t);
                            n.classList.remove(r + '-h', r + '-s');
                          } else if (m.scoped && 2 & t.$flags$) {
                            const r = Fn(t, m.mode ? n.getAttribute('s-mode') : void 0);
                            n['s-sc'] = r;
                          }
                          ((n, e, t, o) => {
                            var i, r, a;
                            const s = It('hydrateClient', e),
                              l = n.shadowRoot,
                              c = [],
                              d = [],
                              p = [],
                              f = m.shadowDom && l ? [] : null,
                              g = dn(e, null);
                            let v;
                            if (
                              ((g.$elm$ = n),
                              Object.entries((null == (i = o.$cmpMeta$) ? void 0 : i.$members$) || {}).forEach(
                                ([K, [le, oe]]) => {
                                  var Be, st;
                                  if (!(31 & le)) return;
                                  const Pt = n.getAttribute(oe || K);
                                  if (null !== Pt) {
                                    const gt = jo(
                                      Pt,
                                      le,
                                      m.formAssociated && !!(64 & (null == (Be = o.$cmpMeta$) ? void 0 : Be.$flags$)),
                                    );
                                    null == (st = o?.$instanceValues$) || st.set(K, gt);
                                  }
                                },
                              ),
                              m.scoped)
                            ) {
                              const K = o.$cmpMeta$;
                              K && 10 & K.$flags$ && n['s-sc']
                                ? ((v = n['s-sc']), n.classList.add(v + '-h'))
                                : n['s-sc'] && delete n['s-sc'];
                            }
                            (ce.document &&
                              (!re.$orgLocNodes$ || !re.$orgLocNodes$.size) &&
                              xr(ce.document.body, (re.$orgLocNodes$ = new Map())),
                              (n[rn] = t),
                              n.removeAttribute(rn),
                              (o.$vnode$ = vr(g, c, d, f, n, n, t, p)));
                            let x = 0;
                            const k = c.length;
                            let w;
                            for (; x < k; x++) {
                              w = c[x];
                              const K = w.$hostId$ + '.' + w.$nodeId$,
                                le = re.$orgLocNodes$.get(K),
                                oe = w.$elm$;
                              if (l) {
                                if (
                                  null != (r = w.$tag$) &&
                                  r.toString().includes('-') &&
                                  'slot-fb' !== w.$tag$ &&
                                  !w.$elm$.shadowRoot
                                ) {
                                  const Be = Fe(w.$elm$);
                                  if (Be) {
                                    const st = Fn(Be.$cmpMeta$, m.mode ? w.$elm$.getAttribute('s-mode') : void 0),
                                      Qe = ce.document.querySelector(`style[sty-id="${st}"]`);
                                    Qe && n.shadowRoot.append(Qe.cloneNode(!0));
                                  }
                                }
                              } else ((oe['s-hn'] = e.toUpperCase()), 'slot' === w.$tag$ && (oe['s-cr'] = n['s-cr']));
                              ('slot' === w.$tag$ &&
                                ((w.$name$ = w.$elm$['s-sn'] || w.$elm$.name || null),
                                w.$children$
                                  ? ((w.$flags$ |= 2),
                                    w.$elm$.childNodes.length ||
                                      w.$children$.forEach((Be) => {
                                        w.$elm$.appendChild(Be.$elm$);
                                      }))
                                  : (w.$flags$ |= 1)),
                                le &&
                                  le.isConnected &&
                                  (le.parentElement.shadowRoot &&
                                    '' === le['s-en'] &&
                                    le.parentNode.insertBefore(oe, le.nextSibling),
                                  le.parentNode.removeChild(le),
                                  l || (oe['s-oo'] = parseInt(w.$nodeId$))),
                                le && !le['s-id'] && re.$orgLocNodes$.delete(K));
                            }
                            const $ = [],
                              T = p.length;
                            let F,
                              ne,
                              xe,
                              X,
                              E = 0;
                            for (; E < T; E++)
                              if (((F = p[E]), F && F.length))
                                for (xe = F.length, ne = 0; ne < xe; ne++) {
                                  if (
                                    ((X = F[ne]),
                                    $[X.hostId] || ($[X.hostId] = re.$orgLocNodes$.get(X.hostId)),
                                    !$[X.hostId])
                                  )
                                    continue;
                                  const K = $[X.hostId];
                                  (K.shadowRoot && X.node.parentElement !== K && K.appendChild(X.node),
                                    (!K.shadowRoot || !l) &&
                                      (X.slot['s-cr'] ||
                                        ((X.slot['s-cr'] = K['s-cr']),
                                        (X.slot['s-cr'] =
                                          !X.slot['s-cr'] && K.shadowRoot ? K : (K.__childNodes || K.childNodes)[0])),
                                      To(X.node, X.slot, !1, X.node['s-oo']),
                                      null != (a = X.node.parentElement) &&
                                        a.shadowRoot &&
                                        X.node.getAttribute &&
                                        X.node.getAttribute('slot') &&
                                        X.node.removeAttribute('slot'),
                                      m.experimentalSlotFixes && Cp(X.node)));
                                }
                            if (
                              (m.scoped &&
                                v &&
                                d.length &&
                                d.forEach((K) => {
                                  K.$elm$.parentElement.classList.add(v + '-s');
                                }),
                              m.shadowDom && l)
                            ) {
                              let K = 0;
                              const le = f.length;
                              if (le) {
                                for (; K < le; K++) {
                                  const oe = f[K];
                                  oe && l.appendChild(oe);
                                }
                                Array.from(n.childNodes).forEach((oe) => {
                                  'string' != typeof oe['s-en'] &&
                                    'string' != typeof oe['s-sn'] &&
                                    (1 === oe.nodeType && oe.slot && oe.hidden
                                      ? oe.removeAttribute('hidden')
                                      : ((8 === oe.nodeType && !oe.nodeValue) ||
                                          (3 === oe.nodeType && !oe.wholeText.trim())) &&
                                        oe.parentNode.removeChild(oe));
                                });
                              }
                            }
                            ((o.$hostElement$ = n), s());
                          })(n, t.$tagName$, i, e);
                        }
                        if (
                          (m.slotRelocation &&
                            !i &&
                            (m.hydrateServerSide || ((m.slot || m.shadowDom) && 12 & t.$flags$)) &&
                            ju(n),
                          m.asyncLoading)
                        ) {
                          let r = n;
                          for (; (r = r.parentNode || r.host); )
                            if (
                              (m.hydrateClientSide && 1 === r.nodeType && r.hasAttribute('s-id') && r['s-p']) ||
                              r['s-p']
                            ) {
                              il(e, (e.$ancestorComponent$ = r));
                              break;
                            }
                        }
                        (m.prop &&
                          !m.hydrateServerSide &&
                          t.$members$ &&
                          Object.entries(t.$members$).map(([r, [a]]) => {
                            if (31 & a && n.hasOwnProperty(r)) {
                              const s = n[r];
                              (delete n[r], (n[r] = s));
                            }
                          }),
                          m.initializeNextTick ? So(() => Tr(n, e, t)) : Tr(n, e, t));
                      }
                      o();
                    }
                  })(this),
                    o && o.call(this));
                },
                disconnectedCallback() {
                  (pl(this), i && i.call(this));
                },
                __attachShadow() {
                  if (Rt)
                    if (this.shadowRoot) {
                      if ('open' !== this.shadowRoot.mode)
                        throw new Error(
                          `Unable to re-use existing shadow root for ${t.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`,
                        );
                    } else Es.call(this, t);
                  else this.shadowRoot = this;
                },
              }),
              (n.is = t.$tagName$),
              Er(n, t, 3)
            );
          },
          Vo = (n, e, t, o) => {
            m.hostListener &&
              t &&
              ce.document &&
              (m.hostListenerTargetParent && (t = t.filter(o ? ([i]) => 32 & i : ([i]) => !(32 & i))),
              t.map(([i, r, a]) => {
                const s = m.hostListenerTarget ? Ru(ce.document, n, i) : n,
                  l = Lu(e, a),
                  c = Fu(i);
                (re.ael(s, r, l, c), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => re.rel(s, r, l, c)));
              }));
          },
          Lu = (n, e) => (t) => {
            var o;
            try {
              m.lazyLoad
                ? 256 & n.$flags$
                  ? null == (o = n.$lazyInstance$) || o[e](t)
                  : (n.$queuedListeners$ = n.$queuedListeners$ || []).push([e, t])
                : n.$hostElement$[e](t);
            } catch (i) {
              St(i, n.$hostElement$);
            }
          },
          Ru = (n, e, t) =>
            m.hostListenerTargetDocument && 4 & t
              ? n
              : m.hostListenerTargetWindow && 8 & t
                ? ce
                : m.hostListenerTargetBody && 16 & t
                  ? n.body
                  : m.hostListenerTargetParent && 32 & t && e.parentElement
                    ? e.parentElement
                    : e,
          Fu = (n) => (ap ? { passive: !!(1 & n), capture: !!(2 & n) } : !!(2 & n)),
          I = U(605),
          V = U(486);
        const fl = 'ion-content',
          ml = '.ion-content-scroll-host',
          gl = `${fl}, ${ml}`,
          Ct = (n) => 'ION-CONTENT' === n.tagName,
          Wo = (n) => n.closest(gl),
          jr = (n) => {
            if (Ct(n)) {
              const t = n.scrollY;
              return ((n.scrollY = !1), t);
            }
            return (n.style.setProperty('overflow', 'hidden'), !0);
          },
          xl = (function () {
            var n = (0, y.A)(function* (e, t, o, i, r, a) {
              var s;
              if (e) return e.attachViewToDom(t, o, r, i);
              if (!(a || 'string' == typeof o || o instanceof HTMLElement))
                throw new Error('framework delegate is missing');
              const l =
                'string' == typeof o
                  ? null === (s = t.ownerDocument) || void 0 === s
                    ? void 0
                    : s.createElement(o)
                  : o;
              return (
                i && i.forEach((c) => l.classList.add(c)),
                r && Object.assign(l, r),
                t.appendChild(l),
                yield new Promise((c) => (0, I.c)(l, c)),
                l
              );
            });
            return function (t, o, i, r, a, s) {
              return n.apply(this, arguments);
            };
          })(),
          yl = (n, e) => {
            if (e) {
              if (n) return n.removeViewFromDom(e.parentElement, e);
              e.remove();
            }
            return Promise.resolve();
          },
          Pr = () => {
            let n, e;
            return {
              attachViewToDom: (function () {
                var i = (0, y.A)(function* (r, a, s = {}, l = []) {
                  var c, d;
                  let p;
                  if (((n = r), a)) {
                    const g =
                      'string' == typeof a
                        ? null === (c = n.ownerDocument) || void 0 === c
                          ? void 0
                          : c.createElement(a)
                        : a;
                    (l.forEach((b) => g.classList.add(b)),
                      Object.assign(g, s),
                      n.appendChild(g),
                      (p = g),
                      yield new Promise((b) => (0, I.c)(g, b)));
                  } else if (
                    n.children.length > 0 &&
                    ('ION-MODAL' === n.tagName || 'ION-POPOVER' === n.tagName) &&
                    !(p = n.children[0]).classList.contains('ion-delegate-host')
                  ) {
                    const b = null === (d = n.ownerDocument) || void 0 === d ? void 0 : d.createElement('div');
                    (b.classList.add('ion-delegate-host'),
                      l.forEach((v) => b.classList.add(v)),
                      b.append(...n.children),
                      n.appendChild(b),
                      (p = b));
                  }
                  const f = document.querySelector('ion-app') || document.body;
                  return (
                    (e = document.createComment('ionic teleport')),
                    n.parentNode.insertBefore(e, n),
                    f.appendChild(n),
                    p ?? n
                  );
                });
                return function (a, s) {
                  return i.apply(this, arguments);
                };
              })(),
              removeViewFromDom: () => (n && e && (e.parentNode.insertBefore(n, e), e.remove()), Promise.resolve()),
            };
          },
          Uo = () => {
            let n;
            return {
              lock: (function () {
                var t = (0, y.A)(function* () {
                  const o = n;
                  let i;
                  return ((n = new Promise((r) => (i = r))), void 0 !== o && (yield o), i);
                });
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            };
          };
        var He = U(241);
        const Mr = () => {
            if (void 0 !== He.w) return He.w.Capacitor;
          },
          Yt = (n, e) => ('string' == typeof n && ((e = n), (n = void 0)), ((n) => kl(n))(n).includes(e)),
          kl = (n = window) => {
            if (typeof n > 'u') return [];
            n.Ionic = n.Ionic || {};
            let e = n.Ionic.platforms;
            return (
              null == e &&
                ((e = n.Ionic.platforms = Wu(n)),
                e.forEach((t) => n.document.documentElement.classList.add(`plt-${t}`))),
              e
            );
          },
          Wu = (n) => {
            const e = V.c.get('platform');
            return Object.keys(Sl).filter((t) => {
              const o = e?.[t];
              return 'function' == typeof o ? o(n) : Sl[t](n);
            });
          },
          Lr = (n) => !!(Gt(n, /iPad/i) || (Gt(n, /Macintosh/i) && qo(n))),
          _l = (n) => Gt(n, /android|sink/i),
          qo = (n) => eh(n, '(any-pointer:coarse)'),
          Il = (n) => Cl(n) || $l(n),
          Cl = (n) => !!(n.cordova || n.phonegap || n.PhoneGap),
          $l = (n) => {
            const e = n.Capacitor;
            return !!(e?.isNative || (e?.isNativePlatform && e.isNativePlatform()));
          },
          Gt = (n, e) => e.test(n.navigator.userAgent),
          eh = (n, e) => {
            var t;
            return null === (t = n.matchMedia) || void 0 === t ? void 0 : t.call(n, e).matches;
          },
          Sl = {
            ipad: Lr,
            iphone: (n) => Gt(n, /iPhone/i),
            ios: (n) => Gt(n, /iPhone|iPod/i) || Lr(n),
            android: _l,
            phablet: (n) => {
              const e = n.innerWidth,
                t = n.innerHeight,
                o = Math.min(e, t),
                i = Math.max(e, t);
              return o > 390 && o < 520 && i > 620 && i < 800;
            },
            tablet: (n) => {
              const e = n.innerWidth,
                t = n.innerHeight,
                o = Math.min(e, t),
                i = Math.max(e, t);
              return Lr(n) || ((n) => _l(n) && !Gt(n, /mobile/i))(n) || (o > 460 && o < 820 && i > 780 && i < 1400);
            },
            cordova: Cl,
            capacitor: $l,
            electron: (n) => Gt(n, /electron/i),
            pwa: (n) => {
              var e;
              return !!(
                (null !== (e = n.matchMedia) && void 0 !== e && e.call(n, '(display-mode: standalone)').matches) ||
                n.navigator.standalone
              );
            },
            mobile: qo,
            mobileweb: (n) => qo(n) && !Il(n),
            desktop: (n) => !qo(n),
            hybrid: Il,
          };
        let hn;
        const W = (n) =>
            (n &&
              ((n) => {
                var e;
                return null == (e = Fe(n)) ? void 0 : e.$modeName$;
              })(n)) ||
            hn,
          th = (n = {}) => {
            if (typeof window > 'u') return;
            const e = window.document,
              t = window,
              o = (t.Ionic = t.Ionic || {}),
              i = Object.assign(
                Object.assign(
                  Object.assign(Object.assign(Object.assign({}, (0, V.b)(t)), { persistConfig: !1 }), o.config),
                  (0, V.d)(t),
                ),
                n,
              );
            (V.c.reset(i),
              V.c.getBoolean('persistConfig') && (0, V.s)(t, i),
              kl(t),
              (o.config = V.c),
              (o.mode = hn = V.c.get('mode', e.documentElement.getAttribute('mode') || (Yt(t, 'ios') ? 'ios' : 'md'))),
              V.c.set('mode', hn),
              e.documentElement.setAttribute('mode', hn),
              e.documentElement.classList.add(hn),
              V.c.getBoolean('_testing') && V.c.set('animated', !1));
            const r = (s) => {
                var l;
                return null === (l = s.tagName) || void 0 === l ? void 0 : l.startsWith('ION-');
              },
              a = (s) => ['ios', 'md'].includes(s);
            ms.push((s) => {
              for (; s; ) {
                const l = s.mode || s.getAttribute('mode');
                if (l) {
                  if (a(l)) return l;
                  r(s) && (0, V.p)('Invalid ionic mode: "' + l + '", expected: "ios" or "md"');
                }
                s = s.parentElement;
              }
              return hn;
            });
          };
        var El = U(580);
        const Wn =
            '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
          Rr = (n, e) => {
            const t = n.querySelector(Wn);
            Dl(t, e ?? n);
          },
          Tl = (n, e) => {
            const t = Array.from(n.querySelectorAll(Wn));
            Dl(t.length > 0 ? t[t.length - 1] : null, e ?? n);
          },
          Dl = (n, e) => {
            let t = n;
            const o = n?.shadowRoot;
            if ((o && (t = o.querySelector(Wn) || n), t)) {
              const i = t.closest('ion-radio-group');
              i ? i.setFocus() : (0, I.h)(t);
            } else e.focus();
          };
        let Fr = 0,
          nh = 0;
        const Yo = new WeakMap(),
          Go = (n) => ({
            create: (e) => ih(n, e),
            dismiss: (e, t, o) => lh(document, e, t, n, o),
            getTop: () =>
              (0, y.A)(function* () {
                return Un(document, n);
              })(),
          }),
          Al = Go('ion-action-sheet'),
          zl = Go('ion-modal'),
          Ol = Go('ion-popover'),
          Ko = (n) => {
            typeof document < 'u' && sh(document);
            const e = Fr++;
            n.overlayIndex = e;
          },
          Zo = (n) => (n.hasAttribute('id') || (n.id = 'ion-overlay-' + ++nh), n.id),
          ih = (n, e) =>
            typeof window < 'u' && typeof window.customElements < 'u'
              ? window.customElements.whenDefined(n).then(() => {
                  const t = document.createElement(n);
                  return (
                    t.classList.add('overlay-hidden'),
                    Object.assign(t, Object.assign(Object.assign({}, e), { hasController: !0 })),
                    Ml(document).appendChild(t),
                    new Promise((o) => (0, I.c)(t, o))
                  );
                })
              : Promise.resolve(),
          jl = (n, e) => {
            let t = n;
            const o = n?.shadowRoot;
            (o && (t = o.querySelector(Wn) || n), t ? (0, I.h)(t) : e.focus());
          },
          sh = (n) => {
            0 === Fr &&
              ((Fr = 1),
              n.addEventListener(
                'focus',
                (e) => {
                  ((n, e) => {
                    const t = Un(e, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover'),
                      o = n.target;
                    t &&
                      o &&
                      !t.classList.contains(Yn) &&
                      (t.shadowRoot
                        ? (() => {
                            if (t.contains(o)) t.lastFocus = o;
                            else if ('ION-TOAST' === o.tagName) jl(t.lastFocus, t);
                            else {
                              const a = t.lastFocus;
                              (Rr(t), a === e.activeElement && Tl(t), (t.lastFocus = e.activeElement));
                            }
                          })()
                        : (() => {
                            if (t === o) t.lastFocus = void 0;
                            else if ('ION-TOAST' === o.tagName) jl(t.lastFocus, t);
                            else {
                              const a = (0, I.g)(t);
                              if (!a.contains(o)) return;
                              const s = a.querySelector('.ion-overlay-wrapper');
                              if (!s) return;
                              if (s.contains(o) || o === a.querySelector('ion-backdrop')) t.lastFocus = o;
                              else {
                                const l = t.lastFocus;
                                (Rr(s, t), l === e.activeElement && Tl(s, t), (t.lastFocus = e.activeElement));
                              }
                            }
                          })());
                  })(e, n);
                },
                !0,
              ),
              n.addEventListener('ionBackButton', (e) => {
                const t = Un(n);
                t?.backdropDismiss &&
                  e.detail.register(100, () => {
                    t.dismiss(void 0, Kt);
                  });
              }),
              (V.c.get('experimentalCloseWatcher', !1) && void 0 !== He.w && 'CloseWatcher' in He.w) ||
                n.addEventListener('keydown', (e) => {
                  if ('Escape' === e.key) {
                    const t = Un(n);
                    t?.backdropDismiss && t.dismiss(void 0, Kt);
                  }
                }));
          },
          lh = (n, e, t, o, i) => {
            const r = Un(n, o, i);
            return r ? r.dismiss(e, t) : Promise.reject('overlay does not exist');
          },
          Xo = (n, e) =>
            ((n, e) => (
              void 0 === e &&
                (e = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast'),
              Array.from(n.querySelectorAll(e)).filter((t) => t.overlayIndex > 0)
            ))(n, e).filter((t) => !((n) => n.classList.contains('overlay-hidden'))(t)),
          Un = (n, e, t) => {
            const o = Xo(n, e);
            return void 0 === t ? o[o.length - 1] : o.find((i) => i.id === t);
          },
          Pl = (n = !1) => {
            const t = Ml(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
            t && (n ? t.setAttribute('aria-hidden', 'true') : t.removeAttribute('aria-hidden'));
          },
          Qo = (function () {
            var n = (0, y.A)(function* (e, t, o, i, r) {
              var a, s;
              if (e.presented) return;
              ('ION-TOAST' !== e.el.tagName && (Pl(!0), document.body.classList.add(El.B)),
                fh(e.el),
                Fl(e.el),
                (e.presented = !0),
                e.willPresent.emit(),
                null === (a = e.willPresentShorthand) || void 0 === a || a.emit());
              const l = W(e),
                c = e.enterAnimation ? e.enterAnimation : V.c.get(t, 'ios' === l ? o : i);
              ((yield Ll(e, c, e.el, r)) &&
                (e.didPresent.emit(), null === (s = e.didPresentShorthand) || void 0 === s || s.emit()),
                'ION-TOAST' !== e.el.tagName && dh(e.el),
                e.keyboardClose &&
                  (null === document.activeElement || !e.el.contains(document.activeElement)) &&
                  e.el.focus(),
                e.el.removeAttribute('aria-hidden'));
            });
            return function (t, o, i, r, a) {
              return n.apply(this, arguments);
            };
          })(),
          dh = (function () {
            var n = (0, y.A)(function* (e) {
              let t = document.activeElement;
              if (!t) return;
              const o = t?.shadowRoot;
              (o && (t = o.querySelector(Wn) || t),
                yield e.onDidDismiss(),
                (null === document.activeElement || document.activeElement === document.body) && t.focus());
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          Jo = (function () {
            var n = (0, y.A)(function* (e, t, o, i, r, a, s) {
              var l, c;
              if (!e.presented) return !1;
              const p = (void 0 !== He.d ? Xo(He.d) : []).filter((g) => 'ION-TOAST' !== g.tagName);
              (1 === p.length && p[0].id === e.el.id && (Pl(!1), document.body.classList.remove(El.B)),
                (e.presented = !1));
              try {
                (Fl(e.el),
                  e.el.style.setProperty('pointer-events', 'none'),
                  e.willDismiss.emit({ data: t, role: o }),
                  null === (l = e.willDismissShorthand) || void 0 === l || l.emit({ data: t, role: o }));
                const g = W(e),
                  b = e.leaveAnimation ? e.leaveAnimation : V.c.get(i, 'ios' === g ? r : a);
                (o !== qn && (yield Ll(e, b, e.el, s)),
                  e.didDismiss.emit({ data: t, role: o }),
                  null === (c = e.didDismissShorthand) || void 0 === c || c.emit({ data: t, role: o }),
                  (Yo.get(e) || []).forEach((x) => x.destroy()),
                  Yo.delete(e),
                  e.el.classList.add('overlay-hidden'),
                  e.el.style.removeProperty('pointer-events'),
                  void 0 !== e.el.lastFocus && (e.el.lastFocus = void 0));
              } catch (g) {
                (0, V.a)(`[${e.el.tagName.toLowerCase()}] - `, g);
              }
              return (e.el.remove(), mh(), !0);
            });
            return function (t, o, i, r, a, s, l) {
              return n.apply(this, arguments);
            };
          })(),
          Ml = (n) => n.querySelector('ion-app') || n.body,
          Ll = (function () {
            var n = (0, y.A)(function* (e, t, o, i) {
              o.classList.remove('overlay-hidden');
              const a = t(e.el, i);
              ((!e.animated || !V.c.getBoolean('animated', !0)) && a.duration(0),
                e.keyboardClose &&
                  a.beforeAddWrite(() => {
                    const l = o.ownerDocument.activeElement;
                    l?.matches('input,ion-input, ion-textarea') && l.blur();
                  }));
              const s = Yo.get(e) || [];
              return (Yo.set(e, [...s, a]), yield a.play(), !0);
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          Ft = (n, e) => {
            let t;
            const o = new Promise((i) => (t = i));
            return (
              ph(n, e, (i) => {
                t(i.detail);
              }),
              o
            );
          },
          ph = (n, e, t) => {
            const o = (i) => {
              ((0, I.b)(n, e, o), t(i));
            };
            (0, I.a)(n, e, o);
          },
          ei = (n) => 'cancel' === n || n === Kt,
          uh = (n) => n(),
          Kt = 'backdrop',
          qn = 'gesture',
          Rl = (n) => {
            let t,
              e = !1;
            const o = Pr(),
              i = (s = !1) => {
                if (t && !s) return { delegate: t, inline: e };
                const { el: l, hasController: c, delegate: d } = n;
                return ((e = null !== l.parentNode && !c), (t = e ? d || o : d), { inline: e, delegate: t });
              };
            return {
              attachViewToDom: (function () {
                var s = (0, y.A)(function* (l) {
                  const { delegate: c } = i(!0);
                  if (c) return yield c.attachViewToDom(n.el, l);
                  const { hasController: d } = n;
                  if (d && void 0 !== l) throw new Error('framework delegate is missing');
                  return null;
                });
                return function (c) {
                  return s.apply(this, arguments);
                };
              })(),
              removeViewFromDom: () => {
                const { delegate: s } = i();
                s && void 0 !== n.el && s.removeViewFromDom(n.el.parentElement, n.el);
              },
            };
          },
          Br = () => {
            let n;
            const e = () => {
              n && (n(), (n = void 0));
            };
            return {
              addClickListener: (o, i) => {
                e();
                const r = void 0 !== i ? document.getElementById(i) : null;
                r
                  ? (n = ((s, l) => {
                      const c = () => {
                        l.present();
                      };
                      return (
                        s.addEventListener('click', c),
                        () => {
                          s.removeEventListener('click', c);
                        }
                      );
                    })(r, o))
                  : (0, V.p)(
                      `[${o.tagName.toLowerCase()}] - A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                      o,
                    );
              },
              removeClickListener: e,
            };
          },
          Fl = (n) => {
            void 0 !== He.d && Yt('android') && n.setAttribute('aria-hidden', 'true');
          },
          fh = (n) => {
            var e;
            if (void 0 === He.d) return;
            const t = Xo(He.d);
            for (let o = t.length - 1; o >= 0; o--) {
              const i = t[o],
                r = null !== (e = t[o + 1]) && void 0 !== e ? e : n;
              (r.hasAttribute('aria-hidden') || 'ION-TOAST' !== r.tagName) && i.setAttribute('aria-hidden', 'true');
            }
          },
          mh = () => {
            if (void 0 === He.d) return;
            const n = Xo(He.d);
            for (let e = n.length - 1; e >= 0; e--) {
              const t = n[e];
              if ((t.removeAttribute('aria-hidden'), 'ION-TOAST' !== t.tagName)) break;
            }
          },
          Yn = 'ion-disable-focus-trap',
          Ve = (n, e) => null !== e.closest(n),
          Le = (n, e) =>
            'string' == typeof n && n.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${n}`]: !0 }, e) : e,
          nt = (n) => {
            const e = {};
            return (
              ((n) =>
                void 0 !== n
                  ? (Array.isArray(n) ? n : n.split(' '))
                      .filter((t) => null != t)
                      .map((t) => t.trim())
                      .filter((t) => '' !== t)
                  : [])(n).forEach((t) => (e[t] = !0)),
              e
            );
          },
          bh = /^[a-z][a-z0-9+\-.]*:/,
          Bl = (function () {
            var n = (0, y.A)(function* (e, t, o, i) {
              if (null != e && '#' !== e[0] && !bh.test(e)) {
                const r = document.querySelector('ion-router');
                if (r) return (t?.preventDefault(), r.push(e, o, i));
              }
              return !1;
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          Nr = 'ionKeyboardDidShow';
        var j = U(958);
        const Ul = (n, e, t, o, i) => Sh(n[1], e[1], t[1], o[1], i).map((r) => $h(n[0], e[0], t[0], o[0], r)),
          $h = (n, e, t, o, i) =>
            i * (3 * e * Math.pow(i - 1, 2) + i * (-3 * t * i + 3 * t + o * i)) - n * Math.pow(i - 1, 3),
          Sh = (n, e, t, o, i) =>
            Th((o -= i) - 3 * (t -= i) + 3 * (e -= i) - (n -= i), 3 * t - 6 * e + 3 * n, 3 * e - 3 * n, n).filter(
              (a) => a >= 0 && a <= 1,
            ),
          Th = (n, e, t, o) => {
            if (0 === n)
              return ((n, e, t) => {
                const o = e * e - 4 * n * t;
                return o < 0 ? [] : [(-e + Math.sqrt(o)) / (2 * n), (-e - Math.sqrt(o)) / (2 * n)];
              })(e, t, o);
            const i = (3 * (t /= n) - (e /= n) * e) / 3,
              r = (2 * e * e * e - 9 * e * t + 27 * (o /= n)) / 27;
            if (0 === i) return [Math.pow(-r, 1 / 3)];
            if (0 === r) return [Math.sqrt(-i), -Math.sqrt(-i)];
            const a = Math.pow(r / 2, 2) + Math.pow(i / 3, 3);
            if (0 === a) return [Math.pow(r / 2, 0.5) - e / 3];
            if (a > 0) return [Math.pow(-r / 2 + Math.sqrt(a), 1 / 3) - Math.pow(r / 2 + Math.sqrt(a), 1 / 3) - e / 3];
            const s = Math.sqrt(Math.pow(-i / 3, 3)),
              l = Math.acos(-r / (2 * Math.sqrt(Math.pow(-i / 3, 3)))),
              c = 2 * Math.pow(s, 1 / 3);
            return [
              c * Math.cos(l / 3) - e / 3,
              c * Math.cos((l + 2 * Math.PI) / 3) - e / 3,
              c * Math.cos((l + 4 * Math.PI) / 3) - e / 3,
            ];
          };
        var Hr = U(15);
        const zh = ge(
          class extends ve {
            constructor() {
              (super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionBackdropTap = S(this, 'ionBackdropTap', 7)),
                (this.visible = !0),
                (this.tappable = !0),
                (this.stopPropagation = !0));
            }
            onMouseDown(e) {
              this.emitTap(e);
            }
            emitTap(e) {
              (this.stopPropagation && (e.preventDefault(), e.stopPropagation()),
                this.tappable && this.ionBackdropTap.emit());
            }
            render() {
              const e = W(this);
              return h(me, {
                key: '7abaf2c310aa399607451b14063265e8a5846938',
                'aria-hidden': 'true',
                class: { [e]: !0, 'backdrop-hide': !this.visible, 'backdrop-no-tappable': !this.tappable },
              });
            }
            static get style() {
              return {
                ios: ':host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}',
                md: ':host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}',
              };
            }
          },
          [
            289,
            'ion-backdrop',
            { visible: [4], tappable: [4], stopPropagation: [4, 'stop-propagation'] },
            [[2, 'click', 'onMouseDown']],
          ],
        );
        function gn() {
          typeof customElements > 'u' ||
            ['ion-backdrop'].forEach((e) => {
              'ion-backdrop' === e && (customElements.get(e) || customElements.define(e, zh));
            });
        }
        var Gn = (function (n) {
          return ((n.Dark = 'DARK'), (n.Light = 'LIGHT'), (n.Default = 'DEFAULT'), n);
        })(Gn || {});
        const Vr = {
            getEngine() {
              const n = Mr();
              if (n?.isPluginAvailable('StatusBar')) return n.Plugins.StatusBar;
            },
            setStyle(n) {
              const e = this.getEngine();
              e && e.setStyle(n);
            },
            getStyle:
              ((n = (0, y.A)(function* () {
                const e = this.getEngine();
                if (!e) return Gn.Default;
                const { style: t } = yield e.getInfo();
                return t;
              })),
              function () {
                return n.apply(this, arguments);
              }),
          },
          Wr = (n, e) => {
            if (1 === e) return 0;
            const t = 1 / (1 - e);
            return n * t + -e * t;
          },
          ql = () => {
            !He.w || He.w.innerWidth >= 768 || Vr.setStyle({ style: Gn.Dark });
          },
          Ur = (n = Gn.Default) => {
            !He.w || He.w.innerWidth >= 768 || Vr.setStyle({ style: n });
          },
          Yl = (function () {
            var n = (0, y.A)(function* (e, t) {
              'function' != typeof e.canDismiss ||
                !(yield e.canDismiss(void 0, qn)) ||
                (t.isRunning()
                  ? t.onFinish(
                      () => {
                        e.dismiss(void 0, 'handler');
                      },
                      { oneTimeCallback: !0 },
                    )
                  : e.dismiss(void 0, 'handler'));
            });
            return function (t, o) {
              return n.apply(this, arguments);
            };
          })(),
          qr = (n) => 0.00255275 * 2.71828 ** (-14.9619 * n) - 1.00255 * 2.71828 ** (-0.0380968 * n) + 1,
          Oh = (n, e, t, o) => {
            const r = n.offsetHeight;
            let a = !1,
              s = !1,
              l = null,
              c = null,
              p = !0,
              f = 0;
            const w = (0, Hr.createGesture)({
              el: n,
              gestureName: 'modalSwipeToClose',
              gesturePriority: 39,
              direction: 'y',
              threshold: 10,
              canStart: ($) => {
                const T = $.event.target;
                return (
                  null === T ||
                  !T.closest ||
                  ((l = Wo(T)),
                  l
                    ? ((c = Ct(l) ? (0, I.g)(l).querySelector('.inner-scroll') : l),
                      !l.querySelector('ion-refresher') && 0 === c.scrollTop)
                    : null === T.closest('ion-footer'))
                );
              },
              onStart: ($) => {
                const { deltaY: T } = $;
                ((p = !l || !Ct(l) || l.scrollY),
                  (s = void 0 !== n.canDismiss && !0 !== n.canDismiss),
                  T > 0 && l && jr(l),
                  e.progressStart(!0, a ? 1 : 0));
              },
              onMove: ($) => {
                const { deltaY: T } = $;
                T > 0 && l && jr(l);
                const E = $.deltaY / r,
                  F = E >= 0 && s,
                  ne = F ? 0.2 : 0.9999,
                  xe = F ? qr(E / ne) : E,
                  X = (0, I.f)(1e-4, xe, ne);
                (e.progressStep(X), X >= 0.5 && f < 0.5 ? Ur(t) : X < 0.5 && f >= 0.5 && ql(), (f = X));
              },
              onEnd: ($) => {
                const T = $.velocityY,
                  E = $.deltaY / r,
                  F = E >= 0 && s,
                  ne = F ? 0.2 : 0.9999,
                  xe = F ? qr(E / ne) : E,
                  X = (0, I.f)(1e-4, xe, ne),
                  le = !F && ($.deltaY + 1e3 * T) / r >= 0.5;
                let oe = le ? -0.001 : 0.001;
                le
                  ? (e.easing('cubic-bezier(0.32, 0.72, 0, 1)'), (oe += Ul([0, 0], [0.32, 0.72], [0, 1], [1, 1], X)[0]))
                  : (e.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                    (oe += Ul([0, 0], [1, 0], [0.68, 0.28], [1, 1], X)[0]));
                const Be = Gl(le ? E * r : (1 - X) * r, T);
                ((a = le),
                  w.enable(!1),
                  l &&
                    ((n, e) => {
                      Ct(n) ? (n.scrollY = e) : n.style.removeProperty('overflow');
                    })(l, p),
                  e
                    .onFinish(() => {
                      le || w.enable(!0);
                    })
                    .progressEnd(le ? 1 : 0, oe, Be),
                  F && X > ne / 4 ? Yl(n, e) : le && o());
              },
            });
            return w;
          },
          Gl = (n, e) => (0, I.f)(400, n / Math.abs(1.1 * e), 500),
          Kl = (n) => {
            const { currentBreakpoint: e, backdropBreakpoint: t, expandToScroll: o } = n,
              i = void 0 === t || t < e,
              r = i ? `calc(var(--backdrop-opacity) * ${e})` : '0',
              a = (0, j.c)('backdropAnimation').fromTo('opacity', 0, r);
            return (
              i && a.beforeStyles({ 'pointer-events': 'none' }).afterClearStyles(['pointer-events']),
              {
                wrapperAnimation: (0, j.c)('wrapperAnimation').keyframes([
                  { offset: 0, opacity: 1, transform: 'translateY(100%)' },
                  { offset: 1, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                ]),
                backdropAnimation: a,
                contentAnimation: o
                  ? void 0
                  : (0, j.c)('contentAnimation').keyframes([
                      { offset: 0, opacity: 1, maxHeight: 100 * (1 - e) + '%' },
                      { offset: 1, opacity: 1, maxHeight: 100 * e + '%' },
                    ]),
              }
            );
          },
          Zl = (n) => {
            const { currentBreakpoint: e, backdropBreakpoint: t } = n,
              o = `calc(var(--backdrop-opacity) * ${Wr(e, t)})`,
              i = [
                { offset: 0, opacity: o },
                { offset: 1, opacity: 0 },
              ],
              r = [
                { offset: 0, opacity: o },
                { offset: t, opacity: 0 },
                { offset: 1, opacity: 0 },
              ],
              a = (0, j.c)('backdropAnimation').keyframes(0 !== t ? r : i);
            return {
              wrapperAnimation: (0, j.c)('wrapperAnimation').keyframes([
                { offset: 0, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                { offset: 1, opacity: 1, transform: 'translateY(100%)' },
              ]),
              backdropAnimation: a,
            };
          },
          Xl = (n, e) => {
            const { presentingEl: t, currentBreakpoint: o, expandToScroll: i } = e,
              r = (0, I.g)(n),
              {
                wrapperAnimation: a,
                backdropAnimation: s,
                contentAnimation: l,
              } = void 0 !== o
                ? Kl(e)
                : {
                    backdropAnimation: (0, j.c)()
                      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                      .beforeStyles({ 'pointer-events': 'none' })
                      .afterClearStyles(['pointer-events']),
                    wrapperAnimation: (0, j.c)().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)'),
                    contentAnimation: void 0,
                  };
            (s.addElement(r.querySelector('ion-backdrop')),
              a.addElement(r.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 }),
              !i && l?.addElement(n.querySelector('.ion-page')));
            const c = (0, j.c)('entering-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(500)
              .addAnimation([a]);
            if ((l && c.addAnimation(l), t)) {
              const d = window.innerWidth < 768,
                p = 'ION-MODAL' === t.tagName && void 0 !== t.presentingElement,
                f = (0, I.g)(t),
                g = (0, j.c)().beforeStyles({
                  transform: 'translateY(0)',
                  'transform-origin': 'top center',
                  overflow: 'hidden',
                }),
                b = document.body;
              if (d) {
                const v = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  w = `translateY(${p ? '-10px' : v}) scale(0.915)`;
                (g
                  .afterStyles({ transform: w })
                  .beforeAddWrite(() => b.style.setProperty('background-color', 'black'))
                  .addElement(t)
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                    { offset: 1, filter: 'contrast(0.85)', transform: w, borderRadius: '10px 10px 0 0' },
                  ]),
                  c.addAnimation(g));
              } else if ((c.addAnimation(s), p)) {
                const x = `translateY(-10px) scale(${p ? 0.915 : 1})`;
                g.afterStyles({ transform: x })
                  .addElement(f.querySelector('.modal-wrapper'))
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                    { offset: 1, filter: 'contrast(0.85)', transform: x },
                  ]);
                const k = (0, j.c)()
                  .afterStyles({ transform: x })
                  .addElement(f.querySelector('.modal-shadow'))
                  .keyframes([
                    { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
                    { offset: 1, opacity: '0', transform: x },
                  ]);
                c.addAnimation([g, k]);
              } else a.fromTo('opacity', '0', '1');
            } else c.addAnimation(s);
            return c;
          },
          Ql = (n, e, t = 500) => {
            const { presentingEl: o, currentBreakpoint: i } = e,
              r = (0, I.g)(n),
              { wrapperAnimation: a, backdropAnimation: s } =
                void 0 !== i
                  ? Zl(e)
                  : {
                      backdropAnimation: (0, j.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, j.c)().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)'),
                    };
            (s.addElement(r.querySelector('ion-backdrop')),
              a.addElement(r.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 }));
            const l = (0, j.c)('leaving-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(t)
              .addAnimation(a);
            if (o) {
              const c = window.innerWidth < 768,
                d = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
                p = (0, I.g)(o),
                f = (0, j.c)()
                  .beforeClearStyles(['transform'])
                  .afterClearStyles(['transform'])
                  .onFinish((b) => {
                    1 === b &&
                      (o.style.setProperty('overflow', ''),
                      Array.from(g.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter(
                        (x) => void 0 !== x.presentingElement,
                      ).length <= 1 && g.style.setProperty('background-color', ''));
                  }),
                g = document.body;
              if (c) {
                const b = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  k = `translateY(${d ? '-10px' : b}) scale(0.915)`;
                (f.addElement(o).keyframes([
                  { offset: 0, filter: 'contrast(0.85)', transform: k, borderRadius: '10px 10px 0 0' },
                  { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                ]),
                  l.addAnimation(f));
              } else if ((l.addAnimation(s), d)) {
                const v = `translateY(-10px) scale(${d ? 0.915 : 1})`;
                f.addElement(p.querySelector('.modal-wrapper'))
                  .afterStyles({ transform: 'translate3d(0, 0, 0)' })
                  .keyframes([
                    { offset: 0, filter: 'contrast(0.85)', transform: v },
                    { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                  ]);
                const x = (0, j.c)()
                  .addElement(p.querySelector('.modal-shadow'))
                  .afterStyles({ transform: 'translateY(0) scale(1)' })
                  .keyframes([
                    { offset: 0, opacity: '0', transform: v },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' },
                  ]);
                l.addAnimation([f, x]);
              } else a.fromTo('opacity', '1', '0');
            } else l.addAnimation(s);
            return l;
          },
          Fh = (n, e) => {
            const { currentBreakpoint: t, expandToScroll: o } = e,
              i = (0, I.g)(n),
              {
                wrapperAnimation: r,
                backdropAnimation: a,
                contentAnimation: s,
              } = void 0 !== t
                ? Kl(e)
                : {
                    backdropAnimation: (0, j.c)()
                      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                      .beforeStyles({ 'pointer-events': 'none' })
                      .afterClearStyles(['pointer-events']),
                    wrapperAnimation: (0, j.c)().keyframes([
                      { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
                      { offset: 1, opacity: 1, transform: 'translateY(0px)' },
                    ]),
                    contentAnimation: void 0,
                  };
            (a.addElement(i.querySelector('ion-backdrop')),
              r.addElement(i.querySelector('.modal-wrapper')),
              !o && s?.addElement(n.querySelector('.ion-page')));
            const l = (0, j.c)()
              .addElement(n)
              .easing('cubic-bezier(0.36,0.66,0.04,1)')
              .duration(280)
              .addAnimation([a, r]);
            return (s && l.addAnimation(s), l);
          },
          Nh = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, I.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? Zl(e)
                  : {
                      backdropAnimation: (0, j.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, j.c)().keyframes([
                        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
                        { offset: 1, opacity: 0, transform: 'translateY(40px)' },
                      ]),
                    };
            return (
              r.addElement(o.querySelector('ion-backdrop')),
              i.addElement(o.querySelector('.modal-wrapper')),
              (0, j.c)().easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([r, i])
            );
          },
          Uh = ge(
            class extends ve {
              constructor() {
                (super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.didPresent = S(this, 'ionModalDidPresent', 7)),
                  (this.willPresent = S(this, 'ionModalWillPresent', 7)),
                  (this.willDismiss = S(this, 'ionModalWillDismiss', 7)),
                  (this.didDismiss = S(this, 'ionModalDidDismiss', 7)),
                  (this.ionBreakpointDidChange = S(this, 'ionBreakpointDidChange', 7)),
                  (this.didPresentShorthand = S(this, 'didPresent', 7)),
                  (this.willPresentShorthand = S(this, 'willPresent', 7)),
                  (this.willDismissShorthand = S(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = S(this, 'didDismiss', 7)),
                  (this.ionMount = S(this, 'ionMount', 7)),
                  (this.lockController = Uo()),
                  (this.triggerController = Br()),
                  (this.coreDelegate = Pr()),
                  (this.isSheetModal = !1),
                  (this.inheritedAttributes = {}),
                  (this.inline = !1),
                  (this.gestureAnimationDismissing = !1),
                  (this.presented = !1),
                  (this.hasController = !1),
                  (this.keyboardClose = !0),
                  (this.expandToScroll = !0),
                  (this.backdropBreakpoint = 0),
                  (this.handleBehavior = 'none'),
                  (this.backdropDismiss = !0),
                  (this.showBackdrop = !0),
                  (this.animated = !0),
                  (this.isOpen = !1),
                  (this.keepContentsMounted = !1),
                  (this.focusTrap = !0),
                  (this.canDismiss = !0),
                  (this.onHandleClick = () => {
                    const { sheetTransition: e, handleBehavior: t } = this;
                    'cycle' !== t || void 0 !== e || this.moveToNextBreakpoint();
                  }),
                  (this.onBackdropTap = () => {
                    const { sheetTransition: e } = this;
                    void 0 === e && this.dismiss(void 0, Kt);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = qh[e.type];
                    if (t && o) {
                      const i = new CustomEvent(o, { bubbles: !1, cancelable: !1, detail: e.detail });
                      t.dispatchEvent(i);
                    }
                  }),
                  (this.onModalFocus = (e) => {
                    const { dragHandleEl: t, el: o } = this;
                    e.target === o && t && -1 !== t.tabIndex && t.focus();
                  }),
                  (this.onSlotChange = ({ target: e }) => {
                    e.assignedElements().forEach((o) => {
                      o.querySelectorAll('ion-modal').forEach((i) => {
                        null === i.getAttribute('data-parent-ion-modal') &&
                          i.setAttribute('data-parent-ion-modal', this.el.id);
                      });
                    });
                  }));
              }
              onIsOpenChange(e, t) {
                !0 === e && !1 === t ? this.present() : !1 === e && !0 === t && this.dismiss();
              }
              triggerChanged() {
                const { trigger: e, el: t, triggerController: o } = this;
                e && o.addClickListener(t, e);
              }
              onWindowResize() {
                'ios' !== W(this) ||
                  !this.presentingElement ||
                  this.enterAnimation ||
                  this.leaveAnimation ||
                  (clearTimeout(this.resizeTimeout),
                  (this.resizeTimeout = setTimeout(() => {
                    this.handleViewTransition();
                  }, 50)));
              }
              breakpointsChanged(e) {
                void 0 !== e && (this.sortedBreakpoints = e.sort((t, o) => t - o));
              }
              connectedCallback() {
                const { el: e } = this;
                (Ko(e), this.triggerChanged());
              }
              disconnectedCallback() {
                (this.triggerController.removeClickListener(),
                  this.cleanupViewTransitionListener(),
                  this.cleanupParentRemovalObserver());
              }
              componentWillLoad() {
                var e;
                const { breakpoints: t, initialBreakpoint: o, el: i, htmlAttributes: r } = this,
                  a = (this.isSheetModal = void 0 !== t && void 0 !== o),
                  s = ['aria-label', 'role'];
                ((this.inheritedAttributes = (0, I.d)(i, s)),
                  i.parentNode && (this.cachedOriginalParent = i.parentNode),
                  void 0 !== r &&
                    s.forEach((l) => {
                      r[l] &&
                        ((this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
                          [l]: r[l],
                        })),
                        delete r[l]);
                    }),
                  a && (this.currentBreakpoint = this.initialBreakpoint),
                  void 0 !== t &&
                    void 0 !== o &&
                    !t.includes(o) &&
                    (0, V.p)('[ion-modal] - Your breakpoints array must include the initialBreakpoint value.'),
                  (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || Zo(this.el));
              }
              componentDidLoad() {
                (!0 === this.isOpen && (0, I.r)(() => this.present()),
                  this.breakpointsChanged(this.breakpoints),
                  this.triggerChanged());
              }
              getDelegate(e = !1) {
                if (this.workingDelegate && !e) return { delegate: this.workingDelegate, inline: this.inline };
                const o = (this.inline = null !== this.el.parentNode && !this.hasController);
                return {
                  inline: o,
                  delegate: (this.workingDelegate = o ? this.delegate || this.coreDelegate : this.delegate),
                };
              }
              checkCanDismiss(e, t) {
                var o = this;
                return (0, y.A)(function* () {
                  const { canDismiss: i } = o;
                  return 'function' == typeof i ? i(e, t) : i;
                })();
              }
              present() {
                var e = this;
                return (0, y.A)(function* () {
                  const t = yield e.lockController.lock();
                  if (e.presented) return void t();
                  const { presentingElement: o, el: i } = e;
                  e.currentBreakpoint = e.initialBreakpoint;
                  const { inline: r, delegate: a } = e.getDelegate(!0);
                  (e.ionMount.emit(),
                    (e.usersElement = yield xl(a, i, e.component, ['ion-page'], e.componentProps, r)),
                    (0, I.k)(i) ? yield (0, ae.e)(e.usersElement) : e.keepContentsMounted || (yield (0, ae.w)()),
                    Ke(() => e.el.classList.add('show-modal')));
                  const s = void 0 !== o;
                  (s && 'ios' === W(e) && ((e.statusBarStyle = yield Vr.getStyle()), ql()),
                    yield Qo(e, 'modalEnter', Xl, Fh, {
                      presentingEl: o,
                      currentBreakpoint: e.initialBreakpoint,
                      backdropBreakpoint: e.backdropBreakpoint,
                      expandToScroll: e.expandToScroll,
                    }),
                    typeof window < 'u' &&
                      ((e.keyboardOpenCallback = () => {
                        e.gesture &&
                          (e.gesture.enable(!1),
                          (0, I.r)(() => {
                            e.gesture && e.gesture.enable(!0);
                          }));
                      }),
                      window.addEventListener(Nr, e.keyboardOpenCallback)),
                    e.isSheetModal ? e.initSheetGesture() : s && e.initSwipeToClose(),
                    e.initViewTransitionListener(),
                    e.initParentRemovalObserver(),
                    t());
                })();
              }
              initSwipeToClose() {
                var t,
                  e = this;
                if ('ios' !== W(this)) return;
                const { el: o } = this,
                  i = this.leaveAnimation || V.c.get('modalLeave', Ql),
                  r = (this.animation = i(o, {
                    presentingEl: this.presentingElement,
                    expandToScroll: this.expandToScroll,
                  }));
                if (!((n) => n.querySelector(ml) || n.querySelector(gl))(o))
                  return void ((n) => {
                    (0, V.e)(n, fl);
                  })(o);
                const s = null !== (t = this.statusBarStyle) && void 0 !== t ? t : Gn.Default;
                ((this.gesture = Oh(o, r, s, () => {
                  ((this.gestureAnimationDismissing = !0),
                    Ur(this.statusBarStyle),
                    this.animation.onFinish(
                      (0, y.A)(function* () {
                        (yield e.dismiss(void 0, qn), (e.gestureAnimationDismissing = !1));
                      }),
                    ));
                })),
                  this.gesture.enable(!0));
              }
              initSheetGesture() {
                const { wrapperEl: e, initialBreakpoint: t, backdropBreakpoint: o } = this;
                if (!e || void 0 === t) return;
                const i = this.enterAnimation || V.c.get('modalEnter', Xl),
                  r = (this.animation = i(this.el, {
                    presentingEl: this.presentingElement,
                    currentBreakpoint: t,
                    backdropBreakpoint: o,
                    expandToScroll: this.expandToScroll,
                  }));
                r.progressStart(!0, 1);
                const { gesture: a, moveSheetToBreakpoint: s } = ((n, e, t, o, i, r, a = [], s, l, c, d) => {
                  const g = {
                      WRAPPER_KEYFRAMES: [
                        { offset: 0, transform: 'translateY(0%)' },
                        { offset: 1, transform: 'translateY(100%)' },
                      ],
                      BACKDROP_KEYFRAMES:
                        0 !== i
                          ? [
                              { offset: 0, opacity: 'var(--backdrop-opacity)' },
                              { offset: 1 - i, opacity: 0 },
                              { offset: 1, opacity: 0 },
                            ]
                          : [
                              { offset: 0, opacity: 'var(--backdrop-opacity)' },
                              { offset: 1, opacity: 0.01 },
                            ],
                      CONTENT_KEYFRAMES: [
                        { offset: 0, maxHeight: '100%' },
                        { offset: 1, maxHeight: '0%' },
                      ],
                    },
                    b = n.querySelector('ion-content'),
                    v = t.clientHeight;
                  let x = o,
                    k = 0,
                    w = !1,
                    $ = null,
                    T = null,
                    E = null,
                    F = null;
                  const xe = a[a.length - 1],
                    X = a[0],
                    K = r.childAnimations.find((ye) => 'wrapperAnimation' === ye.id),
                    le = r.childAnimations.find((ye) => 'backdropAnimation' === ye.id),
                    oe = r.childAnimations.find((ye) => 'contentAnimation' === ye.id),
                    Be = () => {
                      (n.style.setProperty('pointer-events', 'auto'),
                        e.style.setProperty('pointer-events', 'auto'),
                        n.classList.remove(Yn));
                    },
                    st = () => {
                      (n.style.setProperty('pointer-events', 'none'),
                        e.style.setProperty('pointer-events', 'none'),
                        n.classList.add(Yn));
                    },
                    Qe = (ye) => {
                      if (!T && ((T = Array.from(n.querySelectorAll('ion-footer'))), !T.length)) return;
                      const _e = n.querySelector('.ion-page');
                      if (((F = ye), 'stationary' === ye))
                        T.forEach((Ee) => {
                          (Ee.classList.remove('modal-footer-moving'),
                            Ee.style.removeProperty('position'),
                            Ee.style.removeProperty('width'),
                            Ee.style.removeProperty('height'),
                            Ee.style.removeProperty('top'),
                            Ee.style.removeProperty('left'),
                            _e?.style.removeProperty('padding-bottom'),
                            _e?.appendChild(Ee));
                        });
                      else {
                        let Ee = 0;
                        (T.forEach(($e, Mt) => {
                          const kt = $e.getBoundingClientRect(),
                            Xe = document.body.getBoundingClientRect();
                          Ee += $e.clientHeight;
                          const no = kt.top - Xe.top,
                            oo = kt.left - Xe.left;
                          if (
                            ($e.style.setProperty('--pinned-width', `${$e.clientWidth}px`),
                            $e.style.setProperty('--pinned-height', `${$e.clientHeight}px`),
                            $e.style.setProperty('--pinned-top', `${no}px`),
                            $e.style.setProperty('--pinned-left', `${oo}px`),
                            0 === Mt)
                          ) {
                            E = no;
                            const Da = n.querySelector('ion-header');
                            Da && (E -= Da.clientHeight);
                          }
                        }),
                          T.forEach(($e) => {
                            (_e?.style.setProperty('padding-bottom', `${Ee}px`),
                              $e.classList.add('modal-footer-moving'),
                              $e.style.setProperty('position', 'absolute'),
                              $e.style.setProperty('width', 'var(--pinned-width)'),
                              $e.style.setProperty('height', 'var(--pinned-height)'),
                              $e.style.setProperty('top', 'var(--pinned-top)'),
                              $e.style.setProperty('left', 'var(--pinned-left)'),
                              document.body.appendChild($e));
                          }));
                      }
                    };
                  (K &&
                    le &&
                    (K.keyframes([...g.WRAPPER_KEYFRAMES]),
                    le.keyframes([...g.BACKDROP_KEYFRAMES]),
                    oe?.keyframes([...g.CONTENT_KEYFRAMES]),
                    r.progressStart(!0, 1 - x),
                    x > i ? Be() : st()),
                    b && x !== xe && s && (b.scrollY = !1));
                  const pt = (ye) => {
                      const { breakpoint: _e, canDismiss: Ee, breakpointOffset: $e, animated: Mt } = ye,
                        kt = Ee && 0 === _e,
                        Xe = kt ? x : _e,
                        no = 0 !== Xe;
                      return (
                        (x = 0),
                        K &&
                          le &&
                          (K.keyframes([
                            { offset: 0, transform: `translateY(${100 * $e}%)` },
                            { offset: 1, transform: `translateY(${100 * (1 - Xe)}%)` },
                          ]),
                          le.keyframes([
                            { offset: 0, opacity: `calc(var(--backdrop-opacity) * ${Wr(1 - $e, i)})` },
                            { offset: 1, opacity: `calc(var(--backdrop-opacity) * ${Wr(Xe, i)})` },
                          ]),
                          oe &&
                            oe.keyframes([
                              { offset: 0, maxHeight: 100 * (1 - $e) + '%' },
                              { offset: 1, maxHeight: 100 * Xe + '%' },
                            ]),
                          r.progressStep(0)),
                        wt.enable(!1),
                        kt ? Yl(n, r) : no || c(),
                        b && (Xe === a[a.length - 1] || !s) && (b.scrollY = !0),
                        !s && 0 === Xe && Qe('stationary'),
                        new Promise((oo) => {
                          r.onFinish(
                            () => {
                              no
                                ? (s || Qe('stationary'),
                                  K && le
                                    ? (0, I.r)(() => {
                                        (K.keyframes([...g.WRAPPER_KEYFRAMES]),
                                          le.keyframes([...g.BACKDROP_KEYFRAMES]),
                                          oe?.keyframes([...g.CONTENT_KEYFRAMES]),
                                          r.progressStart(!0, 1 - Xe),
                                          (x = Xe),
                                          d(x),
                                          x > i ? Be() : st(),
                                          wt.enable(!0),
                                          oo());
                                      })
                                    : (wt.enable(!0), oo()))
                                : oo();
                            },
                            { oneTimeCallback: !0 },
                          ).progressEnd(1, 0, Mt ? 500 : 0);
                        })
                      );
                    },
                    wt = (0, Hr.createGesture)({
                      el: t,
                      gestureName: 'modalSheet',
                      gesturePriority: 40,
                      direction: 'y',
                      threshold: 10,
                      canStart: (ye) => {
                        const _e = Wo(ye.event.target);
                        if (((x = l()), !s && _e))
                          return 0 === (Ct(_e) ? (0, I.g)(_e).querySelector('.inner-scroll') : _e).scrollTop;
                        if (1 === x && _e) {
                          const Ee = Ct(_e) ? (0, I.g)(_e).querySelector('.inner-scroll') : _e;
                          return !_e.querySelector('ion-refresher') && 0 === Ee.scrollTop;
                        }
                        return !0;
                      },
                      onStart: (ye) => {
                        if (((w = void 0 !== n.canDismiss && !0 !== n.canDismiss && 0 === X), !s)) {
                          const _e = Wo(ye.event.target);
                          $ = _e && Ct(_e) ? (0, I.g)(_e).querySelector('.inner-scroll') : _e;
                        }
                        (s || Qe('moving'),
                          ye.deltaY > 0 && b && (b.scrollY = !1),
                          (0, I.r)(() => {
                            n.focus();
                          }),
                          r.progressStart(!0, 1 - x));
                      },
                      onMove: (ye) => {
                        if (
                          (!s &&
                            null !== E &&
                            null !== F &&
                            (ye.currentY >= E && 'moving' === F
                              ? Qe('stationary')
                              : ye.currentY < E && 'stationary' === F && Qe('moving')),
                          !s && ye.deltaY <= 0 && $)
                        )
                          return;
                        ye.deltaY > 0 && b && (b.scrollY = !1);
                        const Ee = a.length > 1 ? 1 - a[1] : void 0,
                          $e = 1 - x + ye.deltaY / v,
                          Mt = void 0 !== Ee && $e >= Ee && w,
                          kt = Mt ? 0.95 : 0.9999,
                          Xe = Mt && void 0 !== Ee ? Ee + qr(($e - Ee) / (kt - Ee)) : $e;
                        ((k = (0, I.f)(1e-4, Xe, kt)), r.progressStep(k));
                      },
                      onEnd: (ye) => {
                        if (!s && ye.deltaY <= 0 && $ && $.scrollTop > 0) return void Qe('stationary');
                        const $e = x - (ye.deltaY + 350 * ye.velocityY) / v,
                          Mt = a.reduce((kt, Xe) => (Math.abs(Xe - $e) < Math.abs(kt - $e) ? Xe : kt));
                        pt({ breakpoint: Mt, breakpointOffset: k, canDismiss: w, animated: !0 });
                      },
                    });
                  return { gesture: wt, moveSheetToBreakpoint: pt };
                })(
                  this.el,
                  this.backdropEl,
                  e,
                  t,
                  o,
                  r,
                  this.sortedBreakpoints,
                  this.expandToScroll,
                  () => {
                    var l;
                    return null !== (l = this.currentBreakpoint) && void 0 !== l ? l : 0;
                  },
                  () => this.sheetOnDismiss(),
                  (l) => {
                    this.currentBreakpoint !== l &&
                      ((this.currentBreakpoint = l), this.ionBreakpointDidChange.emit({ breakpoint: l }));
                  },
                );
                ((this.gesture = a), (this.moveSheetToBreakpoint = s), this.gesture.enable(!0));
              }
              sheetOnDismiss() {
                var e = this;
                ((this.gestureAnimationDismissing = !0),
                  this.animation.onFinish(
                    (0, y.A)(function* () {
                      ((e.currentBreakpoint = 0),
                        e.ionBreakpointDidChange.emit({ breakpoint: e.currentBreakpoint }),
                        yield e.dismiss(void 0, qn),
                        (e.gestureAnimationDismissing = !1));
                    }),
                  ));
              }
              dismiss(e, t) {
                var o = this;
                return (0, y.A)(function* () {
                  var i;
                  if (o.gestureAnimationDismissing && t !== qn) return !1;
                  const r = yield o.lockController.lock();
                  if ((yield o.dismissNestedModals(), 'handler' !== t && !(yield o.checkCanDismiss(e, t))))
                    return (r(), !1);
                  const { presentingElement: a } = o;
                  (void 0 !== a && 'ios' === W(o) && Ur(o.statusBarStyle),
                    typeof window < 'u' &&
                      o.keyboardOpenCallback &&
                      (window.removeEventListener(Nr, o.keyboardOpenCallback), (o.keyboardOpenCallback = void 0)));
                  const l = yield Jo(o, e, t, 'modalLeave', Ql, Nh, {
                    presentingEl: a,
                    currentBreakpoint: null !== (i = o.currentBreakpoint) && void 0 !== i ? i : o.initialBreakpoint,
                    backdropBreakpoint: o.backdropBreakpoint,
                    expandToScroll: o.expandToScroll,
                  });
                  if (l) {
                    const { delegate: c } = o.getDelegate();
                    (yield yl(c, o.usersElement),
                      Ke(() => o.el.classList.remove('show-modal')),
                      o.animation && o.animation.destroy(),
                      o.gesture && o.gesture.destroy(),
                      o.cleanupViewTransitionListener(),
                      o.cleanupParentRemovalObserver());
                  }
                  return ((o.currentBreakpoint = void 0), (o.animation = void 0), r(), l);
                })();
              }
              onDidDismiss() {
                return Ft(this.el, 'ionModalDidDismiss');
              }
              onWillDismiss() {
                return Ft(this.el, 'ionModalWillDismiss');
              }
              setCurrentBreakpoint(e) {
                var t = this;
                return (0, y.A)(function* () {
                  if (!t.isSheetModal)
                    return void (0, V.p)('[ion-modal] - setCurrentBreakpoint is only supported on sheet modals.');
                  if (!t.breakpoints.includes(e))
                    return void (0, V.p)(
                      `[ion-modal] - Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`,
                    );
                  const {
                    currentBreakpoint: o,
                    moveSheetToBreakpoint: i,
                    canDismiss: r,
                    breakpoints: a,
                    animated: s,
                  } = t;
                  o !== e &&
                    i &&
                    ((t.sheetTransition = i({
                      breakpoint: e,
                      breakpointOffset: 1 - o,
                      canDismiss: void 0 !== r && !0 !== r && 0 === a[0],
                      animated: s,
                    })),
                    yield t.sheetTransition,
                    (t.sheetTransition = void 0));
                })();
              }
              getCurrentBreakpoint() {
                var e = this;
                return (0, y.A)(function* () {
                  return e.currentBreakpoint;
                })();
              }
              moveToNextBreakpoint() {
                var e = this;
                return (0, y.A)(function* () {
                  const { breakpoints: t, currentBreakpoint: o } = e;
                  if (!t || null == o) return !1;
                  const i = t.filter((l) => 0 !== l),
                    a = (i.indexOf(o) + 1) % i.length,
                    s = i[a];
                  return (yield e.setCurrentBreakpoint(s), !0);
                })();
              }
              initViewTransitionListener() {
                'ios' !== W(this) ||
                  !this.presentingElement ||
                  this.enterAnimation ||
                  this.leaveAnimation ||
                  (this.currentViewIsPortrait = window.innerWidth < 768);
              }
              handleViewTransition() {
                const e = window.innerWidth < 768;
                if (this.currentViewIsPortrait === e) return;
                this.viewTransitionAnimation &&
                  (this.viewTransitionAnimation.destroy(), (this.viewTransitionAnimation = void 0));
                const { presentingElement: t } = this;
                if (!t) return;
                let o;
                ((o =
                  this.currentViewIsPortrait && !e
                    ? ((n, e, t = 300) => {
                        const { presentingEl: o } = e;
                        if (!o) return (0, j.c)('portrait-to-landscape-transition');
                        const i = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
                          r = (0, I.g)(o),
                          a = document.body,
                          s = (0, j.c)('portrait-to-landscape-transition')
                            .addElement(n)
                            .easing('cubic-bezier(0.32,0.72,0,1)')
                            .duration(t),
                          l = (0, j.c)().beforeStyles({
                            transform: 'translateY(0)',
                            'transform-origin': 'top center',
                            overflow: 'hidden',
                          });
                        if (i) {
                          const d = 'translateY(-10px) scale(0.915)',
                            p = 'translateY(0px) scale(1)';
                          l.addElement(o)
                            .afterStyles({ transform: p })
                            .fromTo('transform', d, p)
                            .fromTo('filter', 'contrast(0.85)', 'contrast(1)');
                          const f = (0, j.c)()
                            .addElement(r.querySelector('.modal-shadow'))
                            .afterStyles({ transform: p, opacity: '0' })
                            .fromTo('transform', d, p);
                          s.addAnimation([l, f]);
                        } else {
                          const c = (0, I.g)(n),
                            d = (0, j.c)()
                              .addElement(c.querySelectorAll('.modal-wrapper, .modal-shadow'))
                              .fromTo('opacity', '1', '1'),
                            p = (0, j.c)()
                              .addElement(c.querySelector('ion-backdrop'))
                              .fromTo('opacity', 'var(--backdrop-opacity)', 'var(--backdrop-opacity)'),
                            b = `translateY(${CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px'}) scale(0.915)`;
                          (l
                            .addElement(o)
                            .afterStyles({ transform: 'translateY(0px) scale(1)', 'border-radius': '0px' })
                            .beforeAddWrite(() => a.style.setProperty('background-color', ''))
                            .fromTo('transform', b, 'translateY(0px) scale(1)')
                            .fromTo('filter', 'contrast(0.85)', 'contrast(1)')
                            .fromTo('border-radius', '10px 10px 0 0', '0px'),
                            s.addAnimation([l, d, p]));
                        }
                        return s;
                      })(this.el, { presentingEl: t })
                    : ((n, e, t = 300) => {
                        const { presentingEl: o } = e;
                        if (!o) return (0, j.c)('landscape-to-portrait-transition');
                        const i = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
                          r = (0, I.g)(o),
                          a = document.body,
                          s = (0, j.c)('landscape-to-portrait-transition')
                            .addElement(n)
                            .easing('cubic-bezier(0.32,0.72,0,1)')
                            .duration(t),
                          l = (0, j.c)().beforeStyles({
                            transform: 'translateY(0)',
                            'transform-origin': 'top center',
                            overflow: 'hidden',
                          });
                        if (i) {
                          const d = 'translateY(-10px) scale(0.915)',
                            p = 'translateY(0) scale(1)';
                          l.addElement(o).afterStyles({ transform: p }).fromTo('transform', d, p);
                          const f = (0, j.c)()
                            .addElement(r.querySelector('.modal-shadow'))
                            .afterStyles({ transform: p, opacity: '0' })
                            .fromTo('transform', d, p);
                          s.addAnimation([l, f]);
                        } else {
                          const c = (0, I.g)(n),
                            d = (0, j.c)()
                              .addElement(c.querySelectorAll('.modal-wrapper, .modal-shadow'))
                              .fromTo('opacity', '1', '1'),
                            p = (0, j.c)()
                              .addElement(c.querySelector('ion-backdrop'))
                              .fromTo('opacity', 'var(--backdrop-opacity)', 'var(--backdrop-opacity)'),
                            b = `translateY(${CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px'}) scale(0.915)`;
                          (l
                            .addElement(o)
                            .afterStyles({ transform: b })
                            .beforeAddWrite(() => a.style.setProperty('background-color', 'black'))
                            .keyframes([
                              {
                                offset: 0,
                                transform: 'translateY(0px) scale(1)',
                                filter: 'contrast(1)',
                                borderRadius: '0px',
                              },
                              {
                                offset: 0.2,
                                transform: 'translateY(0px) scale(1)',
                                filter: 'contrast(1)',
                                borderRadius: '10px 10px 0 0',
                              },
                              { offset: 1, transform: b, filter: 'contrast(0.85)', borderRadius: '10px 10px 0 0' },
                            ]),
                            s.addAnimation([l, d, p]));
                        }
                        return s;
                      })(this.el, { presentingEl: t })),
                  (this.currentViewIsPortrait = e),
                  (this.viewTransitionAnimation = o),
                  o.play().then(() => {
                    ((this.viewTransitionAnimation = void 0), this.reinitSwipeToClose());
                  }));
              }
              cleanupViewTransitionListener() {
                (this.resizeTimeout && (clearTimeout(this.resizeTimeout), (this.resizeTimeout = void 0)),
                  this.viewTransitionAnimation &&
                    (this.viewTransitionAnimation.destroy(), (this.viewTransitionAnimation = void 0)));
              }
              reinitSwipeToClose() {
                'ios' !== W(this) ||
                  !this.presentingElement ||
                  (this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
                  this.animation &&
                    (this.animation.progressEnd(0, 0, 0), this.animation.destroy(), (this.animation = void 0)),
                  (0, I.r)(() => {
                    (this.ensureCorrectModalPosition(), this.initSwipeToClose());
                  }));
              }
              ensureCorrectModalPosition() {
                const { el: e, presentingElement: t } = this,
                  i = (0, I.g)(e).querySelector('.modal-wrapper');
                if (
                  (i && ((i.style.transform = 'translateY(0vh)'), (i.style.opacity = '1')), 'ION-MODAL' === t?.tagName)
                )
                  if (window.innerWidth < 768) {
                    const a = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px';
                    t.style.transform = `translateY(${a}) scale(0.915)`;
                  } else t.style.transform = 'translateY(0px) scale(1)';
              }
              dismissNestedModals() {
                var e = this;
                return (0, y.A)(function* () {
                  const t = document.querySelectorAll(`ion-modal[data-parent-ion-modal="${e.el.id}"]`);
                  t?.forEach(
                    (function () {
                      var o = (0, y.A)(function* (i) {
                        yield i.dismiss(void 0, 'parent-dismissed');
                      });
                      return function (i) {
                        return o.apply(this, arguments);
                      };
                    })(),
                  );
                })();
              }
              initParentRemovalObserver() {
                typeof MutationObserver > 'u' ||
                  typeof window > 'u' ||
                  !this.cachedOriginalParent ||
                  this.cachedOriginalParent.nodeType === Node.DOCUMENT_NODE ||
                  this.cachedOriginalParent.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
                  ((this.parentRemovalObserver = new MutationObserver((e) => {
                    e.forEach((t) => {
                      'childList' === t.type &&
                        t.removedNodes.length > 0 &&
                        (Array.from(t.removedNodes).some((r) => {
                          var a, s;
                          const l = r === this.cachedOriginalParent,
                            c =
                              !!this.cachedOriginalParent &&
                              (null === (s = (a = r).contains) || void 0 === s
                                ? void 0
                                : s.call(a, this.cachedOriginalParent));
                          return l || c;
                        }) ||
                          (this.cachedOriginalParent && !this.cachedOriginalParent.isConnected)) &&
                        (this.dismiss(void 0, 'parent-removed'), (this.cachedOriginalParent = void 0));
                    });
                  })),
                  this.parentRemovalObserver.observe(document.body, { childList: !0, subtree: !0 }));
              }
              cleanupParentRemovalObserver() {
                var e;
                (null === (e = this.parentRemovalObserver) || void 0 === e || e.disconnect(),
                  (this.parentRemovalObserver = void 0));
              }
              render() {
                const {
                    handle: e,
                    isSheetModal: t,
                    presentingElement: o,
                    htmlAttributes: i,
                    handleBehavior: r,
                    inheritedAttributes: a,
                    focusTrap: s,
                    expandToScroll: l,
                  } = this,
                  c = !1 !== e && t,
                  d = W(this),
                  p = void 0 !== o && 'ios' === d,
                  f = 'cycle' === r;
                return h(
                  me,
                  Object.assign(
                    {
                      key: '9e9a7bd591eb17a225a00b4fa2e379e94601d17f',
                      'no-router': !0,
                      tabIndex: f && t && c ? 0 : -1,
                    },
                    i,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(
                        {
                          [d]: !0,
                          'modal-default': !p && !t,
                          'modal-card': p,
                          'modal-sheet': t,
                          'modal-no-expand-scroll': t && !l,
                          'overlay-hidden': !0,
                          [Yn]: !1 === s,
                        },
                        nt(this.cssClass),
                      ),
                      onIonBackdropTap: this.onBackdropTap,
                      onIonModalDidPresent: this.onLifecycle,
                      onIonModalWillPresent: this.onLifecycle,
                      onIonModalWillDismiss: this.onLifecycle,
                      onIonModalDidDismiss: this.onLifecycle,
                      onFocus: this.onModalFocus,
                    },
                  ),
                  h('ion-backdrop', {
                    key: 'e5eae2c14f830f75e308fcd7f4c10c86fac5b962',
                    ref: (b) => (this.backdropEl = b),
                    visible: this.showBackdrop,
                    tappable: this.backdropDismiss,
                    part: 'backdrop',
                  }),
                  'ios' === d && h('div', { key: 'e268f9cd310c3cf4e051b5b92524ce4fb70d005e', class: 'modal-shadow' }),
                  h(
                    'div',
                    Object.assign({ key: '9c380f36c18144c153077b15744d1c3346bce63e', role: 'dialog' }, a, {
                      'aria-modal': 'true',
                      class: 'modal-wrapper ion-overlay-wrapper',
                      part: 'content',
                      ref: (b) => (this.wrapperEl = b),
                    }),
                    c &&
                      h('button', {
                        key: '2d5ee6d5959d97309c306e8ce72eb0f2c19be144',
                        class: 'modal-handle',
                        tabIndex: f ? 0 : -1,
                        'aria-label': 'Activate to adjust the size of the dialog overlaying the screen',
                        onClick: f ? this.onHandleClick : void 0,
                        part: 'handle',
                        ref: (b) => (this.dragHandleEl = b),
                      }),
                    h('slot', { key: '5590434c35ea04c42fc006498bc189038e15a298', onSlotchange: this.onSlotChange }),
                  ),
                );
              }
              get el() {
                return this;
              }
              static get watchers() {
                return { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] };
              }
              static get style() {
                return {
                  ios: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}',
                  md: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',
                };
              }
            },
            [
              289,
              'ion-modal',
              {
                hasController: [4, 'has-controller'],
                overlayIndex: [2, 'overlay-index'],
                delegate: [16],
                keyboardClose: [4, 'keyboard-close'],
                enterAnimation: [16, 'enter-animation'],
                leaveAnimation: [16, 'leave-animation'],
                breakpoints: [16],
                expandToScroll: [4, 'expand-to-scroll'],
                initialBreakpoint: [2, 'initial-breakpoint'],
                backdropBreakpoint: [2, 'backdrop-breakpoint'],
                handle: [4],
                handleBehavior: [1, 'handle-behavior'],
                component: [1],
                componentProps: [16, 'component-props'],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                showBackdrop: [4, 'show-backdrop'],
                animated: [4],
                presentingElement: [16, 'presenting-element'],
                htmlAttributes: [16, 'html-attributes'],
                isOpen: [4, 'is-open'],
                trigger: [1],
                keepContentsMounted: [4, 'keep-contents-mounted'],
                focusTrap: [4, 'focus-trap'],
                canDismiss: [4, 'can-dismiss'],
                presented: [32],
                present: [64],
                dismiss: [64],
                onDidDismiss: [64],
                onWillDismiss: [64],
                setCurrentBreakpoint: [64],
                getCurrentBreakpoint: [64],
              },
              [[9, 'resize', 'onWindowResize']],
              { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] },
            ],
          ),
          qh = {
            ionModalDidPresent: 'ionViewDidEnter',
            ionModalWillPresent: 'ionViewWillEnter',
            ionModalWillDismiss: 'ionViewWillLeave',
            ionModalDidDismiss: 'ionViewDidLeave',
          };
        var n;
        const Yh = function Jl() {
            typeof customElements > 'u' ||
              ['ion-modal', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-modal':
                    customElements.get(e) || customElements.define(e, Uh);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || gn();
                }
              });
          },
          ec = (n, e, t) => {
            const o = e.getBoundingClientRect(),
              i = o.height;
            let r = o.width;
            return ('cover' === n && t && (r = t.getBoundingClientRect().width), { contentWidth: r, contentHeight: i });
          },
          Zh = (n, e, t) => {
            let o = [];
            switch (e) {
              case 'hover':
                let i;
                o = [
                  {
                    eventName: 'mouseenter',
                    callback:
                      ((r = (0, y.A)(function* (a) {
                        (a.stopPropagation(),
                          i && clearTimeout(i),
                          (i = setTimeout(() => {
                            (0, I.r)(() => {
                              (t.presentFromTrigger(a), (i = void 0));
                            });
                          }, 100)));
                      })),
                      function (s) {
                        return r.apply(this, arguments);
                      }),
                  },
                  {
                    eventName: 'mouseleave',
                    callback: (r) => {
                      i && clearTimeout(i);
                      const a = r.relatedTarget;
                      a && a.closest('ion-popover') !== t && t.dismiss(void 0, void 0, !1);
                    },
                  },
                  { eventName: 'click', callback: (r) => r.stopPropagation() },
                  { eventName: 'ionPopoverActivateTrigger', callback: (r) => t.presentFromTrigger(r, !0) },
                ];
                break;
              case 'context-menu':
                o = [
                  {
                    eventName: 'contextmenu',
                    callback: (r) => {
                      (r.preventDefault(), t.presentFromTrigger(r));
                    },
                  },
                  { eventName: 'click', callback: (r) => r.stopPropagation() },
                  { eventName: 'ionPopoverActivateTrigger', callback: (r) => t.presentFromTrigger(r, !0) },
                ];
                break;
              default:
                o = [
                  { eventName: 'click', callback: (r) => t.presentFromTrigger(r) },
                  { eventName: 'ionPopoverActivateTrigger', callback: (r) => t.presentFromTrigger(r, !0) },
                ];
            }
            var r;
            return (
              o.forEach(({ eventName: i, callback: r }) => n.addEventListener(i, r)),
              n.setAttribute('data-ion-popover-trigger', 'true'),
              () => {
                (o.forEach(({ eventName: i, callback: r }) => n.removeEventListener(i, r)),
                  n.removeAttribute('data-ion-popover-trigger'));
              }
            );
          },
          tc = (n, e) => (e && 'ION-ITEM' === e.tagName ? n.findIndex((t) => t === e) : -1),
          ni = (n) => {
            const t = (0, I.g)(n).querySelector('button');
            t && (0, I.r)(() => t.focus());
          },
          ef = (n) => {
            const e = (function () {
              var t = (0, y.A)(function* (o) {
                var i;
                const r = document.activeElement;
                let a = [];
                const s = null === (i = o.target) || void 0 === i ? void 0 : i.tagName;
                if ('ION-POPOVER' === s || 'ION-ITEM' === s) {
                  try {
                    a = Array.from(n.querySelectorAll('ion-item:not(ion-popover ion-popover *):not([disabled])'));
                  } catch {}
                  switch (o.key) {
                    case 'ArrowLeft':
                      (yield n.getParentPopover()) && n.dismiss(void 0, void 0, !1);
                      break;
                    case 'ArrowDown':
                      o.preventDefault();
                      const c = ((n, e) => n[tc(n, e) + 1])(a, r);
                      void 0 !== c && ni(c);
                      break;
                    case 'ArrowUp':
                      o.preventDefault();
                      const d = ((n, e) => n[tc(n, e) - 1])(a, r);
                      void 0 !== d && ni(d);
                      break;
                    case 'Home':
                      o.preventDefault();
                      const p = a[0];
                      void 0 !== p && ni(p);
                      break;
                    case 'End':
                      o.preventDefault();
                      const f = a[a.length - 1];
                      void 0 !== f && ni(f);
                      break;
                    case 'ArrowRight':
                    case ' ':
                    case 'Enter':
                      if (r && ((n) => n.hasAttribute('data-ion-popover-trigger'))(r)) {
                        const g = new CustomEvent('ionPopoverActivateTrigger');
                        r.dispatchEvent(g);
                      }
                  }
                }
              });
              return function (i) {
                return t.apply(this, arguments);
              };
            })();
            return (n.addEventListener('keydown', e), () => n.removeEventListener('keydown', e));
          },
          nc = (n, e, t, o, i, r, a, s, l, c, d) => {
            var p;
            let f = { top: 0, left: 0, width: 0, height: 0 };
            if ('event' === r) {
              if (!d) return l;
              f = { top: d.clientY, left: d.clientX, width: 1, height: 1 };
            } else {
              const F = d,
                ne = c || (null === (p = F?.detail) || void 0 === p ? void 0 : p.ionShadowTarget) || F?.target;
              if (!ne) return l;
              const xe = ne.getBoundingClientRect();
              f = { top: xe.top, left: xe.left, width: xe.width, height: xe.height };
            }
            const g = of(a, f, e, t, o, i, n),
              b = rf(s, a, f, e, t),
              v = g.top + b.top,
              x = g.left + b.left,
              { arrowTop: k, arrowLeft: w } = nf(a, o, i, v, x, e, t, n),
              { originX: $, originY: T } = tf(a, s, n);
            return { top: v, left: x, referenceCoordinates: f, arrowTop: k, arrowLeft: w, originX: $, originY: T };
          },
          tf = (n, e, t) => {
            switch (n) {
              case 'top':
                return { originX: oc(e), originY: 'bottom' };
              case 'bottom':
                return { originX: oc(e), originY: 'top' };
              case 'left':
                return { originX: 'right', originY: oi(e) };
              case 'right':
                return { originX: 'left', originY: oi(e) };
              case 'start':
                return { originX: t ? 'left' : 'right', originY: oi(e) };
              case 'end':
                return { originX: t ? 'right' : 'left', originY: oi(e) };
            }
          },
          oc = (n) => {
            switch (n) {
              case 'start':
                return 'left';
              case 'center':
                return 'center';
              case 'end':
                return 'right';
            }
          },
          oi = (n) => {
            switch (n) {
              case 'start':
                return 'top';
              case 'center':
                return 'center';
              case 'end':
                return 'bottom';
            }
          },
          nf = (n, e, t, o, i, r, a, s) => {
            const l = { arrowTop: o + a / 2 - e / 2, arrowLeft: i + r - e / 2 },
              c = { arrowTop: o + a / 2 - e / 2, arrowLeft: i - 1.5 * e };
            switch (n) {
              case 'top':
                return { arrowTop: o + a, arrowLeft: i + r / 2 - e / 2 };
              case 'bottom':
                return { arrowTop: o - t, arrowLeft: i + r / 2 - e / 2 };
              case 'left':
                return l;
              case 'right':
                return c;
              case 'start':
                return s ? c : l;
              case 'end':
                return s ? l : c;
              default:
                return { arrowTop: 0, arrowLeft: 0 };
            }
          },
          of = (n, e, t, o, i, r, a) => {
            const s = { top: e.top, left: e.left - t - i },
              l = { top: e.top, left: e.left + e.width + i };
            switch (n) {
              case 'top':
                return { top: e.top - o - r, left: e.left };
              case 'right':
                return l;
              case 'bottom':
                return { top: e.top + e.height + r, left: e.left };
              case 'left':
                return s;
              case 'start':
                return a ? l : s;
              case 'end':
                return a ? s : l;
            }
          },
          rf = (n, e, t, o, i) => {
            switch (n) {
              case 'center':
                return sf(e, t, o, i);
              case 'end':
                return af(e, t, o, i);
              default:
                return { top: 0, left: 0 };
            }
          },
          af = (n, e, t, o) => {
            switch (n) {
              case 'start':
              case 'end':
              case 'left':
              case 'right':
                return { top: -(o - e.height), left: 0 };
              default:
                return { top: 0, left: -(t - e.width) };
            }
          },
          sf = (n, e, t, o) => {
            switch (n) {
              case 'start':
              case 'end':
              case 'left':
              case 'right':
                return { top: -(o / 2 - e.height / 2), left: 0 };
              default:
                return { top: 0, left: -(t / 2 - e.width / 2) };
            }
          },
          ic = (n, e, t, o, i, r, a, s, l, c, d, p, f = 0, g = 0, b = 0) => {
            let v = f;
            const x = g;
            let $,
              k = t,
              w = e,
              T = c,
              E = d,
              F = !1,
              ne = !1;
            const xe = p ? p.top + p.height : r / 2 - s / 2,
              X = p ? p.height : 0;
            let K = !1;
            return (
              k < o + l
                ? ((k = o), (F = !0), (T = 'left'))
                : a + o + k + l > i && ((ne = !0), (k = i - a - o), (T = 'right')),
              xe + X + s > r &&
                ('top' === n || 'bottom' === n) &&
                (xe - s > 0
                  ? ((w = Math.max(12, xe - s - X - (b - 1))), (v = w + s), (E = 'bottom'), (K = !0))
                  : ($ = o)),
              {
                top: w,
                left: k,
                bottom: $,
                originX: T,
                originY: E,
                checkSafeAreaLeft: F,
                checkSafeAreaRight: ne,
                arrowTop: v,
                arrowLeft: x,
                addPopoverBottomClass: K,
              }
            );
          },
          df = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: l } = e,
              c = n.ownerDocument,
              d = 'rtl' === c.dir,
              p = c.defaultView.innerWidth,
              f = c.defaultView.innerHeight,
              g = (0, I.g)(n),
              b = g.querySelector('.popover-content'),
              v = g.querySelector('.popover-arrow'),
              x = r || (null === (t = o?.detail) || void 0 === t ? void 0 : t.ionShadowTarget) || o?.target,
              { contentWidth: k, contentHeight: w } = ec(i, b, x),
              { arrowWidth: $, arrowHeight: T } = ((n) => {
                if (!n) return { arrowWidth: 0, arrowHeight: 0 };
                const { width: e, height: t } = n.getBoundingClientRect();
                return { arrowWidth: e, arrowHeight: t };
              })(v),
              F = nc(
                d,
                k,
                w,
                $,
                T,
                a,
                s,
                l,
                { top: f / 2 - w / 2, left: p / 2 - k / 2, originX: d ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              ne = 'cover' === i ? 0 : 5,
              xe = 'cover' === i ? 0 : 25,
              {
                originX: X,
                originY: K,
                top: le,
                left: oe,
                bottom: Be,
                checkSafeAreaLeft: st,
                checkSafeAreaRight: Qe,
                arrowTop: Pt,
                arrowLeft: gt,
                addPopoverBottomClass: eo,
              } = ic(
                s,
                F.top,
                F.left,
                ne,
                p,
                f,
                k,
                w,
                xe,
                F.originX,
                F.originY,
                F.referenceCoordinates,
                F.arrowTop,
                F.arrowLeft,
                T,
              ),
              to = (0, j.c)(),
              pt = (0, j.c)(),
              wt = (0, j.c)();
            return (
              pt
                .addElement(g.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              wt
                .addElement(g.querySelector('.popover-arrow'))
                .addElement(g.querySelector('.popover-content'))
                .fromTo('opacity', 0.01, 1),
              to
                .easing('ease')
                .duration(100)
                .beforeAddWrite(() => {
                  ('cover' === i && n.style.setProperty('--width', `${k}px`),
                    eo && n.classList.add('popover-bottom'),
                    void 0 !== Be && b.style.setProperty('bottom', `${Be}px`));
                  let Ee = `${oe}px`;
                  (st && (Ee = `${oe}px + var(--ion-safe-area-left, 0)`),
                    Qe && (Ee = `${oe}px - var(--ion-safe-area-right, 0)`),
                    b.style.setProperty('top', `calc(${le}px + var(--offset-y, 0))`),
                    b.style.setProperty('left', `calc(${Ee} + var(--offset-x, 0))`),
                    b.style.setProperty('transform-origin', `${K} ${X}`),
                    null !== v &&
                      (((n, e = !1, t, o) => !((!t && !o) || ('top' !== n && 'bottom' !== n && e)))(
                        s,
                        F.top !== le || F.left !== oe,
                        o,
                        r,
                      )
                        ? (v.style.setProperty('top', `calc(${Pt}px + var(--offset-y, 0))`),
                          v.style.setProperty('left', `calc(${gt}px + var(--offset-x, 0))`))
                        : v.style.setProperty('display', 'none')));
                })
                .addAnimation([pt, wt])
            );
          },
          pf = (n) => {
            const e = (0, I.g)(n),
              t = e.querySelector('.popover-content'),
              o = e.querySelector('.popover-arrow'),
              i = (0, j.c)(),
              r = (0, j.c)(),
              a = (0, j.c)();
            return (
              r.addElement(e.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              a
                .addElement(e.querySelector('.popover-arrow'))
                .addElement(e.querySelector('.popover-content'))
                .fromTo('opacity', 0.99, 0),
              i
                .easing('ease')
                .afterAddWrite(() => {
                  (n.style.removeProperty('--width'),
                    n.classList.remove('popover-bottom'),
                    t.style.removeProperty('top'),
                    t.style.removeProperty('left'),
                    t.style.removeProperty('bottom'),
                    t.style.removeProperty('transform-origin'),
                    o &&
                      (o.style.removeProperty('top'),
                      o.style.removeProperty('left'),
                      o.style.removeProperty('display')));
                })
                .duration(300)
                .addAnimation([r, a])
            );
          },
          hf = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: l } = e,
              c = n.ownerDocument,
              d = 'rtl' === c.dir,
              p = c.defaultView.innerWidth,
              f = c.defaultView.innerHeight,
              g = (0, I.g)(n),
              b = g.querySelector('.popover-content'),
              v = r || (null === (t = o?.detail) || void 0 === t ? void 0 : t.ionShadowTarget) || o?.target,
              { contentWidth: x, contentHeight: k } = ec(i, b, v),
              $ = nc(
                d,
                x,
                k,
                0,
                0,
                a,
                s,
                l,
                { top: f / 2 - k / 2, left: p / 2 - x / 2, originX: d ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              T = 'cover' === i ? 0 : 12,
              {
                originX: E,
                originY: F,
                top: ne,
                left: xe,
                bottom: X,
              } = ic(s, $.top, $.left, T, p, f, x, k, 0, $.originX, $.originY, $.referenceCoordinates),
              K = (0, j.c)(),
              le = (0, j.c)(),
              oe = (0, j.c)(),
              Be = (0, j.c)(),
              st = (0, j.c)();
            return (
              le
                .addElement(g.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              oe.addElement(g.querySelector('.popover-wrapper')).duration(150).fromTo('opacity', 0.01, 1),
              Be.addElement(b)
                .beforeStyles({
                  top: `calc(${ne}px + var(--offset-y, 0px))`,
                  left: `calc(${xe}px + var(--offset-x, 0px))`,
                  'transform-origin': `${F} ${E}`,
                })
                .beforeAddWrite(() => {
                  void 0 !== X && b.style.setProperty('bottom', `${X}px`);
                })
                .fromTo('transform', 'scale(0.8)', 'scale(1)'),
              st.addElement(g.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1),
              K.easing('cubic-bezier(0.36,0.66,0.04,1)')
                .duration(300)
                .beforeAddWrite(() => {
                  ('cover' === i && n.style.setProperty('--width', `${x}px`),
                    'bottom' === F && n.classList.add('popover-bottom'));
                })
                .addAnimation([le, oe, Be, st])
            );
          },
          ff = (n) => {
            const e = (0, I.g)(n),
              t = e.querySelector('.popover-content'),
              o = (0, j.c)(),
              i = (0, j.c)(),
              r = (0, j.c)();
            return (
              i.addElement(e.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              r.addElement(e.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0),
              o
                .easing('ease')
                .afterAddWrite(() => {
                  (n.style.removeProperty('--width'),
                    n.classList.remove('popover-bottom'),
                    t.style.removeProperty('top'),
                    t.style.removeProperty('left'),
                    t.style.removeProperty('bottom'),
                    t.style.removeProperty('transform-origin'));
                })
                .duration(150)
                .addAnimation([i, r])
            );
          },
          bf = ge(
            class extends ve {
              constructor() {
                (super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.didPresent = S(this, 'ionPopoverDidPresent', 7)),
                  (this.willPresent = S(this, 'ionPopoverWillPresent', 7)),
                  (this.willDismiss = S(this, 'ionPopoverWillDismiss', 7)),
                  (this.didDismiss = S(this, 'ionPopoverDidDismiss', 7)),
                  (this.didPresentShorthand = S(this, 'didPresent', 7)),
                  (this.willPresentShorthand = S(this, 'willPresent', 7)),
                  (this.willDismissShorthand = S(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = S(this, 'didDismiss', 7)),
                  (this.ionMount = S(this, 'ionMount', 7)),
                  (this.parentPopover = null),
                  (this.coreDelegate = Pr()),
                  (this.lockController = Uo()),
                  (this.inline = !1),
                  (this.focusDescendantOnPresent = !1),
                  (this.presented = !1),
                  (this.hasController = !1),
                  (this.keyboardClose = !0),
                  (this.backdropDismiss = !0),
                  (this.showBackdrop = !0),
                  (this.translucent = !1),
                  (this.animated = !0),
                  (this.triggerAction = 'click'),
                  (this.size = 'auto'),
                  (this.dismissOnSelect = !1),
                  (this.reference = 'trigger'),
                  (this.side = 'bottom'),
                  (this.arrow = !0),
                  (this.isOpen = !1),
                  (this.keyboardEvents = !1),
                  (this.focusTrap = !0),
                  (this.keepContentsMounted = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, Kt);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = vf[e.type];
                    if (t && o) {
                      const i = new CustomEvent(o, { bubbles: !1, cancelable: !1, detail: e.detail });
                      t.dispatchEvent(i);
                    }
                  }),
                  (this.configureTriggerInteraction = () => {
                    const { trigger: e, triggerAction: t, el: o, destroyTriggerInteraction: i } = this;
                    if ((i && i(), void 0 === e)) return;
                    const r = (this.triggerEl = void 0 !== e ? document.getElementById(e) : null);
                    r
                      ? (this.destroyTriggerInteraction = Zh(r, t, o))
                      : (0, V.p)(
                          `[ion-popover] - A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,
                          this.el,
                        );
                  }),
                  (this.configureKeyboardInteraction = () => {
                    const { destroyKeyboardInteraction: e, el: t } = this;
                    (e && e(), (this.destroyKeyboardInteraction = ef(t)));
                  }),
                  (this.configureDismissInteraction = () => {
                    const {
                      destroyDismissInteraction: e,
                      parentPopover: t,
                      triggerAction: o,
                      triggerEl: i,
                      el: r,
                    } = this;
                    !t ||
                      !i ||
                      (e && e(),
                      (this.destroyDismissInteraction = ((n, e, t, o) => {
                        let i = [];
                        const a = (0, I.g)(o).querySelector('.popover-content');
                        return (
                          (i =
                            'hover' === e
                              ? [
                                  {
                                    eventName: 'mouseenter',
                                    callback: (s) => {
                                      document.elementFromPoint(s.clientX, s.clientY) !== n &&
                                        t.dismiss(void 0, void 0, !1);
                                    },
                                  },
                                ]
                              : [
                                  {
                                    eventName: 'click',
                                    callback: (s) => {
                                      s.target.closest('[data-ion-popover-trigger]') !== n
                                        ? t.dismiss(void 0, void 0, !1)
                                        : s.stopPropagation();
                                    },
                                  },
                                ]),
                          i.forEach(({ eventName: s, callback: l }) => a.addEventListener(s, l)),
                          () => {
                            i.forEach(({ eventName: s, callback: l }) => a.removeEventListener(s, l));
                          }
                        );
                      })(i, o, r, t)));
                  }));
              }
              onTriggerChange() {
                this.configureTriggerInteraction();
              }
              onIsOpenChange(e, t) {
                !0 === e && !1 === t ? this.present() : !1 === e && !0 === t && this.dismiss();
              }
              connectedCallback() {
                const { configureTriggerInteraction: e, el: t } = this;
                (Ko(t), e());
              }
              disconnectedCallback() {
                const { destroyTriggerInteraction: e } = this;
                e && e();
              }
              componentWillLoad() {
                var e, t;
                const { el: o } = this,
                  i =
                    null !== (t = null === (e = this.htmlAttributes) || void 0 === e ? void 0 : e.id) && void 0 !== t
                      ? t
                      : Zo(o);
                ((this.parentPopover = o.closest(`ion-popover:not(#${i})`)),
                  void 0 === this.alignment && (this.alignment = 'ios' === W(this) ? 'center' : 'start'));
              }
              componentDidLoad() {
                const { parentPopover: e, isOpen: t } = this;
                (!0 === t && (0, I.r)(() => this.present()),
                  e &&
                    (0, I.a)(e, 'ionPopoverWillDismiss', () => {
                      this.dismiss(void 0, void 0, !1);
                    }),
                  this.configureTriggerInteraction());
              }
              presentFromTrigger(e) {
                var t = this;
                return (0, y.A)(function* (o, i = !1) {
                  ((t.focusDescendantOnPresent = i), yield t.present(o), (t.focusDescendantOnPresent = !1));
                }).apply(this, arguments);
              }
              getDelegate(e = !1) {
                if (this.workingDelegate && !e) return { delegate: this.workingDelegate, inline: this.inline };
                const o = (this.inline = null !== this.el.parentNode && !this.hasController);
                return {
                  inline: o,
                  delegate: (this.workingDelegate = o ? this.delegate || this.coreDelegate : this.delegate),
                };
              }
              present(e) {
                var t = this;
                return (0, y.A)(function* () {
                  const o = yield t.lockController.lock();
                  if (t.presented) return void o();
                  const { el: i } = t,
                    { inline: r, delegate: a } = t.getDelegate(!0);
                  (t.ionMount.emit(),
                    (t.usersElement = yield xl(a, i, t.component, ['popover-viewport'], t.componentProps, r)),
                    t.keyboardEvents || t.configureKeyboardInteraction(),
                    t.configureDismissInteraction(),
                    (0, I.k)(i) ? yield (0, ae.e)(t.usersElement) : t.keepContentsMounted || (yield (0, ae.w)()),
                    yield Qo(t, 'popoverEnter', df, hf, {
                      event: e || t.event,
                      size: t.size,
                      trigger: t.triggerEl,
                      reference: t.reference,
                      side: t.side,
                      align: t.alignment,
                    }),
                    t.focusDescendantOnPresent && Rr(i),
                    o());
                })();
              }
              dismiss(e, t) {
                var o = this;
                return (0, y.A)(function* (i, r, a = !0) {
                  const s = yield o.lockController.lock(),
                    { destroyKeyboardInteraction: l, destroyDismissInteraction: c } = o;
                  a && o.parentPopover && o.parentPopover.dismiss(i, r, a);
                  const d = yield Jo(o, i, r, 'popoverLeave', pf, ff, o.event);
                  if (d) {
                    (l && (l(), (o.destroyKeyboardInteraction = void 0)),
                      c && (c(), (o.destroyDismissInteraction = void 0)));
                    const { delegate: p } = o.getDelegate();
                    yield yl(p, o.usersElement);
                  }
                  return (s(), d);
                }).apply(this, arguments);
              }
              getParentPopover() {
                var e = this;
                return (0, y.A)(function* () {
                  return e.parentPopover;
                })();
              }
              onDidDismiss() {
                return Ft(this.el, 'ionPopoverDidDismiss');
              }
              onWillDismiss() {
                return Ft(this.el, 'ionPopoverWillDismiss');
              }
              render() {
                const e = W(this),
                  {
                    onLifecycle: t,
                    parentPopover: o,
                    dismissOnSelect: i,
                    side: r,
                    arrow: a,
                    htmlAttributes: s,
                    focusTrap: l,
                  } = this,
                  c = Yt('desktop'),
                  d = a && !o;
                return h(
                  me,
                  Object.assign(
                    {
                      key: '16866c02534968c982cf4730d2936d03a5107c8b',
                      'aria-modal': 'true',
                      'no-router': !0,
                      tabindex: '-1',
                    },
                    s,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(Object.assign({}, nt(this.cssClass)), {
                        [e]: !0,
                        'popover-translucent': this.translucent,
                        'overlay-hidden': !0,
                        'popover-desktop': c,
                        [`popover-side-${r}`]: !0,
                        [Yn]: !1 === l,
                        'popover-nested': !!o,
                      }),
                      onIonPopoverDidPresent: t,
                      onIonPopoverWillPresent: t,
                      onIonPopoverWillDismiss: t,
                      onIonPopoverDidDismiss: t,
                      onIonBackdropTap: this.onBackdropTap,
                    },
                  ),
                  !o &&
                    h('ion-backdrop', {
                      key: '0df258601a4d30df3c27aa8234a7d5e056c3ecbb',
                      tappable: this.backdropDismiss,
                      visible: this.showBackdrop,
                      part: 'backdrop',
                    }),
                  h(
                    'div',
                    {
                      key: 'f94e80ed996b957b5cd09b826472b4f60e8fcc78',
                      class: 'popover-wrapper ion-overlay-wrapper',
                      onClick: i ? () => this.dismiss() : void 0,
                    },
                    d &&
                      h('div', {
                        key: '185ce22f6386e8444a9cc7b8818dbfc16c463c99',
                        class: 'popover-arrow',
                        part: 'arrow',
                      }),
                    h(
                      'div',
                      { key: '206202b299404e110de5397b229678cca18568d3', class: 'popover-content', part: 'content' },
                      h('slot', { key: 'ee543a0b92d6e35a837c0a0e4617c7b0fc4ad0b0' }),
                    ),
                  ),
                );
              }
              get el() {
                return this;
              }
              static get watchers() {
                return { trigger: ['onTriggerChange'], triggerAction: ['onTriggerChange'], isOpen: ['onIsOpenChange'] };
              }
              static get style() {
                return {
                  ios: ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',
                  md: ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}',
                };
              }
            },
            [
              289,
              'ion-popover',
              {
                hasController: [4, 'has-controller'],
                delegate: [16],
                overlayIndex: [2, 'overlay-index'],
                enterAnimation: [16, 'enter-animation'],
                leaveAnimation: [16, 'leave-animation'],
                component: [1],
                componentProps: [16, 'component-props'],
                keyboardClose: [4, 'keyboard-close'],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                event: [8],
                showBackdrop: [4, 'show-backdrop'],
                translucent: [4],
                animated: [4],
                htmlAttributes: [16, 'html-attributes'],
                triggerAction: [1, 'trigger-action'],
                trigger: [1],
                size: [1],
                dismissOnSelect: [4, 'dismiss-on-select'],
                reference: [1],
                side: [1],
                alignment: [1025],
                arrow: [4],
                isOpen: [4, 'is-open'],
                keyboardEvents: [4, 'keyboard-events'],
                focusTrap: [4, 'focus-trap'],
                keepContentsMounted: [4, 'keep-contents-mounted'],
                presented: [32],
                presentFromTrigger: [64],
                present: [64],
                dismiss: [64],
                getParentPopover: [64],
                onDidDismiss: [64],
                onWillDismiss: [64],
              },
              void 0,
              { trigger: ['onTriggerChange'], triggerAction: ['onTriggerChange'], isOpen: ['onIsOpenChange'] },
            ],
          ),
          vf = {
            ionPopoverDidPresent: 'ionViewDidEnter',
            ionPopoverWillPresent: 'ionViewWillEnter',
            ionPopoverWillDismiss: 'ionViewWillLeave',
            ionPopoverDidDismiss: 'ionViewDidLeave',
          };
        const xf = function Yr() {
          typeof customElements > 'u' ||
            ['ion-popover', 'ion-backdrop'].forEach((e) => {
              switch (e) {
                case 'ion-popover':
                  customElements.get(e) || customElements.define(e, bf);
                  break;
                case 'ion-backdrop':
                  customElements.get(e) || gn();
              }
            });
        };
        var rc = (function (n) {
          return ((n.Heavy = 'HEAVY'), (n.Medium = 'MEDIUM'), (n.Light = 'LIGHT'), n);
        })(rc || {});
        const bn = {
            getEngine() {
              const n = Mr();
              if (n?.isPluginAvailable('Haptics')) return n.Plugins.Haptics;
            },
            available() {
              if (!this.getEngine()) return !1;
              const e = Mr();
              return 'web' !== e?.getPlatform() || (typeof navigator < 'u' && void 0 !== navigator.vibrate);
            },
            impact(n) {
              const e = this.getEngine();
              e && e.impact({ style: n.style });
            },
            notification(n) {
              const e = this.getEngine();
              e && e.notification({ type: n.type });
            },
            selection() {
              this.impact({ style: rc.Light });
            },
            selectionStart() {
              const n = this.getEngine();
              n && n.selectionStart();
            },
            selectionChanged() {
              const n = this.getEngine();
              n && n.selectionChanged();
            },
            selectionEnd() {
              const n = this.getEngine();
              n && n.selectionEnd();
            },
          },
          Kn = () => bn.available(),
          sc = () => {
            Kn() && bn.selectionStart();
          },
          lc = () => {
            Kn() && bn.selectionChanged();
          },
          dc = (n, e) => {
            let t, o;
            const i = (s, l, c) => {
                if (typeof document > 'u') return;
                const d = document.elementFromPoint(s, l);
                d && e(d) && !d.disabled ? d !== t && (a(), r(d, c)) : a();
              },
              r = (s, l) => {
                ((t = s), o || (o = t));
                const c = t;
                (Ke(() => c.classList.add('ion-activated')), l());
              },
              a = (s = !1) => {
                if (!t) return;
                const l = t;
                (Ke(() => l.classList.remove('ion-activated')), s && o !== t && t.click(), (t = void 0));
              };
            return (0, Hr.createGesture)({
              el: n,
              gestureName: 'buttonActiveDrag',
              threshold: 0,
              onStart: (s) => i(s.currentX, s.currentY, sc),
              onMove: (s) => i(s.currentX, s.currentY, lc),
              onEnd: () => {
                (a(!0), Kn() && bn.selectionEnd(), (o = void 0));
              },
            });
          };
        let Gr;
        const pc = (n, e, t, o, i) => (
            (t = 'ios' === (t && ri(t)) ? 'ios' : 'md'),
            o && 'ios' === t
              ? (n = ri(o))
              : i && 'md' === t
                ? (n = ri(i))
                : (!n && e && !uc(e) && (n = e), ii(n) && (n = ri(n))),
            ii(n) && '' !== n.trim() && '' === n.replace(/[a-z]|-|\d/gi, '') ? n : null
          ),
          Kr = (n) => (ii(n) && ((n = n.trim()), uc(n)) ? n : null),
          uc = (n) => n.length > 0 && /(\/|\.)/.test(n),
          ii = (n) => 'string' == typeof n,
          ri = (n) => n.toLowerCase(),
          Cf = (n) => (n && '' !== n.dir ? 'rtl' === n.dir.toLowerCase() : 'rtl' === document?.dir.toLowerCase()),
          hc = (n) => {
            if (1 === n.nodeType) {
              if ('script' === n.nodeName.toLowerCase()) return !1;
              for (let e = 0; e < n.attributes.length; e++) {
                const t = n.attributes[e].name;
                if (ii(t) && 0 === t.toLowerCase().indexOf('on')) return !1;
              }
              for (let e = 0; e < n.childNodes.length; e++) if (!hc(n.childNodes[e])) return !1;
            }
            return !0;
          },
          vn = new Map(),
          fc = new Map();
        let Zr;
        function Xr(n) {
          return (vn.set(n, ''), '');
        }
        const Of = ge(
            class extends ve {
              constructor() {
                (super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.iconName = null),
                  (this.inheritedAttributes = {}),
                  (this.didLoadIcon = !1),
                  (this.isVisible = !1),
                  (this.mode = jf()),
                  (this.lazy = !1),
                  (this.sanitize = !0));
              }
              componentWillLoad() {
                this.inheritedAttributes = ((n, e = []) => {
                  const t = {};
                  return (
                    e.forEach((o) => {
                      n.hasAttribute(o) &&
                        (null !== n.getAttribute(o) && (t[o] = n.getAttribute(o)), n.removeAttribute(o));
                    }),
                    t
                  );
                })(this.el, ['aria-label']);
              }
              connectedCallback() {
                this.waitUntilVisible(this.el, '50px', () => {
                  ((this.isVisible = !0), this.loadIcon());
                });
              }
              componentDidLoad() {
                this.didLoadIcon || this.loadIcon();
              }
              disconnectedCallback() {
                this.io && (this.io.disconnect(), (this.io = void 0));
              }
              waitUntilVisible(e, t, o) {
                if (!(this.lazy && typeof window < 'u' && window.IntersectionObserver)) return o();
                const r = (this.io = new window.IntersectionObserver(
                  (a) => {
                    a[0].isIntersecting && (r.disconnect(), (this.io = void 0), o());
                  },
                  { rootMargin: t },
                ));
                r.observe(e);
              }
              loadIcon() {
                if (this.isVisible) {
                  const e = ((n) => {
                    let e = Kr(n.src);
                    return (
                      e ||
                      ((e = pc(n.name, n.icon, n.mode, n.ios, n.md)),
                      e
                        ? ((n, e) => {
                            const t = (() => {
                              if (typeof window > 'u') return new Map();
                              if (!Gr) {
                                const n = window;
                                ((n.Ionicons = n.Ionicons || {}), (Gr = n.Ionicons.map = n.Ionicons.map || new Map()));
                              }
                              return Gr;
                            })().get(n);
                            if (t) return t;
                            try {
                              return ((n) => {
                                const e = new URL(n, re.$resourcesUrl$);
                                return e.origin !== ce.location.origin ? e.href : e.pathname;
                              })(`svg/${n}.svg`);
                            } catch (o) {
                              (console.log('e', o),
                                console.warn(
                                  `[Ionicons Warning]: Could not load icon with name "${n}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,
                                  e,
                                ));
                            }
                          })(e, n)
                        : n.icon && ((e = Kr(n.icon)), e || ((e = Kr(n.icon[n.mode])), e))
                          ? e
                          : null)
                    );
                  })(this);
                  e &&
                    (vn.has(e)
                      ? (this.svgContent = vn.get(e))
                      : ((n, e) =>
                          fc.get(n) ||
                          (typeof fetch < 'u' && typeof document < 'u'
                            ? ((n) => n.startsWith('data:image/svg+xml'))(n) && ((n) => -1 !== n.indexOf(';utf8,'))(n)
                              ? Promise.resolve(
                                  (function Df(n) {
                                    Zr || (Zr = new DOMParser());
                                    const t = Zr.parseFromString(n, 'text/html').querySelector('svg');
                                    if (t) return (vn.set(n, t.outerHTML), t.outerHTML);
                                    throw new Error(`Could not parse svg from ${n}`);
                                  })(n),
                                )
                              : (function Af(n, e) {
                                  const t = fetch(n)
                                    .then((o) =>
                                      o
                                        .text()
                                        .then((i) => {
                                          i &&
                                            !1 !== e &&
                                            (i = ((n) => {
                                              const e = document.createElement('div');
                                              e.innerHTML = n;
                                              for (let o = e.childNodes.length - 1; o >= 0; o--)
                                                'svg' !== e.childNodes[o].nodeName.toLowerCase() &&
                                                  e.removeChild(e.childNodes[o]);
                                              const t = e.firstElementChild;
                                              if (t && 'svg' === t.nodeName.toLowerCase()) {
                                                const o = t.getAttribute('class') || '';
                                                if ((t.setAttribute('class', (o + ' s-ion-icon').trim()), hc(t)))
                                                  return e.innerHTML;
                                              }
                                              return '';
                                            })(i));
                                          const r = i || '';
                                          return (vn.set(n, r), r);
                                        })
                                        .catch(() => Xr(n)),
                                    )
                                    .catch(() => Xr(n));
                                  return (fc.set(n, t), t);
                                })(n, e)
                            : Promise.resolve(Xr(n))))(e, this.sanitize).then(() => (this.svgContent = vn.get(e))),
                    (this.didLoadIcon = !0));
                }
                this.iconName = pc(this.name, this.icon, this.mode, this.ios, this.md);
              }
              render() {
                const { flipRtl: e, iconName: t, inheritedAttributes: o, el: i } = this,
                  r = this.mode || 'md',
                  a = !!t && (t.includes('arrow') || t.includes('chevron')) && !1 !== e,
                  s = e || a;
                return h(
                  me,
                  Object.assign(
                    {
                      key: '0578c899781ca145dd8205acd9670af39b57cf2e',
                      role: 'img',
                      class: Object.assign(Object.assign({ [r]: !0 }, Pf(this.color)), {
                        [`icon-${this.size}`]: !!this.size,
                        'flip-rtl': s,
                        'icon-rtl': s && Cf(i),
                      }),
                    },
                    o,
                  ),
                  h(
                    'div',
                    this.svgContent ? { class: 'icon-inner', innerHTML: this.svgContent } : { class: 'icon-inner' },
                  ),
                );
              }
              static get assetsDirs() {
                return ['svg'];
              }
              get el() {
                return this;
              }
              static get watchers() {
                return {
                  name: ['loadIcon'],
                  src: ['loadIcon'],
                  icon: ['loadIcon'],
                  ios: ['loadIcon'],
                  md: ['loadIcon'],
                };
              }
              static get style() {
                return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
              }
            },
            [
              257,
              'ion-icon',
              {
                mode: [1025],
                color: [1],
                ios: [1],
                md: [1],
                flipRtl: [4, 'flip-rtl'],
                name: [513],
                src: [1],
                icon: [8],
                size: [1],
                lazy: [4],
                sanitize: [4],
                svgContent: [32],
                isVisible: [32],
              },
              void 0,
              { name: ['loadIcon'], src: ['loadIcon'], icon: ['loadIcon'], ios: ['loadIcon'], md: ['loadIcon'] },
            ],
          ),
          jf = () => (typeof document < 'u' && document.documentElement.getAttribute('mode')) || 'md',
          Pf = (n) => (n ? { 'ion-color': !0, [`ion-color-${n}`]: !0 } : null);
        const Lf = ge(
            class extends ve {
              constructor() {
                (super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded'));
              }
              addRipple(e, t) {
                var o = this;
                return (0, y.A)(function* () {
                  return new Promise((i) => {
                    sn(() => {
                      const r = o.el.getBoundingClientRect(),
                        a = r.width,
                        s = r.height,
                        l = Math.sqrt(a * a + s * s),
                        c = Math.max(s, a),
                        d = o.unbounded ? c : l + Ff,
                        p = Math.floor(c * Bf),
                        f = d / p;
                      let g = e - r.left,
                        b = t - r.top;
                      o.unbounded && ((g = 0.5 * a), (b = 0.5 * s));
                      const v = g - 0.5 * p,
                        x = b - 0.5 * p,
                        k = 0.5 * a - g,
                        w = 0.5 * s - b;
                      Ke(() => {
                        const $ = document.createElement('div');
                        $.classList.add('ripple-effect');
                        const T = $.style;
                        ((T.top = x + 'px'),
                          (T.left = v + 'px'),
                          (T.width = T.height = p + 'px'),
                          T.setProperty('--final-scale', `${f}`),
                          T.setProperty('--translate-end', `${k}px, ${w}px`),
                          (o.el.shadowRoot || o.el).appendChild($),
                          setTimeout(() => {
                            i(() => {
                              Rf($);
                            });
                          }, 325));
                      });
                    });
                  });
                })();
              }
              get unbounded() {
                return 'unbounded' === this.type;
              }
              render() {
                const e = W(this);
                return h(me, {
                  key: 'ae9d3b1ed6773a9b9bb2267129f7e9af23b6c9fc',
                  role: 'presentation',
                  class: { [e]: !0, unbounded: this.unbounded },
                });
              }
              get el() {
                return this;
              }
              static get style() {
                return ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}';
              }
            },
            [257, 'ion-ripple-effect', { type: [1], addRipple: [64] }],
          ),
          Rf = (n) => {
            (n.classList.add('fade-out'),
              setTimeout(() => {
                n.remove();
              }, 200));
          },
          Ff = 10,
          Bf = 0.5;
        function Bt() {
          typeof customElements > 'u' ||
            ['ion-ripple-effect'].forEach((e) => {
              'ion-ripple-effect' === e && (customElements.get(e) || customElements.define(e, Lf));
            });
        }
        const Nf = (n) => {
            const e = (0, j.c)(),
              t = (0, j.c)(),
              o = (0, j.c)();
            return (
              t
                .addElement(n.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(100%)', 'translateY(0%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([t, o])
            );
          },
          Hf = (n) => {
            const e = (0, j.c)(),
              t = (0, j.c)(),
              o = (0, j.c)();
            return (
              t.addElement(n.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(0%)', 'translateY(100%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([t, o])
            );
          },
          Vf = (n) => {
            const e = (0, j.c)(),
              t = (0, j.c)(),
              o = (0, j.c)();
            return (
              t
                .addElement(n.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(100%)', 'translateY(0%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([t, o])
            );
          },
          Wf = (n) => {
            const e = (0, j.c)(),
              t = (0, j.c)(),
              o = (0, j.c)();
            return (
              t.addElement(n.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(0%)', 'translateY(100%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([t, o])
            );
          },
          Yf = ge(
            class extends ve {
              constructor() {
                (super(),
                  this.__registerHost(),
                  (this.didPresent = S(this, 'ionActionSheetDidPresent', 7)),
                  (this.willPresent = S(this, 'ionActionSheetWillPresent', 7)),
                  (this.willDismiss = S(this, 'ionActionSheetWillDismiss', 7)),
                  (this.didDismiss = S(this, 'ionActionSheetDidDismiss', 7)),
                  (this.didPresentShorthand = S(this, 'didPresent', 7)),
                  (this.willPresentShorthand = S(this, 'willPresent', 7)),
                  (this.willDismissShorthand = S(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = S(this, 'didDismiss', 7)),
                  (this.delegateController = Rl(this)),
                  (this.lockController = Uo()),
                  (this.triggerController = Br()),
                  (this.presented = !1),
                  (this.hasController = !1),
                  (this.keyboardClose = !0),
                  (this.buttons = []),
                  (this.backdropDismiss = !0),
                  (this.translucent = !1),
                  (this.animated = !0),
                  (this.isOpen = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, Kt);
                  }),
                  (this.dispatchCancelHandler = (e) => {
                    if (ei(e.detail.role)) {
                      const o = this.getButtons().find((i) => 'cancel' === i.role);
                      this.callButtonHandler(o);
                    }
                  }));
              }
              onIsOpenChange(e, t) {
                !0 === e && !1 === t ? this.present() : !1 === e && !0 === t && this.dismiss();
              }
              triggerChanged() {
                const { trigger: e, el: t, triggerController: o } = this;
                e && o.addClickListener(t, e);
              }
              present() {
                var e = this;
                return (0, y.A)(function* () {
                  const t = yield e.lockController.lock();
                  (yield e.delegateController.attachViewToDom(), yield Qo(e, 'actionSheetEnter', Nf, Vf), t());
                })();
              }
              dismiss(e, t) {
                var o = this;
                return (0, y.A)(function* () {
                  const i = yield o.lockController.lock(),
                    r = yield Jo(o, e, t, 'actionSheetLeave', Hf, Wf);
                  return (r && o.delegateController.removeViewFromDom(), i(), r);
                })();
              }
              onDidDismiss() {
                return Ft(this.el, 'ionActionSheetDidDismiss');
              }
              onWillDismiss() {
                return Ft(this.el, 'ionActionSheetWillDismiss');
              }
              buttonClick(e) {
                var t = this;
                return (0, y.A)(function* () {
                  const o = e.role;
                  return ei(o)
                    ? t.dismiss(e.data, o)
                    : (yield t.callButtonHandler(e))
                      ? t.dismiss(e.data, e.role)
                      : Promise.resolve();
                })();
              }
              callButtonHandler(e) {
                return (0, y.A)(function* () {
                  return !(
                    e &&
                    !1 ===
                      (yield ((n, e) => {
                        if ('function' == typeof n)
                          return V.c.get(
                            '_zoneGate',
                            uh,
                          )(() => {
                            try {
                              return n(e);
                            } catch (o) {
                              throw o;
                            }
                          });
                      })(e.handler))
                  );
                })();
              }
              getButtons() {
                return this.buttons.map((e) => ('string' == typeof e ? { text: e } : e));
              }
              connectedCallback() {
                (Ko(this.el), this.triggerChanged());
              }
              disconnectedCallback() {
                (this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
                  this.triggerController.removeClickListener());
              }
              componentWillLoad() {
                var e;
                (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || Zo(this.el);
              }
              componentDidLoad() {
                const { groupEl: e, wrapperEl: t } = this;
                (!this.gesture &&
                  'ios' === W(this) &&
                  t &&
                  e &&
                  sn(() => {
                    e.scrollHeight > e.clientHeight ||
                      ((this.gesture = dc(t, (i) => i.classList.contains('action-sheet-button'))),
                      this.gesture.enable(!0));
                  }),
                  !0 === this.isOpen && (0, I.r)(() => this.present()),
                  this.triggerChanged());
              }
              render() {
                const { header: e, htmlAttributes: t, overlayIndex: o } = this,
                  i = W(this),
                  r = this.getButtons(),
                  a = r.find((c) => 'cancel' === c.role),
                  s = r.filter((c) => 'cancel' !== c.role),
                  l = `action-sheet-${o}-header`;
                return h(
                  me,
                  Object.assign(
                    {
                      key: '9fef156b2a1f09ca4a6c1fe1f37c374139bde03c',
                      role: 'dialog',
                      'aria-modal': 'true',
                      'aria-labelledby': void 0 !== e ? l : null,
                      tabindex: '-1',
                    },
                    t,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(Object.assign({ [i]: !0 }, nt(this.cssClass)), {
                        'overlay-hidden': !0,
                        'action-sheet-translucent': this.translucent,
                      }),
                      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
                      onIonBackdropTap: this.onBackdropTap,
                    },
                  ),
                  h('ion-backdrop', {
                    key: '81cf3f7d19864e041813987b46d2d115b8466819',
                    tappable: this.backdropDismiss,
                  }),
                  h('div', { key: '791c6a976683646fc306a42c15c5078b6f06a45f', tabindex: '0', 'aria-hidden': 'true' }),
                  h(
                    'div',
                    {
                      key: 'a350b489ef7852eab9dc2227ce6d92da27dd9bf9',
                      class: 'action-sheet-wrapper ion-overlay-wrapper',
                      ref: (c) => (this.wrapperEl = c),
                    },
                    h(
                      'div',
                      { key: '69ba51ee13510c1a411d87cb4845b11b7302a36f', class: 'action-sheet-container' },
                      h(
                        'div',
                        {
                          key: 'bded15b8306c36591e526f0f99e1eeabcbab3915',
                          class: 'action-sheet-group',
                          ref: (c) => (this.groupEl = c),
                        },
                        void 0 !== e &&
                          h(
                            'div',
                            {
                              key: '06b5147c0f6d9180fe8f12e75c9b4a0310226adc',
                              id: l,
                              class: {
                                'action-sheet-title': !0,
                                'action-sheet-has-sub-title': void 0 !== this.subHeader,
                              },
                            },
                            e,
                            this.subHeader &&
                              h(
                                'div',
                                { key: '54874362a75c679aba803bf4f8768f5404d2dd28', class: 'action-sheet-sub-title' },
                                this.subHeader,
                              ),
                          ),
                        s.map((c) =>
                          h(
                            'button',
                            Object.assign({}, c.htmlAttributes, {
                              type: 'button',
                              id: c.id,
                              class: mc(c),
                              onClick: () => this.buttonClick(c),
                              disabled: c.disabled,
                            }),
                            h(
                              'span',
                              { class: 'action-sheet-button-inner' },
                              c.icon &&
                                h('ion-icon', {
                                  icon: c.icon,
                                  'aria-hidden': 'true',
                                  lazy: !1,
                                  class: 'action-sheet-icon',
                                }),
                              c.text,
                            ),
                            'md' === i && h('ion-ripple-effect', null),
                          ),
                        ),
                      ),
                      a &&
                        h(
                          'div',
                          {
                            key: '67b0de298eb424f3dea846a841b7a06d70e3930d',
                            class: 'action-sheet-group action-sheet-group-cancel',
                          },
                          h(
                            'button',
                            Object.assign({ key: 'e7e3f9a5495eea9b97dbf885ef36944f2e420eff' }, a.htmlAttributes, {
                              type: 'button',
                              class: mc(a),
                              onClick: () => this.buttonClick(a),
                            }),
                            h(
                              'span',
                              { key: 'f889d29ed6c3d14bbc1d805888351d87f5122377', class: 'action-sheet-button-inner' },
                              a.icon &&
                                h('ion-icon', {
                                  key: '7c05cf424b38c37fd40aaeb42a494387291571fb',
                                  icon: a.icon,
                                  'aria-hidden': 'true',
                                  lazy: !1,
                                  class: 'action-sheet-icon',
                                }),
                              a.text,
                            ),
                            'md' === i && h('ion-ripple-effect', { key: 'bed927b477dc2708a5123ef560274fca9819b3d6' }),
                          ),
                        ),
                    ),
                  ),
                  h('div', { key: 'c5df1b11dc15a93892d57065d3dd5fbe02e43b39', tabindex: '0', 'aria-hidden': 'true' }),
                );
              }
              get el() {
                return this;
              }
              static get watchers() {
                return { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] };
              }
              static get style() {
                return {
                  ios: '.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color-step-150, var(--ion-background-color, #fff)));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #0054e9);--button-color-disabled:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999));text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #c5000f)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #c5000f)}}',
                  md: '.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md:disabled{color:var(--button-color-disabled);opacity:0.4}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:not(:disabled):hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--button-color-disabled:var(--button-color);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}',
                };
              }
            },
            [
              290,
              'ion-action-sheet',
              {
                overlayIndex: [2, 'overlay-index'],
                delegate: [16],
                hasController: [4, 'has-controller'],
                keyboardClose: [4, 'keyboard-close'],
                enterAnimation: [16, 'enter-animation'],
                leaveAnimation: [16, 'leave-animation'],
                buttons: [16],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                header: [1],
                subHeader: [1, 'sub-header'],
                translucent: [4],
                animated: [4],
                htmlAttributes: [16, 'html-attributes'],
                isOpen: [4, 'is-open'],
                trigger: [1],
                present: [64],
                dismiss: [64],
                onDidDismiss: [64],
                onWillDismiss: [64],
              },
              void 0,
              { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] },
            ],
          ),
          mc = (n) =>
            Object.assign(
              {
                'action-sheet-button': !0,
                'ion-activatable': !n.disabled,
                'ion-focusable': !n.disabled,
                [`action-sheet-${n.role}`]: void 0 !== n.role,
              },
              nt(n.cssClass),
            );
        const Gf = function gc() {
            typeof customElements > 'u' ||
              ['ion-action-sheet', 'ion-backdrop', 'ion-icon', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-action-sheet':
                    customElements.get(e) || customElements.define(e, Yf);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || gn();
                    break;
                  case 'ion-icon':
                    customElements.get(e) ||
                      (function Ot() {
                        typeof customElements > 'u' ||
                          ['ion-icon'].forEach((e) => {
                            'ion-icon' === e && (customElements.get(e) || customElements.define(e, Of));
                          });
                      })();
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) || Bt();
                }
              });
          },
          Xf = ge(
            class extends ve {
              constructor() {
                (super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.ionFocus = S(this, 'ionFocus', 7)),
                  (this.ionBlur = S(this, 'ionBlur', 7)),
                  (this.inItem = !1),
                  (this.inListHeader = !1),
                  (this.inToolbar = !1),
                  (this.formButtonEl = null),
                  (this.formEl = null),
                  (this.inheritedAttributes = {}),
                  (this.isCircle = !1),
                  (this.buttonType = 'button'),
                  (this.disabled = !1),
                  (this.routerDirection = 'forward'),
                  (this.strong = !1),
                  (this.type = 'button'),
                  (this.handleClick = (e) => {
                    const { el: t } = this;
                    'button' === this.type
                      ? Bl(this.href, e, this.routerDirection, this.routerAnimation)
                      : (0, I.j)(t) && this.submitForm(e);
                  }),
                  (this.onFocus = () => {
                    this.ionFocus.emit();
                  }),
                  (this.onBlur = () => {
                    this.ionBlur.emit();
                  }),
                  (this.slotChanged = () => {
                    this.isCircle = this.hasIconOnly;
                  }));
              }
              disabledChanged() {
                const { disabled: e } = this;
                this.formButtonEl && (this.formButtonEl.disabled = e);
              }
              onAriaChanged(e, t, o) {
                ((this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), { [o]: e })),
                  ((n) => {
                    var e;
                    if (m.updatable) {
                      const t = Fe(n),
                        o = null == (e = t?.$hostElement$) ? void 0 : e.isConnected;
                      return (o && 2 == (18 & t.$flags$) && No(t, !1), o);
                    }
                  })(this));
              }
              renderHiddenButton() {
                const e = (this.formEl = this.findForm());
                if (e) {
                  const { formButtonEl: t } = this;
                  if (null !== t && e.contains(t)) return;
                  const o = (this.formButtonEl = document.createElement('button'));
                  ((o.type = this.type), (o.style.display = 'none'), (o.disabled = this.disabled), e.appendChild(o));
                }
              }
              componentWillLoad() {
                ((this.inToolbar = !!this.el.closest('ion-buttons')),
                  (this.inListHeader = !!this.el.closest('ion-list-header')),
                  (this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider')),
                  (this.inheritedAttributes = (0, I.i)(this.el)));
              }
              get hasIconOnly() {
                return !!this.el.querySelector('[slot="icon-only"]');
              }
              get rippleType() {
                return (void 0 === this.fill || 'clear' === this.fill) && this.hasIconOnly && this.inToolbar
                  ? 'unbounded'
                  : 'bounded';
              }
              findForm() {
                const { form: e } = this;
                if (e instanceof HTMLFormElement) return e;
                if ('string' == typeof e) {
                  const t = document.getElementById(e);
                  return t
                    ? t instanceof HTMLFormElement
                      ? t
                      : ((0, V.p)(
                          `[ion-button] - Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,
                          this.el,
                        ),
                        null)
                    : ((0, V.p)(
                        `[ion-button] - Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,
                        this.el,
                      ),
                      null);
                }
                return void 0 !== e
                  ? ((0, V.p)(
                      '[ion-button] - The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',
                      this.el,
                    ),
                    null)
                  : this.el.closest('form');
              }
              submitForm(e) {
                this.formEl && this.formButtonEl && (e.preventDefault(), this.formButtonEl.click());
              }
              render() {
                const e = W(this),
                  {
                    buttonType: t,
                    type: o,
                    disabled: i,
                    rel: r,
                    target: a,
                    size: s,
                    href: l,
                    color: c,
                    expand: d,
                    hasIconOnly: p,
                    shape: f,
                    strong: g,
                    inheritedAttributes: b,
                  } = this,
                  v = void 0 === s && this.inItem ? 'small' : s,
                  x = void 0 === l ? 'button' : 'a',
                  k = 'button' === x ? { type: o } : { download: this.download, href: l, rel: r, target: a };
                let w = this.fill;
                return (
                  null == w && (w = this.inToolbar || this.inListHeader ? 'clear' : 'solid'),
                  'button' !== o && this.renderHiddenButton(),
                  h(
                    me,
                    {
                      key: 'b105ad09215adb3ca2298acdadf0dc9154bbb9b0',
                      onClick: this.handleClick,
                      'aria-disabled': i ? 'true' : null,
                      class: Le(c, {
                        [e]: !0,
                        [t]: !0,
                        [`${t}-${d}`]: void 0 !== d,
                        [`${t}-${v}`]: void 0 !== v,
                        [`${t}-${f}`]: void 0 !== f,
                        [`${t}-${w}`]: !0,
                        [`${t}-strong`]: g,
                        'in-toolbar': Ve('ion-toolbar', this.el),
                        'in-toolbar-color': Ve('ion-toolbar[color]', this.el),
                        'in-buttons': Ve('ion-buttons', this.el),
                        'button-has-icon-only': p,
                        'button-disabled': i,
                        'ion-activatable': !0,
                        'ion-focusable': !0,
                      }),
                    },
                    h(
                      x,
                      Object.assign(
                        { key: '66b4e7112bcb9e41d5a723fbbadb0a3104f9ee1d' },
                        k,
                        {
                          class: 'button-native',
                          part: 'native',
                          disabled: i,
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                        },
                        b,
                      ),
                      h(
                        'span',
                        { key: '1439fc3da280221028dcf7ce8ec9dab273c4d4bb', class: 'button-inner' },
                        h('slot', {
                          key: 'd5269ae1afc87ec7b99746032f59cbae93720a9f',
                          name: 'icon-only',
                          onSlotchange: this.slotChanged,
                        }),
                        h('slot', { key: '461c83e97aa246aa86d83e14f1e15a288d35041e', name: 'start' }),
                        h('slot', { key: '807170d47101f9f6a333dd4ff489c89284f306fe' }),
                        h('slot', { key: 'e67f116dd0349a0d27893e4f3ff0ccef1d402f80', name: 'end' }),
                      ),
                      'md' === e &&
                        h('ion-ripple-effect', {
                          key: '273f0bd9645a36c1bfd18a5c2ab4f81e22b7b989',
                          type: this.rippleType,
                        }),
                    ),
                  )
                );
              }
              get el() {
                return this;
              }
              static get watchers() {
                return {
                  disabled: ['disabledChanged'],
                  'aria-checked': ['onAriaChanged'],
                  'aria-label': ['onAriaChanged'],
                };
              }
              static get style() {
                return {
                  ios: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}',
                  md: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}',
                };
              }
            },
            [
              289,
              'ion-button',
              {
                color: [513],
                buttonType: [1025, 'button-type'],
                disabled: [516],
                expand: [513],
                fill: [1537],
                routerDirection: [1, 'router-direction'],
                routerAnimation: [16, 'router-animation'],
                download: [1],
                href: [1],
                rel: [1],
                shape: [513],
                size: [513],
                strong: [4],
                target: [1],
                type: [1],
                form: [1],
                isCircle: [32],
              },
              void 0,
              { disabled: ['disabledChanged'], 'aria-checked': ['onAriaChanged'], 'aria-label': ['onAriaChanged'] },
            ],
          );
        const Qf = function ai() {
            typeof customElements > 'u' ||
              ['ion-button', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-button':
                    customElements.get(e) || customElements.define(e, Xf);
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) || Bt();
                }
              });
          },
          bc = {
            bubbles: {
              dur: 1e3,
              circles: 9,
              fn: (n, e, t) => {
                const o = (n * e) / t - n + 'ms',
                  i = (2 * Math.PI * e) / t;
                return {
                  r: 5,
                  style: { top: 32 * Math.sin(i) + '%', left: 32 * Math.cos(i) + '%', 'animation-delay': o },
                };
              },
            },
            circles: {
              dur: 1e3,
              circles: 8,
              fn: (n, e, t) => {
                const o = e / t,
                  i = n * o - n + 'ms',
                  r = 2 * Math.PI * o;
                return {
                  r: 5,
                  style: { top: 32 * Math.sin(r) + '%', left: 32 * Math.cos(r) + '%', 'animation-delay': i },
                };
              },
            },
            circular: {
              dur: 1400,
              elmDuration: !0,
              circles: 1,
              fn: () => ({
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {},
              }),
            },
            crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
            dots: {
              dur: 750,
              circles: 3,
              fn: (n, e) => ({ r: 6, style: { left: 32 - 32 * e + '%', 'animation-delay': -110 * e + 'ms' } }),
            },
            lines: {
              dur: 1e3,
              lines: 8,
              fn: (n, e, t) => ({
                y1: 14,
                y2: 26,
                style: {
                  transform: `rotate(${(360 / t) * e + (e < t / 2 ? 180 : -180)}deg)`,
                  'animation-delay': (n * e) / t - n + 'ms',
                },
              }),
            },
            'lines-small': {
              dur: 1e3,
              lines: 8,
              fn: (n, e, t) => ({
                y1: 12,
                y2: 20,
                style: {
                  transform: `rotate(${(360 / t) * e + (e < t / 2 ? 180 : -180)}deg)`,
                  'animation-delay': (n * e) / t - n + 'ms',
                },
              }),
            },
            'lines-sharp': {
              dur: 1e3,
              lines: 12,
              fn: (n, e, t) => ({
                y1: 17,
                y2: 29,
                style: {
                  transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                  'animation-delay': (n * e) / t - n + 'ms',
                },
              }),
            },
            'lines-sharp-small': {
              dur: 1e3,
              lines: 12,
              fn: (n, e, t) => ({
                y1: 12,
                y2: 20,
                style: {
                  transform: `rotate(${30 * e + (e < 6 ? 180 : -180)}deg)`,
                  'animation-delay': (n * e) / t - n + 'ms',
                },
              }),
            },
          },
          em = ge(
            class extends ve {
              constructor() {
                (super(), this.__registerHost(), this.__attachShadow(), (this.paused = !1));
              }
              getName() {
                const e = this.name || V.c.get('spinner'),
                  t = W(this);
                return e || ('ios' === t ? 'lines' : 'circular');
              }
              render() {
                var e;
                const t = this,
                  o = W(t),
                  i = t.getName(),
                  r = null !== (e = bc[i]) && void 0 !== e ? e : bc.lines,
                  a = 'number' == typeof t.duration && t.duration > 10 ? t.duration : r.dur,
                  s = [];
                if (void 0 !== r.circles) for (let l = 0; l < r.circles; l++) s.push(tm(r, a, l, r.circles));
                else if (void 0 !== r.lines) for (let l = 0; l < r.lines; l++) s.push(nm(r, a, l, r.lines));
                return h(
                  me,
                  {
                    key: 'a33d6421fcc885995fbc7a348516525f68ca496c',
                    class: Le(t.color, {
                      [o]: !0,
                      [`spinner-${i}`]: !0,
                      'spinner-paused': t.paused || V.c.getBoolean('_testing'),
                    }),
                    role: 'progressbar',
                    style: r.elmDuration ? { animationDuration: a + 'ms' } : {},
                  },
                  s,
                );
              }
              static get style() {
                return ':host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}';
              }
            },
            [257, 'ion-spinner', { color: [513], duration: [2], name: [1], paused: [4] }],
          ),
          tm = (n, e, t, o) => {
            const i = n.fn(e, t, o);
            return (
              (i.style['animation-duration'] = e + 'ms'),
              h(
                'svg',
                { viewBox: i.viewBox || '0 0 64 64', style: i.style },
                h('circle', {
                  transform: i.transform || 'translate(32,32)',
                  cx: i.cx,
                  cy: i.cy,
                  r: i.r,
                  style: n.elmDuration ? { animationDuration: e + 'ms' } : {},
                }),
              )
            );
          },
          nm = (n, e, t, o) => {
            const i = n.fn(e, t, o);
            return (
              (i.style['animation-duration'] = e + 'ms'),
              h(
                'svg',
                { viewBox: i.viewBox || '0 0 64 64', style: i.style },
                h('line', { transform: 'translate(32,32)', y1: i.y1, y2: i.y2 }),
              )
            );
          },
          im = function om() {
            typeof customElements > 'u' ||
              ['ion-spinner'].forEach((e) => {
                'ion-spinner' === e && (customElements.get(e) || customElements.define(e, em));
              });
          },
          am = ge(
            class extends ve {
              constructor() {
                (super(), this.__registerHost(), this.__attachShadow());
              }
              render() {
                const e = W(this);
                return h(
                  me,
                  { key: '361035eae7b92dc109794348d39bad2f596eb6be', class: Le(this.color, { [e]: !0 }) },
                  h('slot', { key: 'c7b8835cf485ba9ecd73298f0529276ce1ea0852' }),
                );
              }
              static get style() {
                return ':host(.ion-color){color:var(--ion-color-base)}';
              }
            },
            [257, 'ion-text', { color: [513] }],
          ),
          lm = function sm() {
            typeof customElements > 'u' ||
              ['ion-text'].forEach((e) => {
                'ion-text' === e && (customElements.get(e) || customElements.define(e, am));
              });
          },
          na = (n) => {
            const e = n.getTimezoneOffset();
            return (n.setMinutes(n.getMinutes() - e), n);
          };
        (na(new Date('2022T01:00')), na(new Date('2022T13:00')));
        var Yg = Object.defineProperty;
        (typeof window < 'u' && window,
          ((n, e) => {
            for (var t in e) Yg(n, t, { get: e[t], enumerable: !0 });
          })({}, { err: () => Wc, map: () => rb, ok: () => ca, unwrap: () => ab, unwrapErr: () => sb }));
        var ca = (n) => ({ isOk: !0, isErr: !1, value: n }),
          Wc = (n) => ({ isOk: !1, isErr: !0, value: n });
        function rb(n, e) {
          if (n.isOk) {
            const t = e(n.value);
            return t instanceof Promise ? t.then((o) => ca(o)) : ca(t);
          }
          if (n.isErr) return Wc(n.value);
          throw 'should never get here';
        }
        var ab = (n) => {
            if (n.isOk) return n.value;
            throw n.value;
          },
          sb = (n) => {
            if (n.isErr) return n.value;
            throw n.value;
          },
          pa = (n) => {
            const e = ((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))(n);
            return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`, 'g');
          };
        (pa('::slotted'), pa(':host'), pa(':host-context'));
        new RegExp('Capture$');
        const rt = ['*'],
          ox = (n, e) => {
            const t = n.prototype;
            e.forEach((o) => {
              Object.defineProperty(t, o, {
                get() {
                  return this.el[o];
                },
                set(i) {
                  this.z.runOutsideAngular(() => (this.el[o] = i));
                },
                configurable: !0,
              });
            });
          },
          ix = (n, e) => {
            const t = n.prototype;
            e.forEach((o) => {
              t[o] = function () {
                const i = arguments;
                return this.z.runOutsideAngular(() => this.el[o].apply(this.el, i));
              };
            });
          };
        function at(n) {
          return function (t) {
            const { defineCustomElementFn: o, inputs: i, methods: r } = n;
            return (void 0 !== o && o(), i && ox(t, i), r && ix(t, r), t);
          };
        }
        let rx = (() => {
            let n = class Aa {
              z;
              el;
              constructor(t, o, i) {
                ((this.z = i),
                  t.detach(),
                  (this.el = o.nativeElement),
                  ((n, e, t) => {
                    t.forEach((o) => (n[o] = (0, be.fromEvent)(e, o)));
                  })(this, this.el, ['ionFocus', 'ionBlur']));
              }
              static ɵfac = function (o) {
                return new (o || Aa)(
                  u.ɵɵdirectiveInject(u.ChangeDetectorRef),
                  u.ɵɵdirectiveInject(u.ElementRef),
                  u.ɵɵdirectiveInject(u.NgZone),
                );
              };
              static ɵcmp = u.ɵɵdefineComponent({
                type: Aa,
                selectors: [['ion-button']],
                inputs: {
                  buttonType: 'buttonType',
                  color: 'color',
                  disabled: 'disabled',
                  download: 'download',
                  expand: 'expand',
                  fill: 'fill',
                  form: 'form',
                  href: 'href',
                  mode: 'mode',
                  rel: 'rel',
                  routerAnimation: 'routerAnimation',
                  routerDirection: 'routerDirection',
                  shape: 'shape',
                  size: 'size',
                  strong: 'strong',
                  target: 'target',
                  type: 'type',
                },
                ngContentSelectors: rt,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (u.ɵɵprojectionDef(), u.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return (
              (n = (0, D.__decorate)(
                [
                  at({
                    defineCustomElementFn: Qf,
                    inputs: [
                      'buttonType',
                      'color',
                      'disabled',
                      'download',
                      'expand',
                      'fill',
                      'form',
                      'href',
                      'mode',
                      'rel',
                      'routerAnimation',
                      'routerDirection',
                      'shape',
                      'size',
                      'strong',
                      'target',
                      'type',
                    ],
                  }),
                ],
                n,
              )),
              n
            );
          })(),
          ax = (() => {
            let n = class za {
              z;
              el;
              constructor(t, o, i) {
                ((this.z = i), t.detach(), (this.el = o.nativeElement));
              }
              static ɵfac = function (o) {
                return new (o || za)(
                  u.ɵɵdirectiveInject(u.ChangeDetectorRef),
                  u.ɵɵdirectiveInject(u.ElementRef),
                  u.ɵɵdirectiveInject(u.NgZone),
                );
              };
              static ɵcmp = u.ɵɵdefineComponent({
                type: za,
                selectors: [['ion-spinner']],
                inputs: { color: 'color', duration: 'duration', name: 'name', paused: 'paused' },
                ngContentSelectors: rt,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (u.ɵɵprojectionDef(), u.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return (
              (n = (0, D.__decorate)(
                [at({ defineCustomElementFn: im, inputs: ['color', 'duration', 'name', 'paused'] })],
                n,
              )),
              n
            );
          })(),
          sx = (() => {
            let n = class Oa {
              z;
              el;
              constructor(t, o, i) {
                ((this.z = i), t.detach(), (this.el = o.nativeElement));
              }
              static ɵfac = function (o) {
                return new (o || Oa)(
                  u.ɵɵdirectiveInject(u.ChangeDetectorRef),
                  u.ɵɵdirectiveInject(u.ElementRef),
                  u.ɵɵdirectiveInject(u.NgZone),
                );
              };
              static ɵcmp = u.ɵɵdefineComponent({
                type: Oa,
                selectors: [['ion-text']],
                inputs: { color: 'color', mode: 'mode' },
                ngContentSelectors: rt,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (u.ɵɵprojectionDef(), u.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return ((n = (0, D.__decorate)([at({ defineCustomElementFn: lm, inputs: ['color', 'mode'] })], n)), n);
          })(),
          lx = (() => {
            class n extends Xi {
              angularDelegate = (0, u.inject)(An);
              injector = (0, u.inject)(u.Injector);
              environmentInjector = (0, u.inject)(u.EnvironmentInjector);
              constructor() {
                (super(zl), Yh());
              }
              create(t) {
                return super.create({
                  ...t,
                  delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'modal'),
                });
              }
              static ɵfac = function (o) {
                return new (o || n)();
              };
              static ɵprov = u.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
            }
            return n;
          })();
        class cx extends Xi {
          angularDelegate = (0, u.inject)(An);
          injector = (0, u.inject)(u.Injector);
          environmentInjector = (0, u.inject)(u.EnvironmentInjector);
          constructor() {
            (super(Ol), xf());
          }
          create(e) {
            return super.create({
              ...e,
              delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover'),
            });
          }
        }
        const dx = (n = {}) =>
            (0, u.makeEnvironmentProviders)([
              { provide: Dn, useValue: n },
              { provide: u.APP_INITIALIZER, useFactory: px, multi: !0, deps: [Dn, O.DOCUMENT] },
              { provide: Vd, useFactory: qd, deps: [ie.Router] },
              An,
              lx,
              cx,
            ]),
          px = (n, e) => () => {
            (e.documentElement.classList.add('ion-ce'), th(n));
          };
        let ux = (() => {
          class n extends Xi {
            constructor() {
              (super(Al), Gf());
            }
            static ɵfac = function (o) {
              return new (o || n)();
            };
            static ɵprov = u.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: 'root' });
          }
          return n;
        })();
        var qx = U(202);
        function Ed(n, e) {
          return ue((t, o) => {
            let i = 0;
            t.subscribe(
              En(o, (r) => {
                o.next(n.call(e, r, i++));
              }),
            );
          });
        }
        let Td = (() => {
          var n;
          class e {
            constructor() {
              this.platform = (0, u.inject)(qx.Platform);
            }
            getPlatform() {
              return Y.WakoGlobal && Y.WakoGlobal.isTvLayout
                ? 'androidTv'
                : this.platform.is('ios')
                  ? 'ios'
                  : 'android';
            }
            getNameFromId(o) {
              switch (o) {
                case 'apple_itunes':
                  return 'Itunes';
                case 'google_play_movies':
                  return 'Google Play';
                case 'netflix':
                  return 'Netflix';
                default:
                  return o.replace(/_/gi, ' ');
              }
            }
            getSources(o) {
              return (0, be.forkJoin)([this.getSourcesFromWatchhub(o), this.getSourcesFromTrakt(o)]).pipe(
                Ed(([i, r]) => {
                  const a = { amazon_video: 'prime', amazon_prime: 'prime', disney_plus: 'disney', disney: 'disney' },
                    s = new Map(),
                    l = new Set();
                  return (
                    i.forEach((c) => {
                      c.id && (s.set(a[c.id] || c.id, c), l.add(c.url));
                    }),
                    r.forEach((c) => {
                      if (!c.id || l.has(c.url)) return;
                      const d = a[c.id] || c.id;
                      s.has(d) || (s.set(d, c), l.add(c.url));
                    }),
                    Array.from(s.values())
                  );
                }),
              );
            }
            getSourcePlatform(o) {
              return {
                netflix: 'netflix',
                prime: 'prime',
                amazon_prime: 'prime',
                disney: 'disney',
                disney_plus: 'disney',
                hulu: 'hulu',
                hbo: 'hbo',
                hbo_max: 'hbo',
                hbo_go: 'hbo',
                watchhub: 'watchhub',
              }[o.toLowerCase()];
            }
            getPlatformSpecificUrl(o) {
              switch (this.getPlatform()) {
                case 'ios':
                  return o.iosUrl || o.externalUrl;
                case 'androidTv':
                  return o.androidTvUrl || o.externalUrl;
                default:
                  return o.externalUrl;
              }
            }
            getWatchhubStreams(o) {
              var i = this;
              return (0, y.A)(function* () {
                try {
                  const r = void 0 !== o.seasonNumber ? 'series' : 'movie';
                  let a = o.imdbId;
                  'series' === r &&
                    void 0 !== o.seasonNumber &&
                    void 0 !== o.episodeNumber &&
                    (a = `${o.imdbId}:${o.seasonNumber}:${o.episodeNumber}`);
                  const s = yield (0, be.firstValueFrom)(
                    Y.WakoHttpRequestService.get(`https://watchhub.strem.io/stream/${r}/${a}.json`),
                  );
                  if (!s?.streams?.length) return [];
                  const l = i.getPlatform();
                  return s.streams.map((c) => {
                    const d = i.getPlatformSpecificUrl(c),
                      p = i.getSourceIdFromName(c.name),
                      f = {
                        id: p,
                        name: c.name,
                        url: d,
                        country: 'all',
                        logoUrl: i.getSourceLogo(p),
                        platform: i.getSourcePlatform(p),
                      };
                    return ('androidTv' === l && (f.intentUrl = d), f);
                  });
                } catch (r) {
                  return (console.error('Error fetching Watchhub streams:', r), []);
                }
              })();
            }
            getSourceLogo(o) {
              return (
                {
                  netflix: 'https://www.netflix.com/favicon.ico',
                  prime: 'https://www.primevideo.com/favicon.ico',
                  disney: 'https://www.disneyplus.com/favicon.ico',
                  hulu: 'https://www.hulu.com/favicon.ico',
                  hbo: 'https://www.hbomax.com/favicon.ico',
                  apple_itunes: 'https://www.apple.com/favicon.ico',
                  google_play_movies: 'https://play.google.com/favicon.ico',
                  amazon_video: 'https://www.amazon.com/favicon.ico',
                }[o.toLowerCase()] || void 0
              );
            }
            getSourcesFromWatchhub(o) {
              const i = o.movie?.ids?.imdb || o.show?.ids?.imdb;
              return i
                ? o.show &&
                  o.episode &&
                  ('number' != typeof o.episode.seasonNumber || 'number' != typeof o.episode.number)
                  ? (0, be.of)([])
                  : (0, be.from)(
                      this.getWatchhubStreams({
                        imdbId: i,
                        seasonNumber: o.episode?.seasonNumber,
                        episodeNumber: o.episode?.number,
                      }),
                    )
                : (0, be.of)([]);
            }
            getSourcesFromTrakt(o) {
              let i = null;
              if (o.movie) {
                if (!o.movie.ids?.trakt) return (0, be.of)([]);
                i = `/movies/${o.movie.ids.trakt}`;
              } else if (o.show && o.episode) {
                if (
                  !o.show.ids?.trakt ||
                  'number' != typeof o.episode.seasonNumber ||
                  'number' != typeof o.episode.number
                )
                  return (0, be.of)([]);
                i = `/shows/${o.show.ids.trakt}/seasons/${o.episode.seasonNumber}/episodes/${o.episode.number}`;
              }
              return i
                ? Y.WakoHttpRequestService.get('https://trakt.tv' + i, null, '3d').pipe(
                    Ed((r) => {
                      const a = [];
                      try {
                        new DOMParser()
                          .parseFromString(r, 'text/html')
                          .querySelectorAll('.streaming-links .sources a')
                          .forEach((d) => {
                            try {
                              let p = d.getAttribute('data-source')?.trim();
                              const f = d.getAttribute('data-country')?.trim(),
                                g = d.getAttribute('href')?.trim();
                              if ('#' === g) return;
                              (d.querySelector('img')?.getAttribute('data-original'),
                                !p && g.match('/watchnow') && (p = g.split('/').pop()));
                              const v = p ? this.getNameFromId(p) : 'N/A';
                              a.push({
                                id: p,
                                name: v,
                                country: f,
                                url: 'https://trakt.tv' + g,
                                logoUrl: this.getSourceLogo(p),
                                platform: p ? this.getSourcePlatform(p) : void 0,
                              });
                            } catch (p) {
                              console.error(p);
                            }
                          });
                      } catch (s) {
                        console.error(s);
                      }
                      return a;
                    }),
                    (0, be.catchError)((r) => (console.error('Error fetching Trakt sources:', r), (0, be.of)([]))),
                  )
                : (0, be.of)([]);
            }
            getSourceIdFromName(o) {
              const i = o.toLowerCase().replace(/\s+/g, '_');
              switch (i) {
                case 'disney_plus':
                  return 'disney';
                case 'amazon_prime':
                  return 'prime';
                default:
                  return i;
              }
            }
            static #e = (n = () => (
              (this.ɵfac = function (i) {
                return new (i || e)();
              }),
              (this.ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac }))
            ));
          }
          return (n(), e);
        })();
        const Yx = (n, e) => e.id;
        function Gx(n, e) {
          1 & n && (u.ɵɵelementStart(0, 'div', 2), u.ɵɵelement(1, 'ion-spinner'), u.ɵɵelementEnd());
        }
        function Kx(n, e) {
          (1 & n && (u.ɵɵelementStart(0, 'ion-text'), u.ɵɵtext(1), u.ɵɵpipe(2, 'translate'), u.ɵɵelementEnd()),
            2 & n && (u.ɵɵadvance(), u.ɵɵtextInterpolate(u.ɵɵpipeBind1(2, 1, 'noSourceFound'))));
        }
        function Zx(n, e) {
          if ((1 & n && u.ɵɵelement(0, 'img', 6), 2 & n)) {
            const t = u.ɵɵnextContext().$implicit;
            u.ɵɵproperty('src', t.logoUrl, u.ɵɵsanitizeUrl)('alt', t.name);
          }
        }
        function Xx(n, e) {
          if (1 & n) {
            const t = u.ɵɵgetCurrentView();
            (u.ɵɵelementStart(0, 'ion-button', 4),
              u.ɵɵlistener('click', function () {
                const i = u.ɵɵrestoreView(t).$implicit,
                  r = u.ɵɵnextContext(4);
                return u.ɵɵresetView(r.goTo(i));
              }),
              u.ɵɵelementStart(1, 'div', 5),
              u.ɵɵconditionalCreate(2, Zx, 1, 2, 'img', 6),
              u.ɵɵelementStart(3, 'span'),
              u.ɵɵtext(4),
              u.ɵɵpipe(5, 'titlecase'),
              u.ɵɵelementEnd()()());
          }
          if (2 & n) {
            const t = e.$implicit;
            (u.ɵɵclassMap(t.id),
              u.ɵɵproperty('color', 'primary'),
              u.ɵɵadvance(2),
              u.ɵɵconditional(t.logoUrl ? 2 : -1),
              u.ɵɵadvance(2),
              u.ɵɵtextInterpolate(u.ɵɵpipeBind1(5, 5, t.name)));
          }
        }
        function Qx(n, e) {
          if ((1 & n && u.ɵɵrepeaterCreate(0, Xx, 6, 7, 'ion-button', 3, Yx), 2 & n)) {
            const t = u.ɵɵnextContext(3);
            u.ɵɵrepeater(t.sources);
          }
        }
        function Jx(n, e) {
          if ((1 & n && u.ɵɵconditionalCreate(0, Kx, 3, 3, 'ion-text')(1, Qx, 2, 0), 2 & n)) {
            const t = u.ɵɵnextContext(2);
            u.ɵɵconditional(t.sources.length ? 1 : 0);
          }
        }
        function ey(n, e) {
          if (
            (1 & n &&
              (u.ɵɵelementStart(0, 'div', 0),
              u.ɵɵconditionalCreate(1, Gx, 2, 0, 'div', 2)(2, Jx, 2, 1),
              u.ɵɵelementEnd()),
            2 & n)
          ) {
            const t = u.ɵɵnextContext();
            (u.ɵɵadvance(), u.ɵɵconditional(t.loading ? 1 : 2));
          }
        }
        function ty(n, e) {
          1 & n && u.ɵɵelement(0, 'ion-spinner');
        }
        function ny(n, e) {
          if (1 & n) {
            const t = u.ɵɵgetCurrentView();
            (u.ɵɵelementStart(0, 'ion-button', 7),
              u.ɵɵlistener('click', function () {
                u.ɵɵrestoreView(t);
                const i = u.ɵɵnextContext();
                return u.ɵɵresetView(i.showSourcesActionSheet());
              }),
              u.ɵɵconditionalCreate(1, ty, 1, 0, 'ion-spinner'),
              u.ɵɵelementStart(2, 'span'),
              u.ɵɵtext(3),
              u.ɵɵpipe(4, 'translate'),
              u.ɵɵelementEnd()());
          }
          if (2 & n) {
            const t = u.ɵɵnextContext();
            (u.ɵɵproperty('disabled', t.loading || !t.sources.length),
              u.ɵɵadvance(),
              u.ɵɵconditional(t.loading ? 1 : -1),
              u.ɵɵadvance(2),
              u.ɵɵtextInterpolate2(
                '',
                u.ɵɵpipeBind1(4, 4, 'watchNow'),
                ' ',
                !t.loading && t.sources.length ? '(' + t.sources.length + ')' : '',
              ));
          }
        }
        let Ea = (() => {
            var n;
            class e {
              constructor(o, i) {
                ((this.watchnowService = o),
                  (this.actionSheetCtrl = i),
                  (this.type = 'button'),
                  (this.isTvLayout = Y.WakoGlobal.isTvLayout),
                  (this.sources = []),
                  (this.loading = !0));
              }
              ngOnInit() {
                this.watchnowService
                  .getSources({ movie: this.movie, show: this.show, episode: this.episode })
                  .pipe(
                    (function Q(n) {
                      return ue((e, t) => {
                        try {
                          e.subscribe(t);
                        } finally {
                          t.add(n);
                        }
                      });
                    })(() => (this.loading = !1)),
                  )
                  .subscribe((o) => {
                    this.sources = o;
                  });
              }
              goTo(o) {
                !(function he(n, e) {
                  'FirebasePlugin' in window && window.FirebasePlugin.logEvent(n, e);
                })('addon_watchnow', { type: this.type, source: o.id });
                const i = (o.url.startsWith('intent://') && o.intentUrl) || o.url;
                Y.BrowserService.open(i, !1);
              }
              showSourcesActionSheet() {
                var o = this;
                return (0, y.A)(function* () {
                  !o.loading &&
                    o.sources.length &&
                    (yield (yield o.actionSheetCtrl.create({
                      header: 'Source',
                      buttons: o.sources.map((r) => ({
                        text: r.name,
                        handler: () => {
                          o.goTo(r);
                        },
                      })),
                    })).present());
                })();
              }
              static #e = (n = () => (
                (this.ɵfac = function (i) {
                  return new (i || e)(u.ɵɵdirectiveInject(Td), u.ɵɵdirectiveInject(ux));
                }),
                (this.ɵcmp = u.ɵɵdefineComponent({
                  type: e,
                  selectors: [['wk-open-button']],
                  inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
                  decls: 2,
                  vars: 1,
                  consts: [
                    [1, 'container'],
                    ['expand', 'block', 3, 'disabled'],
                    [1, 'loading-container'],
                    ['expand', 'block', 'fill', 'outline', 3, 'class', 'color'],
                    ['expand', 'block', 'fill', 'outline', 3, 'click', 'color'],
                    [1, 'button-content'],
                    [1, 'source-logo', 3, 'src', 'alt'],
                    ['expand', 'block', 3, 'click', 'disabled'],
                  ],
                  template: function (i, r) {
                    (1 & i && u.ɵɵconditionalCreate(0, ey, 3, 1, 'div', 0)(1, ny, 5, 6, 'ion-button', 1),
                      2 & i && u.ɵɵconditional(r.isTvLayout ? 1 : 0));
                  },
                  dependencies: [z.TranslateModule, ax, sx, rx, O.TitleCasePipe, z.TranslatePipe],
                  styles: [
                    '.container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:48px}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-bottom:8px}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--ion-color-primary: #e50914;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.prime[_ngcontent-%COMP%]{--ion-color-primary: #00a8e1;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.disney[_ngcontent-%COMP%]{--ion-color-primary: #0063e5;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.hulu[_ngcontent-%COMP%]{--ion-color-primary: #1ce783;--ion-color-primary-contrast: #000000}.container[_ngcontent-%COMP%]   .button.hbo[_ngcontent-%COMP%]{--ion-color-primary: #8f00ff;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--ion-color-primary: #000000;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--ion-color-primary: #01875f;--ion-color-primary-contrast: #ffffff}.button-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;width:100%}.source-logo[_ngcontent-%COMP%]{width:20px;height:20px;object-fit:contain}',
                  ],
                }))
              ));
            }
            return (n(), e);
          })(),
          Dd = (() => {
            var n;
            class e extends Y.EpisodeDetailBaseComponent {
              setShowEpisode(o, i) {
                ((this.show = o), (this.episode = i));
              }
              static #e = (n = () => (
                (this.ɵfac = (() => {
                  let o;
                  return function (r) {
                    return (o || (o = u.ɵɵgetInheritedFactory(e)))(r || e);
                  };
                })()),
                (this.ɵcmp = u.ɵɵdefineComponent({
                  type: e,
                  selectors: [['ng-component']],
                  features: [u.ɵɵInheritDefinitionFeature],
                  decls: 1,
                  vars: 2,
                  consts: [[3, 'show', 'episode']],
                  template: function (i, r) {
                    (1 & i && u.ɵɵelement(0, 'wk-open-button', 0),
                      2 & i && u.ɵɵproperty('show', r.show)('episode', r.episode));
                  },
                  dependencies: [Ea],
                  encapsulation: 2,
                }))
              ));
            }
            return (n(), e);
          })(),
          Ad = (() => {
            var n;
            class e extends Y.MovieDetailBaseComponent {
              setMovie(o) {
                this.movie = o;
              }
              static #e = (n = () => (
                (this.ɵfac = (() => {
                  let o;
                  return function (r) {
                    return (o || (o = u.ɵɵgetInheritedFactory(e)))(r || e);
                  };
                })()),
                (this.ɵcmp = u.ɵɵdefineComponent({
                  type: e,
                  selectors: [['ng-component']],
                  features: [u.ɵɵInheritDefinitionFeature],
                  decls: 1,
                  vars: 1,
                  consts: [[3, 'movie']],
                  template: function (i, r) {
                    (1 & i && u.ɵɵelement(0, 'wk-open-button', 0), 2 & i && u.ɵɵproperty('movie', r.movie));
                  },
                  dependencies: [Ea],
                  encapsulation: 2,
                }))
              ));
            }
            return (n(), e);
          })(),
          zd = (() => {
            var n;
            class e extends Y.ShowDetailBaseComponent {
              setShow(o) {
                this.show = o;
              }
              static #e = (n = () => (
                (this.ɵfac = (() => {
                  let o;
                  return function (r) {
                    return (o || (o = u.ɵɵgetInheritedFactory(e)))(r || e);
                  };
                })()),
                (this.ɵcmp = u.ɵɵdefineComponent({
                  type: e,
                  selectors: [['ng-component']],
                  features: [u.ɵɵInheritDefinitionFeature],
                  decls: 1,
                  vars: 1,
                  consts: [[3, 'show']],
                  template: function (i, r) {
                    (1 & i && u.ɵɵelement(0, 'wk-open-button', 0), 2 & i && u.ɵɵproperty('show', r.show));
                  },
                  dependencies: [Ea],
                  encapsulation: 2,
                }))
              ));
            }
            return (n(), e);
          })(),
          Od = (() => {
            var n;
            class e extends Y.PluginBaseService {
              constructor(o) {
                (super(), (this.translate = o));
              }
              initialize() {
                Ce('plugin initialized');
              }
              afterInstall() {
                Ce('plugin installed');
              }
              afterUpdate() {
                Ce('plugin updated');
              }
              setTranslation(o, i) {
                (this.translate.setDefaultLang(o), this.translate.use(o), this.translate.setTranslation(o, i));
              }
              customAction(o, i) {}
              beforeMovieMiddleware(o) {
                throw new Error('Method not implemented.');
              }
              afterMovieMiddleware(o) {
                throw new Error('Method not implemented.');
              }
              beforeShowMiddleware(o) {
                throw new Error('Method not implemented.');
              }
              afterShowMiddleware(o) {
                throw new Error('Method not implemented.');
              }
              beforeEpisodeMiddleware(o, i) {
                throw new Error('Method not implemented.');
              }
              afterEpisodeMiddleware(o, i) {
                throw new Error('Method not implemented.');
              }
              fetchExplorerFolderItem() {
                throw new Error('Method not implemented.');
              }
              getFileActionButtons(o, i, r, a, s, l) {
                return (0, y.A)(function* () {
                  throw new Error('Method not implemented.');
                })();
              }
              static #e = (n = () => (
                (this.ɵfac = function (i) {
                  return new (i || e)(u.ɵɵinject(z.TranslateService));
                }),
                (this.ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac }))
              ));
            }
            return (n(), e);
          })();
        var Ta = U(165);
        const jd = new u.InjectionToken('STORAGE_CONFIG_TOKEN');
        class oy extends Ta.Storage {
          constructor() {
            super();
          }
          create() {
            var e = this;
            return (0, y.A)(function* () {
              return e;
            })();
          }
          defineDriver() {
            return (0, y.A)(function* () {})();
          }
          get driver() {
            return 'noop';
          }
          get(e) {
            return (0, y.A)(function* () {
              return null;
            })();
          }
          set(e, t) {
            return (0, y.A)(function* () {})();
          }
          remove(e) {
            return (0, y.A)(function* () {})();
          }
          clear() {
            return (0, y.A)(function* () {})();
          }
          length() {
            return (0, y.A)(function* () {
              return 0;
            })();
          }
          keys() {
            return (0, y.A)(function* () {
              return [];
            })();
          }
          forEach(e) {
            return (0, y.A)(function* () {})();
          }
          setEncryptionKey(e) {}
        }
        function iy(n, e) {
          return (0, O.isPlatformServer)(n) ? new oy() : new Ta.Storage(e);
        }
        let ry = (() => {
            class n {
              static forRoot(t = null) {
                return {
                  ngModule: n,
                  providers: [
                    { provide: jd, useValue: t },
                    { provide: Ta.Storage, useFactory: iy, deps: [u.PLATFORM_ID, jd] },
                  ],
                };
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵmod = u.ɵɵdefineNgModule({ type: n })),
              (n.ɵinj = u.ɵɵdefineInjector({})),
              n
            );
          })(),
          Pd = (() => {
            var n;
            class e extends Y.PluginBaseModule {
              static #e = (n = () => (
                (this.pluginService = Od),
                (this.movieComponent = Ad),
                (this.episodeComponent = Dd),
                (this.showComponent = zd),
                (this.ɵfac = (() => {
                  let o;
                  return function (r) {
                    return (o || (o = u.ɵɵgetInheritedFactory(e)))(r || e);
                  };
                })()),
                (this.ɵmod = u.ɵɵdefineNgModule({ type: e })),
                (this.ɵinj = u.ɵɵdefineInjector({
                  providers: [Od, Td, ...Y.WakoProviders, dx({ swipeBackEnabled: !0, backButtonText: '', mode: 'md' })],
                  imports: [z.TranslateModule.forRoot(), ry.forRoot({}), Ad, Dd, zd],
                }))
              ));
            }
            return (n(), e);
          })();
        const ay = Pd;
      })(),
      Ci
    );
  })(),
);
