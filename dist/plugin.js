!(function (St, jn) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = jn(
        require('ionic.storage'),
        require('ng.common'),
        require('ng.core'),
        require('ng.forms'),
        require('ng.router'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('tslib'),
        require('wako-app.mobile-sdk'),
      ))
    : 'function' == typeof define && define.amd
      ? define(
          [
            'ionic.storage',
            'ng.common',
            'ng.core',
            'ng.forms',
            'ng.router',
            'ngx-translate.core',
            'rxjs',
            'tslib',
            'wako-app.mobile-sdk',
          ],
          jn,
        )
      : 'object' == typeof exports
        ? (exports.plugin = jn(
            require('ionic.storage'),
            require('ng.common'),
            require('ng.core'),
            require('ng.forms'),
            require('ng.router'),
            require('ngx-translate.core'),
            require('rxjs'),
            require('tslib'),
            require('wako-app.mobile-sdk'),
          ))
        : (St.plugin = jn(
            St['ionic.storage'],
            St['ng.common'],
            St['ng.core'],
            St['ng.forms'],
            St['ng.router'],
            St['ngx-translate.core'],
            St.rxjs,
            St.tslib,
            St['wako-app.mobile-sdk'],
          ));
})(typeof self < 'u' ? self : this, (Ea, St, jn, rc, ac, sc, lc, cc, dc) =>
  (() => {
    var U,
      re,
      Ta = {
        412: (U, re, J) => {
          'use strict';
          J.d(re, { c: () => Te });
          var de = J(911);
          let g;
          const ie = (q, Y, Q) => {
              const Ie = Y.startsWith('animation')
                ? ((q) => (
                    void 0 === g &&
                      (g =
                        void 0 === q.style.animationName && void 0 !== q.style.webkitAnimationName ? '-webkit-' : ''),
                    g
                  ))(q)
                : '';
              q.style.setProperty(Ie + Y, Q);
            },
            Ee = (q = [], Y) => {
              if (void 0 !== Y) {
                const Q = Array.isArray(Y) ? Y : [Y];
                return [...q, ...Q];
              }
              return q;
            },
            Te = (q) => {
              let Y,
                Q,
                Ie,
                z,
                ve,
                f,
                ue,
                we,
                xe,
                ne,
                pe,
                se = [],
                ye = [],
                be = [],
                Ce = !1,
                Oe = {},
                Me = [],
                Be = [],
                M = {},
                H = 0,
                te = !1,
                me = !1,
                ke = !0,
                Pe = !1,
                Fe = !0,
                Ze = !1;
              const Ge = q,
                S = [],
                L = [],
                P = [],
                oe = [],
                V = [],
                gt = [],
                Se = [],
                tt = [],
                Ue = [],
                dt = [],
                bt = [],
                jt =
                  'function' == typeof AnimationEffect ||
                  (void 0 !== de.w && 'function' == typeof de.w.AnimationEffect),
                ot = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && jt,
                Pt = () => bt,
                Yt = (A, ee) => {
                  const fe = ee.findIndex((je) => je.c === A);
                  fe > -1 && ee.splice(fe, 1);
                },
                In = (A, ee) => ((null != ee && ee.oneTimeCallback ? L : S).push({ c: A, o: ee }), pe),
                Nn = () => {
                  ot &&
                    (bt.forEach((A) => {
                      A.cancel();
                    }),
                    (bt.length = 0));
                },
                di = () => {
                  gt.forEach((A) => {
                    null != A && A.parentNode && A.parentNode.removeChild(A);
                  }),
                    (gt.length = 0);
                },
                En = () => (void 0 !== ve ? ve : ue ? ue.getFill() : 'both'),
                ut = () => (void 0 !== we ? we : void 0 !== f ? f : ue ? ue.getDirection() : 'normal'),
                Un = () => (te ? 'linear' : void 0 !== Ie ? Ie : ue ? ue.getEasing() : 'linear'),
                Kt = () => (me ? 0 : void 0 !== xe ? xe : void 0 !== Q ? Q : ue ? ue.getDuration() : 0),
                qn = () => (void 0 !== z ? z : ue ? ue.getIterations() : 1),
                mn = () => (void 0 !== ne ? ne : void 0 !== Y ? Y : ue ? ue.getDelay() : 0),
                gn = () => {
                  0 !== H &&
                    (H--,
                    0 === H &&
                      ((() => {
                        Ue.forEach((Ye) => Ye()), dt.forEach((Ye) => Ye());
                        const A = ke ? 1 : 0,
                          ee = Me,
                          fe = Be,
                          je = M;
                        oe.forEach((Ye) => {
                          const pt = Ye.classList;
                          ee.forEach((Tt) => pt.add(Tt)), fe.forEach((Tt) => pt.remove(Tt));
                          for (const Tt in je) je.hasOwnProperty(Tt) && ie(Ye, Tt, je[Tt]);
                        }),
                          (xe = void 0),
                          (we = void 0),
                          (ne = void 0),
                          S.forEach((Ye) => Ye.c(A, pe)),
                          L.forEach((Ye) => Ye.c(A, pe)),
                          (L.length = 0),
                          (Fe = !0),
                          ke && (Pe = !0),
                          (ke = !0);
                      })(),
                      ue && ue.animationFinish()));
                },
                Qt = () => {
                  (() => {
                    Se.forEach((je) => je()), tt.forEach((je) => je());
                    const A = ye,
                      ee = be,
                      fe = Oe;
                    oe.forEach((je) => {
                      const Ye = je.classList;
                      A.forEach((pt) => Ye.add(pt)), ee.forEach((pt) => Ye.remove(pt));
                      for (const pt in fe) fe.hasOwnProperty(pt) && ie(je, pt, fe[pt]);
                    });
                  })(),
                    se.length > 0 &&
                      ot &&
                      (oe.forEach((A) => {
                        const ee = A.animate(se, {
                          id: Ge,
                          delay: mn(),
                          duration: Kt(),
                          easing: Un(),
                          iterations: qn(),
                          fill: En(),
                          direction: ut(),
                        });
                        ee.pause(), bt.push(ee);
                      }),
                      bt.length > 0 &&
                        (bt[0].onfinish = () => {
                          gn();
                        })),
                    (Ce = !0);
                },
                Bt = (A) => {
                  (A = Math.min(Math.max(A, 0), 0.9999)),
                    ot &&
                      bt.forEach((ee) => {
                        (ee.currentTime = ee.effect.getComputedTiming().delay + Kt() * A), ee.pause();
                      });
                },
                An = (A) => {
                  bt.forEach((ee) => {
                    ee.effect.updateTiming({
                      delay: mn(),
                      duration: Kt(),
                      easing: Un(),
                      iterations: qn(),
                      fill: En(),
                      direction: ut(),
                    });
                  }),
                    void 0 !== A && Bt(A);
                },
                it = (A = !1, ee = !0, fe) => (
                  A &&
                    V.forEach((je) => {
                      je.update(A, ee, fe);
                    }),
                  ot && An(fe),
                  pe
                ),
                zo = () => {
                  Ce &&
                    (ot
                      ? bt.forEach((A) => {
                          A.pause();
                        })
                      : oe.forEach((A) => {
                          ie(A, 'animation-play-state', 'paused');
                        }),
                    (Ze = !0));
                },
                Qn = (A) =>
                  new Promise((ee) => {
                    null != A && A.sync && ((me = !0), In(() => (me = !1), { oneTimeCallback: !0 })),
                      Ce || Qt(),
                      Pe && (ot && (Bt(0), An()), (Pe = !1)),
                      Fe && ((H = V.length + 1), (Fe = !1));
                    const fe = () => {
                        Yt(je, L), ee();
                      },
                      je = () => {
                        Yt(fe, P), ee();
                      };
                    In(je, { oneTimeCallback: !0 }),
                      ((A) => {
                        P.push({ c: A, o: { oneTimeCallback: !0 } });
                      })(fe),
                      V.forEach((Ye) => {
                        Ye.play();
                      }),
                      ot
                        ? (bt.forEach((A) => {
                            A.play();
                          }),
                          (0 === se.length || 0 === oe.length) && gn())
                        : gn(),
                      (Ze = !1);
                  }),
                Jt = (A, ee) => {
                  const fe = se[0];
                  return (
                    void 0 === fe || (void 0 !== fe.offset && 0 !== fe.offset)
                      ? (se = [{ offset: 0, [A]: ee }, ...se])
                      : (fe[A] = ee),
                    pe
                  );
                };
              return (pe = {
                parentAnimation: ue,
                elements: oe,
                childAnimations: V,
                id: Ge,
                animationFinish: gn,
                from: Jt,
                to: (A, ee) => {
                  const fe = se[se.length - 1];
                  return (
                    void 0 === fe || (void 0 !== fe.offset && 1 !== fe.offset)
                      ? (se = [...se, { offset: 1, [A]: ee }])
                      : (fe[A] = ee),
                    pe
                  );
                },
                fromTo: (A, ee, fe) => Jt(A, ee).to(A, fe),
                parent: (A) => ((ue = A), pe),
                play: Qn,
                pause: () => (
                  V.forEach((A) => {
                    A.pause();
                  }),
                  zo(),
                  pe
                ),
                stop: () => {
                  V.forEach((A) => {
                    A.stop();
                  }),
                    Ce && (Nn(), (Ce = !1)),
                    (te = !1),
                    (me = !1),
                    (Fe = !0),
                    (we = void 0),
                    (xe = void 0),
                    (ne = void 0),
                    (H = 0),
                    (Pe = !1),
                    (ke = !0),
                    (Ze = !1),
                    P.forEach((A) => A.c(0, pe)),
                    (P.length = 0);
                },
                destroy: (A) => (
                  V.forEach((ee) => {
                    ee.destroy(A);
                  }),
                  ((A) => {
                    Nn(), A && di();
                  })(A),
                  (oe.length = 0),
                  (V.length = 0),
                  (se.length = 0),
                  (S.length = 0),
                  (L.length = 0),
                  (Ce = !1),
                  (Fe = !0),
                  pe
                ),
                keyframes: (A) => {
                  const ee = se !== A;
                  return (
                    (se = A),
                    ee &&
                      ((A) => {
                        ot &&
                          Pt().forEach((ee) => {
                            const fe = ee.effect;
                            if (fe.setKeyframes) fe.setKeyframes(A);
                            else {
                              const je = new KeyframeEffect(fe.target, A, fe.getTiming());
                              ee.effect = je;
                            }
                          });
                      })(se),
                    pe
                  );
                },
                addAnimation: (A) => {
                  if (null != A)
                    if (Array.isArray(A)) for (const ee of A) ee.parent(pe), V.push(ee);
                    else A.parent(pe), V.push(A);
                  return pe;
                },
                addElement: (A) => {
                  if (null != A)
                    if (1 === A.nodeType) oe.push(A);
                    else if (A.length >= 0) for (let ee = 0; ee < A.length; ee++) oe.push(A[ee]);
                    else console.error('Invalid addElement value');
                  return pe;
                },
                update: it,
                fill: (A) => ((ve = A), it(!0), pe),
                direction: (A) => ((f = A), it(!0), pe),
                iterations: (A) => ((z = A), it(!0), pe),
                duration: (A) => (!ot && 0 === A && (A = 1), (Q = A), it(!0), pe),
                easing: (A) => ((Ie = A), it(!0), pe),
                delay: (A) => ((Y = A), it(!0), pe),
                getWebAnimations: Pt,
                getKeyframes: () => se,
                getFill: En,
                getDirection: ut,
                getDelay: mn,
                getIterations: qn,
                getEasing: Un,
                getDuration: Kt,
                afterAddRead: (A) => (Ue.push(A), pe),
                afterAddWrite: (A) => (dt.push(A), pe),
                afterClearStyles: (A = []) => {
                  for (const ee of A) M[ee] = '';
                  return pe;
                },
                afterStyles: (A = {}) => ((M = A), pe),
                afterRemoveClass: (A) => ((Be = Ee(Be, A)), pe),
                afterAddClass: (A) => ((Me = Ee(Me, A)), pe),
                beforeAddRead: (A) => (Se.push(A), pe),
                beforeAddWrite: (A) => (tt.push(A), pe),
                beforeClearStyles: (A = []) => {
                  for (const ee of A) Oe[ee] = '';
                  return pe;
                },
                beforeStyles: (A = {}) => ((Oe = A), pe),
                beforeRemoveClass: (A) => ((be = Ee(be, A)), pe),
                beforeAddClass: (A) => ((ye = Ee(ye, A)), pe),
                onFinish: In,
                isRunning: () => 0 !== H && !Ze,
                progressStart: (A = !1, ee) => (
                  V.forEach((fe) => {
                    fe.progressStart(A, ee);
                  }),
                  zo(),
                  (te = A),
                  Ce || Qt(),
                  it(!1, !0, ee),
                  pe
                ),
                progressStep: (A) => (
                  V.forEach((ee) => {
                    ee.progressStep(A);
                  }),
                  Bt(A),
                  pe
                ),
                progressEnd: (A, ee, fe) => (
                  (te = !1),
                  V.forEach((je) => {
                    je.progressEnd(A, ee, fe);
                  }),
                  void 0 !== fe && (xe = fe),
                  (Pe = !1),
                  (ke = !0),
                  0 === A
                    ? ((we = 'reverse' === ut() ? 'normal' : 'reverse'),
                      'reverse' === we && (ke = !1),
                      ot ? (it(), Bt(1 - ee)) : ((ne = (1 - ee) * Kt() * -1), it(!1, !1)))
                    : 1 === A && (ot ? (it(), Bt(ee)) : ((ne = ee * Kt() * -1), it(!1, !1))),
                  void 0 !== A && !ue && Qn(),
                  pe
                ),
              });
            };
        },
        86: (U, re, J) => {
          'use strict';
          J.d(re, { B: () => ie, G: () => Ee });
          class g {
            constructor(q, Y, Q, Ie, z) {
              (this.id = Y), (this.name = Q), (this.disableScroll = z), (this.priority = 1e6 * Ie + Y), (this.ctrl = q);
            }
            canStart() {
              return !!this.ctrl && this.ctrl.canStart(this.name);
            }
            start() {
              return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
            }
            capture() {
              if (!this.ctrl) return !1;
              const q = this.ctrl.capture(this.name, this.id, this.priority);
              return q && this.disableScroll && this.ctrl.disableScroll(this.id), q;
            }
            release() {
              this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
            }
            destroy() {
              this.release(), (this.ctrl = void 0);
            }
          }
          class _e {
            constructor(q, Y, Q, Ie) {
              (this.id = Y), (this.disable = Q), (this.disableScroll = Ie), (this.ctrl = q);
            }
            block() {
              if (this.ctrl) {
                if (this.disable) for (const q of this.disable) this.ctrl.disableGesture(q, this.id);
                this.disableScroll && this.ctrl.disableScroll(this.id);
              }
            }
            unblock() {
              if (this.ctrl) {
                if (this.disable) for (const q of this.disable) this.ctrl.enableGesture(q, this.id);
                this.disableScroll && this.ctrl.enableScroll(this.id);
              }
            }
            destroy() {
              this.unblock(), (this.ctrl = void 0);
            }
          }
          const ie = 'backdrop-no-scroll',
            Ee = new (class de {
              constructor() {
                (this.gestureId = 0),
                  (this.requestedStart = new Map()),
                  (this.disabledGestures = new Map()),
                  (this.disabledScroll = new Set());
              }
              createGesture(q) {
                var Y;
                return new g(
                  this,
                  this.newID(),
                  q.name,
                  null !== (Y = q.priority) && void 0 !== Y ? Y : 0,
                  !!q.disableScroll,
                );
              }
              createBlocker(q = {}) {
                return new _e(this, this.newID(), q.disable, !!q.disableScroll);
              }
              start(q, Y, Q) {
                return this.canStart(q) ? (this.requestedStart.set(Y, Q), !0) : (this.requestedStart.delete(Y), !1);
              }
              capture(q, Y, Q) {
                if (!this.start(q, Y, Q)) return !1;
                const Ie = this.requestedStart;
                let z = -1e4;
                if (
                  (Ie.forEach((ve) => {
                    z = Math.max(z, ve);
                  }),
                  z === Q)
                ) {
                  (this.capturedId = Y), Ie.clear();
                  const ve = new CustomEvent('ionGestureCaptured', { detail: { gestureName: q } });
                  return document.dispatchEvent(ve), !0;
                }
                return Ie.delete(Y), !1;
              }
              release(q) {
                this.requestedStart.delete(q), this.capturedId === q && (this.capturedId = void 0);
              }
              disableGesture(q, Y) {
                let Q = this.disabledGestures.get(q);
                void 0 === Q && ((Q = new Set()), this.disabledGestures.set(q, Q)), Q.add(Y);
              }
              enableGesture(q, Y) {
                const Q = this.disabledGestures.get(q);
                void 0 !== Q && Q.delete(Y);
              }
              disableScroll(q) {
                this.disabledScroll.add(q), 1 === this.disabledScroll.size && document.body.classList.add(ie);
              }
              enableScroll(q) {
                this.disabledScroll.delete(q), 0 === this.disabledScroll.size && document.body.classList.remove(ie);
              }
              canStart(q) {
                return !(void 0 !== this.capturedId || this.isDisabled(q));
              }
              isCaptured() {
                return void 0 !== this.capturedId;
              }
              isScrollDisabled() {
                return this.disabledScroll.size > 0;
              }
              isDisabled(q) {
                const Y = this.disabledGestures.get(q);
                return !!(Y && Y.size > 0);
              }
              newID() {
                return this.gestureId++, this.gestureId;
              }
            })();
        },
        935: (U, re, J) => {
          'use strict';
          J.d(re, {
            a: () => Y,
            b: () => Q,
            c: () => _e,
            d: () => Ee,
            e: () => se,
            f: () => f,
            g: () => Ie,
            h: () => ve,
            i: () => q,
            j: () => ie,
            k: () => ye,
            l: () => Oe,
            r: () => z,
          });
          const _e = (M, H) => {
              M.componentOnReady ? M.componentOnReady().then((te) => H(te)) : z(() => H(M));
            },
            ie = (M) => void 0 !== M.componentOnReady,
            Ee = (M, H = []) => {
              const te = {};
              return (
                H.forEach((me) => {
                  M.hasAttribute(me) &&
                    (null !== M.getAttribute(me) && (te[me] = M.getAttribute(me)), M.removeAttribute(me));
                }),
                te
              );
            },
            Te = [
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
            q = (M, H) => {
              let te = Te;
              return H && H.length > 0 && (te = te.filter((me) => !H.includes(me))), Ee(M, te);
            },
            Y = (M, H, te, me) => {
              var we;
              if (typeof window < 'u') {
                const xe = window,
                  ne = null === (we = null == xe ? void 0 : xe.Ionic) || void 0 === we ? void 0 : we.config;
                if (ne) {
                  const ke = ne.get('_ael');
                  if (ke) return ke(M, H, te, me);
                  if (ne._ael) return ne._ael(M, H, te, me);
                }
              }
              return M.addEventListener(H, te, me);
            },
            Q = (M, H, te, me) => {
              var we;
              if (typeof window < 'u') {
                const xe = window,
                  ne = null === (we = null == xe ? void 0 : xe.Ionic) || void 0 === we ? void 0 : we.config;
                if (ne) {
                  const ke = ne.get('_rel');
                  if (ke) return ke(M, H, te, me);
                  if (ne._rel) return ne._rel(M, H, te, me);
                }
              }
              return M.removeEventListener(H, te, me);
            },
            Ie = (M, H = M) => M.shadowRoot || H,
            z = (M) =>
              'function' == typeof __zone_symbol__requestAnimationFrame
                ? __zone_symbol__requestAnimationFrame(M)
                : 'function' == typeof requestAnimationFrame
                  ? requestAnimationFrame(M)
                  : setTimeout(M),
            ve = (M) => !!M.shadowRoot && !!M.attachShadow,
            f = (M) => {
              if ((M.focus(), M.classList.contains('ion-focusable'))) {
                const H = M.closest('ion-app');
                H && H.setFocus([M]);
              }
            },
            se = (M, H, te, me, we) => {
              if (M || ve(H)) {
                let xe = H.querySelector('input.aux-input');
                xe ||
                  ((xe = H.ownerDocument.createElement('input')),
                  (xe.type = 'hidden'),
                  xe.classList.add('aux-input'),
                  H.appendChild(xe)),
                  (xe.disabled = we),
                  (xe.name = te),
                  (xe.value = me || '');
              }
            },
            ye = (M, H, te) => Math.max(M, Math.min(H, te)),
            Oe = (M, H) => {
              const te = M._original || M;
              return { _original: M, emit: Me(te.emit.bind(te), H) };
            },
            Me = (M, H = 0) => {
              let te;
              return (...me) => {
                clearTimeout(te), (te = setTimeout(M, H, ...me));
              };
            };
        },
        382: (U, re, J) => {
          'use strict';
          J.d(re, {
            L: () => Ee,
            a: () => Te,
            b: () => q,
            c: () => Y,
            d: () => Q,
            e: () => Fe,
            g: () => Ge,
            w: () => Pe,
          });
          var de = J(994),
            ie = (J(530), J(338), J(935));
          const Ee = 'ionViewWillEnter',
            Te = 'ionViewDidEnter',
            q = 'ionViewWillLeave',
            Y = 'ionViewDidLeave',
            Q = 'ionViewWillUnload',
            Pe = () => new Promise((S) => (0, ie.r)(() => (0, ie.r)(() => S()))),
            Fe = (function () {
              var S = (0, de.A)(function* (L) {
                const P = L;
                if (P) {
                  if (null != P.componentOnReady) {
                    if (null != (yield P.componentOnReady())) return;
                  } else if (null != P.__registerHost) return void (yield new Promise((V) => (0, ie.r)(V)));
                  yield Promise.all(Array.from(P.children).map(Fe));
                }
              });
              return function (P) {
                return S.apply(this, arguments);
              };
            })(),
            Ge = (S) =>
              S.classList.contains('ion-page')
                ? S
                : S.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || S;
        },
        221: (U, re, J) => {
          'use strict';
          J.r(re), J.d(re, { GESTURE_CONTROLLER: () => de.G, createGesture: () => Q });
          var de = J(86);
          const g = (f, se, ye, be) => {
              const Ce = _e(f) ? { capture: !!be.capture, passive: !!be.passive } : !!be.capture;
              let ue, Oe;
              return (
                f.__zone_symbol__addEventListener
                  ? ((ue = '__zone_symbol__addEventListener'), (Oe = '__zone_symbol__removeEventListener'))
                  : ((ue = 'addEventListener'), (Oe = 'removeEventListener')),
                f[ue](se, ye, Ce),
                () => {
                  f[Oe](se, ye, Ce);
                }
              );
            },
            _e = (f) => {
              if (void 0 === ie)
                try {
                  const se = Object.defineProperty({}, 'passive', {
                    get: () => {
                      ie = !0;
                    },
                  });
                  f.addEventListener('optsTest', () => {}, se);
                } catch {
                  ie = !1;
                }
              return !!ie;
            };
          let ie;
          const q = (f) => (f instanceof Document ? f : f.ownerDocument),
            Q = (f) => {
              let se = !1,
                ye = !1,
                be = !0,
                Ce = !1;
              const ue = Object.assign(
                  { disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 },
                  f,
                ),
                Oe = ue.canStart,
                Me = ue.onWillStart,
                Be = ue.onStart,
                M = ue.onEnd,
                H = ue.notCaptured,
                te = ue.onMove,
                me = ue.threshold,
                we = ue.passive,
                xe = ue.blurOnStart,
                ne = {
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
                ke = ((f, se, ye) => {
                  const be = ye * (Math.PI / 180),
                    Ce = 'x' === f,
                    ue = Math.cos(be),
                    Oe = se * se;
                  let Me = 0,
                    Be = 0,
                    M = !1,
                    H = 0;
                  return {
                    start(te, me) {
                      (Me = te), (Be = me), (H = 0), (M = !0);
                    },
                    detect(te, me) {
                      if (!M) return !1;
                      const we = te - Me,
                        xe = me - Be,
                        ne = we * we + xe * xe;
                      if (ne < Oe) return !1;
                      const ke = Math.sqrt(ne),
                        Pe = (Ce ? we : xe) / ke;
                      return (H = Pe > ue ? 1 : Pe < -ue ? -1 : 0), (M = !1), !0;
                    },
                    isGesture: () => 0 !== H,
                    getDirection: () => H,
                  };
                })(ue.direction, ue.threshold, ue.maxAngle),
                Pe = de.G.createGesture({
                  name: f.gestureName,
                  priority: f.gesturePriority,
                  disableScroll: f.disableScroll,
                }),
                Ze = () => {
                  se && ((Ce = !1), te && te(ne));
                },
                Ge = () =>
                  !!Pe.capture() &&
                  ((se = !0),
                  (be = !1),
                  (ne.startX = ne.currentX),
                  (ne.startY = ne.currentY),
                  (ne.startTime = ne.currentTime),
                  Me ? Me(ne).then(L) : L(),
                  !0),
                L = () => {
                  xe &&
                    (() => {
                      if (typeof document < 'u') {
                        const Se = document.activeElement;
                        null != Se && Se.blur && Se.blur();
                      }
                    })(),
                    Be && Be(ne),
                    (be = !0);
                },
                P = () => {
                  (se = !1), (ye = !1), (Ce = !1), (be = !0), Pe.release();
                },
                oe = (Se) => {
                  const tt = se,
                    Ue = be;
                  if ((P(), Ue)) {
                    if ((Ie(ne, Se), tt)) return void (M && M(ne));
                    H && H(ne);
                  }
                },
                V = ((f, se, ye, be, Ce) => {
                  let ue,
                    Oe,
                    Me,
                    Be,
                    M,
                    H,
                    te,
                    me = 0;
                  const we = (S) => {
                      (me = Date.now() + 2e3),
                        se(S) &&
                          (!Oe && ye && (Oe = g(f, 'touchmove', ye, Ce)),
                          Me || (Me = g(S.target, 'touchend', ne, Ce)),
                          Be || (Be = g(S.target, 'touchcancel', ne, Ce)));
                    },
                    xe = (S) => {
                      me > Date.now() ||
                        (se(S) &&
                          (!H && ye && (H = g(q(f), 'mousemove', ye, Ce)), te || (te = g(q(f), 'mouseup', ke, Ce))));
                    },
                    ne = (S) => {
                      Pe(), be && be(S);
                    },
                    ke = (S) => {
                      Fe(), be && be(S);
                    },
                    Pe = () => {
                      Oe && Oe(), Me && Me(), Be && Be(), (Oe = Me = Be = void 0);
                    },
                    Fe = () => {
                      H && H(), te && te(), (H = te = void 0);
                    },
                    pe = () => {
                      Pe(), Fe();
                    },
                    Ze = (S = !0) => {
                      S
                        ? (ue || (ue = g(f, 'touchstart', we, Ce)), M || (M = g(f, 'mousedown', xe, Ce)))
                        : (ue && ue(), M && M(), (ue = M = void 0), pe());
                    };
                  return {
                    enable: Ze,
                    stop: pe,
                    destroy: () => {
                      Ze(!1), (be = ye = se = void 0);
                    },
                  };
                })(
                  ue.el,
                  (Se) => {
                    const tt = ve(Se);
                    return (
                      !(
                        ye ||
                        !be ||
                        (z(Se, ne),
                        (ne.startX = ne.currentX),
                        (ne.startY = ne.currentY),
                        (ne.startTime = ne.currentTime = tt),
                        (ne.velocityX = ne.velocityY = ne.deltaX = ne.deltaY = 0),
                        (ne.event = Se),
                        Oe && !1 === Oe(ne)) ||
                        (Pe.release(), !Pe.start())
                      ) && ((ye = !0), 0 === me ? Ge() : (ke.start(ne.startX, ne.startY), !0))
                    );
                  },
                  (Se) => {
                    se
                      ? !Ce && be && ((Ce = !0), Ie(ne, Se), requestAnimationFrame(Ze))
                      : (Ie(ne, Se), ke.detect(ne.currentX, ne.currentY) && (!ke.isGesture() || !Ge()) && gt());
                  },
                  oe,
                  { capture: !1, passive: we },
                ),
                gt = () => {
                  P(), V.stop(), H && H(ne);
                };
              return {
                enable(Se = !0) {
                  Se || (se && oe(void 0), P()), V.enable(Se);
                },
                destroy() {
                  Pe.destroy(), V.destroy();
                },
              };
            },
            Ie = (f, se) => {
              if (!se) return;
              const ye = f.currentX,
                be = f.currentY,
                Ce = f.currentTime;
              z(se, f);
              const ue = f.currentX,
                Oe = f.currentY,
                Be = (f.currentTime = ve(se)) - Ce;
              if (Be > 0 && Be < 100) {
                const H = (Oe - be) / Be;
                (f.velocityX = ((ue - ye) / Be) * 0.7 + 0.3 * f.velocityX), (f.velocityY = 0.7 * H + 0.3 * f.velocityY);
              }
              (f.deltaX = ue - f.startX), (f.deltaY = Oe - f.startY), (f.event = se);
            },
            z = (f, se) => {
              let ye = 0,
                be = 0;
              if (f) {
                const Ce = f.changedTouches;
                if (Ce && Ce.length > 0) {
                  const ue = Ce[0];
                  (ye = ue.clientX), (be = ue.clientY);
                } else void 0 !== f.pageX && ((ye = f.pageX), (be = f.pageY));
              }
              (se.currentX = ye), (se.currentY = be);
            },
            ve = (f) => f.timeStamp || Date.now();
        },
        911: (U, re, J) => {
          'use strict';
          J.d(re, { d: () => g, w: () => de });
          const de = typeof window < 'u' ? window : void 0,
            g = typeof document < 'u' ? document : void 0;
        },
        338: (U, re, J) => {
          'use strict';
          J.d(re, { a: () => g, b: () => _e, p: () => de });
          const de = (ie, ...Ee) => console.warn(`[Ionic Warning]: ${ie}`, ...Ee),
            g = (ie, ...Ee) => console.error(`[Ionic Error]: ${ie}`, ...Ee),
            _e = (ie, ...Ee) => console.error(`<${ie.tagName.toLowerCase()}> must be used inside ${Ee.join(' or ')}.`);
        },
        530: (U, re, J) => {
          'use strict';
          J.d(re, { a: () => z, b: () => Ze, c: () => _e, i: () => Ge });
          var de = J(445);
          class g {
            constructor() {
              this.m = new Map();
            }
            reset(L) {
              this.m = new Map(Object.entries(L));
            }
            get(L, P) {
              const oe = this.m.get(L);
              return void 0 !== oe ? oe : P;
            }
            getBoolean(L, P = !1) {
              const oe = this.m.get(L);
              return void 0 === oe ? P : 'string' == typeof oe ? 'true' === oe : !!oe;
            }
            getNumber(L, P) {
              const oe = parseFloat(this.m.get(L));
              return isNaN(oe) ? (void 0 !== P ? P : NaN) : oe;
            }
            set(L, P) {
              this.m.set(L, P);
            }
          }
          const _e = new g(),
            Y = 'ionic:',
            Q = 'ionic-persist-config',
            z = (S, L) => ('string' == typeof S && ((L = S), (S = void 0)), ((S) => ve(S))(S).includes(L)),
            ve = (S = window) => {
              if (typeof S > 'u') return [];
              S.Ionic = S.Ionic || {};
              let L = S.Ionic.platforms;
              return (
                null == L &&
                  ((L = S.Ionic.platforms = f(S)),
                  L.forEach((P) => S.document.documentElement.classList.add(`plt-${P}`))),
                L
              );
            },
            f = (S) => {
              const L = _e.get('platform');
              return Object.keys(Fe).filter((P) => {
                const oe = null == L ? void 0 : L[P];
                return 'function' == typeof oe ? oe(S) : Fe[P](S);
              });
            },
            ye = (S) => !!(ke(S, /iPad/i) || (ke(S, /Macintosh/i) && M(S))),
            ue = (S) => ke(S, /android|sink/i),
            M = (S) => Pe(S, '(any-pointer:coarse)'),
            te = (S) => me(S) || we(S),
            me = (S) => !!(S.cordova || S.phonegap || S.PhoneGap),
            we = (S) => {
              const L = S.Capacitor;
              return !(null == L || !L.isNative);
            },
            ke = (S, L) => L.test(S.navigator.userAgent),
            Pe = (S, L) => {
              var P;
              return null === (P = S.matchMedia) || void 0 === P ? void 0 : P.call(S, L).matches;
            },
            Fe = {
              ipad: ye,
              iphone: (S) => ke(S, /iPhone/i),
              ios: (S) => ke(S, /iPhone|iPod/i) || ye(S),
              android: ue,
              phablet: (S) => {
                const L = S.innerWidth,
                  P = S.innerHeight,
                  oe = Math.min(L, P),
                  V = Math.max(L, P);
                return oe > 390 && oe < 520 && V > 620 && V < 800;
              },
              tablet: (S) => {
                const L = S.innerWidth,
                  P = S.innerHeight,
                  oe = Math.min(L, P),
                  V = Math.max(L, P);
                return ye(S) || ((S) => ue(S) && !ke(S, /mobile/i))(S) || (oe > 460 && oe < 820 && V > 780 && V < 1400);
              },
              cordova: me,
              capacitor: we,
              electron: (S) => ke(S, /electron/i),
              pwa: (S) => {
                var L;
                return !!(
                  (null !== (L = S.matchMedia) && void 0 !== L && L.call(S, '(display-mode: standalone)').matches) ||
                  S.navigator.standalone
                );
              },
              mobile: M,
              mobileweb: (S) => M(S) && !te(S),
              desktop: (S) => !M(S),
              hybrid: te,
            };
          let pe;
          const Ze = (S) => (S && (0, de.Wi)(S)) || pe,
            Ge = (S = {}) => {
              if (typeof window > 'u') return;
              const L = window.document,
                P = window,
                oe = (P.Ionic = P.Ionic || {}),
                V = {};
              S._ael && (V.ael = S._ael), S._rel && (V.rel = S._rel), S._ce && (V.ce = S._ce), (0, de.zb)(V);
              const gt = Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        ((S) => {
                          try {
                            const L = S.sessionStorage.getItem(Q);
                            return null !== L ? JSON.parse(L) : {};
                          } catch {
                            return {};
                          }
                        })(P),
                      ),
                      { persistConfig: !1 },
                    ),
                    oe.config,
                  ),
                  ((S) => {
                    const L = {};
                    return (
                      S.location.search
                        .slice(1)
                        .split('&')
                        .map((P) => P.split('='))
                        .map(([P, oe]) => {
                          try {
                            return [decodeURIComponent(P), decodeURIComponent(oe)];
                          } catch {
                            return ['', ''];
                          }
                        })
                        .filter(([P]) => ((S, L) => S.substr(0, L.length) === L)(P, Y))
                        .map(([P, oe]) => [P.slice(6), oe])
                        .forEach(([P, oe]) => {
                          L[P] = oe;
                        }),
                      L
                    );
                  })(P),
                ),
                S,
              );
              _e.reset(gt),
                _e.getBoolean('persistConfig') &&
                  ((S, L) => {
                    try {
                      S.sessionStorage.setItem(Q, JSON.stringify(L));
                    } catch {
                      return;
                    }
                  })(P, gt),
                ve(P),
                (oe.config = _e),
                (oe.mode = pe = _e.get('mode', L.documentElement.getAttribute('mode') || (z(P, 'ios') ? 'ios' : 'md'))),
                _e.set('mode', pe),
                L.documentElement.setAttribute('mode', pe),
                L.documentElement.classList.add(pe),
                _e.getBoolean('_testing') && _e.set('animated', !1);
              const Se = (Ue) => {
                  var dt;
                  return null === (dt = Ue.tagName) || void 0 === dt ? void 0 : dt.startsWith('ION-');
                },
                tt = (Ue) => ['ios', 'md'].includes(Ue);
              (0, de.iY)((Ue) => {
                for (; Ue; ) {
                  const dt = Ue.mode || Ue.getAttribute('mode');
                  if (dt) {
                    if (tt(dt)) return dt;
                    Se(Ue) && console.warn('Invalid ionic mode: "' + dt + '", expected: "ios" or "md"');
                  }
                  Ue = Ue.parentElement;
                }
                return pe;
              });
            };
        },
        864: (U) => {
          function re(J) {
            return Promise.resolve().then(() => {
              var de = new Error("Cannot find module '" + J + "'");
              throw ((de.code = 'MODULE_NOT_FOUND'), de);
            });
          }
          (re.keys = () => []), (re.resolve = re), (re.id = 864), (U.exports = re);
        },
        376: (U) => {
          function re(J) {
            return Promise.resolve().then(() => {
              var de = new Error("Cannot find module '" + J + "'");
              throw ((de.code = 'MODULE_NOT_FOUND'), de);
            });
          }
          (re.keys = () => []), (re.resolve = re), (re.id = 376), (U.exports = re);
        },
        165: (U) => {
          'use strict';
          U.exports = Ea;
        },
        714: (U) => {
          'use strict';
          U.exports = St;
        },
        264: (U) => {
          'use strict';
          U.exports = jn;
        },
        122: (U) => {
          'use strict';
          U.exports = rc;
        },
        346: (U) => {
          'use strict';
          U.exports = ac;
        },
        555: (U) => {
          'use strict';
          U.exports = sc;
        },
        961: (U) => {
          'use strict';
          U.exports = lc;
        },
        652: (U) => {
          'use strict';
          U.exports = cc;
        },
        325: (U) => {
          'use strict';
          U.exports = dc;
        },
        445: (U, re, J) => {
          'use strict';
          J.d(re, {
            L2: () => q,
            wt: () => oe,
            xr: () => Eo,
            lh: () => Kn,
            $x: () => yi,
            OX: () => Nn,
            Wi: () => Do,
            h: () => mn,
            w$: () => Si,
            gv: () => In,
            iY: () => Dn,
            zb: () => gt,
            bN: () => Rn,
          });
          var de = J(994),
            g = {
              allRenderFn: !1,
              cmpDidLoad: !0,
              cmpDidUnload: !1,
              cmpDidUpdate: !0,
              cmpDidRender: !0,
              cmpWillLoad: !0,
              cmpWillUpdate: !0,
              cmpWillRender: !0,
              connectedCallback: !0,
              disconnectedCallback: !0,
              element: !0,
              event: !0,
              hasRenderFn: !0,
              lifecycle: !0,
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
              cmpShouldUpdate: !0,
              devTools: !1,
              shadowDelegatesFocus: !0,
              initializeNextTick: !1,
              asyncLoading: !1,
              asyncQueue: !1,
              transformTagName: !1,
              attachStyles: !0,
              experimentalSlotFixes: !1,
            },
            Ee = Object.defineProperty,
            q = { isDev: !!g.isDev, isBrowser: !0, isServer: !1, isTesting: !!g.isTesting },
            Y = g.hotModuleReplacement
              ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = new WeakMap())
              : new WeakMap(),
            Q = (l) => Y.get(l),
            ve = (l, u) => u in l,
            se = (l, u) => (0, console.error)(l, u),
            ye = g.isTesting
              ? ['STENCIL:']
              : [
                  '%cstencil',
                  'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
                ],
            be = (...l) => console.error(...ye, ...l),
            Ce = (...l) => console.warn(...ye, ...l),
            Me = new Map(),
            H = new Map(),
            te = [],
            ke = 's-id',
            Ge = 'http://www.w3.org/1999/xlink',
            S = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'],
            L = typeof window < 'u' ? window : {},
            P = L.document || { head: {} },
            oe = L.HTMLElement || class {},
            V = {
              $flags$: 0,
              $resourcesUrl$: '',
              jmp: (l) => l(),
              raf: (l) => requestAnimationFrame(l),
              ael: (l, u, h, b) => l.addEventListener(u, h, b),
              rel: (l, u, h, b) => l.removeEventListener(u, h, b),
              ce: (l, u) => new CustomEvent(l, u),
            },
            gt = (l) => {
              Object.assign(V, l);
            },
            Se = g.shadowDom,
            tt = (() => {
              let l = !1;
              try {
                P.addEventListener(
                  'e',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get() {
                      l = !0;
                    },
                  }),
                );
              } catch {}
              return l;
            })(),
            dt =
              !!g.constructableCSS &&
              (() => {
                try {
                  return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
                } catch {}
                return !1;
              })(),
            bt = 0,
            jt = !1,
            ot = [],
            Pt = [],
            pn = [],
            zt = (l, u) => (h) => {
              l.push(h), jt || ((jt = !0), u && 4 & V.$flags$ ? hn(Yt) : V.raf(Yt));
            },
            _n = (l) => {
              for (let u = 0; u < l.length; u++)
                try {
                  l[u](performance.now());
                } catch (h) {
                  se(h);
                }
              l.length = 0;
            },
            Bn = (l, u) => {
              let h = 0,
                b = 0;
              for (; h < l.length && (b = performance.now()) < u; )
                try {
                  l[h++](b);
                } catch (y) {
                  se(y);
                }
              h === l.length ? (l.length = 0) : 0 !== h && l.splice(0, h);
            },
            Yt = () => {
              if ((g.asyncQueue && bt++, _n(ot), g.asyncQueue)) {
                const l = 2 == (6 & V.$flags$) ? performance.now() + 14 * Math.ceil(0.1 * bt) : 1 / 0;
                Bn(Pt, l),
                  Bn(pn, l),
                  Pt.length > 0 && (pn.push(...Pt), (Pt.length = 0)),
                  (jt = ot.length + Pt.length + pn.length > 0) ? V.raf(Yt) : (bt = 0);
              } else _n(Pt), (jt = ot.length > 0) && V.raf(Yt);
            },
            hn = (l) => Promise.resolve(void 0).then(l),
            In = zt(ot, !1),
            Rn = zt(Pt, !0),
            Nn = (l) => {
              const u = new URL(l, V.$resourcesUrl$);
              return u.origin !== L.location.origin ? u.href : u.pathname;
            },
            Hn = {},
            Cn = (l) => 'object' == (l = typeof l) || 'function' === l;
          ((l, u) => {
            for (var h in u) Ee(l, h, { get: u[h], enumerable: !0 });
          })({}, { err: () => Sn, map: () => $o, ok: () => $n, unwrap: () => So, unwrapErr: () => fn });
          var $n = (l) => ({ isOk: !0, isErr: !1, value: l }),
            Sn = (l) => ({ isOk: !1, isErr: !0, value: l });
          function $o(l, u) {
            if (l.isOk) {
              const h = u(l.value);
              return h instanceof Promise ? h.then((b) => $n(b)) : $n(h);
            }
            if (l.isErr) return Sn(l.value);
            throw 'should never get here';
          }
          var So = (l) => {
              if (l.isOk) return l.value;
              throw l.value;
            },
            fn = (l) => {
              if (l.isErr) return l.value;
              throw l.value;
            },
            En = 0,
            ut = (l, u = '') => {
              if (g.profile && performance.mark) {
                const h = `st:${l}:${u}:${En++}`;
                return performance.mark(h), () => performance.measure(`[Stencil] ${l}() <${u}>`, h);
              }
              return () => {};
            },
            mn = (l, u, ...h) => {
              let b = null,
                y = null,
                w = null,
                C = !1,
                T = !1;
              const E = [],
                D = (N) => {
                  for (let K = 0; K < N.length; K++)
                    (b = N[K]),
                      Array.isArray(b)
                        ? D(b)
                        : null != b &&
                          'boolean' != typeof b &&
                          ((C = 'function' != typeof l && !Cn(b))
                            ? (b = String(b))
                            : g.isDev &&
                              'function' != typeof l &&
                              void 0 === b.$flags$ &&
                              be(
                                "vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.",
                              ),
                          C && T ? (E[E.length - 1].$text$ += b) : E.push(C ? Xt(null, b) : b),
                          (T = C));
                };
              if (
                (D(h),
                u &&
                  (g.isDev && 'input' === l && hi(u),
                  g.vdomKey && u.key && (y = u.key),
                  g.slotRelocation && u.name && (w = u.name),
                  g.vdomClass))
              ) {
                const N = u.className || u.class;
                N &&
                  (u.class =
                    'object' != typeof N
                      ? N
                      : Object.keys(N)
                          .filter((K) => N[K])
                          .join(' '));
              }
              if (
                (g.isDev &&
                  E.some(Gn) &&
                  be(
                    "The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.",
                  ),
                g.vdomFunctional && 'function' == typeof l)
              )
                return l(null === u ? {} : u, E, ui);
              const F = Xt(l, null);
              return (
                (F.$attrs$ = u),
                E.length > 0 && (F.$children$ = E),
                g.vdomKey && (F.$key$ = y),
                g.slotRelocation && (F.$name$ = w),
                F
              );
            },
            Xt = (l, u) => {
              const h = { $flags$: 0, $tag$: l, $text$: u, $elm$: null, $children$: null };
              return (
                g.vdomAttribute && (h.$attrs$ = null),
                g.vdomKey && (h.$key$ = null),
                g.slotRelocation && (h.$name$ = null),
                h
              );
            },
            Eo = {},
            Gn = (l) => l && l.$tag$ === Eo,
            ui = { forEach: (l, u) => l.map(To).forEach(u), map: (l, u) => l.map(To).map(u).map(pi) },
            To = (l) => ({
              vattrs: l.$attrs$,
              vchildren: l.$children$,
              vkey: l.$key$,
              vname: l.$name$,
              vtag: l.$tag$,
              vtext: l.$text$,
            }),
            pi = (l) => {
              if ('function' == typeof l.vtag) {
                const h = { ...l.vattrs };
                return l.vkey && (h.key = l.vkey), l.vname && (h.name = l.vname), mn(l.vtag, h, ...(l.vchildren || []));
              }
              const u = Xt(l.vtag, l.vtext);
              return (u.$attrs$ = l.vattrs), (u.$children$ = l.vchildren), (u.$key$ = l.vkey), (u.$name$ = l.vname), u;
            },
            hi = (l) => {
              const u = Object.keys(l),
                h = u.indexOf('value');
              if (-1 === h) return;
              const b = u.indexOf('type'),
                y = u.indexOf('min'),
                w = u.indexOf('max'),
                C = u.indexOf('step');
              (h < b || h < y || h < w || h < C) &&
                Ce('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
            },
            Zt = (l, u, h, b, y, w, C) => {
              let T, E, D, F;
              if (1 === w.nodeType) {
                if (
                  ((T = w.getAttribute('c-id')),
                  T &&
                    ((E = T.split('.')),
                    (E[0] === C || '0' === E[0]) &&
                      ((D = {
                        $flags$: 0,
                        $hostId$: E[0],
                        $nodeId$: E[1],
                        $depth$: E[2],
                        $index$: E[3],
                        $tag$: w.tagName.toLowerCase(),
                        $elm$: w,
                        $attrs$: null,
                        $children$: null,
                        $key$: null,
                        $name$: null,
                        $text$: null,
                      }),
                      u.push(D),
                      w.removeAttribute('c-id'),
                      l.$children$ || (l.$children$ = []),
                      (l.$children$[D.$index$] = D),
                      (l = D),
                      b && '0' === D.$depth$ && (b[D.$index$] = D.$elm$))),
                  w.shadowRoot)
                )
                  for (F = w.shadowRoot.childNodes.length - 1; F >= 0; F--)
                    Zt(l, u, h, b, y, w.shadowRoot.childNodes[F], C);
                for (F = w.childNodes.length - 1; F >= 0; F--) Zt(l, u, h, b, y, w.childNodes[F], C);
              } else if (8 === w.nodeType)
                (E = w.nodeValue.split('.')),
                  (E[1] === C || '0' === E[1]) &&
                    ((T = E[0]),
                    (D = {
                      $flags$: 0,
                      $hostId$: E[1],
                      $nodeId$: E[2],
                      $depth$: E[3],
                      $index$: E[4],
                      $elm$: w,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $tag$: null,
                      $text$: null,
                    }),
                    't' === T
                      ? ((D.$elm$ = w.nextSibling),
                        D.$elm$ &&
                          3 === D.$elm$.nodeType &&
                          ((D.$text$ = D.$elm$.textContent),
                          u.push(D),
                          w.remove(),
                          l.$children$ || (l.$children$ = []),
                          (l.$children$[D.$index$] = D),
                          b && '0' === D.$depth$ && (b[D.$index$] = D.$elm$)))
                      : D.$hostId$ === C &&
                        ('s' === T
                          ? ((D.$tag$ = 'slot'),
                            (w['s-sn'] = E[5] ? (D.$name$ = E[5]) : ''),
                            (w['s-sr'] = !0),
                            g.shadowDom &&
                              b &&
                              ((D.$elm$ = P.createElement(D.$tag$)),
                              D.$name$ && D.$elm$.setAttribute('name', D.$name$),
                              w.parentNode.insertBefore(D.$elm$, w),
                              w.remove(),
                              '0' === D.$depth$ && (b[D.$index$] = D.$elm$)),
                            h.push(D),
                            l.$children$ || (l.$children$ = []),
                            (l.$children$[D.$index$] = D))
                          : 'r' === T &&
                            (g.shadowDom && b ? w.remove() : g.slotRelocation && ((y['s-cr'] = w), (w['s-cn'] = !0)))));
              else if (l && 'style' === l.$tag$) {
                const N = Xt(null, w.textContent);
                (N.$elm$ = w), (N.$index$ = '0'), (l.$children$ = [N]);
              }
            },
            Yn = (l, u) => {
              if (1 === l.nodeType) {
                let h = 0;
                if (l.shadowRoot) for (; h < l.shadowRoot.childNodes.length; h++) Yn(l.shadowRoot.childNodes[h], u);
                for (h = 0; h < l.childNodes.length; h++) Yn(l.childNodes[h], u);
              } else if (8 === l.nodeType) {
                const h = l.nodeValue.split('.');
                'o' === h[0] && (u.set(h[1] + '.' + h[2], l), (l.nodeValue = ''), (l['s-en'] = h[3]));
              }
            },
            Dn = (l) => te.push(l),
            Do = (l) => Q(l).$modeName$,
            Kn = (l, u, h) => {
              const b = ((l) => (g.lazyLoad ? Q(l).$hostElement$ : l))(l);
              return {
                emit: (y) => (
                  g.isDev &&
                    !b.isConnected &&
                    Ce(`The "${u}" event was emitted, but the dispatcher node is no longer connected to the dom.`),
                  Qt(b, u, { bubbles: !!(4 & h), composed: !!(2 & h), cancelable: !!(1 & h), detail: y })
                ),
              };
            },
            Qt = (l, u, h) => {
              const b = V.ce(u, h);
              return l.dispatchEvent(b), b;
            },
            Bt = new WeakMap(),
            it = (l, u, h) => {
              var b;
              const y = Zn(u, h),
                w = H.get(y);
              if (!g.attachStyles) return y;
              if (((l = 11 === l.nodeType ? l : P), w))
                if ('string' == typeof w) {
                  let T,
                    C = Bt.get((l = l.head || l));
                  if ((C || Bt.set(l, (C = new Set())), !C.has(y))) {
                    if (g.hydrateClientSide && l.host && (T = l.querySelector(`[sty-id="${y}"]`))) T.innerHTML = w;
                    else {
                      (T = P.createElement('style')), (T.innerHTML = w);
                      const E =
                        null != (b = V.$nonce$)
                          ? b
                          : (function Wn(l) {
                              var u, h, b;
                              return null !=
                                (b =
                                  null ==
                                  (h = null == (u = l.head) ? void 0 : u.querySelector('meta[name="csp-nonce"]'))
                                    ? void 0
                                    : h.getAttribute('content'))
                                ? b
                                : void 0;
                            })(P);
                      null != E && T.setAttribute('nonce', E),
                        (g.hydrateServerSide || g.hotModuleReplacement) && 2 & u.$flags$ && T.setAttribute('sty-id', y),
                        (!(1 & u.$flags$) || (1 & u.$flags$ && 'HEAD' !== l.nodeName)) &&
                          l.insertBefore(T, l.querySelector('link'));
                    }
                    4 & u.$flags$ && (T.innerHTML += 'slot-fb{display:contents}slot-fb[hidden]{display:none}'),
                      C && C.add(y);
                  }
                } else
                  g.constructableCSS &&
                    !l.adoptedStyleSheets.includes(w) &&
                    (l.adoptedStyleSheets = [...l.adoptedStyleSheets, w]);
              return y;
            },
            Zn = (l, u) => 'sc-' + (g.mode && u && 32 & l.$flags$ ? l.$tagName$ + '-' + u : l.$tagName$),
            Po = (l, u, h, b, y, w) => {
              if (h !== b) {
                let C = ve(l, u),
                  T = u.toLowerCase();
                if (g.vdomClass && 'class' === u) {
                  const E = l.classList,
                    D = Lo(h),
                    F = Lo(b);
                  E.remove(...D.filter((N) => N && !F.includes(N))), E.add(...F.filter((N) => N && !D.includes(N)));
                } else if (g.vdomStyle && 'style' === u) {
                  if (g.updatable)
                    for (const E in h)
                      (!b || null == b[E]) &&
                        (!g.hydrateServerSide && E.includes('-') ? l.style.removeProperty(E) : (l.style[E] = ''));
                  for (const E in b)
                    (!h || b[E] !== h[E]) &&
                      (!g.hydrateServerSide && E.includes('-') ? l.style.setProperty(E, b[E]) : (l.style[E] = b[E]));
                } else if (!g.vdomKey || 'key' !== u)
                  if (g.vdomRef && 'ref' === u) b && b(l);
                  else if (
                    !g.vdomListener ||
                    (g.lazyLoad ? C : l.__lookupSetter__(u)) ||
                    'o' !== u[0] ||
                    'n' !== u[1]
                  ) {
                    if (g.vdomPropOrAttr) {
                      const E = Cn(b);
                      if ((C || (E && null !== b)) && !y)
                        try {
                          if (l.tagName.includes('-')) l[u] = b;
                          else {
                            const F = null == b ? '' : b;
                            'list' === u ? (C = !1) : (null == h || l[u] != F) && (l[u] = F);
                          }
                        } catch {}
                      let D = !1;
                      g.vdomXlink && T !== (T = T.replace(/^xlink\:?/, '')) && ((u = T), (D = !0)),
                        null == b || !1 === b
                          ? (!1 !== b || '' === l.getAttribute(u)) &&
                            (g.vdomXlink && D ? l.removeAttributeNS(Ge, u) : l.removeAttribute(u))
                          : (!C || 4 & w || y) &&
                            !E &&
                            ((b = !0 === b ? '' : b),
                            g.vdomXlink && D ? l.setAttributeNS(Ge, u, b) : l.setAttribute(u, b));
                    }
                  } else if (((u = '-' === u[2] ? u.slice(3) : ve(L, T) ? T.slice(2) : T[2] + u.slice(3)), h || b)) {
                    const E = u.endsWith(Oo);
                    (u = u.replace(mi, '')), h && V.rel(l, u, h, E), b && V.ael(l, u, b, E);
                  }
              }
            },
            zo = /\s/,
            Lo = (l) => (l ? l.split(zo) : []),
            Oo = 'Capture',
            mi = new RegExp(Oo + '$'),
            Mo = (l, u, h) => {
              const b = 11 === u.$elm$.nodeType && u.$elm$.host ? u.$elm$.host : u.$elm$,
                y = (l && l.$attrs$) || Hn,
                w = u.$attrs$ || Hn;
              if (g.updatable) for (const C of Qn(Object.keys(y))) C in w || Po(b, C, y[C], void 0, h, u.$flags$);
              for (const C of Qn(Object.keys(w))) Po(b, C, y[C], w[C], h, u.$flags$);
            };
          function Qn(l) {
            return l.includes('ref') ? [...l.filter((u) => 'ref' !== u), 'ref'] : l;
          }
          var Rt,
            Jt,
            Et,
            bn = !1,
            A = !1,
            ee = !1,
            fe = !1,
            je = (l, u, h, b) => {
              var y;
              const w = u.$children$[h];
              let T,
                E,
                D,
                C = 0;
              if (
                (g.slotRelocation &&
                  !bn &&
                  ((ee = !0),
                  'slot' === w.$tag$ && (Rt && b.classList.add(Rt + '-s'), (w.$flags$ |= w.$children$ ? 2 : 1))),
                g.isDev &&
                  w.$elm$ &&
                  be(
                    `The JSX ${null !== w.$text$ ? `"${w.$text$}" text` : `"${w.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`,
                  ),
                g.vdomText && null !== w.$text$)
              )
                T = w.$elm$ = P.createTextNode(w.$text$);
              else if (g.slotRelocation && 1 & w.$flags$)
                T = w.$elm$ = g.isDebug || g.hydrateServerSide ? fr(w) : P.createTextNode('');
              else {
                if (
                  (g.svg && !fe && (fe = 'svg' === w.$tag$),
                  (T = w.$elm$ =
                    g.svg
                      ? P.createElementNS(
                          fe ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                          !bn && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$,
                        )
                      : P.createElement(!bn && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$)),
                  g.svg && fe && 'foreignObject' === w.$tag$ && (fe = !1),
                  g.vdomAttribute && Mo(null, w, fe),
                  !!T.getRootNode().querySelector('body') &&
                    g.scoped &&
                    ((l) => null != l)(Rt) &&
                    T['s-si'] !== Rt &&
                    T.classList.add((T['s-si'] = Rt)),
                  g.scoped && bi(T, b),
                  w.$children$)
                )
                  for (C = 0; C < w.$children$.length; ++C) (E = je(l, w, C, T)), E && T.appendChild(E);
                g.svg && ('svg' === w.$tag$ ? (fe = !1) : 'foreignObject' === T.tagName && (fe = !0));
              }
              return (
                (T['s-hn'] = Et),
                g.slotRelocation &&
                  3 & w.$flags$ &&
                  ((T['s-sr'] = !0),
                  (T['s-cr'] = Jt),
                  (T['s-sn'] = w.$name$ || ''),
                  (T['s-rf'] = null == (y = w.$attrs$) ? void 0 : y.ref),
                  (D = l && l.$children$ && l.$children$[h]),
                  D && D.$tag$ === w.$tag$ && l.$elm$ && (g.experimentalSlotFixes ? Ye(l.$elm$) : pt(l.$elm$, !1))),
                T
              );
            },
            Ye = (l) => {
              V.$flags$ |= 1;
              const u = l.closest(Et.toLowerCase());
              if (null != u) {
                const h = Array.from(u.childNodes).find((y) => y['s-cr']),
                  b = Array.from(l.childNodes);
                for (const y of h ? b.reverse() : b)
                  null != y['s-sh'] && (ht(u, y, null != h ? h : null), (y['s-sh'] = void 0), (ee = !0));
              }
              V.$flags$ &= -2;
            },
            pt = (l, u) => {
              V.$flags$ |= 1;
              const h = Array.from(l.childNodes);
              if (l['s-sr'] && g.experimentalSlotFixes) {
                let b = l;
                for (; (b = b.nextSibling); ) b && b['s-sn'] === l['s-sn'] && b['s-sh'] === Et && h.push(b);
              }
              for (let b = h.length - 1; b >= 0; b--) {
                const y = h[b];
                y['s-hn'] !== Et &&
                  y['s-ol'] &&
                  (ht(gi(y), y, Bo(y)), y['s-ol'].remove(), (y['s-ol'] = void 0), (y['s-sh'] = void 0), (ee = !0)),
                  u && pt(y, u);
              }
              V.$flags$ &= -2;
            },
            Tt = (l, u, h, b, y, w) => {
              let T,
                C = (g.slotRelocation && l['s-cr'] && l['s-cr'].parentNode) || l;
              for (g.shadowDom && C.shadowRoot && C.tagName === Et && (C = C.shadowRoot); y <= w; ++y)
                b[y] && ((T = je(null, h, y, l)), T && ((b[y].$elm$ = T), ht(C, T, g.slotRelocation ? Bo(u) : u)));
            },
            Fo = (l, u, h) => {
              for (let b = u; b <= h; ++b) {
                const y = l[b];
                if (y) {
                  const w = y.$elm$;
                  ur(y), w && (g.slotRelocation && ((A = !0), w['s-ol'] ? w['s-ol'].remove() : pt(w, !0)), w.remove());
                }
              }
            },
            jo = (l, u, h = !1) =>
              !(
                l.$tag$ !== u.$tag$ ||
                (g.slotRelocation && 'slot' === l.$tag$
                  ? ('$nodeId$' in l && h && 8 !== l.$elm$.nodeType) || l.$name$ !== u.$name$
                  : g.vdomKey && !h && l.$key$ !== u.$key$)
              ),
            Bo = (l) => (l && l['s-ol']) || l,
            gi = (l) => (l['s-ol'] ? l['s-ol'] : l).parentNode,
            vn = (l, u, h = !1) => {
              const b = (u.$elm$ = l.$elm$),
                y = l.$children$,
                w = u.$children$,
                C = u.$tag$,
                T = u.$text$;
              let E;
              g.vdomText && null !== T
                ? g.vdomText && g.slotRelocation && (E = b['s-cr'])
                  ? (E.parentNode.textContent = T)
                  : g.vdomText && l.$text$ !== T && (b.data = T)
                : (g.svg && (fe = 'svg' === C || ('foreignObject' !== C && fe)),
                  (g.vdomAttribute || g.reflect) &&
                    (g.slot && 'slot' === C && !bn
                      ? g.experimentalSlotFixes &&
                        l.$name$ !== u.$name$ &&
                        ((u.$elm$['s-sn'] = u.$name$ || ''), Ye(u.$elm$.parentElement))
                      : Mo(l, u, fe)),
                  g.updatable && null !== y && null !== w
                    ? ((l, u, h, b, y = !1) => {
                        let qe,
                          Ne,
                          w = 0,
                          C = 0,
                          T = 0,
                          E = 0,
                          D = u.length - 1,
                          F = u[0],
                          N = u[D],
                          K = b.length - 1,
                          le = b[0],
                          Ae = b[K];
                        for (; w <= D && C <= K; )
                          if (null == F) F = u[++w];
                          else if (null == N) N = u[--D];
                          else if (null == le) le = b[++C];
                          else if (null == Ae) Ae = b[--K];
                          else if (jo(F, le, y)) vn(F, le, y), (F = u[++w]), (le = b[++C]);
                          else if (jo(N, Ae, y)) vn(N, Ae, y), (N = u[--D]), (Ae = b[--K]);
                          else if (jo(F, Ae, y))
                            g.slotRelocation &&
                              ('slot' === F.$tag$ || 'slot' === Ae.$tag$) &&
                              pt(F.$elm$.parentNode, !1),
                              vn(F, Ae, y),
                              ht(l, F.$elm$, N.$elm$.nextSibling),
                              (F = u[++w]),
                              (Ae = b[--K]);
                          else if (jo(N, le, y))
                            g.slotRelocation &&
                              ('slot' === F.$tag$ || 'slot' === Ae.$tag$) &&
                              pt(N.$elm$.parentNode, !1),
                              vn(N, le, y),
                              ht(l, N.$elm$, F.$elm$),
                              (N = u[--D]),
                              (le = b[++C]);
                          else {
                            if (((T = -1), g.vdomKey))
                              for (E = w; E <= D; ++E)
                                if (u[E] && null !== u[E].$key$ && u[E].$key$ === le.$key$) {
                                  T = E;
                                  break;
                                }
                            g.vdomKey && T >= 0
                              ? ((Ne = u[T]),
                                Ne.$tag$ !== le.$tag$
                                  ? (qe = je(u && u[C], h, T, l))
                                  : (vn(Ne, le, y), (u[T] = void 0), (qe = Ne.$elm$)),
                                (le = b[++C]))
                              : ((qe = je(u && u[C], h, C, l)), (le = b[++C])),
                              qe &&
                                (g.slotRelocation
                                  ? ht(gi(F.$elm$), qe, Bo(F.$elm$))
                                  : ht(F.$elm$.parentNode, qe, F.$elm$));
                          }
                        w > D
                          ? Tt(l, null == b[K + 1] ? null : b[K + 1].$elm$, h, b, C, K)
                          : g.updatable && C > K && Fo(u, w, D);
                      })(b, y, u, w, h)
                    : null !== w
                      ? (g.updatable && g.vdomText && null !== l.$text$ && (b.textContent = ''),
                        Tt(b, null, u, w, 0, w.length - 1))
                      : !h && g.updatable && null !== y && Fo(y, 0, y.length - 1),
                  g.svg && fe && 'svg' === C && (fe = !1));
            },
            Jn = (l) => {
              const u = l.childNodes;
              for (const h of u)
                if (1 === h.nodeType) {
                  if (h['s-sr']) {
                    const b = h['s-sn'];
                    h.hidden = !1;
                    for (const y of u)
                      if (y !== h)
                        if (y['s-hn'] !== h['s-hn'] || '' !== b) {
                          if (
                            (1 === y.nodeType && (b === y.getAttribute('slot') || b === y['s-sn'])) ||
                            (3 === y.nodeType && b === y['s-sn'])
                          ) {
                            h.hidden = !0;
                            break;
                          }
                        } else if (1 === y.nodeType || (3 === y.nodeType && '' !== y.textContent.trim())) {
                          h.hidden = !0;
                          break;
                        }
                  }
                  Jn(h);
                }
            },
            Nt = [],
            cr = (l) => {
              let u, h, b;
              for (const y of l.childNodes) {
                if (y['s-sr'] && (u = y['s-cr']) && u.parentNode) {
                  h = u.parentNode.childNodes;
                  const w = y['s-sn'];
                  for (b = h.length - 1; b >= 0; b--)
                    if (
                      ((u = h[b]),
                      !(
                        u['s-cn'] ||
                        u['s-nr'] ||
                        u['s-hn'] === y['s-hn'] ||
                        (g.experimentalSlotFixes && u['s-sh'] && u['s-sh'] === y['s-hn'])
                      ))
                    )
                      if (dr(u, w)) {
                        let C = Nt.find((T) => T.$nodeToRelocate$ === u);
                        (A = !0),
                          (u['s-sn'] = u['s-sn'] || w),
                          C
                            ? ((C.$nodeToRelocate$['s-sh'] = y['s-hn']), (C.$slotRefNode$ = y))
                            : ((u['s-sh'] = y['s-hn']), Nt.push({ $slotRefNode$: y, $nodeToRelocate$: u })),
                          u['s-sr'] &&
                            Nt.map((T) => {
                              dr(T.$nodeToRelocate$, u['s-sn']) &&
                                ((C = Nt.find((E) => E.$nodeToRelocate$ === u)),
                                C && !T.$slotRefNode$ && (T.$slotRefNode$ = C.$slotRefNode$));
                            });
                      } else Nt.some((C) => C.$nodeToRelocate$ === u) || Nt.push({ $nodeToRelocate$: u });
                }
                1 === y.nodeType && cr(y);
              }
            },
            dr = (l, u) =>
              1 === l.nodeType
                ? (null === l.getAttribute('slot') && '' === u) || l.getAttribute('slot') === u
                : l['s-sn'] === u || '' === u,
            ur = (l) => {
              g.vdomRef && (l.$attrs$ && l.$attrs$.ref && l.$attrs$.ref(null), l.$children$ && l.$children$.map(ur));
            },
            ht = (l, u, h) => {
              const b = null == l ? void 0 : l.insertBefore(u, h);
              return g.scoped && bi(u, l), b;
            },
            pr = (l) => {
              const u = [];
              return l && u.push(...(l['s-scs'] || []), l['s-si'], l['s-sc'], ...pr(l.parentElement)), u;
            },
            bi = (l, u, h = !1) => {
              var b;
              if (l && u && 1 === l.nodeType) {
                const y = new Set(pr(u).filter(Boolean));
                if (y.size && (null == (b = l.classList) || b.add(...(l['s-scs'] = [...y])), l['s-ol'] || h))
                  for (const w of Array.from(l.childNodes)) bi(w, l, !0);
              }
            },
            hr = (l, u, h = !1) => {
              var b, y, w, C, T;
              const E = l.$hostElement$,
                D = l.$cmpMeta$,
                F = l.$vnode$ || Xt(null, null),
                N = Gn(u) ? u : mn(null, null, u);
              if (((Et = E.tagName), g.isDev && Array.isArray(u) && u.some(Gn)))
                throw new Error(
                  `The <Host> must be the single root component.\nLooks like the render() function of "${Et.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `,
                );
              if (
                (g.reflect &&
                  D.$attrsToReflect$ &&
                  ((N.$attrs$ = N.$attrs$ || {}), D.$attrsToReflect$.map(([K, le]) => (N.$attrs$[le] = E[K]))),
                h && N.$attrs$)
              )
                for (const K of Object.keys(N.$attrs$))
                  E.hasAttribute(K) && !['key', 'ref', 'style', 'class'].includes(K) && (N.$attrs$[K] = E[K]);
              if (
                ((N.$tag$ = null),
                (N.$flags$ |= 4),
                (l.$vnode$ = N),
                (N.$elm$ = F.$elm$ = (g.shadowDom && E.shadowRoot) || E),
                (g.scoped || g.shadowDom) && (Rt = E['s-sc']),
                (bn = Se && !!(1 & D.$flags$)),
                g.slotRelocation && ((Jt = E['s-cr']), (A = !1)),
                vn(F, N, h),
                g.slotRelocation)
              ) {
                if (((V.$flags$ |= 1), ee)) {
                  cr(N.$elm$);
                  for (const K of Nt) {
                    const le = K.$nodeToRelocate$;
                    if (!le['s-ol']) {
                      const Ae = g.isDebug || g.hydrateServerSide ? Dt(le) : P.createTextNode('');
                      (Ae['s-nr'] = le), ht(le.parentNode, (le['s-ol'] = Ae), le);
                    }
                  }
                  for (const K of Nt) {
                    const le = K.$nodeToRelocate$,
                      Ae = K.$slotRefNode$;
                    if (Ae) {
                      const qe = Ae.parentNode;
                      let Ne = Ae.nextSibling;
                      if (!g.experimentalSlotFixes || (Ne && 1 === Ne.nodeType)) {
                        let De = null == (b = le['s-ol']) ? void 0 : b.previousSibling;
                        for (; De; ) {
                          let Re = null != (y = De['s-nr']) ? y : null;
                          if (Re && Re['s-sn'] === le['s-sn'] && qe === Re.parentNode) {
                            for (Re = Re.nextSibling; Re === le || (null != Re && Re['s-sr']); )
                              Re = null == Re ? void 0 : Re.nextSibling;
                            if (!Re || !Re['s-nr']) {
                              Ne = Re;
                              break;
                            }
                          }
                          De = De.previousSibling;
                        }
                      }
                      ((!Ne && qe !== le.parentNode) || le.nextSibling !== Ne) &&
                        le !== Ne &&
                        (!g.experimentalSlotFixes &&
                          !le['s-hn'] &&
                          le['s-ol'] &&
                          (le['s-hn'] = le['s-ol'].parentNode.nodeName),
                        ht(qe, le, Ne),
                        1 === le.nodeType && (le.hidden = null != (w = le['s-ih']) && w)),
                        le && 'function' == typeof Ae['s-rf'] && Ae['s-rf'](le);
                    } else 1 === le.nodeType && (h && (le['s-ih'] = null != (C = le.hidden) && C), (le.hidden = !0));
                  }
                }
                A && Jn(N.$elm$), (V.$flags$ &= -2), (Nt.length = 0);
              }
              if (g.experimentalScopedSlotChanges && 2 & D.$flags$)
                for (const K of N.$elm$.childNodes)
                  K['s-hn'] !== Et &&
                    !K['s-sh'] &&
                    (h && null == K['s-ih'] && (K['s-ih'] = null != (T = K.hidden) && T), (K.hidden = !0));
              Jt = void 0;
            },
            fr = (l) =>
              P.createComment(`<slot${l.$name$ ? ' name="' + l.$name$ + '"' : ''}> (host=${Et.toLowerCase()})`),
            Dt = (l) =>
              P.createComment(
                'org-location for ' + (l.localName ? `<${l.localName}> (host=${l['s-hn']})` : `[${l.textContent}]`),
              ),
            Ht = (l, u) => {
              g.asyncLoading &&
                u &&
                !l.$onRenderResolve$ &&
                u['s-p'] &&
                u['s-p'].push(new Promise((h) => (l.$onRenderResolve$ = h)));
            },
            eo = (l, u) => {
              if ((g.taskQueue && g.updatable && (l.$flags$ |= 16), g.asyncLoading && 4 & l.$flags$))
                return void (l.$flags$ |= 512);
              Ht(l, l.$ancestorComponent$);
              const h = () => Ro(l, u);
              return g.taskQueue ? Rn(h) : h();
            },
            Ro = (l, u) => {
              const h = l.$hostElement$,
                b = ut('scheduleUpdate', l.$cmpMeta$.$tagName$),
                y = g.lazyLoad ? l.$lazyInstance$ : h;
              if (!y)
                throw new Error(
                  `Can't render component <${h.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
                );
              let w;
              return (
                u
                  ? (g.lazyLoad &&
                      g.hostListener &&
                      ((l.$flags$ |= 256),
                      l.$queuedListeners$ &&
                        (l.$queuedListeners$.map(([C, T]) => _t(y, C, T)), (l.$queuedListeners$ = void 0))),
                    en(h, 'componentWillLoad'),
                    g.cmpWillLoad && (w = _t(y, 'componentWillLoad')))
                  : (en(h, 'componentWillUpdate'), g.cmpWillUpdate && (w = _t(y, 'componentWillUpdate'))),
                en(h, 'componentWillRender'),
                g.cmpWillRender && (w = vi(w, () => _t(y, 'componentWillRender'))),
                b(),
                vi(w, () => xi(l, y, u))
              );
            },
            vi = (l, u) =>
              Pa(l)
                ? l.then(u).catch((h) => {
                    console.error(h), u();
                  })
                : u(),
            Pa = (l) => l instanceof Promise || (l && l.then && 'function' == typeof l.then),
            xi = (function () {
              var l = (0, de.A)(function* (u, h, b) {
                var y;
                const w = u.$hostElement$,
                  C = ut('update', u.$cmpMeta$.$tagName$),
                  T = w['s-rc'];
                g.style &&
                  b &&
                  ((l) => {
                    const u = l.$cmpMeta$,
                      h = l.$hostElement$,
                      b = u.$flags$,
                      y = ut('attachStyles', u.$tagName$),
                      w = it(g.shadowDom && Se && h.shadowRoot ? h.shadowRoot : h.getRootNode(), u, l.$modeName$);
                    (g.shadowDom || g.scoped) &&
                      g.cssAnnotations &&
                      10 & b &&
                      2 & b &&
                      ((h['s-sc'] = w), h.classList.add(w + '-h'), g.scoped && 2 & b && h.classList.add(w + '-s')),
                      y();
                  })(u);
                const E = ut('render', u.$cmpMeta$.$tagName$);
                if (
                  (g.isDev && (u.$flags$ |= 1024),
                  g.hydrateServerSide ? yield c(u, h, w, b) : c(u, h, w, b),
                  g.isDev &&
                    ((u.$renderCount$ = void 0 === u.$renderCount$ ? 1 : u.$renderCount$ + 1), (u.$flags$ &= -1025)),
                  g.hydrateServerSide)
                )
                  try {
                    No(w),
                      b && (1 & u.$cmpMeta$.$flags$ ? (w['s-en'] = '') : 2 & u.$cmpMeta$.$flags$ && (w['s-en'] = 'c'));
                  } catch (D) {
                    se(D, w);
                  }
                if ((g.asyncLoading && T && (T.map((D) => D()), (w['s-rc'] = void 0)), E(), C(), g.asyncLoading)) {
                  const D = null != (y = w['s-p']) ? y : [],
                    F = () => ze(u);
                  0 === D.length ? F() : (Promise.all(D).then(F), (u.$flags$ |= 4), (D.length = 0));
                } else ze(u);
              });
              return function (h, b, y) {
                return l.apply(this, arguments);
              };
            })(),
            c = (l, u, h, b) => {
              const y = !!g.allRenderFn,
                w = !!g.lazyLoad,
                C = !!g.taskQueue,
                T = !!g.updatable;
              try {
                if (
                  ((u = (y || u.render) && u.render()),
                  T && C && (l.$flags$ &= -17),
                  (T || w) && (l.$flags$ |= 2),
                  g.hasRenderFn || g.reflect)
                )
                  if (g.vdomRender || g.reflect) {
                    if (g.hydrateServerSide) return Promise.resolve(u).then((E) => hr(l, E, b));
                    hr(l, u, b);
                  } else 1 & l.$cmpMeta$.$flags$ ? (h.shadowRoot.textContent = u) : (h.textContent = u);
              } catch (E) {
                se(E, l.$hostElement$);
              }
              return null;
            },
            ze = (l) => {
              const u = l.$cmpMeta$.$tagName$,
                h = l.$hostElement$,
                b = ut('postUpdate', u),
                y = g.lazyLoad ? l.$lazyInstance$ : h,
                w = l.$ancestorComponent$;
              g.cmpDidRender &&
                (g.isDev && (l.$flags$ |= 1024), _t(y, 'componentDidRender'), g.isDev && (l.$flags$ &= -1025)),
                en(h, 'componentDidRender'),
                64 & l.$flags$
                  ? (g.cmpDidUpdate &&
                      (g.isDev && (l.$flags$ |= 1024), _t(y, 'componentDidUpdate'), g.isDev && (l.$flags$ &= -1025)),
                    en(h, 'componentDidUpdate'),
                    b())
                  : ((l.$flags$ |= 64),
                    g.asyncLoading && g.cssAnnotations && Lt(h),
                    g.cmpDidLoad &&
                      (g.isDev && (l.$flags$ |= 2048), _t(y, 'componentDidLoad'), g.isDev && (l.$flags$ &= -2049)),
                    en(h, 'componentDidLoad'),
                    b(),
                    g.asyncLoading && (l.$onReadyResolve$(h), w || to(u))),
                g.method && g.lazyLoad && l.$onInstanceResolve$(h),
                g.asyncLoading &&
                  (l.$onRenderResolve$ && (l.$onRenderResolve$(), (l.$onRenderResolve$ = void 0)),
                  512 & l.$flags$ && hn(() => eo(l, !1)),
                  (l.$flags$ &= -517));
            },
            yi = (l) => {
              if (g.updatable && (q.isBrowser || q.isTesting)) {
                const u = Q(l),
                  h = u.$hostElement$.isConnected;
                return h && 2 == (18 & u.$flags$) && eo(u, !1), h;
              }
              return !1;
            },
            to = (l) => {
              g.cssAnnotations && Lt(P.documentElement),
                g.asyncQueue && (V.$flags$ |= 2),
                hn(() => Qt(L, 'appload', { detail: { namespace: 'app' } })),
                g.profile &&
                  performance.measure &&
                  performance.measure(`[Stencil] app initial load (by ${l})`, 'st:app:start');
            },
            _t = (l, u, h) => {
              if (l && l[u])
                try {
                  return l[u](h);
                } catch (b) {
                  se(b);
                }
            },
            en = (l, u) => {
              g.lifecycleDOMEvents &&
                Qt(l, 'stencil_' + u, { bubbles: !0, composed: !0, detail: { namespace: 'app' } });
            },
            Lt = (l) => {
              var u, h;
              return g.hydratedClass
                ? l.classList.add(null != (u = g.hydratedSelectorName) ? u : 'hydrated')
                : g.hydratedAttribute
                  ? l.setAttribute(null != (h = g.hydratedSelectorName) ? h : 'hydrated', '')
                  : void 0;
            },
            No = (l) => {
              const u = l.children;
              if (null != u)
                for (let h = 0, b = u.length; h < b; h++) {
                  const y = u[h];
                  'function' == typeof y.connectedCallback && y.connectedCallback(), No(y);
                }
            },
            wi = (l, u, h) => {
              var b, y;
              const w = l.prototype;
              if (
                (g.formAssociated &&
                  64 & u.$flags$ &&
                  1 & h &&
                  S.forEach((C) =>
                    Object.defineProperty(w, C, {
                      value(...T) {
                        const E = Q(this),
                          F = g.lazyLoad ? E.$lazyInstance$ : g.lazyLoad ? E.$hostElement$ : this;
                        if (F) {
                          const N = F[C];
                          'function' == typeof N && N.call(F, ...T);
                        } else
                          E.$onReadyPromise$.then((N) => {
                            const K = N[C];
                            'function' == typeof K && K.call(N, ...T);
                          });
                      },
                    }),
                  ),
                (g.member && u.$members$) || (g.watchCallback && (u.$watchers$ || l.watchers)))
              ) {
                g.watchCallback && l.watchers && !u.$watchers$ && (u.$watchers$ = l.watchers);
                const C = Object.entries(null != (b = u.$members$) ? b : {});
                if (
                  (C.map(([T, [E]]) => {
                    (g.prop || g.state) && (31 & E || ((!g.lazyLoad || 2 & h) && 32 & E))
                      ? Object.defineProperty(w, T, {
                          get() {
                            return ((l, u) => Q(this).$instanceValues$.get(u))(0, T);
                          },
                          set(D) {
                            if (g.isDev) {
                              const F = Q(this);
                              !(1 & h) &&
                                0 === (F && 8 & F.$flags$) &&
                                31 & E &&
                                !(1024 & E) &&
                                Ce(
                                  `@Prop() "${T}" on <${u.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`,
                                );
                            }
                            ((l, u, h, b) => {
                              const y = Q(l);
                              if (g.lazyLoad && !y)
                                throw new Error(
                                  `Couldn't find host element for "${b.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`,
                                );
                              const w = g.lazyLoad ? y.$hostElement$ : l,
                                C = y.$instanceValues$.get(u),
                                T = y.$flags$,
                                E = g.lazyLoad ? y.$lazyInstance$ : w;
                              h = ((l, u) =>
                                null == l || Cn(l)
                                  ? l
                                  : g.propBoolean && 4 & u
                                    ? 'false' !== l && ('' === l || !!l)
                                    : g.propNumber && 2 & u
                                      ? parseFloat(l)
                                      : g.propString && 1 & u
                                        ? String(l)
                                        : l)(h, b.$members$[u][0]);
                              const D = Number.isNaN(C) && Number.isNaN(h);
                              if (
                                (!g.lazyLoad || !(8 & T) || void 0 === C) &&
                                h !== C &&
                                !D &&
                                (y.$instanceValues$.set(u, h),
                                g.isDev &&
                                  (1024 & y.$flags$
                                    ? Ce(
                                        `The state/prop "${u}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        h,
                                        '\nOld value',
                                        C,
                                      )
                                    : 2048 & y.$flags$ &&
                                      Ce(
                                        `The state/prop "${u}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        h,
                                        '\nOld value',
                                        C,
                                      )),
                                !g.lazyLoad || E)
                              ) {
                                if (g.watchCallback && b.$watchers$ && 128 & T) {
                                  const N = b.$watchers$[u];
                                  N &&
                                    N.map((K) => {
                                      try {
                                        E[K](h, C, u);
                                      } catch (le) {
                                        se(le, w);
                                      }
                                    });
                                }
                                if (g.updatable && 2 == (18 & T)) {
                                  if (
                                    g.cmpShouldUpdate &&
                                    E.componentShouldUpdate &&
                                    !1 === E.componentShouldUpdate(h, C, u)
                                  )
                                    return;
                                  eo(y, !1);
                                }
                              }
                            })(this, T, D, u);
                          },
                          configurable: !0,
                          enumerable: !0,
                        })
                      : g.lazyLoad &&
                        g.method &&
                        1 & h &&
                        64 & E &&
                        Object.defineProperty(w, T, {
                          value(...D) {
                            var F;
                            const N = Q(this);
                            return null == (F = null == N ? void 0 : N.$onInstancePromise$)
                              ? void 0
                              : F.then(() => {
                                  var K;
                                  return null == (K = N.$lazyInstance$) ? void 0 : K[T](...D);
                                });
                          },
                        });
                  }),
                  g.observeAttribute && (!g.lazyLoad || 1 & h))
                ) {
                  const T = new Map();
                  (w.attributeChangedCallback = function (E, D, F) {
                    V.jmp(() => {
                      var N;
                      const K = T.get(E);
                      if (this.hasOwnProperty(K)) (F = this[K]), delete this[K];
                      else {
                        if (w.hasOwnProperty(K) && 'number' == typeof this[K] && this[K] == F) return;
                        if (null == K) {
                          const le = Q(this),
                            Ae = null == le ? void 0 : le.$flags$;
                          if (Ae && !(8 & Ae) && 128 & Ae && F !== D) {
                            const Ne = g.lazyLoad ? le.$lazyInstance$ : g.lazyLoad ? le.$hostElement$ : this,
                              De = null == (N = u.$watchers$) ? void 0 : N[E];
                            null == De ||
                              De.forEach((Re) => {
                                null != Ne[Re] && Ne[Re].call(Ne, F, D, E);
                              });
                          }
                          return;
                        }
                      }
                      this[K] = (null !== F || 'boolean' != typeof this[K]) && F;
                    });
                  }),
                    (l.observedAttributes = Array.from(
                      new Set([
                        ...Object.keys(null != (y = u.$watchers$) ? y : {}),
                        ...C.filter(([E, D]) => 15 & D[0]).map(([E, D]) => {
                          var F;
                          const N = D[1] || E;
                          return (
                            T.set(N, E),
                            g.reflect && 512 & D[0] && (null == (F = u.$attrsToReflect$) || F.push([E, N])),
                            N
                          );
                        }),
                      ]),
                    ));
                }
              }
              return l;
            },
            ki = (function () {
              var l = (0, de.A)(function* (u, h, b, y) {
                let w;
                if (!(32 & h.$flags$)) {
                  if (((h.$flags$ |= 32), (g.lazyLoad || g.hydrateClientSide) && b.$lazyBundleId$)) {
                    const D = ((l, u, h) => {
                      const b = l.$tagName$.replace(/-/g, '_'),
                        y = l.$lazyBundleId$;
                      if (g.isDev && 'string' != typeof y)
                        return void be(
                          `Trying to lazily load component <${l.$tagName$}> with style mode "${u.$modeName$}", but it does not exist.`,
                        );
                      if (!y) return;
                      const w = !g.hotModuleReplacement && Me.get(y);
                      return w
                        ? w[b]
                        : J(864)(`./${y}.entry.js${g.hotModuleReplacement && h ? '?s-hmr=' + h : ''}`).then(
                            (C) => (g.hotModuleReplacement || Me.set(y, C), C[b]),
                            se,
                          );
                    })(b, h, y);
                    if (D && 'then' in D) {
                      const N = ((l, u) =>
                        g.profile && performance.mark
                          ? (0 === performance.getEntriesByName(l, 'mark').length && performance.mark(l),
                            () => {
                              0 === performance.getEntriesByName(u, 'measure').length && performance.measure(u, l);
                            })
                          : () => {})(
                        `st:load:${b.$tagName$}:${h.$modeName$}`,
                        `[Stencil] Load module for <${b.$tagName$}>`,
                      );
                      (w = yield D), N();
                    } else w = D;
                    if (!w) throw new Error(`Constructor for "${b.$tagName$}#${h.$modeName$}" was not found`);
                    g.member &&
                      !w.isProxied &&
                      (g.watchCallback && (b.$watchers$ = w.watchers), wi(w, b, 2), (w.isProxied = !0));
                    const F = ut('createInstance', b.$tagName$);
                    g.member && (h.$flags$ |= 8);
                    try {
                      new w(h);
                    } catch (N) {
                      se(N);
                    }
                    g.member && (h.$flags$ &= -9), g.watchCallback && (h.$flags$ |= 128), F(), Pn(h.$lazyInstance$);
                  } else (w = u.constructor), customElements.whenDefined(u.localName).then(() => (h.$flags$ |= 128));
                  if (g.style && w && w.style) {
                    let D;
                    'string' == typeof w.style
                      ? (D = w.style)
                      : g.mode &&
                        'string' != typeof w.style &&
                        ((h.$modeName$ = ((l) => te.map((u) => u(l)).find((u) => !!u))(u)),
                        h.$modeName$ && (D = w.style[h.$modeName$]),
                        g.hydrateServerSide && h.$modeName$ && u.setAttribute('s-mode', h.$modeName$));
                    const F = Zn(b, h.$modeName$);
                    if (!H.has(F)) {
                      const N = ut('registerStyles', b.$tagName$);
                      !g.hydrateServerSide &&
                        g.shadowDom &&
                        g.shadowDomShim &&
                        8 & b.$flags$ &&
                        (D = yield J.e(82)
                          .then(J.bind(J, 82))
                          .then((K) => K.scopeCss(D, F))),
                        ((l, u, h) => {
                          let b = H.get(l);
                          dt && h
                            ? ((b = b || new CSSStyleSheet()), 'string' == typeof b ? (b = u) : b.replaceSync(u))
                            : (b = u),
                            H.set(l, b);
                        })(F, D, !!(1 & b.$flags$)),
                        N();
                    }
                  }
                }
                const C = h.$ancestorComponent$,
                  T = () => eo(h, !0);
                g.asyncLoading && C && C['s-rc'] ? C['s-rc'].push(T) : T();
              });
              return function (h, b, y, w) {
                return l.apply(this, arguments);
              };
            })(),
            Pn = (l) => {
              g.lazyLoad && g.connectedCallback && _t(l, 'connectedCallback');
            },
            _i = (l) => {
              const u = (l['s-cr'] = P.createComment(g.isDebug ? `content-ref (host=${l.localName})` : ''));
              (u['s-cn'] = !0), ht(l, u, l.firstChild);
            },
            oo = (l) => {
              g.lazyLoad && g.disconnectedCallback && _t(l, 'disconnectedCallback'),
                g.cmpDidUnload && _t(l, 'componentDidUnload');
            },
            Wo = (function () {
              var l = (0, de.A)(function* (u) {
                if (!(1 & V.$flags$)) {
                  const h = Q(u);
                  g.hostListener && h.$rmListeners$ && (h.$rmListeners$.map((b) => b()), (h.$rmListeners$ = void 0)),
                    g.lazyLoad
                      ? null != h && h.$lazyInstance$
                        ? oo(h.$lazyInstance$)
                        : null != h && h.$onReadyPromise$ && h.$onReadyPromise$.then(() => oo(h.$lazyInstance$))
                      : oo(u);
                }
              });
              return function (h) {
                return l.apply(this, arguments);
              };
            })(),
            xn = (l) => {
              const u = l.cloneNode;
              l.cloneNode = function (h) {
                const b = this,
                  y = !!g.shadowDom && b.shadowRoot && Se,
                  w = u.call(b, !!y && h);
                if (g.slot && !y && h) {
                  let T,
                    E,
                    C = 0;
                  const D = [
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
                  ];
                  for (; C < b.childNodes.length; C++)
                    (T = b.childNodes[C]['s-nr']),
                      (E = D.every((F) => !b.childNodes[C][F])),
                      T &&
                        (g.appendChildSlotFix && w.__appendChild
                          ? w.__appendChild(T.cloneNode(!0))
                          : w.appendChild(T.cloneNode(!0))),
                      E && w.appendChild(b.childNodes[C].cloneNode(!0));
                }
                return w;
              };
            },
            We = (l) => {
              (l.__appendChild = l.appendChild),
                (l.appendChild = function (u) {
                  const h = (u['s-sn'] = ao(u)),
                    b = nn(this.childNodes, h, this.tagName);
                  if (b) {
                    const y = so(b, h),
                      w = y[y.length - 1],
                      C = ht(w.parentNode, u, w.nextSibling);
                    return Jn(this), C;
                  }
                  return this.__appendChild(u);
                });
            },
            Uo = (l) => {
              (l.__removeChild = l.removeChild),
                (l.removeChild = function (u) {
                  if (u && typeof u['s-sn'] < 'u') {
                    const h = nn(this.childNodes, u['s-sn'], this.tagName);
                    if (h) {
                      const y = so(h, u['s-sn']).find((w) => w === u);
                      if (y) return y.remove(), void Jn(this);
                    }
                  }
                  return this.__removeChild(u);
                });
            },
            X = (l) => {
              const u = l.prepend;
              l.prepend = function (...h) {
                h.forEach((b) => {
                  'string' == typeof b && (b = this.ownerDocument.createTextNode(b));
                  const y = (b['s-sn'] = ao(b)),
                    w = nn(this.childNodes, y, this.tagName);
                  if (w) {
                    const C = document.createTextNode('');
                    (C['s-nr'] = b), w['s-cr'].parentNode.__appendChild(C), (b['s-ol'] = C);
                    const E = so(w, y)[0];
                    return ht(E.parentNode, b, E.nextSibling);
                  }
                  return 1 === b.nodeType && b.getAttribute('slot') && (b.hidden = !0), u.call(this, b);
                });
              };
            },
            Ii = (l) => {
              l.append = function (...u) {
                u.forEach((h) => {
                  'string' == typeof h && (h = this.ownerDocument.createTextNode(h)), this.appendChild(h);
                });
              };
            },
            za = (l) => {
              const u = l.insertAdjacentHTML;
              l.insertAdjacentHTML = function (h, b) {
                if ('afterbegin' !== h && 'beforeend' !== h) return u.call(this, h, b);
                const y = this.ownerDocument.createElement('_');
                let w;
                if (((y.innerHTML = b), 'afterbegin' === h)) for (; (w = y.firstChild); ) this.prepend(w);
                else if ('beforeend' === h) for (; (w = y.firstChild); ) this.append(w);
              };
            },
            La = (l) => {
              l.insertAdjacentText = function (u, h) {
                this.insertAdjacentHTML(u, h);
              };
            },
            mr = (l) => {
              const u = l.insertAdjacentElement;
              l.insertAdjacentElement = function (h, b) {
                return 'afterbegin' !== h && 'beforeend' !== h
                  ? u.call(this, h, b)
                  : 'afterbegin' === h
                    ? (this.prepend(b), b)
                    : ('beforeend' === h && this.append(b), b);
              };
            },
            Ci = (l) => {
              const u = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
              Object.defineProperty(l, '__textContent', u),
                Object.defineProperty(
                  l,
                  'textContent',
                  g.experimentalScopedSlotChanges
                    ? {
                        get() {
                          return (
                            ' ' +
                            tn(this.childNodes)
                              .map((y) => {
                                var w, C;
                                const T = [];
                                let E = y.nextSibling;
                                for (; E && E['s-sn'] === y['s-sn']; )
                                  (3 === E.nodeType || 1 === E.nodeType) &&
                                    T.push(null != (C = null == (w = E.textContent) ? void 0 : w.trim()) ? C : ''),
                                    (E = E.nextSibling);
                                return T.filter((D) => '' !== D).join(' ');
                              })
                              .filter((y) => '' !== y)
                              .join(' ') +
                            ' '
                          );
                        },
                        set(h) {
                          tn(this.childNodes).forEach((y) => {
                            let w = y.nextSibling;
                            for (; w && w['s-sn'] === y['s-sn']; ) {
                              const C = w;
                              (w = w.nextSibling), C.remove();
                            }
                            if ('' === y['s-sn']) {
                              const C = this.ownerDocument.createTextNode(h);
                              (C['s-sn'] = ''), ht(y.parentElement, C, y.nextSibling);
                            } else y.remove();
                          });
                        },
                      }
                    : {
                        get() {
                          var h;
                          const b = nn(this.childNodes, '', this.tagName);
                          return 3 === (null == (h = null == b ? void 0 : b.nextSibling) ? void 0 : h.nodeType)
                            ? b.nextSibling.textContent
                            : b
                              ? b.textContent
                              : this.__textContent;
                        },
                        set(h) {
                          var b;
                          const y = nn(this.childNodes, '', this.tagName);
                          if (3 === (null == (b = null == y ? void 0 : y.nextSibling) ? void 0 : b.nodeType))
                            y.nextSibling.textContent = h;
                          else if (y) y.textContent = h;
                          else {
                            this.__textContent = h;
                            const w = this['s-cr'];
                            w && ht(this, w, this.firstChild);
                          }
                        },
                      },
                );
            },
            ro = (l, u) => {
              class h extends Array {
                item(y) {
                  return this[y];
                }
              }
              if (8 & u.$flags$) {
                const b = l.__lookupGetter__('childNodes');
                Object.defineProperty(l, 'children', {
                  get() {
                    return this.childNodes.map((y) => 1 === y.nodeType);
                  },
                }),
                  Object.defineProperty(l, 'childElementCount', { get: () => l.children.length }),
                  Object.defineProperty(l, 'childNodes', {
                    get() {
                      const y = b.call(this);
                      if (!(1 & V.$flags$) && 2 & Q(this).$flags$) {
                        const w = new h();
                        for (let C = 0; C < y.length; C++) {
                          const T = y[C]['s-nr'];
                          T && w.push(T);
                        }
                        return w;
                      }
                      return h.from(y);
                    },
                  });
              }
            },
            tn = (l) => {
              const u = [];
              for (const h of Array.from(l)) h['s-sr'] && u.push(h), u.push(...tn(h.childNodes));
              return u;
            },
            ao = (l) => l['s-sn'] || (1 === l.nodeType && l.getAttribute('slot')) || '',
            nn = (l, u, h) => {
              let y,
                b = 0;
              for (; b < l.length; b++)
                if (
                  ((y = l[b]), (y['s-sr'] && y['s-sn'] === u && y['s-hn'] === h) || ((y = nn(y.childNodes, u, h)), y))
                )
                  return y;
              return null;
            },
            so = (l, u) => {
              const h = [l];
              for (; (l = l.nextSibling) && l['s-sn'] === u; ) h.push(l);
              return h;
            },
            Si = (l, u) => {
              const h = { $flags$: u[0], $tagName$: u[1] };
              g.member && (h.$members$ = u[2]),
                g.hostListener && (h.$listeners$ = u[3]),
                g.watchCallback && (h.$watchers$ = l.$watchers$),
                g.reflect && (h.$attrsToReflect$ = []),
                g.shadowDom && !Se && 1 & h.$flags$ && (h.$flags$ |= 8),
                g.experimentalSlotFixes
                  ? g.scoped &&
                    2 & h.$flags$ &&
                    ((l, u) => {
                      xn(l), We(l), Ii(l), X(l), mr(l), za(l), La(l), Ci(l), ro(l, u), Uo(l);
                    })(l.prototype, h)
                  : (g.slotChildNodesFix && ro(l.prototype, h),
                    g.cloneNodeFix && xn(l.prototype),
                    g.appendChildSlotFix && We(l.prototype),
                    g.scopedSlotTextContentFix && 2 & h.$flags$ && Ci(l.prototype));
              const b = l.prototype.connectedCallback,
                y = l.prototype.disconnectedCallback;
              return (
                Object.assign(l.prototype, {
                  __registerHost() {
                    ((l, u) => {
                      const h = { $flags$: 0, $hostElement$: l, $cmpMeta$: u, $instanceValues$: new Map() };
                      g.isDev && (h.$renderCount$ = 0),
                        g.method &&
                          g.lazyLoad &&
                          (h.$onInstancePromise$ = new Promise((b) => (h.$onInstanceResolve$ = b))),
                        g.asyncLoading &&
                          ((h.$onReadyPromise$ = new Promise((b) => (h.$onReadyResolve$ = b))),
                          (l['s-p'] = []),
                          (l['s-rc'] = [])),
                        Y.set(l, h);
                    })(this, h);
                  },
                  connectedCallback() {
                    const w = Q(this);
                    Go(this, w, h.$listeners$, !1),
                      ((l) => {
                        if (!(1 & V.$flags$)) {
                          const u = Q(l),
                            h = u.$cmpMeta$,
                            b = ut('connectedCallback', h.$tagName$);
                          if ((g.hostListenerTargetParent && Go(l, u, h.$listeners$, !0), 1 & u.$flags$))
                            Go(l, u, h.$listeners$, !1),
                              null != u && u.$lazyInstance$
                                ? Pn(u.$lazyInstance$)
                                : null != u &&
                                  u.$onReadyPromise$ &&
                                  u.$onReadyPromise$.then(() => Pn(u.$lazyInstance$));
                          else {
                            let y;
                            if (((u.$flags$ |= 1), g.hydrateClientSide && ((y = l.getAttribute(ke)), y))) {
                              if (g.shadowDom && Se && 1 & h.$flags$) {
                                const w = g.mode ? it(l.shadowRoot, h, l.getAttribute('s-mode')) : it(l.shadowRoot, h);
                                l.classList.remove(w + '-h', w + '-s');
                              }
                              ((l, u, h, b) => {
                                const y = ut('hydrateClient', u),
                                  w = l.shadowRoot,
                                  C = [],
                                  E = g.shadowDom && w ? [] : null,
                                  D = (b.$vnode$ = Xt(u, null));
                                V.$orgLocNodes$ || Yn(P.body, (V.$orgLocNodes$ = new Map())),
                                  (l[ke] = h),
                                  l.removeAttribute(ke),
                                  Zt(D, C, [], E, l, l, h),
                                  C.map((F) => {
                                    const N = F.$hostId$ + '.' + F.$nodeId$,
                                      K = V.$orgLocNodes$.get(N),
                                      le = F.$elm$;
                                    K && Se && '' === K['s-en'] && K.parentNode.insertBefore(le, K.nextSibling),
                                      w || ((le['s-hn'] = u), K && ((le['s-ol'] = K), (le['s-ol']['s-nr'] = le))),
                                      V.$orgLocNodes$.delete(N);
                                  }),
                                  g.shadowDom &&
                                    w &&
                                    E.map((F) => {
                                      F && w.appendChild(F);
                                    }),
                                  y();
                              })(l, h.$tagName$, y, u);
                            }
                            if (
                              (g.slotRelocation &&
                                !y &&
                                (g.hydrateServerSide || ((g.slot || g.shadowDom) && 12 & h.$flags$)) &&
                                _i(l),
                              g.asyncLoading)
                            ) {
                              let w = l;
                              for (; (w = w.parentNode || w.host); )
                                if (
                                  (g.hydrateClientSide && 1 === w.nodeType && w.hasAttribute('s-id') && w['s-p']) ||
                                  w['s-p']
                                ) {
                                  Ht(u, (u.$ancestorComponent$ = w));
                                  break;
                                }
                            }
                            g.prop &&
                              !g.hydrateServerSide &&
                              h.$members$ &&
                              Object.entries(h.$members$).map(([w, [C]]) => {
                                if (31 & C && l.hasOwnProperty(w)) {
                                  const T = l[w];
                                  delete l[w], (l[w] = T);
                                }
                              }),
                              g.initializeNextTick ? hn(() => ki(l, u, h)) : ki(l, u, h);
                          }
                          b();
                        }
                      })(this),
                      g.connectedCallback && b && b.call(this);
                  },
                  disconnectedCallback() {
                    Wo(this), g.disconnectedCallback && y && y.call(this);
                  },
                  __attachShadow() {
                    if (Se)
                      if (this.shadowRoot) {
                        if ('open' !== this.shadowRoot.mode)
                          throw new Error(
                            `Unable to re-use existing shadow root for ${h.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`,
                          );
                      } else
                        this.attachShadow(
                          g.shadowDelegatesFocus
                            ? { mode: 'open', delegatesFocus: !!(16 & h.$flags$) }
                            : { mode: 'open' },
                        );
                    else this.shadowRoot = this;
                  },
                }),
                (l.is = h.$tagName$),
                wi(l, h, 3)
              );
            },
            Go = (l, u, h, b) => {
              g.hostListener &&
                h &&
                (g.hostListenerTargetParent && (h = h.filter(b ? ([y]) => 32 & y : ([y]) => !(32 & y))),
                h.map(([y, w, C]) => {
                  const T = g.hostListenerTarget ? Fa(l, y) : l,
                    E = Ei(u, C),
                    D = Ti(y);
                  V.ael(T, w, E, D), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => V.rel(T, w, E, D));
                }));
            },
            Ei = (l, u) => (h) => {
              var b;
              try {
                g.lazyLoad
                  ? 256 & l.$flags$
                    ? null == (b = l.$lazyInstance$) || b[u](h)
                    : (l.$queuedListeners$ = l.$queuedListeners$ || []).push([u, h])
                  : l.$hostElement$[u](h);
              } catch (y) {
                se(y);
              }
            },
            Fa = (l, u) =>
              g.hostListenerTargetDocument && 4 & u
                ? P
                : g.hostListenerTargetWindow && 8 & u
                  ? L
                  : g.hostListenerTargetBody && 16 & u
                    ? P.body
                    : g.hostListenerTargetParent && 32 & u && l.parentElement
                      ? l.parentElement
                      : l,
            Ti = (l) => (tt ? { passive: !!(1 & l), capture: !!(2 & l) } : !!(2 & l));
        },
        994: (U, re, J) => {
          'use strict';
          function de(_e, ie, Ee, Te, q, Y, Q) {
            try {
              var Ie = _e[Y](Q),
                z = Ie.value;
            } catch (ve) {
              return void Ee(ve);
            }
            Ie.done ? ie(z) : Promise.resolve(z).then(Te, q);
          }
          function g(_e) {
            return function () {
              var ie = this,
                Ee = arguments;
              return new Promise(function (Te, q) {
                var Y = _e.apply(ie, Ee);
                function Q(z) {
                  de(Y, Te, q, Q, Ie, 'next', z);
                }
                function Ie(z) {
                  de(Y, Te, q, Q, Ie, 'throw', z);
                }
                Q(void 0);
              });
            };
          }
          J.d(re, { A: () => g });
        },
      },
      Da = {};
    function ae(U) {
      var re = Da[U];
      if (void 0 !== re) return re.exports;
      var J = (Da[U] = { exports: {} });
      return Ta[U](J, J.exports, ae), J.exports;
    }
    (ae.m = Ta),
      (ae.d = (U, re) => {
        for (var J in re) ae.o(re, J) && !ae.o(U, J) && Object.defineProperty(U, J, { enumerable: !0, get: re[J] });
      }),
      (ae.f = {}),
      (ae.e = (U) => Promise.all(Object.keys(ae.f).reduce((re, J) => (ae.f[J](U, re), re), []))),
      (ae.u = (U) =>
        U +
        '.' +
        { 82: 'c492c7a894eaaad9', 262: '8e4268bc0a9dc546', 506: '0230b7e21e4edf05', 592: 'fedc63c3baac303c' }[U] +
        '.js'),
      (ae.miniCssF = (U) => {}),
      (ae.o = (U, re) => Object.prototype.hasOwnProperty.call(U, re)),
      (U = {}),
      (re = 'plugin:'),
      (ae.l = (J, de, g, _e) => {
        if (U[J]) U[J].push(de);
        else {
          var ie, Ee;
          if (void 0 !== g)
            for (var Te = document.getElementsByTagName('script'), q = 0; q < Te.length; q++) {
              var Y = Te[q];
              if (Y.getAttribute('src') == J || Y.getAttribute('data-webpack') == re + g) {
                ie = Y;
                break;
              }
            }
          ie ||
            ((Ee = !0),
            ((ie = document.createElement('script')).type = 'module'),
            (ie.charset = 'utf-8'),
            (ie.timeout = 120),
            ae.nc && ie.setAttribute('nonce', ae.nc),
            ie.setAttribute('data-webpack', re + g),
            (ie.src = ae.tu(J))),
            (U[J] = [de]);
          var Q = (z, ve) => {
              (ie.onerror = ie.onload = null), clearTimeout(Ie);
              var f = U[J];
              if ((delete U[J], ie.parentNode && ie.parentNode.removeChild(ie), f && f.forEach((se) => se(ve)), z))
                return z(ve);
            },
            Ie = setTimeout(Q.bind(null, void 0, { type: 'timeout', target: ie }), 12e4);
          (ie.onerror = Q.bind(null, ie.onerror)),
            (ie.onload = Q.bind(null, ie.onload)),
            Ee && document.head.appendChild(ie);
        }
      }),
      (ae.r = (U) => {
        typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(U, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(U, '__esModule', { value: !0 });
      }),
      (() => {
        var U;
        ae.tt = () => (
          void 0 === U &&
            ((U = { createScriptURL: (re) => re }),
            typeof trustedTypes < 'u' &&
              trustedTypes.createPolicy &&
              (U = trustedTypes.createPolicy('angular#bundler', U))),
          U
        );
      })(),
      (ae.tu = (U) => ae.tt().createScriptURL(U)),
      (ae.p = ''),
      (() => {
        var U = { 792: 0 };
        ae.f.j = (de, g) => {
          var _e = ae.o(U, de) ? U[de] : void 0;
          if (0 !== _e)
            if (_e) g.push(_e[2]);
            else {
              var ie = new Promise((Y, Q) => (_e = U[de] = [Y, Q]));
              g.push((_e[2] = ie));
              var Ee = ae.p + ae.u(de),
                Te = new Error();
              ae.l(
                Ee,
                (Y) => {
                  if (ae.o(U, de) && (0 !== (_e = U[de]) && (U[de] = void 0), _e)) {
                    var Q = Y && ('load' === Y.type ? 'missing' : Y.type),
                      Ie = Y && Y.target && Y.target.src;
                    (Te.message = 'Loading chunk ' + de + ' failed.\n(' + Q + ': ' + Ie + ')'),
                      (Te.name = 'ChunkLoadError'),
                      (Te.type = Q),
                      (Te.request = Ie),
                      _e[1](Te);
                  }
                },
                'chunk-' + de,
                de,
              );
            }
        };
        var re = (de, g) => {
            var Te,
              q,
              [_e, ie, Ee] = g,
              Y = 0;
            if (_e.some((Ie) => 0 !== U[Ie])) {
              for (Te in ie) ae.o(ie, Te) && (ae.m[Te] = ie[Te]);
              Ee && Ee(ae);
            }
            for (de && de(g); Y < _e.length; Y++) ae.o(U, (q = _e[Y])) && U[q] && U[q][0](), (U[q] = 0);
          },
          J = ((typeof self < 'u' ? self : this).webpackChunkplugin =
            (typeof self < 'u' ? self : this).webpackChunkplugin || []);
        J.forEach(re.bind(null, 0)), (J.push = re.bind(null, J.push.bind(J)));
      })();
    var lr = {};
    return (
      (() => {
        'use strict';
        ae.r(lr), ae.d(lr, { PluginModule: () => ic, default: () => Gg });
        var U = ae(714),
          re = ae(122),
          J = ae(555),
          de = ae(325);
        function g(n) {
          return 'function' == typeof n;
        }
        function ie(n) {
          return (e) => {
            if (
              (function _e(n) {
                return g(null == n ? void 0 : n.lift);
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
        function Te(...n) {
          (0, de.wakoLog)('plugin.watchnow', n);
        }
        function Y(n) {
          return (Y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(n);
        }
        function z(n, e, t) {
          return (
            (e = (function Ie(n) {
              var e = (function Q(n, e) {
                if ('object' != Y(n) || !n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var o = t.call(n, e || 'default');
                  if ('object' != Y(o)) return o;
                  throw new TypeError('@@toPrimitive must return a primitive value.');
                }
                return ('string' === e ? String : Number)(n);
              })(n, 'string');
              return 'symbol' == Y(e) ? e : e + '';
            })(e)) in n
              ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
              : (n[e] = t),
            n
          );
        }
        var ve = ae(652),
          f = ae(264),
          se = ae(346),
          ye = ae(382),
          be = ae(961);
        const Ce = (n) => n && 'number' == typeof n.length && 'function' != typeof n,
          Me = (function Oe(n) {
            const t = n((o) => {
              Error.call(o), (o.stack = new Error().stack);
            });
            return (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t;
          })(
            (n) =>
              function (t) {
                n(this),
                  (this.message = t
                    ? `${t.length} errors occurred during unsubscription:\n${t.map((o, i) => `${i + 1}) ${o.toString()}`).join('\n  ')}`
                    : ''),
                  (this.name = 'UnsubscriptionError'),
                  (this.errors = t);
              },
          );
        function Be(n, e) {
          if (n) {
            const t = n.indexOf(e);
            0 <= t && n.splice(t, 1);
          }
        }
        class M {
          constructor(e) {
            (this.initialTeardown = e), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
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
              if (g(o))
                try {
                  o();
                } catch (r) {
                  e = r instanceof Me ? r.errors : [r];
                }
              const { _finalizers: i } = this;
              if (i) {
                this._finalizers = null;
                for (const r of i)
                  try {
                    me(r);
                  } catch (a) {
                    (e = null != e ? e : []), a instanceof Me ? (e = [...e, ...a.errors]) : e.push(a);
                  }
              }
              if (e) throw new Me(e);
            }
          }
          add(e) {
            var t;
            if (e && e !== this)
              if (this.closed) me(e);
              else {
                if (e instanceof M) {
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
            t === e ? (this._parentage = null) : Array.isArray(t) && Be(t, e);
          }
          remove(e) {
            const { _finalizers: t } = this;
            t && Be(t, e), e instanceof M && e._removeParent(this);
          }
        }
        function te(n) {
          return n instanceof M || (n && 'closed' in n && g(n.remove) && g(n.add) && g(n.unsubscribe));
        }
        function me(n) {
          g(n) ? n() : n.unsubscribe();
        }
        M.EMPTY = (() => {
          const n = new M();
          return (n.closed = !0), n;
        })();
        const we = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
          },
          xe = {
            setTimeout(n, e, ...t) {
              const { delegate: o } = xe;
              return null != o && o.setTimeout ? o.setTimeout(n, e, ...t) : setTimeout(n, e, ...t);
            },
            clearTimeout(n) {
              const { delegate: e } = xe;
              return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(n);
            },
            delegate: void 0,
          };
        function ne(n) {
          xe.setTimeout(() => {
            const { onUnhandledError: e } = we;
            if (!e) throw n;
            e(n);
          });
        }
        function ke() {}
        const Pe = Ze('C', void 0, void 0);
        function Ze(n, e, t) {
          return { kind: n, value: e, error: t };
        }
        let Ge = null;
        class P extends M {
          constructor(e) {
            super(),
              (this.isStopped = !1),
              e ? ((this.destination = e), te(e) && e.add(this)) : (this.destination = bt);
          }
          static create(e, t, o) {
            return new Se(e, t, o);
          }
          next(e) {
            this.isStopped
              ? dt(
                  (function pe(n) {
                    return Ze('N', n, void 0);
                  })(e),
                  this,
                )
              : this._next(e);
          }
          error(e) {
            this.isStopped
              ? dt(
                  (function Fe(n) {
                    return Ze('E', void 0, n);
                  })(e),
                  this,
                )
              : ((this.isStopped = !0), this._error(e));
          }
          complete() {
            this.isStopped ? dt(Pe, this) : ((this.isStopped = !0), this._complete());
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
        const oe = Function.prototype.bind;
        function V(n, e) {
          return oe.call(n, e);
        }
        class gt {
          constructor(e) {
            this.partialObserver = e;
          }
          next(e) {
            const { partialObserver: t } = this;
            if (t.next)
              try {
                t.next(e);
              } catch (o) {
                tt(o);
              }
          }
          error(e) {
            const { partialObserver: t } = this;
            if (t.error)
              try {
                t.error(e);
              } catch (o) {
                tt(o);
              }
            else tt(e);
          }
          complete() {
            const { partialObserver: e } = this;
            if (e.complete)
              try {
                e.complete();
              } catch (t) {
                tt(t);
              }
          }
        }
        class Se extends P {
          constructor(e, t, o) {
            let i;
            if ((super(), g(e) || !e))
              i = { next: null != e ? e : void 0, error: null != t ? t : void 0, complete: null != o ? o : void 0 };
            else {
              let r;
              this && we.useDeprecatedNextContext
                ? ((r = Object.create(e)),
                  (r.unsubscribe = () => this.unsubscribe()),
                  (i = {
                    next: e.next && V(e.next, r),
                    error: e.error && V(e.error, r),
                    complete: e.complete && V(e.complete, r),
                  }))
                : (i = e);
            }
            this.destination = new gt(i);
          }
        }
        function tt(n) {
          we.useDeprecatedSynchronousErrorHandling
            ? (function L(n) {
                we.useDeprecatedSynchronousErrorHandling && Ge && ((Ge.errorThrown = !0), (Ge.error = n));
              })(n)
            : ne(n);
        }
        function dt(n, e) {
          const { onStoppedNotification: t } = we;
          t && xe.setTimeout(() => t(n, e));
        }
        const bt = {
            closed: !0,
            next: ke,
            error: function Ue(n) {
              throw n;
            },
            complete: ke,
          },
          jt = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        function ot(n) {
          return n;
        }
        let zt = (() => {
          class n {
            constructor(t) {
              t && (this._subscribe = t);
            }
            lift(t) {
              const o = new n();
              return (o.source = this), (o.operator = t), o;
            }
            subscribe(t, o, i) {
              const r = (function Yt(n) {
                return (
                  (n && n instanceof P) ||
                  ((function Bn(n) {
                    return n && g(n.next) && g(n.error) && g(n.complete);
                  })(n) &&
                    te(n))
                );
              })(t)
                ? t
                : new Se(t, o, i);
              return (
                (function S(n) {
                  if (we.useDeprecatedSynchronousErrorHandling) {
                    const e = !Ge;
                    if ((e && (Ge = { errorThrown: !1, error: null }), n(), e)) {
                      const { errorThrown: t, error: o } = Ge;
                      if (((Ge = null), t)) throw o;
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
              return new (o = _n(o))((i, r) => {
                const a = new Se({
                  next: (s) => {
                    try {
                      t(s);
                    } catch (d) {
                      r(d), a.unsubscribe();
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
            [jt]() {
              return this;
            }
            pipe(...t) {
              return (function pn(n) {
                return 0 === n.length
                  ? ot
                  : 1 === n.length
                    ? n[0]
                    : function (t) {
                        return n.reduce((o, i) => i(o), t);
                      };
              })(t)(this);
            }
            toPromise(t) {
              return new (t = _n(t))((o, i) => {
                let r;
                this.subscribe(
                  (a) => (r = a),
                  (a) => i(a),
                  () => o(r),
                );
              });
            }
          }
          return (n.create = (e) => new n(e)), n;
        })();
        function _n(n) {
          var e;
          return null !== (e = null != n ? n : we.Promise) && void 0 !== e ? e : Promise;
        }
        const di = (function Nn() {
          return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
        })();
        function Vn(n) {
          if (n instanceof zt) return n;
          if (null != n) {
            if (
              (function hn(n) {
                return g(n[jt]);
              })(n)
            )
              return (function Cn(n) {
                return new zt((e) => {
                  const t = n[jt]();
                  if (g(t.subscribe)) return t.subscribe(e);
                  throw new TypeError('Provided object does not correctly implement Symbol.observable');
                });
              })(n);
            if (Ce(n))
              return (function Wn(n) {
                return new zt((e) => {
                  for (let t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                  e.complete();
                });
              })(n);
            if (
              (function ue(n) {
                return g(null == n ? void 0 : n.then);
              })(n)
            )
              return (function Co(n) {
                return new zt((e) => {
                  n.then(
                    (t) => {
                      e.closed || (e.next(t), e.complete());
                    },
                    (t) => e.error(t),
                  ).then(null, ne);
                });
              })(n);
            if (
              (function In(n) {
                return Symbol.asyncIterator && g(null == n ? void 0 : n[Symbol.asyncIterator]);
              })(n)
            )
              return Sn(n);
            if (
              (function Hn(n) {
                return g(null == n ? void 0 : n[di]);
              })(n)
            )
              return (function $n(n) {
                return new zt((e) => {
                  for (const t of n) if ((e.next(t), e.closed)) return;
                  e.complete();
                });
              })(n);
            if (
              (function Io(n) {
                return g(null == n ? void 0 : n.getReader);
              })(n)
            )
              return (function $o(n) {
                return Sn(
                  (function _o(n) {
                    return (0, ve.__asyncGenerator)(this, arguments, function* () {
                      const t = n.getReader();
                      try {
                        for (;;) {
                          const { value: o, done: i } = yield (0, ve.__await)(t.read());
                          if (i) return yield (0, ve.__await)(void 0);
                          yield yield (0, ve.__await)(o);
                        }
                      } finally {
                        t.releaseLock();
                      }
                    });
                  })(n),
                );
              })(n);
          }
          throw (function Rn(n) {
            return new TypeError(
              `You provided ${null !== n && 'object' == typeof n ? 'an invalid object' : `'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
            );
          })(n);
        }
        function Sn(n) {
          return new zt((e) => {
            (function So(n, e) {
              var t, o, i, r;
              return (0, ve.__awaiter)(this, void 0, void 0, function* () {
                try {
                  for (t = (0, ve.__asyncValues)(n); !(o = yield t.next()).done; )
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
        function fn(n, e, t, o, i) {
          return new En(n, e, t, o, i);
        }
        class En extends P {
          constructor(e, t, o, i, r, a) {
            super(e),
              (this.onFinalize = r),
              (this.shouldUnsubscribe = a),
              (this._next = t
                ? function (s) {
                    try {
                      t(s);
                    } catch (d) {
                      e.error(d);
                    }
                  }
                : super._next),
              (this._error = i
                ? function (s) {
                    try {
                      i(s);
                    } catch (d) {
                      e.error(d);
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
                : super._complete);
          }
          unsubscribe() {
            var e;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              const { closed: t } = this;
              super.unsubscribe(), !t && (null === (e = this.onFinalize) || void 0 === e || e.call(this));
            }
          }
        }
        const Zt = new f.InjectionToken('USERCONFIG');
        class Tn {
          constructor(e = {}) {
            z(this, 'data', void 0),
              (this.data = e),
              console.warn(
                "[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.",
              );
          }
          get(e) {
            return this.data[e];
          }
        }
        let Dn = (() => {
          var n;
          class e {
            constructor() {
              z(this, 'zone', (0, f.inject)(f.NgZone)),
                z(this, 'applicationRef', (0, f.inject)(f.ApplicationRef)),
                z(this, 'config', (0, f.inject)(Zt));
            }
            create(o, i, r) {
              var a;
              return new Do(
                o,
                i,
                this.applicationRef,
                this.zone,
                r,
                null !== (a = this.config.useSetInputAPI) && void 0 !== a && a,
              );
            }
          }
          return (
            (n = e),
            z(e, '\u0275fac', function (o) {
              return new (o || n)();
            }),
            z(e, '\u0275prov', f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        class Do {
          constructor(e, t, o, i, r, a) {
            z(this, 'environmentInjector', void 0),
              z(this, 'injector', void 0),
              z(this, 'applicationRef', void 0),
              z(this, 'zone', void 0),
              z(this, 'elementReferenceKey', void 0),
              z(this, 'enableSignalsSupport', void 0),
              z(this, 'elRefMap', new WeakMap()),
              z(this, 'elEventsMap', new WeakMap()),
              (this.environmentInjector = e),
              (this.injector = t),
              (this.applicationRef = o),
              (this.zone = i),
              (this.elementReferenceKey = r),
              (this.enableSignalsSupport = a);
          }
          attachViewToDom(e, t, o, i) {
            return this.zone.run(
              () =>
                new Promise((r) => {
                  const a = { ...o };
                  void 0 !== this.elementReferenceKey && (a[this.elementReferenceKey] = e),
                    r(
                      Ao(
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
                    );
                }),
            );
          }
          removeViewFromDom(e, t) {
            return this.zone.run(
              () =>
                new Promise((o) => {
                  const i = this.elRefMap.get(t);
                  if (i) {
                    i.destroy(), this.elRefMap.delete(t);
                    const r = this.elEventsMap.get(t);
                    r && (r(), this.elEventsMap.delete(t));
                  }
                  o();
                }),
            );
          }
        }
        const Ao = (n, e, t, o, i, r, a, s, d, p, m, v) => {
            const _ = f.Injector.create({ providers: Bt(d), parent: t }),
              k = (0, f.createComponent)(s, { environmentInjector: e, elementInjector: _ }),
              I = k.instance,
              $ = k.location.nativeElement;
            if (d)
              if (
                (m &&
                  void 0 !== I[m] &&
                  console.error(
                    `[Ionic Error]: ${m} is a reserved property when using ${a.tagName.toLowerCase()}. Rename or remove the "${m}" property from ${s.name}.`,
                  ),
                !0 === v && void 0 !== k.setInput)
              ) {
                const { modal: B, popover: W, ...G } = d;
                for (const Z in G) k.setInput(Z, G[Z]);
                void 0 !== B && Object.assign(I, { modal: B }), void 0 !== W && Object.assign(I, { popover: W });
              } else Object.assign(I, d);
            if (p) for (const B of p) $.classList.add(B);
            const O = Kn(n, I, $);
            return a.appendChild($), o.attachView(k.hostView), i.set($, k), r.set($, O), $;
          },
          gn = [ye.L, ye.a, ye.b, ye.c, ye.d],
          Kn = (n, e, t) =>
            n.run(() => {
              const o = gn
                .filter((i) => 'function' == typeof e[i])
                .map((i) => {
                  const r = (a) => e[i](a.detail);
                  return t.addEventListener(i, r), () => t.removeEventListener(i, r);
                });
              return () => o.forEach((i) => i());
            }),
          Qt = new f.InjectionToken('NavParamsToken'),
          Bt = (n) => [
            { provide: Qt, useValue: n },
            { provide: Tn, useFactory: An, deps: [Qt] },
          ],
          An = (n) => new Tn(n),
          Bo = new f.InjectionToken('');
        let gi = (() => {
          var n;
          class e {
            constructor() {
              z(this, 'outletDataSubscriptions', new Map());
            }
            bindActivatedRouteToOutletComponent(o) {
              this.unsubscribeFromRouteData(o), this.subscribeToRouteData(o);
            }
            unsubscribeFromRouteData(o) {
              var i;
              null === (i = this.outletDataSubscriptions.get(o)) || void 0 === i || i.unsubscribe(),
                this.outletDataSubscriptions.delete(o);
            }
            subscribeToRouteData(o) {
              const { activatedRoute: i } = o,
                r = (0, be.combineLatest)([i.queryParams, i.params, i.data])
                  .pipe(
                    (function ut(n, e) {
                      return ie((t, o) => {
                        let i = null,
                          r = 0,
                          a = !1;
                        const s = () => a && !i && o.complete();
                        t.subscribe(
                          fn(
                            o,
                            (d) => {
                              null == i || i.unsubscribe();
                              let p = 0;
                              const m = r++;
                              Vn(n(d, m)).subscribe(
                                (i = fn(
                                  o,
                                  (v) => o.next(e ? e(d, v, m, p++) : v),
                                  () => {
                                    (i = null), s();
                                  },
                                )),
                              );
                            },
                            () => {
                              (a = !0), s();
                            },
                          ),
                        );
                      });
                    })(([a, s, d], p) => ((d = { ...a, ...s, ...d }), 0 === p ? (0, be.of)(d) : Promise.resolve(d))),
                  )
                  .subscribe((a) => {
                    if (!o.isActivated || !o.activatedComponentRef || o.activatedRoute !== i || null === i.component)
                      return void this.unsubscribeFromRouteData(o);
                    const s = (0, f.reflectComponentType)(i.component);
                    if (s) for (const { templateName: d } of s.inputs) o.activatedComponentRef.setInput(d, a[d]);
                    else this.unsubscribeFromRouteData(o);
                  });
              this.outletDataSubscriptions.set(o, r);
            }
          }
          return (
            (n = e),
            z(e, '\u0275fac', function (o) {
              return new (o || n)();
            }),
            z(e, '\u0275prov', f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        function Jn(n) {
          return null != n && n.componentInputBindingEnabled ? new gi() : null;
        }
        class xi {
          constructor(e) {
            z(this, 'ctrl', void 0), (this.ctrl = e);
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
        var R = ae(994),
          c = ae(445),
          j = ae(935),
          ze = ae(338);
        const to = 'ion-content',
          _t = '.ion-content-scroll-host',
          en = `${to}, ${_t}`,
          Lt = (n) => 'ION-CONTENT' === n.tagName,
          Vo = (n) => n.closest(en),
          no = (n) => {
            if (Lt(n)) {
              const t = n.scrollY;
              return (n.scrollY = !1), t;
            }
            return n.style.setProperty('overflow', 'hidden'), !0;
          },
          oo = (function () {
            var n = (0, R.A)(function* (e, t, o, i, r, a) {
              var s;
              if (e) return e.attachViewToDom(t, o, r, i);
              if (!(a || 'string' == typeof o || o instanceof HTMLElement))
                throw new Error('framework delegate is missing');
              const d =
                'string' == typeof o
                  ? null === (s = t.ownerDocument) || void 0 === s
                    ? void 0
                    : s.createElement(o)
                  : o;
              return (
                i && i.forEach((p) => d.classList.add(p)),
                r && Object.assign(d, r),
                t.appendChild(d),
                yield new Promise((p) => (0, j.c)(d, p)),
                d
              );
            });
            return function (t, o, i, r, a, s) {
              return n.apply(this, arguments);
            };
          })(),
          Wo = (n, e) => {
            if (e) {
              if (n) return n.removeViewFromDom(e.parentElement, e);
              e.remove();
            }
            return Promise.resolve();
          },
          io = () => {
            let n, e;
            return {
              attachViewToDom: (function () {
                var i = (0, R.A)(function* (r, a, s = {}, d = []) {
                  var p, m;
                  let v;
                  if (((n = r), a)) {
                    const k =
                      'string' == typeof a
                        ? null === (p = n.ownerDocument) || void 0 === p
                          ? void 0
                          : p.createElement(a)
                        : a;
                    d.forEach((I) => k.classList.add(I)),
                      Object.assign(k, s),
                      n.appendChild(k),
                      (v = k),
                      yield new Promise((I) => (0, j.c)(k, I));
                  } else if (
                    n.children.length > 0 &&
                    ('ION-MODAL' === n.tagName || 'ION-POPOVER' === n.tagName) &&
                    !(v = n.children[0]).classList.contains('ion-delegate-host')
                  ) {
                    const I = null === (m = n.ownerDocument) || void 0 === m ? void 0 : m.createElement('div');
                    I.classList.add('ion-delegate-host'),
                      d.forEach(($) => I.classList.add($)),
                      I.append(...n.children),
                      n.appendChild(I),
                      (v = I);
                  }
                  const _ = document.querySelector('ion-app') || document.body;
                  return (
                    (e = document.createComment('ionic teleport')),
                    n.parentNode.insertBefore(e, n),
                    _.appendChild(n),
                    null != v ? v : n
                  );
                });
                return function (a, s) {
                  return i.apply(this, arguments);
                };
              })(),
              removeViewFromDom: () => (n && e && (e.parentNode.insertBefore(n, e), e.remove()), Promise.resolve()),
            };
          },
          xn = () => {
            let n;
            return {
              lock: (function () {
                var t = (0, R.A)(function* () {
                  const o = n;
                  let i;
                  return (n = new Promise((r) => (i = r))), void 0 !== o && (yield o), i;
                });
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            };
          };
        var We = ae(911);
        var X = ae(530);
        var ro = ae(86);
        const tn =
            '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
          ao = (n, e) => {
            const t = n.querySelector(tn);
            so(t, null != e ? e : n);
          },
          nn = (n, e) => {
            const t = Array.from(n.querySelectorAll(tn));
            so(t.length > 0 ? t[t.length - 1] : null, null != e ? e : n);
          },
          so = (n, e) => {
            let t = n;
            const o = null == n ? void 0 : n.shadowRoot;
            o && (t = o.querySelector(tn) || n), t ? (0, j.f)(t) : e.focus();
          };
        let $i = 0,
          Si = 0;
        const qo = new WeakMap(),
          lo = (n) => ({
            create: (e) => Di(n, e),
            dismiss: (e, t, o) => h(document, e, t, n, o),
            getTop: () =>
              (0, R.A)(function* () {
                return w(document, n);
              })(),
          }),
          Ei = lo('ion-modal'),
          Ti = lo('ion-popover'),
          Yo = (n) => {
            typeof document < 'u' && u(document);
            const e = $i++;
            n.overlayIndex = e;
          },
          Ko = (n) => (n.hasAttribute('id') || (n.id = 'ion-overlay-' + ++Si), n.id),
          Di = (n, e) =>
            typeof window < 'u' && typeof window.customElements < 'u'
              ? window.customElements.whenDefined(n).then(() => {
                  const t = document.createElement(n);
                  return (
                    t.classList.add('overlay-hidden'),
                    Object.assign(t, Object.assign(Object.assign({}, e), { hasController: !0 })),
                    F(document).appendChild(t),
                    new Promise((o) => (0, j.c)(t, o))
                  );
                })
              : Promise.resolve(),
          Xo = (n, e) => {
            let t = n;
            const o = null == n ? void 0 : n.shadowRoot;
            o && (t = o.querySelector(tn) || n), t ? (0, j.f)(t) : e.focus();
          },
          u = (n) => {
            0 === $i &&
              (($i = 1),
              n.addEventListener(
                'focus',
                (e) => {
                  ((n, e) => {
                    const t = w(e, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover'),
                      o = n.target;
                    t &&
                      o &&
                      !t.classList.contains(Zo) &&
                      (t.shadowRoot
                        ? (() => {
                            if (t.contains(o)) t.lastFocus = o;
                            else if ('ION-TOAST' === o.tagName) Xo(t.lastFocus, t);
                            else {
                              const a = t.lastFocus;
                              ao(t), a === e.activeElement && nn(t), (t.lastFocus = e.activeElement);
                            }
                          })()
                        : (() => {
                            if (t === o) t.lastFocus = void 0;
                            else if ('ION-TOAST' === o.tagName) Xo(t.lastFocus, t);
                            else {
                              const a = (0, j.g)(t);
                              if (!a.contains(o)) return;
                              const s = a.querySelector('.ion-overlay-wrapper');
                              if (!s) return;
                              if (s.contains(o) || o === a.querySelector('ion-backdrop')) t.lastFocus = o;
                              else {
                                const d = t.lastFocus;
                                ao(s, t), d === e.activeElement && nn(s, t), (t.lastFocus = e.activeElement);
                              }
                            }
                          })());
                  })(e, n);
                },
                !0,
              ),
              n.addEventListener('ionBackButton', (e) => {
                const t = w(n);
                null != t &&
                  t.backdropDismiss &&
                  e.detail.register(100, () => {
                    t.dismiss(void 0, De);
                  });
              }),
              (X.c.get('experimentalCloseWatcher', !1) && void 0 !== We.w && 'CloseWatcher' in We.w) ||
                n.addEventListener('keydown', (e) => {
                  if ('Escape' === e.key) {
                    const t = w(n);
                    null != t && t.backdropDismiss && t.dismiss(void 0, De);
                  }
                }));
          },
          h = (n, e, t, o, i) => {
            const r = w(n, o, i);
            return r ? r.dismiss(e, t) : Promise.reject('overlay does not exist');
          },
          y = (n, e) =>
            ((n, e) => (
              void 0 === e &&
                (e = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast'),
              Array.from(n.querySelectorAll(e)).filter((t) => t.overlayIndex > 0)
            ))(n, e).filter((t) => !((n) => n.classList.contains('overlay-hidden'))(t)),
          w = (n, e, t) => {
            const o = y(n, e);
            return void 0 === t ? o[o.length - 1] : o.find((i) => i.id === t);
          },
          C = (n = !1) => {
            const t = F(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
            t && (n ? t.setAttribute('aria-hidden', 'true') : t.removeAttribute('aria-hidden'));
          },
          T = (function () {
            var n = (0, R.A)(function* (e, t, o, i, r) {
              var a, s;
              if (e.presented) return;
              'ION-TOAST' !== e.el.tagName && C(!0),
                document.body.classList.add(ro.B),
                pc(e.el),
                ja(e.el),
                (e.presented = !0),
                e.willPresent.emit(),
                null === (a = e.willPresentShorthand) || void 0 === a || a.emit();
              const d = (0, X.b)(e),
                p = e.enterAnimation ? e.enterAnimation : X.c.get(t, 'ios' === d ? o : i);
              (yield N(e, p, e.el, r)) &&
                (e.didPresent.emit(), null === (s = e.didPresentShorthand) || void 0 === s || s.emit()),
                'ION-TOAST' !== e.el.tagName && E(e.el),
                e.keyboardClose &&
                  (null === document.activeElement || !e.el.contains(document.activeElement)) &&
                  e.el.focus(),
                e.el.removeAttribute('aria-hidden');
            });
            return function (t, o, i, r, a) {
              return n.apply(this, arguments);
            };
          })(),
          E = (function () {
            var n = (0, R.A)(function* (e) {
              let t = document.activeElement;
              if (!t) return;
              const o = null == t ? void 0 : t.shadowRoot;
              o && (t = o.querySelector(tn) || t),
                yield e.onDidDismiss(),
                (null === document.activeElement || document.activeElement === document.body) && t.focus();
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          D = (function () {
            var n = (0, R.A)(function* (e, t, o, i, r, a, s) {
              var d, p;
              if (!e.presented) return !1;
              const m = void 0 !== We.d ? y(We.d).filter((_) => 'ION-TOAST' !== _.tagName) : [];
              1 === m.length && m[0].id === e.el.id && (C(!1), document.body.classList.remove(ro.B)),
                (e.presented = !1);
              try {
                ja(e.el),
                  e.el.style.setProperty('pointer-events', 'none'),
                  e.willDismiss.emit({ data: t, role: o }),
                  null === (d = e.willDismissShorthand) || void 0 === d || d.emit({ data: t, role: o });
                const _ = (0, X.b)(e),
                  k = e.leaveAnimation ? e.leaveAnimation : X.c.get(i, 'ios' === _ ? r : a);
                o !== Re && (yield N(e, k, e.el, s)),
                  e.didDismiss.emit({ data: t, role: o }),
                  null === (p = e.didDismissShorthand) || void 0 === p || p.emit({ data: t, role: o }),
                  (qo.get(e) || []).forEach(($) => $.destroy()),
                  qo.delete(e),
                  e.el.classList.add('overlay-hidden'),
                  e.el.style.removeProperty('pointer-events'),
                  void 0 !== e.el.lastFocus && (e.el.lastFocus = void 0);
              } catch (_) {
                console.error(_);
              }
              return e.el.remove(), hc(), !0;
            });
            return function (t, o, i, r, a, s, d) {
              return n.apply(this, arguments);
            };
          })(),
          F = (n) => n.querySelector('ion-app') || n.body,
          N = (function () {
            var n = (0, R.A)(function* (e, t, o, i) {
              o.classList.remove('overlay-hidden');
              const a = t(e.el, i);
              (!e.animated || !X.c.getBoolean('animated', !0)) && a.duration(0),
                e.keyboardClose &&
                  a.beforeAddWrite(() => {
                    const d = o.ownerDocument.activeElement;
                    null != d && d.matches('input,ion-input, ion-textarea') && d.blur();
                  });
              const s = qo.get(e) || [];
              return qo.set(e, [...s, a]), yield a.play(), !0;
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          K = (n, e) => {
            let t;
            const o = new Promise((i) => (t = i));
            return (
              le(n, e, (i) => {
                t(i.detail);
              }),
              o
            );
          },
          le = (n, e, t) => {
            const o = (i) => {
              (0, j.b)(n, e, o), t(i);
            };
            (0, j.a)(n, e, o);
          },
          De = 'backdrop',
          Re = 'gesture',
          ja = (n) => {
            void 0 !== We.d && n.setAttribute('aria-hidden', 'true');
          },
          pc = (n) => {
            var e;
            if (void 0 === We.d) return;
            const t = y(We.d);
            for (let o = t.length - 1; o >= 0; o--) {
              const i = t[o],
                r = null !== (e = t[o + 1]) && void 0 !== e ? e : n;
              (r.hasAttribute('aria-hidden') || 'ION-TOAST' !== r.tagName) && i.setAttribute('aria-hidden', 'true');
            }
          },
          hc = () => {
            if (void 0 === We.d) return;
            const n = y(We.d);
            for (let e = n.length - 1; e >= 0; e--) {
              const t = n[e];
              if ((t.removeAttribute('aria-hidden'), 'ION-TOAST' !== t.tagName)) break;
            }
          },
          Zo = 'ion-disable-focus-trap',
          Qe = (n, e) => null !== e.closest(n),
          Ke = (n, e) =>
            'string' == typeof n && n.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${n}`]: !0 }, e) : e,
          yt = (n) => {
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
          mc = /^[a-z][a-z0-9+\-.]*:/,
          Ba = (function () {
            var n = (0, R.A)(function* (e, t, o, i) {
              if (null != e && '#' !== e[0] && !mc.test(e)) {
                const r = document.querySelector('ion-router');
                if (r) return null != t && t.preventDefault(), r.push(e, o, i);
              }
              return !1;
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          vr = 'ionKeyboardDidShow';
        var he = ae(412);
        const Wa = (n, e, t, o, i) => Cc(n[1], e[1], t[1], o[1], i).map((r) => Ic(n[0], e[0], t[0], o[0], r)),
          Ic = (n, e, t, o, i) =>
            i * (3 * e * Math.pow(i - 1, 2) + i * (-3 * t * i + 3 * t + o * i)) - n * Math.pow(i - 1, 3),
          Cc = (n, e, t, o, i) =>
            Sc((o -= i) - 3 * (t -= i) + 3 * (e -= i) - (n -= i), 3 * t - 6 * e + 3 * n, 3 * e - 3 * n, n).filter(
              (a) => a >= 0 && a <= 1,
            ),
          Sc = (n, e, t, o) => {
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
              d = Math.acos(-r / (2 * Math.sqrt(Math.pow(-i / 3, 3)))),
              p = 2 * Math.pow(s, 1 / 3);
            return [
              p * Math.cos(d / 3) - e / 3,
              p * Math.cos((d + 2 * Math.PI) / 3) - e / 3,
              p * Math.cos((d + 4 * Math.PI) / 3) - e / 3,
            ];
          };
        var xr = ae(221);
        const Dc = (0, c.w$)(
          class extends c.wt {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionBackdropTap = (0, c.lh)(this, 'ionBackdropTap', 7)),
                (this.visible = !0),
                (this.tappable = !0),
                (this.stopPropagation = !0);
            }
            onMouseDown(e) {
              this.emitTap(e);
            }
            emitTap(e) {
              this.stopPropagation && (e.preventDefault(), e.stopPropagation()),
                this.tappable && this.ionBackdropTap.emit();
            }
            render() {
              const e = (0, X.b)(this);
              return (0, c.h)(c.xr, {
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
            33,
            'ion-backdrop',
            { visible: [4], tappable: [4], stopPropagation: [4, 'stop-propagation'] },
            [[2, 'click', 'onMouseDown']],
          ],
        );
        function uo() {
          typeof customElements > 'u' ||
            ['ion-backdrop'].forEach((e) => {
              'ion-backdrop' === e && (customElements.get(e) || customElements.define(e, Dc));
            });
        }
        var Qo = (function (n) {
          return (n.Dark = 'DARK'), (n.Light = 'LIGHT'), (n.Default = 'DEFAULT'), n;
        })(Qo || {});
        const yr = {
            getEngine() {
              const n = (() => {
                if (void 0 !== We.w) return We.w.Capacitor;
              })();
              if (null != n && n.isPluginAvailable('StatusBar')) return n.Plugins.StatusBar;
            },
            setStyle(n) {
              const e = this.getEngine();
              e && e.setStyle(n);
            },
            getStyle:
              ((n = (0, R.A)(function* () {
                const e = this.getEngine();
                if (!e) return Qo.Default;
                const { style: t } = yield e.getInfo();
                return t;
              })),
              function () {
                return n.apply(this, arguments);
              }),
          },
          wr = (n, e) => {
            if (1 === e) return 0;
            const t = 1 / (1 - e);
            return n * t + -e * t;
          },
          Ua = () => {
            !We.w || We.w.innerWidth >= 768 || yr.setStyle({ style: Qo.Dark });
          },
          kr = (n = Qo.Default) => {
            !We.w || We.w.innerWidth >= 768 || yr.setStyle({ style: n });
          },
          qa = (function () {
            var n = (0, R.A)(function* (e, t) {
              'function' != typeof e.canDismiss ||
                !(yield e.canDismiss(void 0, Re)) ||
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
          _r = (n) => 0.00255275 * 2.71828 ** (-14.9619 * n) - 1.00255 * 2.71828 ** (-0.0380968 * n) + 1,
          Ac = (n, e, t, o) => {
            const r = n.offsetHeight;
            let a = !1,
              s = !1,
              d = null,
              p = null,
              v = !0,
              _ = 0;
            const W = (0, xr.createGesture)({
              el: n,
              gestureName: 'modalSwipeToClose',
              gesturePriority: 39,
              direction: 'y',
              threshold: 10,
              canStart: (G) => {
                const Z = G.event.target;
                return (
                  null === Z ||
                  !Z.closest ||
                  ((d = Vo(Z)),
                  d
                    ? ((p = Lt(d) ? (0, j.g)(d).querySelector('.inner-scroll') : d),
                      !d.querySelector('ion-refresher') && 0 === p.scrollTop)
                    : null === Z.closest('ion-footer'))
                );
              },
              onStart: (G) => {
                const { deltaY: Z } = G;
                (v = !d || !Lt(d) || d.scrollY),
                  (s = void 0 !== n.canDismiss && !0 !== n.canDismiss),
                  Z > 0 && d && no(d),
                  e.progressStart(!0, a ? 1 : 0);
              },
              onMove: (G) => {
                const { deltaY: Z } = G;
                Z > 0 && d && no(d);
                const ce = G.deltaY / r,
                  ge = ce >= 0 && s,
                  Le = ge ? 0.2 : 0.9999,
                  He = ge ? _r(ce / Le) : ce,
                  Ve = (0, j.k)(1e-4, He, Le);
                e.progressStep(Ve), Ve >= 0.5 && _ < 0.5 ? kr(t) : Ve < 0.5 && _ >= 0.5 && Ua(), (_ = Ve);
              },
              onEnd: (G) => {
                const Z = G.velocityY,
                  ce = G.deltaY / r,
                  ge = ce >= 0 && s,
                  Le = ge ? 0.2 : 0.9999,
                  He = ge ? _r(ce / Le) : ce,
                  Ve = (0, j.k)(1e-4, He, Le),
                  st = !ge && (G.deltaY + 1e3 * Z) / r >= 0.5;
                let lt = st ? -0.001 : 0.001;
                st
                  ? (e.easing('cubic-bezier(0.32, 0.72, 0, 1)'),
                    (lt += Wa([0, 0], [0.32, 0.72], [0, 1], [1, 1], Ve)[0]))
                  : (e.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                    (lt += Wa([0, 0], [1, 0], [0.68, 0.28], [1, 1], Ve)[0]));
                const ft = Ga(st ? ce * r : (1 - Ve) * r, Z);
                (a = st),
                  W.enable(!1),
                  d &&
                    ((n, e) => {
                      Lt(n) ? (n.scrollY = e) : n.style.removeProperty('overflow');
                    })(d, v),
                  e
                    .onFinish(() => {
                      st || W.enable(!0);
                    })
                    .progressEnd(st ? 1 : 0, lt, ft),
                  ge && Ve > Le / 4 ? qa(n, e) : st && o();
              },
            });
            return W;
          },
          Ga = (n, e) => (0, j.k)(400, n / Math.abs(1.1 * e), 500),
          Ya = (n) => {
            const { currentBreakpoint: e, backdropBreakpoint: t } = n,
              o = void 0 === t || t < e,
              i = o ? `calc(var(--backdrop-opacity) * ${e})` : '0',
              r = (0, he.c)('backdropAnimation').fromTo('opacity', 0, i);
            return (
              o && r.beforeStyles({ 'pointer-events': 'none' }).afterClearStyles(['pointer-events']),
              {
                wrapperAnimation: (0, he.c)('wrapperAnimation').keyframes([
                  { offset: 0, opacity: 1, transform: 'translateY(100%)' },
                  { offset: 1, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                ]),
                backdropAnimation: r,
              }
            );
          },
          Ka = (n) => {
            const { currentBreakpoint: e, backdropBreakpoint: t } = n,
              o = `calc(var(--backdrop-opacity) * ${wr(e, t)})`,
              i = [
                { offset: 0, opacity: o },
                { offset: 1, opacity: 0 },
              ],
              r = [
                { offset: 0, opacity: o },
                { offset: t, opacity: 0 },
                { offset: 1, opacity: 0 },
              ],
              a = (0, he.c)('backdropAnimation').keyframes(0 !== t ? r : i);
            return {
              wrapperAnimation: (0, he.c)('wrapperAnimation').keyframes([
                { offset: 0, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                { offset: 1, opacity: 1, transform: 'translateY(100%)' },
              ]),
              backdropAnimation: a,
            };
          },
          Xa = (n, e) => {
            const { presentingEl: t, currentBreakpoint: o } = e,
              i = (0, j.g)(n),
              { wrapperAnimation: r, backdropAnimation: a } =
                void 0 !== o
                  ? Ya(e)
                  : {
                      backdropAnimation: (0, he.c)()
                        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                        .beforeStyles({ 'pointer-events': 'none' })
                        .afterClearStyles(['pointer-events']),
                      wrapperAnimation: (0, he.c)().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)'),
                    };
            a.addElement(i.querySelector('ion-backdrop')),
              r.addElement(i.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
            const s = (0, he.c)('entering-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(500)
              .addAnimation(r);
            if (t) {
              const d = window.innerWidth < 768,
                p = 'ION-MODAL' === t.tagName && void 0 !== t.presentingElement,
                m = (0, j.g)(t),
                v = (0, he.c)().beforeStyles({
                  transform: 'translateY(0)',
                  'transform-origin': 'top center',
                  overflow: 'hidden',
                }),
                _ = document.body;
              if (d) {
                const k = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  O = `translateY(${p ? '-10px' : k}) scale(0.915)`;
                v
                  .afterStyles({ transform: O })
                  .beforeAddWrite(() => _.style.setProperty('background-color', 'black'))
                  .addElement(t)
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                    { offset: 1, filter: 'contrast(0.85)', transform: O, borderRadius: '10px 10px 0 0' },
                  ]),
                  s.addAnimation(v);
              } else if ((s.addAnimation(a), p)) {
                const I = `translateY(-10px) scale(${p ? 0.915 : 1})`;
                v.afterStyles({ transform: I })
                  .addElement(m.querySelector('.modal-wrapper'))
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                    { offset: 1, filter: 'contrast(0.85)', transform: I },
                  ]);
                const $ = (0, he.c)()
                  .afterStyles({ transform: I })
                  .addElement(m.querySelector('.modal-shadow'))
                  .keyframes([
                    { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
                    { offset: 1, opacity: '0', transform: I },
                  ]);
                s.addAnimation([v, $]);
              } else r.fromTo('opacity', '0', '1');
            } else s.addAnimation(a);
            return s;
          },
          Za = (n, e, t = 500) => {
            const { presentingEl: o, currentBreakpoint: i } = e,
              r = (0, j.g)(n),
              { wrapperAnimation: a, backdropAnimation: s } =
                void 0 !== i
                  ? Ka(e)
                  : {
                      backdropAnimation: (0, he.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, he.c)().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)'),
                    };
            s.addElement(r.querySelector('ion-backdrop')),
              a.addElement(r.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
            const d = (0, he.c)('leaving-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(t)
              .addAnimation(a);
            if (o) {
              const p = window.innerWidth < 768,
                m = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
                v = (0, j.g)(o),
                _ = (0, he.c)()
                  .beforeClearStyles(['transform'])
                  .afterClearStyles(['transform'])
                  .onFinish((I) => {
                    1 === I &&
                      (o.style.setProperty('overflow', ''),
                      Array.from(k.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter(
                        (O) => void 0 !== O.presentingElement,
                      ).length <= 1 && k.style.setProperty('background-color', ''));
                  }),
                k = document.body;
              if (p) {
                const I = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  B = `translateY(${m ? '-10px' : I}) scale(0.915)`;
                _.addElement(o).keyframes([
                  { offset: 0, filter: 'contrast(0.85)', transform: B, borderRadius: '10px 10px 0 0' },
                  { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                ]),
                  d.addAnimation(_);
              } else if ((d.addAnimation(s), m)) {
                const $ = `translateY(-10px) scale(${m ? 0.915 : 1})`;
                _.addElement(v.querySelector('.modal-wrapper'))
                  .afterStyles({ transform: 'translate3d(0, 0, 0)' })
                  .keyframes([
                    { offset: 0, filter: 'contrast(0.85)', transform: $ },
                    { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                  ]);
                const O = (0, he.c)()
                  .addElement(v.querySelector('.modal-shadow'))
                  .afterStyles({ transform: 'translateY(0) scale(1)' })
                  .keyframes([
                    { offset: 0, opacity: '0', transform: $ },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' },
                  ]);
                d.addAnimation([_, O]);
              } else a.fromTo('opacity', '1', '0');
            } else d.addAnimation(s);
            return d;
          },
          Oc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, j.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? Ya(e)
                  : {
                      backdropAnimation: (0, he.c)()
                        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                        .beforeStyles({ 'pointer-events': 'none' })
                        .afterClearStyles(['pointer-events']),
                      wrapperAnimation: (0, he.c)().keyframes([
                        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
                        { offset: 1, opacity: 1, transform: 'translateY(0px)' },
                      ]),
                    };
            return (
              r.addElement(o.querySelector('ion-backdrop')),
              i.addElement(o.querySelector('.modal-wrapper')),
              (0, he.c)().addElement(n).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([r, i])
            );
          },
          Fc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, j.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? Ka(e)
                  : {
                      backdropAnimation: (0, he.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, he.c)().keyframes([
                        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
                        { offset: 1, opacity: 0, transform: 'translateY(40px)' },
                      ]),
                    };
            return (
              r.addElement(o.querySelector('ion-backdrop')),
              i.addElement(o.querySelector('.modal-wrapper')),
              (0, he.c)().easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([r, i])
            );
          },
          Nc = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.didPresent = (0, c.lh)(this, 'ionModalDidPresent', 7)),
                  (this.willPresent = (0, c.lh)(this, 'ionModalWillPresent', 7)),
                  (this.willDismiss = (0, c.lh)(this, 'ionModalWillDismiss', 7)),
                  (this.didDismiss = (0, c.lh)(this, 'ionModalDidDismiss', 7)),
                  (this.ionBreakpointDidChange = (0, c.lh)(this, 'ionBreakpointDidChange', 7)),
                  (this.didPresentShorthand = (0, c.lh)(this, 'didPresent', 7)),
                  (this.willPresentShorthand = (0, c.lh)(this, 'willPresent', 7)),
                  (this.willDismissShorthand = (0, c.lh)(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = (0, c.lh)(this, 'didDismiss', 7)),
                  (this.ionMount = (0, c.lh)(this, 'ionMount', 7)),
                  (this.lockController = xn()),
                  (this.triggerController = (() => {
                    let n;
                    const e = () => {
                      n && (n(), (n = void 0));
                    };
                    return {
                      addClickListener: (o, i) => {
                        e();
                        const r = void 0 !== i ? document.getElementById(i) : null;
                        r
                          ? (n = ((s, d) => {
                              const p = () => {
                                d.present();
                              };
                              return (
                                s.addEventListener('click', p),
                                () => {
                                  s.removeEventListener('click', p);
                                }
                              );
                            })(r, o))
                          : (0, ze.p)(
                              `A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                              o,
                            );
                      },
                      removeClickListener: e,
                    };
                  })()),
                  (this.coreDelegate = io()),
                  (this.isSheetModal = !1),
                  (this.inheritedAttributes = {}),
                  (this.inline = !1),
                  (this.gestureAnimationDismissing = !1),
                  (this.onHandleClick = () => {
                    const { sheetTransition: e, handleBehavior: t } = this;
                    'cycle' !== t || void 0 !== e || this.moveToNextBreakpoint();
                  }),
                  (this.onBackdropTap = () => {
                    const { sheetTransition: e } = this;
                    void 0 === e && this.dismiss(void 0, De);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = Hc[e.type];
                    if (t && o) {
                      const i = new CustomEvent(o, { bubbles: !1, cancelable: !1, detail: e.detail });
                      t.dispatchEvent(i);
                    }
                  }),
                  (this.presented = !1),
                  (this.hasController = !1),
                  (this.overlayIndex = void 0),
                  (this.delegate = void 0),
                  (this.keyboardClose = !0),
                  (this.enterAnimation = void 0),
                  (this.leaveAnimation = void 0),
                  (this.breakpoints = void 0),
                  (this.initialBreakpoint = void 0),
                  (this.backdropBreakpoint = 0),
                  (this.handle = void 0),
                  (this.handleBehavior = 'none'),
                  (this.component = void 0),
                  (this.componentProps = void 0),
                  (this.cssClass = void 0),
                  (this.backdropDismiss = !0),
                  (this.showBackdrop = !0),
                  (this.animated = !0),
                  (this.presentingElement = void 0),
                  (this.htmlAttributes = void 0),
                  (this.isOpen = !1),
                  (this.trigger = void 0),
                  (this.keepContentsMounted = !1),
                  (this.focusTrap = !0),
                  (this.canDismiss = !0);
              }
              onIsOpenChange(e, t) {
                !0 === e && !1 === t ? this.present() : !1 === e && !0 === t && this.dismiss();
              }
              triggerChanged() {
                const { trigger: e, el: t, triggerController: o } = this;
                e && o.addClickListener(t, e);
              }
              breakpointsChanged(e) {
                void 0 !== e && (this.sortedBreakpoints = e.sort((t, o) => t - o));
              }
              connectedCallback() {
                const { el: e } = this;
                Yo(e), this.triggerChanged();
              }
              disconnectedCallback() {
                this.triggerController.removeClickListener();
              }
              componentWillLoad() {
                var e;
                const { breakpoints: t, initialBreakpoint: o, el: i, htmlAttributes: r } = this,
                  a = (this.isSheetModal = void 0 !== t && void 0 !== o),
                  s = ['aria-label', 'role'];
                (this.inheritedAttributes = (0, j.d)(i, s)),
                  void 0 !== r &&
                    s.forEach((d) => {
                      r[d] &&
                        ((this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
                          [d]: r[d],
                        })),
                        delete r[d]);
                    }),
                  a && (this.currentBreakpoint = this.initialBreakpoint),
                  void 0 !== t &&
                    void 0 !== o &&
                    !t.includes(o) &&
                    (0, ze.p)('Your breakpoints array must include the initialBreakpoint value.'),
                  (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || Ko(this.el);
              }
              componentDidLoad() {
                !0 === this.isOpen && (0, j.r)(() => this.present()),
                  this.breakpointsChanged(this.breakpoints),
                  this.triggerChanged();
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
                return (0, R.A)(function* () {
                  const { canDismiss: i } = o;
                  return 'function' == typeof i ? i(e, t) : i;
                })();
              }
              present() {
                var e = this;
                return (0, R.A)(function* () {
                  const t = yield e.lockController.lock();
                  if (e.presented) return void t();
                  const { presentingElement: o, el: i } = e;
                  e.currentBreakpoint = e.initialBreakpoint;
                  const { inline: r, delegate: a } = e.getDelegate(!0);
                  e.ionMount.emit(),
                    (e.usersElement = yield oo(a, i, e.component, ['ion-page'], e.componentProps, r)),
                    (0, j.j)(i) ? yield (0, ye.e)(e.usersElement) : e.keepContentsMounted || (yield (0, ye.w)()),
                    (0, c.bN)(() => e.el.classList.add('show-modal'));
                  const s = void 0 !== o;
                  s && 'ios' === (0, X.b)(e) && ((e.statusBarStyle = yield yr.getStyle()), Ua()),
                    yield T(e, 'modalEnter', Xa, Oc, {
                      presentingEl: o,
                      currentBreakpoint: e.initialBreakpoint,
                      backdropBreakpoint: e.backdropBreakpoint,
                    }),
                    typeof window < 'u' &&
                      ((e.keyboardOpenCallback = () => {
                        e.gesture &&
                          (e.gesture.enable(!1),
                          (0, j.r)(() => {
                            e.gesture && e.gesture.enable(!0);
                          }));
                      }),
                      window.addEventListener(vr, e.keyboardOpenCallback)),
                    e.isSheetModal ? e.initSheetGesture() : s && e.initSwipeToClose(),
                    t();
                })();
              }
              initSwipeToClose() {
                var t,
                  e = this;
                if ('ios' !== (0, X.b)(this)) return;
                const { el: o } = this,
                  i = this.leaveAnimation || X.c.get('modalLeave', Za),
                  r = (this.animation = i(o, { presentingEl: this.presentingElement }));
                if (!((n) => n.querySelector(_t) || n.querySelector(en))(o))
                  return void ((n) => {
                    (0, ze.b)(n, to);
                  })(o);
                const s = null !== (t = this.statusBarStyle) && void 0 !== t ? t : Qo.Default;
                (this.gesture = Ac(o, r, s, () => {
                  (this.gestureAnimationDismissing = !0),
                    kr(this.statusBarStyle),
                    this.animation.onFinish(
                      (0, R.A)(function* () {
                        yield e.dismiss(void 0, Re), (e.gestureAnimationDismissing = !1);
                      }),
                    );
                })),
                  this.gesture.enable(!0);
              }
              initSheetGesture() {
                const { wrapperEl: e, initialBreakpoint: t, backdropBreakpoint: o } = this;
                if (!e || void 0 === t) return;
                const i = this.enterAnimation || X.c.get('modalEnter', Xa),
                  r = (this.animation = i(this.el, {
                    presentingEl: this.presentingElement,
                    currentBreakpoint: t,
                    backdropBreakpoint: o,
                  }));
                r.progressStart(!0, 1);
                const { gesture: a, moveSheetToBreakpoint: s } = ((n, e, t, o, i, r, a = [], s, d, p) => {
                  const _ = {
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
                    },
                    k = n.querySelector('ion-content'),
                    I = t.clientHeight;
                  let $ = o,
                    O = 0,
                    B = !1;
                  const G = r.childAnimations.find((Je) => 'wrapperAnimation' === Je.id),
                    Z = r.childAnimations.find((Je) => 'backdropAnimation' === Je.id),
                    ce = a[a.length - 1],
                    ge = a[0],
                    Le = () => {
                      n.style.setProperty('pointer-events', 'auto'),
                        e.style.setProperty('pointer-events', 'auto'),
                        n.classList.remove(Zo);
                    },
                    He = () => {
                      n.style.setProperty('pointer-events', 'none'),
                        e.style.setProperty('pointer-events', 'none'),
                        n.classList.add(Zo);
                    };
                  G &&
                    Z &&
                    (G.keyframes([..._.WRAPPER_KEYFRAMES]),
                    Z.keyframes([..._.BACKDROP_KEYFRAMES]),
                    r.progressStart(!0, 1 - $),
                    $ > i ? Le() : He()),
                    k && $ !== ce && (k.scrollY = !1);
                  const ft = (Je) => {
                      const { breakpoint: et, canDismiss: mt, breakpointOffset: ct, animated: kn } = Je,
                        Ft = mt && 0 === et,
                        kt = Ft ? $ : et,
                        ar = 0 !== kt;
                      return (
                        ($ = 0),
                        G &&
                          Z &&
                          (G.keyframes([
                            { offset: 0, transform: `translateY(${100 * ct}%)` },
                            { offset: 1, transform: `translateY(${100 * (1 - kt)}%)` },
                          ]),
                          Z.keyframes([
                            { offset: 0, opacity: `calc(var(--backdrop-opacity) * ${wr(1 - ct, i)})` },
                            { offset: 1, opacity: `calc(var(--backdrop-opacity) * ${wr(kt, i)})` },
                          ]),
                          r.progressStep(0)),
                        Mt.enable(!1),
                        Ft ? qa(n, r) : ar || d(),
                        k && kt === a[a.length - 1] && (k.scrollY = !0),
                        new Promise((ci) => {
                          r.onFinish(
                            () => {
                              ar
                                ? G && Z
                                  ? (0, j.r)(() => {
                                      G.keyframes([..._.WRAPPER_KEYFRAMES]),
                                        Z.keyframes([..._.BACKDROP_KEYFRAMES]),
                                        r.progressStart(!0, 1 - kt),
                                        ($ = kt),
                                        p($),
                                        $ > i ? Le() : He(),
                                        Mt.enable(!0),
                                        ci();
                                    })
                                  : (Mt.enable(!0), ci())
                                : ci();
                            },
                            { oneTimeCallback: !0 },
                          ).progressEnd(1, 0, kn ? 500 : 0);
                        })
                      );
                    },
                    Mt = (0, xr.createGesture)({
                      el: t,
                      gestureName: 'modalSheet',
                      gesturePriority: 40,
                      direction: 'y',
                      threshold: 10,
                      canStart: (Je) => {
                        const et = Vo(Je.event.target);
                        if ((($ = s()), 1 === $ && et)) {
                          const mt = Lt(et) ? (0, j.g)(et).querySelector('.inner-scroll') : et;
                          return !et.querySelector('ion-refresher') && 0 === mt.scrollTop;
                        }
                        return !0;
                      },
                      onStart: (Je) => {
                        (B = void 0 !== n.canDismiss && !0 !== n.canDismiss && 0 === ge),
                          Je.deltaY > 0 && k && (k.scrollY = !1),
                          (0, j.r)(() => {
                            n.focus();
                          }),
                          r.progressStart(!0, 1 - $);
                      },
                      onMove: (Je) => {
                        Je.deltaY > 0 && k && (k.scrollY = !1);
                        const mt = a.length > 1 ? 1 - a[1] : void 0,
                          ct = 1 - $ + Je.deltaY / I,
                          kn = void 0 !== mt && ct >= mt && B,
                          Ft = kn ? 0.95 : 0.9999,
                          kt = kn && void 0 !== mt ? mt + _r((ct - mt) / (Ft - mt)) : ct;
                        (O = (0, j.k)(1e-4, kt, Ft)), r.progressStep(O);
                      },
                      onEnd: (Je) => {
                        const ct = $ - (Je.deltaY + 350 * Je.velocityY) / I,
                          kn = a.reduce((Ft, kt) => (Math.abs(kt - ct) < Math.abs(Ft - ct) ? kt : Ft));
                        ft({ breakpoint: kn, breakpointOffset: O, canDismiss: B, animated: !0 });
                      },
                    });
                  return { gesture: Mt, moveSheetToBreakpoint: ft };
                })(
                  this.el,
                  this.backdropEl,
                  e,
                  t,
                  o,
                  r,
                  this.sortedBreakpoints,
                  () => {
                    var d;
                    return null !== (d = this.currentBreakpoint) && void 0 !== d ? d : 0;
                  },
                  () => this.sheetOnDismiss(),
                  (d) => {
                    this.currentBreakpoint !== d &&
                      ((this.currentBreakpoint = d), this.ionBreakpointDidChange.emit({ breakpoint: d }));
                  },
                );
                (this.gesture = a), (this.moveSheetToBreakpoint = s), this.gesture.enable(!0);
              }
              sheetOnDismiss() {
                var e = this;
                (this.gestureAnimationDismissing = !0),
                  this.animation.onFinish(
                    (0, R.A)(function* () {
                      (e.currentBreakpoint = 0),
                        e.ionBreakpointDidChange.emit({ breakpoint: e.currentBreakpoint }),
                        yield e.dismiss(void 0, Re),
                        (e.gestureAnimationDismissing = !1);
                    }),
                  );
              }
              dismiss(e, t) {
                var o = this;
                return (0, R.A)(function* () {
                  var i;
                  if (o.gestureAnimationDismissing && t !== Re) return !1;
                  const r = yield o.lockController.lock();
                  if ('handler' !== t && !(yield o.checkCanDismiss(e, t))) return r(), !1;
                  const { presentingElement: a } = o;
                  void 0 !== a && 'ios' === (0, X.b)(o) && kr(o.statusBarStyle),
                    typeof window < 'u' &&
                      o.keyboardOpenCallback &&
                      (window.removeEventListener(vr, o.keyboardOpenCallback), (o.keyboardOpenCallback = void 0));
                  const d = yield D(o, e, t, 'modalLeave', Za, Fc, {
                    presentingEl: a,
                    currentBreakpoint: null !== (i = o.currentBreakpoint) && void 0 !== i ? i : o.initialBreakpoint,
                    backdropBreakpoint: o.backdropBreakpoint,
                  });
                  if (d) {
                    const { delegate: p } = o.getDelegate();
                    yield Wo(p, o.usersElement),
                      (0, c.bN)(() => o.el.classList.remove('show-modal')),
                      o.animation && o.animation.destroy(),
                      o.gesture && o.gesture.destroy();
                  }
                  return (o.currentBreakpoint = void 0), (o.animation = void 0), r(), d;
                })();
              }
              onDidDismiss() {
                return K(this.el, 'ionModalDidDismiss');
              }
              onWillDismiss() {
                return K(this.el, 'ionModalWillDismiss');
              }
              setCurrentBreakpoint(e) {
                var t = this;
                return (0, R.A)(function* () {
                  if (!t.isSheetModal) return void (0, ze.p)('setCurrentBreakpoint is only supported on sheet modals.');
                  if (!t.breakpoints.includes(e))
                    return void (0, ze.p)(
                      `Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`,
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
                return (0, R.A)(function* () {
                  return e.currentBreakpoint;
                })();
              }
              moveToNextBreakpoint() {
                var e = this;
                return (0, R.A)(function* () {
                  const { breakpoints: t, currentBreakpoint: o } = e;
                  if (!t || null == o) return !1;
                  const i = t.filter((d) => 0 !== d),
                    a = (i.indexOf(o) + 1) % i.length,
                    s = i[a];
                  return yield e.setCurrentBreakpoint(s), !0;
                })();
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
                  } = this,
                  d = !1 !== e && t,
                  p = (0, X.b)(this),
                  m = void 0 !== o && 'ios' === p,
                  v = 'cycle' === r;
                return (0, c.h)(
                  c.xr,
                  Object.assign(
                    { key: 'b4da5111fe4719fa450c39b2d4bd884a302a7924', 'no-router': !0, tabindex: '-1' },
                    i,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(
                        {
                          [p]: !0,
                          'modal-default': !m && !t,
                          'modal-card': m,
                          'modal-sheet': t,
                          'overlay-hidden': !0,
                          [Zo]: !1 === s,
                        },
                        yt(this.cssClass),
                      ),
                      onIonBackdropTap: this.onBackdropTap,
                      onIonModalDidPresent: this.onLifecycle,
                      onIonModalWillPresent: this.onLifecycle,
                      onIonModalWillDismiss: this.onLifecycle,
                      onIonModalDidDismiss: this.onLifecycle,
                    },
                  ),
                  (0, c.h)('ion-backdrop', {
                    key: 'c12dbf747e0eb914eaf1331798548ffc7e147763',
                    ref: (_) => (this.backdropEl = _),
                    visible: this.showBackdrop,
                    tappable: this.backdropDismiss,
                    part: 'backdrop',
                  }),
                  'ios' === p &&
                    (0, c.h)('div', { key: 'da546ee80c6576b5acc66e959fd5009e0b9a8160', class: 'modal-shadow' }),
                  (0, c.h)(
                    'div',
                    Object.assign({ key: '306ebe6427440ad5f7ed36d590e562d15a503b75', role: 'dialog' }, a, {
                      'aria-modal': 'true',
                      class: 'modal-wrapper ion-overlay-wrapper',
                      part: 'content',
                      ref: (_) => (this.wrapperEl = _),
                    }),
                    d &&
                      (0, c.h)('button', {
                        key: 'c5d17e346fe255a7c0cacbbf15c0083f2d09c488',
                        class: 'modal-handle',
                        tabIndex: v ? 0 : -1,
                        'aria-label': 'Activate to adjust the size of the dialog overlaying the screen',
                        onClick: v ? this.onHandleClick : void 0,
                        part: 'handle',
                      }),
                    (0, c.h)('slot', { key: '5cc714170a00b67f3eda0cd1d6f37c1489a99c83' }),
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
                  ios: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}',
                  md: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',
                };
              }
            },
            [
              33,
              'ion-modal',
              {
                hasController: [4, 'has-controller'],
                overlayIndex: [2, 'overlay-index'],
                delegate: [16],
                keyboardClose: [4, 'keyboard-close'],
                enterAnimation: [16],
                leaveAnimation: [16],
                breakpoints: [16],
                initialBreakpoint: [2, 'initial-breakpoint'],
                backdropBreakpoint: [2, 'backdrop-breakpoint'],
                handle: [4],
                handleBehavior: [1, 'handle-behavior'],
                component: [1],
                componentProps: [16],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                showBackdrop: [4, 'show-backdrop'],
                animated: [4],
                presentingElement: [16],
                htmlAttributes: [16],
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
              void 0,
              { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] },
            ],
          ),
          Hc = {
            ionModalDidPresent: 'ionViewDidEnter',
            ionModalWillPresent: 'ionViewWillEnter',
            ionModalWillDismiss: 'ionViewWillLeave',
            ionModalDidDismiss: 'ionViewDidLeave',
          };
        var n;
        const Vc = function Qa() {
            typeof customElements > 'u' ||
              ['ion-modal', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-modal':
                    customElements.get(e) || customElements.define(e, Nc);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || uo();
                }
              });
          },
          Ja = (n, e, t) => {
            const o = e.getBoundingClientRect(),
              i = o.height;
            let r = o.width;
            return 'cover' === n && t && (r = t.getBoundingClientRect().width), { contentWidth: r, contentHeight: i };
          },
          qc = (n, e, t) => {
            let o = [];
            switch (e) {
              case 'hover':
                let i;
                o = [
                  {
                    eventName: 'mouseenter',
                    callback:
                      ((r = (0, R.A)(function* (a) {
                        a.stopPropagation(),
                          i && clearTimeout(i),
                          (i = setTimeout(() => {
                            (0, j.r)(() => {
                              t.presentFromTrigger(a), (i = void 0);
                            });
                          }, 100));
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
                      r.preventDefault(), t.presentFromTrigger(r);
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
                o.forEach(({ eventName: i, callback: r }) => n.removeEventListener(i, r)),
                  n.removeAttribute('data-ion-popover-trigger');
              }
            );
          },
          es = (n, e) => (e && 'ION-ITEM' === e.tagName ? n.findIndex((t) => t === e) : -1),
          zi = (n) => {
            const t = (0, j.g)(n).querySelector('button');
            t && (0, j.r)(() => t.focus());
          },
          Xc = (n) => {
            const e = (function () {
              var t = (0, R.A)(function* (o) {
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
                      const p = ((n, e) => n[es(n, e) + 1])(a, r);
                      void 0 !== p && zi(p);
                      break;
                    case 'ArrowUp':
                      o.preventDefault();
                      const m = ((n, e) => n[es(n, e) - 1])(a, r);
                      void 0 !== m && zi(m);
                      break;
                    case 'Home':
                      o.preventDefault();
                      const v = a[0];
                      void 0 !== v && zi(v);
                      break;
                    case 'End':
                      o.preventDefault();
                      const _ = a[a.length - 1];
                      void 0 !== _ && zi(_);
                      break;
                    case 'ArrowRight':
                    case ' ':
                    case 'Enter':
                      if (r && ((n) => n.hasAttribute('data-ion-popover-trigger'))(r)) {
                        const k = new CustomEvent('ionPopoverActivateTrigger');
                        r.dispatchEvent(k);
                      }
                  }
                }
              });
              return function (i) {
                return t.apply(this, arguments);
              };
            })();
            return n.addEventListener('keydown', e), () => n.removeEventListener('keydown', e);
          },
          ts = (n, e, t, o, i, r, a, s, d, p, m) => {
            var v;
            let _ = { top: 0, left: 0, width: 0, height: 0 };
            if ('event' === r) {
              if (!m) return d;
              _ = { top: m.clientY, left: m.clientX, width: 1, height: 1 };
            } else {
              const Le =
                p ||
                (null === (v = null == m ? void 0 : m.detail) || void 0 === v ? void 0 : v.ionShadowTarget) ||
                (null == m ? void 0 : m.target);
              if (!Le) return d;
              const He = Le.getBoundingClientRect();
              _ = { top: He.top, left: He.left, width: He.width, height: He.height };
            }
            const k = Jc(a, _, e, t, o, i, n),
              I = ed(s, a, _, e, t),
              $ = k.top + I.top,
              O = k.left + I.left,
              { arrowTop: B, arrowLeft: W } = Qc(a, o, i, $, O, e, t, n),
              { originX: G, originY: Z } = Zc(a, s, n);
            return { top: $, left: O, referenceCoordinates: _, arrowTop: B, arrowLeft: W, originX: G, originY: Z };
          },
          Zc = (n, e, t) => {
            switch (n) {
              case 'top':
                return { originX: ns(e), originY: 'bottom' };
              case 'bottom':
                return { originX: ns(e), originY: 'top' };
              case 'left':
                return { originX: 'right', originY: Li(e) };
              case 'right':
                return { originX: 'left', originY: Li(e) };
              case 'start':
                return { originX: t ? 'left' : 'right', originY: Li(e) };
              case 'end':
                return { originX: t ? 'right' : 'left', originY: Li(e) };
            }
          },
          ns = (n) => {
            switch (n) {
              case 'start':
                return 'left';
              case 'center':
                return 'center';
              case 'end':
                return 'right';
            }
          },
          Li = (n) => {
            switch (n) {
              case 'start':
                return 'top';
              case 'center':
                return 'center';
              case 'end':
                return 'bottom';
            }
          },
          Qc = (n, e, t, o, i, r, a, s) => {
            const d = { arrowTop: o + a / 2 - e / 2, arrowLeft: i + r - e / 2 },
              p = { arrowTop: o + a / 2 - e / 2, arrowLeft: i - 1.5 * e };
            switch (n) {
              case 'top':
                return { arrowTop: o + a, arrowLeft: i + r / 2 - e / 2 };
              case 'bottom':
                return { arrowTop: o - t, arrowLeft: i + r / 2 - e / 2 };
              case 'left':
                return d;
              case 'right':
                return p;
              case 'start':
                return s ? p : d;
              case 'end':
                return s ? d : p;
              default:
                return { arrowTop: 0, arrowLeft: 0 };
            }
          },
          Jc = (n, e, t, o, i, r, a) => {
            const s = { top: e.top, left: e.left - t - i },
              d = { top: e.top, left: e.left + e.width + i };
            switch (n) {
              case 'top':
                return { top: e.top - o - r, left: e.left };
              case 'right':
                return d;
              case 'bottom':
                return { top: e.top + e.height + r, left: e.left };
              case 'left':
                return s;
              case 'start':
                return a ? d : s;
              case 'end':
                return a ? s : d;
            }
          },
          ed = (n, e, t, o, i) => {
            switch (n) {
              case 'center':
                return nd(e, t, o, i);
              case 'end':
                return td(e, t, o, i);
              default:
                return { top: 0, left: 0 };
            }
          },
          td = (n, e, t, o) => {
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
          nd = (n, e, t, o) => {
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
          os = (n, e, t, o, i, r, a, s, d, p, m, v, _ = 0, k = 0, I = 0) => {
            let $ = _;
            const O = k;
            let G,
              B = t,
              W = e,
              Z = p,
              ce = m,
              ge = !1,
              Le = !1;
            const He = v ? v.top + v.height : r / 2 - s / 2,
              Ve = v ? v.height : 0;
            let at = !1;
            return (
              B < o + d
                ? ((B = o), (ge = !0), (Z = 'left'))
                : a + o + B + d > i && ((Le = !0), (B = i - a - o), (Z = 'right')),
              He + Ve + s > r &&
                ('top' === n || 'bottom' === n) &&
                (He - s > 0
                  ? ((W = Math.max(12, He - s - Ve - (I - 1))), ($ = W + s), (ce = 'bottom'), (at = !0))
                  : (G = o)),
              {
                top: W,
                left: B,
                bottom: G,
                originX: Z,
                originY: ce,
                checkSafeAreaLeft: ge,
                checkSafeAreaRight: Le,
                arrowTop: $,
                arrowLeft: O,
                addPopoverBottomClass: at,
              }
            );
          },
          rd = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              _ = p.defaultView.innerHeight,
              k = (0, j.g)(n),
              I = k.querySelector('.popover-content'),
              $ = k.querySelector('.popover-arrow'),
              O =
                r ||
                (null === (t = null == o ? void 0 : o.detail) || void 0 === t ? void 0 : t.ionShadowTarget) ||
                (null == o ? void 0 : o.target),
              { contentWidth: B, contentHeight: W } = Ja(i, I, O),
              { arrowWidth: G, arrowHeight: Z } = ((n) => {
                if (!n) return { arrowWidth: 0, arrowHeight: 0 };
                const { width: e, height: t } = n.getBoundingClientRect();
                return { arrowWidth: e, arrowHeight: t };
              })($),
              ge = ts(
                m,
                B,
                W,
                G,
                Z,
                a,
                s,
                d,
                { top: _ / 2 - W / 2, left: v / 2 - B / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              Le = 'cover' === i ? 0 : 5,
              He = 'cover' === i ? 0 : 25,
              {
                originX: Ve,
                originY: at,
                top: st,
                left: lt,
                bottom: ft,
                checkSafeAreaLeft: Mt,
                checkSafeAreaRight: Je,
                arrowTop: et,
                arrowLeft: mt,
                addPopoverBottomClass: ct,
              } = os(
                s,
                ge.top,
                ge.left,
                Le,
                v,
                _,
                B,
                W,
                He,
                ge.originX,
                ge.originY,
                ge.referenceCoordinates,
                ge.arrowTop,
                ge.arrowLeft,
                Z,
              ),
              kn = (0, he.c)(),
              Ft = (0, he.c)(),
              kt = (0, he.c)();
            return (
              Ft.addElement(k.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              kt
                .addElement(k.querySelector('.popover-arrow'))
                .addElement(k.querySelector('.popover-content'))
                .fromTo('opacity', 0.01, 1),
              kn
                .easing('ease')
                .duration(100)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${B}px`),
                    ct && n.classList.add('popover-bottom'),
                    void 0 !== ft && I.style.setProperty('bottom', `${ft}px`);
                  let sr = `${lt}px`;
                  Mt && (sr = `${lt}px + var(--ion-safe-area-left, 0)`),
                    Je && (sr = `${lt}px - var(--ion-safe-area-right, 0)`),
                    I.style.setProperty('top', `calc(${st}px + var(--offset-y, 0))`),
                    I.style.setProperty('left', `calc(${sr} + var(--offset-x, 0))`),
                    I.style.setProperty('transform-origin', `${at} ${Ve}`),
                    null !== $ &&
                      (((n, e = !1, t, o) => !((!t && !o) || ('top' !== n && 'bottom' !== n && e)))(
                        s,
                        ge.top !== st || ge.left !== lt,
                        o,
                        r,
                      )
                        ? ($.style.setProperty('top', `calc(${et}px + var(--offset-y, 0))`),
                          $.style.setProperty('left', `calc(${mt}px + var(--offset-x, 0))`))
                        : $.style.setProperty('display', 'none'));
                })
                .addAnimation([Ft, kt])
            );
          },
          ad = (n) => {
            const e = (0, j.g)(n),
              t = e.querySelector('.popover-content'),
              o = e.querySelector('.popover-arrow'),
              i = (0, he.c)(),
              r = (0, he.c)(),
              a = (0, he.c)();
            return (
              r.addElement(e.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              a
                .addElement(e.querySelector('.popover-arrow'))
                .addElement(e.querySelector('.popover-content'))
                .fromTo('opacity', 0.99, 0),
              i
                .easing('ease')
                .afterAddWrite(() => {
                  n.style.removeProperty('--width'),
                    n.classList.remove('popover-bottom'),
                    t.style.removeProperty('top'),
                    t.style.removeProperty('left'),
                    t.style.removeProperty('bottom'),
                    t.style.removeProperty('transform-origin'),
                    o &&
                      (o.style.removeProperty('top'),
                      o.style.removeProperty('left'),
                      o.style.removeProperty('display'));
                })
                .duration(300)
                .addAnimation([r, a])
            );
          },
          ld = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              _ = p.defaultView.innerHeight,
              k = (0, j.g)(n),
              I = k.querySelector('.popover-content'),
              $ =
                r ||
                (null === (t = null == o ? void 0 : o.detail) || void 0 === t ? void 0 : t.ionShadowTarget) ||
                (null == o ? void 0 : o.target),
              { contentWidth: O, contentHeight: B } = Ja(i, I, $),
              G = ts(
                m,
                O,
                B,
                0,
                0,
                a,
                s,
                d,
                { top: _ / 2 - B / 2, left: v / 2 - O / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              Z = 'cover' === i ? 0 : 12,
              {
                originX: ce,
                originY: ge,
                top: Le,
                left: He,
                bottom: Ve,
              } = os(s, G.top, G.left, Z, v, _, O, B, 0, G.originX, G.originY, G.referenceCoordinates),
              at = (0, he.c)(),
              st = (0, he.c)(),
              lt = (0, he.c)(),
              ft = (0, he.c)(),
              Mt = (0, he.c)();
            return (
              st
                .addElement(k.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              lt.addElement(k.querySelector('.popover-wrapper')).duration(150).fromTo('opacity', 0.01, 1),
              ft
                .addElement(I)
                .beforeStyles({
                  top: `calc(${Le}px + var(--offset-y, 0px))`,
                  left: `calc(${He}px + var(--offset-x, 0px))`,
                  'transform-origin': `${ge} ${ce}`,
                })
                .beforeAddWrite(() => {
                  void 0 !== Ve && I.style.setProperty('bottom', `${Ve}px`);
                })
                .fromTo('transform', 'scale(0.8)', 'scale(1)'),
              Mt.addElement(k.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1),
              at
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .duration(300)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${O}px`),
                    'bottom' === ge && n.classList.add('popover-bottom');
                })
                .addAnimation([st, lt, ft, Mt])
            );
          },
          cd = (n) => {
            const e = (0, j.g)(n),
              t = e.querySelector('.popover-content'),
              o = (0, he.c)(),
              i = (0, he.c)(),
              r = (0, he.c)();
            return (
              i.addElement(e.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              r.addElement(e.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0),
              o
                .easing('ease')
                .afterAddWrite(() => {
                  n.style.removeProperty('--width'),
                    n.classList.remove('popover-bottom'),
                    t.style.removeProperty('top'),
                    t.style.removeProperty('left'),
                    t.style.removeProperty('bottom'),
                    t.style.removeProperty('transform-origin');
                })
                .duration(150)
                .addAnimation([i, r])
            );
          },
          pd = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.didPresent = (0, c.lh)(this, 'ionPopoverDidPresent', 7)),
                  (this.willPresent = (0, c.lh)(this, 'ionPopoverWillPresent', 7)),
                  (this.willDismiss = (0, c.lh)(this, 'ionPopoverWillDismiss', 7)),
                  (this.didDismiss = (0, c.lh)(this, 'ionPopoverDidDismiss', 7)),
                  (this.didPresentShorthand = (0, c.lh)(this, 'didPresent', 7)),
                  (this.willPresentShorthand = (0, c.lh)(this, 'willPresent', 7)),
                  (this.willDismissShorthand = (0, c.lh)(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = (0, c.lh)(this, 'didDismiss', 7)),
                  (this.ionMount = (0, c.lh)(this, 'ionMount', 7)),
                  (this.parentPopover = null),
                  (this.coreDelegate = io()),
                  (this.lockController = xn()),
                  (this.inline = !1),
                  (this.focusDescendantOnPresent = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, De);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = hd[e.type];
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
                      ? (this.destroyTriggerInteraction = qc(r, t, o))
                      : (0, ze.p)(
                          `A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,
                          this.el,
                        );
                  }),
                  (this.configureKeyboardInteraction = () => {
                    const { destroyKeyboardInteraction: e, el: t } = this;
                    e && e(), (this.destroyKeyboardInteraction = Xc(t));
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
                        const a = (0, j.g)(o).querySelector('.popover-content');
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
                          i.forEach(({ eventName: s, callback: d }) => a.addEventListener(s, d)),
                          () => {
                            i.forEach(({ eventName: s, callback: d }) => a.removeEventListener(s, d));
                          }
                        );
                      })(i, o, r, t)));
                  }),
                  (this.presented = !1),
                  (this.hasController = !1),
                  (this.delegate = void 0),
                  (this.overlayIndex = void 0),
                  (this.enterAnimation = void 0),
                  (this.leaveAnimation = void 0),
                  (this.component = void 0),
                  (this.componentProps = void 0),
                  (this.keyboardClose = !0),
                  (this.cssClass = void 0),
                  (this.backdropDismiss = !0),
                  (this.event = void 0),
                  (this.showBackdrop = !0),
                  (this.translucent = !1),
                  (this.animated = !0),
                  (this.htmlAttributes = void 0),
                  (this.triggerAction = 'click'),
                  (this.trigger = void 0),
                  (this.size = 'auto'),
                  (this.dismissOnSelect = !1),
                  (this.reference = 'trigger'),
                  (this.side = 'bottom'),
                  (this.alignment = void 0),
                  (this.arrow = !0),
                  (this.isOpen = !1),
                  (this.keyboardEvents = !1),
                  (this.focusTrap = !0),
                  (this.keepContentsMounted = !1);
              }
              onTriggerChange() {
                this.configureTriggerInteraction();
              }
              onIsOpenChange(e, t) {
                !0 === e && !1 === t ? this.present() : !1 === e && !0 === t && this.dismiss();
              }
              connectedCallback() {
                const { configureTriggerInteraction: e, el: t } = this;
                Yo(t), e();
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
                      : Ko(o);
                (this.parentPopover = o.closest(`ion-popover:not(#${i})`)),
                  void 0 === this.alignment && (this.alignment = 'ios' === (0, X.b)(this) ? 'center' : 'start');
              }
              componentDidLoad() {
                const { parentPopover: e, isOpen: t } = this;
                !0 === t && (0, j.r)(() => this.present()),
                  e &&
                    (0, j.a)(e, 'ionPopoverWillDismiss', () => {
                      this.dismiss(void 0, void 0, !1);
                    }),
                  this.configureTriggerInteraction();
              }
              presentFromTrigger(e, t = !1) {
                var o = this;
                return (0, R.A)(function* () {
                  (o.focusDescendantOnPresent = t), yield o.present(e), (o.focusDescendantOnPresent = !1);
                })();
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
                return (0, R.A)(function* () {
                  const o = yield t.lockController.lock();
                  if (t.presented) return void o();
                  const { el: i } = t,
                    { inline: r, delegate: a } = t.getDelegate(!0);
                  t.ionMount.emit(),
                    (t.usersElement = yield oo(a, i, t.component, ['popover-viewport'], t.componentProps, r)),
                    t.keyboardEvents || t.configureKeyboardInteraction(),
                    t.configureDismissInteraction(),
                    (0, j.j)(i) ? yield (0, ye.e)(t.usersElement) : t.keepContentsMounted || (yield (0, ye.w)()),
                    yield T(t, 'popoverEnter', rd, ld, {
                      event: e || t.event,
                      size: t.size,
                      trigger: t.triggerEl,
                      reference: t.reference,
                      side: t.side,
                      align: t.alignment,
                    }),
                    t.focusDescendantOnPresent && ao(i),
                    o();
                })();
              }
              dismiss(e, t, o = !0) {
                var i = this;
                return (0, R.A)(function* () {
                  const r = yield i.lockController.lock(),
                    { destroyKeyboardInteraction: a, destroyDismissInteraction: s } = i;
                  o && i.parentPopover && i.parentPopover.dismiss(e, t, o);
                  const d = yield D(i, e, t, 'popoverLeave', ad, cd, i.event);
                  if (d) {
                    a && (a(), (i.destroyKeyboardInteraction = void 0)),
                      s && (s(), (i.destroyDismissInteraction = void 0));
                    const { delegate: p } = i.getDelegate();
                    yield Wo(p, i.usersElement);
                  }
                  return r(), d;
                })();
              }
              getParentPopover() {
                var e = this;
                return (0, R.A)(function* () {
                  return e.parentPopover;
                })();
              }
              onDidDismiss() {
                return K(this.el, 'ionPopoverDidDismiss');
              }
              onWillDismiss() {
                return K(this.el, 'ionPopoverWillDismiss');
              }
              render() {
                const e = (0, X.b)(this),
                  {
                    onLifecycle: t,
                    parentPopover: o,
                    dismissOnSelect: i,
                    side: r,
                    arrow: a,
                    htmlAttributes: s,
                    focusTrap: d,
                  } = this,
                  p = (0, X.a)('desktop'),
                  m = a && !o;
                return (0, c.h)(
                  c.xr,
                  Object.assign(
                    {
                      key: 'ffe8b37c9ffb5cac210a7307e6cdfcf78712905b',
                      'aria-modal': 'true',
                      'no-router': !0,
                      tabindex: '-1',
                    },
                    s,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(Object.assign({}, yt(this.cssClass)), {
                        [e]: !0,
                        'popover-translucent': this.translucent,
                        'overlay-hidden': !0,
                        'popover-desktop': p,
                        [`popover-side-${r}`]: !0,
                        [Zo]: !1 === d,
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
                    (0, c.h)('ion-backdrop', {
                      key: '12b3ffa3928b4d56a4f09c3d2f5d493d47b45255',
                      tappable: this.backdropDismiss,
                      visible: this.showBackdrop,
                      part: 'backdrop',
                    }),
                  (0, c.h)(
                    'div',
                    {
                      key: '2c2862d5c7e75b637973c712b4982bf4978c0cdf',
                      class: 'popover-wrapper ion-overlay-wrapper',
                      onClick: i ? () => this.dismiss() : void 0,
                    },
                    m &&
                      (0, c.h)('div', {
                        key: '0cfacc52afaa7abc28c1b7742889d7a1c23a37ad',
                        class: 'popover-arrow',
                        part: 'arrow',
                      }),
                    (0, c.h)(
                      'div',
                      { key: '3ef570c44d4fe7f063dd419008c92c8c40d3cd22', class: 'popover-content', part: 'content' },
                      (0, c.h)('slot', { key: '6fc5dfdce20fee1642bc1f05d41b5bf7d1034457' }),
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
              33,
              'ion-popover',
              {
                hasController: [4, 'has-controller'],
                delegate: [16],
                overlayIndex: [2, 'overlay-index'],
                enterAnimation: [16],
                leaveAnimation: [16],
                component: [1],
                componentProps: [16],
                keyboardClose: [4, 'keyboard-close'],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                event: [8],
                showBackdrop: [4, 'show-backdrop'],
                translucent: [4],
                animated: [4],
                htmlAttributes: [16],
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
          hd = {
            ionPopoverDidPresent: 'ionViewDidEnter',
            ionPopoverWillPresent: 'ionViewWillEnter',
            ionPopoverWillDismiss: 'ionViewWillLeave',
            ionPopoverDidDismiss: 'ionViewDidLeave',
          };
        const fd = function Ir() {
            typeof customElements > 'u' ||
              ['ion-popover', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-popover':
                    customElements.get(e) || customElements.define(e, pd);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || uo();
                }
              });
          },
          gd = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
              }
              addRipple(e, t) {
                var o = this;
                return (0, R.A)(function* () {
                  return new Promise((i) => {
                    (0, c.gv)(() => {
                      const r = o.el.getBoundingClientRect(),
                        a = r.width,
                        s = r.height,
                        d = Math.sqrt(a * a + s * s),
                        p = Math.max(s, a),
                        m = o.unbounded ? p : d + vd,
                        v = Math.floor(p * xd),
                        _ = m / v;
                      let k = e - r.left,
                        I = t - r.top;
                      o.unbounded && ((k = 0.5 * a), (I = 0.5 * s));
                      const $ = k - 0.5 * v,
                        O = I - 0.5 * v,
                        B = 0.5 * a - k,
                        W = 0.5 * s - I;
                      (0, c.bN)(() => {
                        const G = document.createElement('div');
                        G.classList.add('ripple-effect');
                        const Z = G.style;
                        (Z.top = O + 'px'),
                          (Z.left = $ + 'px'),
                          (Z.width = Z.height = v + 'px'),
                          Z.setProperty('--final-scale', `${_}`),
                          Z.setProperty('--translate-end', `${B}px, ${W}px`),
                          (o.el.shadowRoot || o.el).appendChild(G),
                          setTimeout(() => {
                            i(() => {
                              bd(G);
                            });
                          }, 325);
                      });
                    });
                  });
                })();
              }
              get unbounded() {
                return 'unbounded' === this.type;
              }
              render() {
                const e = (0, X.b)(this);
                return (0, c.h)(c.xr, {
                  key: '7ae559bda5d2c1856a45bfa150c2cb4f83373f8e',
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
            [1, 'ion-ripple-effect', { type: [1], addRipple: [64] }],
          ),
          bd = (n) => {
            n.classList.add('fade-out'),
              setTimeout(() => {
                n.remove();
              }, 200);
          },
          vd = 10,
          xd = 0.5;
        const kd = (0, c.w$)(
          class extends c.wt {
            constructor() {
              super(),
                this.__registerHost(),
                this.__attachShadow(),
                (this.ionFocus = (0, c.lh)(this, 'ionFocus', 7)),
                (this.ionBlur = (0, c.lh)(this, 'ionBlur', 7)),
                (this.inItem = !1),
                (this.inListHeader = !1),
                (this.inToolbar = !1),
                (this.formButtonEl = null),
                (this.formEl = null),
                (this.inheritedAttributes = {}),
                (this.handleClick = (e) => {
                  const { el: t } = this;
                  'button' === this.type
                    ? Ba(this.href, e, this.routerDirection, this.routerAnimation)
                    : (0, j.h)(t) && this.submitForm(e);
                }),
                (this.onFocus = () => {
                  this.ionFocus.emit();
                }),
                (this.onBlur = () => {
                  this.ionBlur.emit();
                }),
                (this.slotChanged = () => {
                  this.isCircle = this.hasIconOnly;
                }),
                (this.isCircle = !1),
                (this.color = void 0),
                (this.buttonType = 'button'),
                (this.disabled = !1),
                (this.expand = void 0),
                (this.fill = void 0),
                (this.routerDirection = 'forward'),
                (this.routerAnimation = void 0),
                (this.download = void 0),
                (this.href = void 0),
                (this.rel = void 0),
                (this.shape = void 0),
                (this.size = void 0),
                (this.strong = !1),
                (this.target = void 0),
                (this.type = 'button'),
                (this.form = void 0);
            }
            disabledChanged() {
              const { disabled: e } = this;
              this.formButtonEl && (this.formButtonEl.disabled = e);
            }
            renderHiddenButton() {
              const e = (this.formEl = this.findForm());
              if (e) {
                const { formButtonEl: t } = this;
                if (null !== t && e.contains(t)) return;
                const o = (this.formButtonEl = document.createElement('button'));
                (o.type = this.type), (o.style.display = 'none'), (o.disabled = this.disabled), e.appendChild(o);
              }
            }
            componentWillLoad() {
              (this.inToolbar = !!this.el.closest('ion-buttons')),
                (this.inListHeader = !!this.el.closest('ion-list-header')),
                (this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider')),
                (this.inheritedAttributes = (0, j.i)(this.el));
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
                    : ((0, ze.p)(
                        `Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,
                        this.el,
                      ),
                      null)
                  : ((0, ze.p)(
                      `Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,
                      this.el,
                    ),
                    null);
              }
              return void 0 !== e
                ? ((0, ze.p)(
                    'The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',
                    this.el,
                  ),
                  null)
                : this.el.closest('form');
            }
            submitForm(e) {
              this.formEl && this.formButtonEl && (e.preventDefault(), this.formButtonEl.click());
            }
            render() {
              const e = (0, X.b)(this),
                {
                  buttonType: t,
                  type: o,
                  disabled: i,
                  rel: r,
                  target: a,
                  size: s,
                  href: d,
                  color: p,
                  expand: m,
                  hasIconOnly: v,
                  shape: _,
                  strong: k,
                  inheritedAttributes: I,
                } = this,
                $ = void 0 === s && this.inItem ? 'small' : s,
                O = void 0 === d ? 'button' : 'a',
                B = 'button' === O ? { type: o } : { download: this.download, href: d, rel: r, target: a };
              let W = this.fill;
              return (
                null == W && (W = this.inToolbar || this.inListHeader ? 'clear' : 'solid'),
                'button' !== o && this.renderHiddenButton(),
                (0, c.h)(
                  c.xr,
                  {
                    key: '340a809d85698741bb36e796355cae89a970655f',
                    onClick: this.handleClick,
                    'aria-disabled': i ? 'true' : null,
                    class: Ke(p, {
                      [e]: !0,
                      [t]: !0,
                      [`${t}-${m}`]: void 0 !== m,
                      [`${t}-${$}`]: void 0 !== $,
                      [`${t}-${_}`]: void 0 !== _,
                      [`${t}-${W}`]: !0,
                      [`${t}-strong`]: k,
                      'in-toolbar': Qe('ion-toolbar', this.el),
                      'in-toolbar-color': Qe('ion-toolbar[color]', this.el),
                      'in-buttons': Qe('ion-buttons', this.el),
                      'button-has-icon-only': v,
                      'button-disabled': i,
                      'ion-activatable': !0,
                      'ion-focusable': !0,
                    }),
                  },
                  (0, c.h)(
                    O,
                    Object.assign(
                      { key: '03ae1b94a0d606aa65aa6f82c2fc76abcf3f1300' },
                      B,
                      {
                        class: 'button-native',
                        part: 'native',
                        disabled: i,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                      },
                      I,
                    ),
                    (0, c.h)(
                      'span',
                      { key: '90bf53d4ffcab88ee596ece7113d5b6409e61143', class: 'button-inner' },
                      (0, c.h)('slot', {
                        key: 'a7876695f0d8702e8bcb471ae4c0984f27d77458',
                        name: 'icon-only',
                        onSlotchange: this.slotChanged,
                      }),
                      (0, c.h)('slot', { key: '2c8551586f8726884d7797a6d3fee2d4b3aab35f', name: 'start' }),
                      (0, c.h)('slot', { key: '9ab07accdb22b08d0a463a7c821c9793507d1f7d' }),
                      (0, c.h)('slot', { key: '8984afe177e6ba021435875a3798e2a64f3bdf2c', name: 'end' }),
                    ),
                    'md' === e &&
                      (0, c.h)('ion-ripple-effect', {
                        key: '3e9f01e7a1198b6b7109502293a971da7072a4f3',
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
              return { disabled: ['disabledChanged'] };
            }
            static get style() {
              return {
                ios: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}',
                md: ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}',
              };
            }
          },
          [
            33,
            'ion-button',
            {
              color: [513],
              buttonType: [1025, 'button-type'],
              disabled: [516],
              expand: [513],
              fill: [1537],
              routerDirection: [1, 'router-direction'],
              routerAnimation: [16],
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
            { disabled: ['disabledChanged'] },
          ],
        );
        const _d = function Oi() {
            typeof customElements > 'u' ||
              ['ion-button', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-button':
                    customElements.get(e) || customElements.define(e, kd);
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) ||
                      (function yn() {
                        typeof customElements > 'u' ||
                          ['ion-ripple-effect'].forEach((e) => {
                            'ion-ripple-effect' === e && (customElements.get(e) || customElements.define(e, gd));
                          });
                      })();
                }
              });
          },
          is = {
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
          Cd = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.color = void 0),
                  (this.duration = void 0),
                  (this.name = void 0),
                  (this.paused = !1);
              }
              getName() {
                const e = this.name || X.c.get('spinner'),
                  t = (0, X.b)(this);
                return e || ('ios' === t ? 'lines' : 'circular');
              }
              render() {
                var e;
                const t = this,
                  o = (0, X.b)(t),
                  i = t.getName(),
                  r = null !== (e = is[i]) && void 0 !== e ? e : is.lines,
                  a = 'number' == typeof t.duration && t.duration > 10 ? t.duration : r.dur,
                  s = [];
                if (void 0 !== r.circles) for (let d = 0; d < r.circles; d++) s.push($d(r, a, d, r.circles));
                else if (void 0 !== r.lines) for (let d = 0; d < r.lines; d++) s.push(Sd(r, a, d, r.lines));
                return (0, c.h)(
                  c.xr,
                  {
                    key: '9d30ee9f5aa0dd0e220da07e75d05b8b2435224d',
                    class: Ke(t.color, {
                      [o]: !0,
                      [`spinner-${i}`]: !0,
                      'spinner-paused': t.paused || X.c.getBoolean('_testing'),
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
            [1, 'ion-spinner', { color: [513], duration: [2], name: [1], paused: [4] }],
          ),
          $d = (n, e, t, o) => {
            const i = n.fn(e, t, o);
            return (
              (i.style['animation-duration'] = e + 'ms'),
              (0, c.h)(
                'svg',
                { viewBox: i.viewBox || '0 0 64 64', style: i.style },
                (0, c.h)('circle', {
                  transform: i.transform || 'translate(32,32)',
                  cx: i.cx,
                  cy: i.cy,
                  r: i.r,
                  style: n.elmDuration ? { animationDuration: e + 'ms' } : {},
                }),
              )
            );
          },
          Sd = (n, e, t, o) => {
            const i = n.fn(e, t, o);
            return (
              (i.style['animation-duration'] = e + 'ms'),
              (0, c.h)(
                'svg',
                { viewBox: i.viewBox || '0 0 64 64', style: i.style },
                (0, c.h)('line', { transform: 'translate(32,32)', y1: i.y1, y2: i.y2 }),
              )
            );
          },
          Td = function Ed() {
            typeof customElements > 'u' ||
              ['ion-spinner'].forEach((e) => {
                'ion-spinner' === e && (customElements.get(e) || customElements.define(e, Cd));
              });
          },
          Ad = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.color = void 0);
              }
              render() {
                const e = (0, X.b)(this);
                return (0, c.h)(
                  c.xr,
                  { key: 'e134d70c04344b708a2ecf6253722781ad2ca826', class: Ke(this.color, { [e]: !0 }) },
                  (0, c.h)('slot', { key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8' }),
                );
              }
              static get style() {
                return ':host(.ion-color){color:var(--ion-color-base)}';
              }
            },
            [1, 'ion-text', { color: [513] }],
          ),
          zd = function Pd() {
            typeof customElements > 'u' ||
              ['ion-text'].forEach((e) => {
                'ion-text' === e && (customElements.get(e) || customElements.define(e, Ad));
              });
          },
          Tr = (n) => {
            const e = n.getTimezoneOffset();
            return n.setMinutes(n.getMinutes() - e), n;
          };
        Tr(new Date('2022T01:00')), Tr(new Date('2022T13:00'));
        var Pp = Object.defineProperty;
        typeof window < 'u' && window,
          ((n, e) => {
            for (var t in e) Pp(n, t, { get: e[t], enumerable: !0 });
          })({}, { err: () => Xs, map: () => Yp, ok: () => Wr, unwrap: () => Kp, unwrapErr: () => Xp });
        var Wr = (n) => ({ isOk: !0, isErr: !1, value: n }),
          Xs = (n) => ({ isOk: !1, isErr: !0, value: n });
        function Yp(n, e) {
          if (n.isOk) {
            const t = e(n.value);
            return t instanceof Promise ? t.then((o) => Wr(o)) : Wr(t);
          }
          if (n.isErr) return Xs(n.value);
          throw 'should never get here';
        }
        var Kp = (n) => {
            if (n.isOk) return n.value;
            throw n.value;
          },
          Xp = (n) => {
            if (n.isErr) return n.value;
            throw n.value;
          };
        new RegExp('Capture$');
        const Ct = ['*'],
          tg = (n, e) => {
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
          ng = (n, e) => {
            const t = n.prototype;
            e.forEach((o) => {
              t[o] = function () {
                const i = arguments;
                return this.z.runOutsideAngular(() => this.el[o].apply(this.el, i));
              };
            });
          };
        function $t(n) {
          return function (t) {
            const { defineCustomElementFn: o, inputs: i, methods: r } = n;
            return void 0 !== o && o(), i && tg(t, i), r && ng(t, r), t;
          };
        }
        let og = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  z(this, 'z', void 0),
                    z(this, 'el', void 0),
                    (this.z = r),
                    o.detach(),
                    (this.el = i.nativeElement),
                    ((n, e, t) => {
                      t.forEach((o) => (n[o] = (0, be.fromEvent)(e, o)));
                    })(this, this.el, ['ionFocus', 'ionBlur']);
                }
              }),
              z(n, '\u0275fac', function (o) {
                return new (o || n)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              }),
              z(
                n,
                '\u0275cmp',
                f.ɵɵdefineComponent({
                  type: n,
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
                  standalone: !0,
                  features: [f.ɵɵStandaloneFeature],
                  ngContentSelectors: Ct,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (
              (e = (0, ve.__decorate)(
                [
                  $t({
                    defineCustomElementFn: _d,
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
                e,
              )),
              e
            );
          })(),
          ig = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  z(this, 'z', void 0), z(this, 'el', void 0), (this.z = r), o.detach(), (this.el = i.nativeElement);
                }
              }),
              z(n, '\u0275fac', function (o) {
                return new (o || n)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              }),
              z(
                n,
                '\u0275cmp',
                f.ɵɵdefineComponent({
                  type: n,
                  selectors: [['ion-spinner']],
                  inputs: { color: 'color', duration: 'duration', name: 'name', paused: 'paused' },
                  standalone: !0,
                  features: [f.ɵɵStandaloneFeature],
                  ngContentSelectors: Ct,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (
              (e = (0, ve.__decorate)(
                [$t({ defineCustomElementFn: Td, inputs: ['color', 'duration', 'name', 'paused'] })],
                e,
              )),
              e
            );
          })(),
          rg = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  z(this, 'z', void 0), z(this, 'el', void 0), (this.z = r), o.detach(), (this.el = i.nativeElement);
                }
              }),
              z(n, '\u0275fac', function (o) {
                return new (o || n)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              }),
              z(
                n,
                '\u0275cmp',
                f.ɵɵdefineComponent({
                  type: n,
                  selectors: [['ion-text']],
                  inputs: { color: 'color', mode: 'mode' },
                  standalone: !0,
                  features: [f.ɵɵStandaloneFeature],
                  ngContentSelectors: Ct,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (e = (0, ve.__decorate)([$t({ defineCustomElementFn: zd, inputs: ['color', 'mode'] })], e)), e;
          })(),
          ag = (() => {
            var n;
            class e extends xi {
              constructor() {
                super(Ei),
                  z(this, 'angularDelegate', (0, f.inject)(Dn)),
                  z(this, 'injector', (0, f.inject)(f.Injector)),
                  z(this, 'environmentInjector', (0, f.inject)(f.EnvironmentInjector)),
                  Vc();
              }
              create(o) {
                return super.create({
                  ...o,
                  delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'modal'),
                });
              }
            }
            return (
              (n = e),
              z(e, '\u0275fac', function (o) {
                return new (o || n)();
              }),
              z(e, '\u0275prov', f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
              e
            );
          })();
        class sg extends xi {
          constructor() {
            super(Ti),
              z(this, 'angularDelegate', (0, f.inject)(Dn)),
              z(this, 'injector', (0, f.inject)(f.Injector)),
              z(this, 'environmentInjector', (0, f.inject)(f.EnvironmentInjector)),
              fd();
          }
          create(e) {
            return super.create({
              ...e,
              delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover'),
            });
          }
        }
        const lg = (n = {}) =>
            (0, f.makeEnvironmentProviders)([
              { provide: Zt, useValue: n },
              { provide: f.APP_INITIALIZER, useFactory: cg, multi: !0, deps: [Zt, U.DOCUMENT] },
              { provide: Bo, useFactory: Jn, deps: [se.Router] },
              Dn,
              ag,
              sg,
            ]),
          cg = (n, e) => () => {
            e.documentElement.classList.add('ion-ce'), (0, X.i)(n);
          };
        function Ca(n) {
          return ie((e, t) => {
            let r,
              o = null,
              i = !1;
            (o = e.subscribe(
              fn(t, void 0, void 0, (a) => {
                (r = Vn(n(a, Ca(n)(e)))), o ? (o.unsubscribe(), (o = null), r.subscribe(t)) : (i = !0);
              }),
            )),
              i && (o.unsubscribe(), (o = null), r.subscribe(t));
          });
        }
        function $a(n, e) {
          return ie((t, o) => {
            let i = 0;
            t.subscribe(
              fn(o, (r) => {
                o.next(n.call(e, r, i++));
              }),
            );
          });
        }
        let Ql = (() => {
          var n;
          class e {
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
            getNetflixUrl(o) {
              return de.WakoHttpRequestService.request(
                {
                  url: o.url,
                  method: 'GET',
                  responseType: 'text',
                  headers: {
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'User-Agent':
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Upgrade-Insecure-Requests': '1',
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-Site': 'none',
                    'Sec-Fetch-User': '?1',
                  },
                },
                '3d',
              ).pipe(
                Ca((i) => (302 === i.status ? (0, be.of)(i.response) : (0, be.throwError)(i))),
                $a((i) => {
                  if (i.match('Found') && null !== i.match(/href="([^"]*)/)) {
                    const d = i.match(/href="([^"]*)/);
                    if (d[1]) return d[1];
                  }
                  const s = new DOMParser()
                    .parseFromString(i, 'text/html')
                    .querySelector('meta[property="al:ios:url"]');
                  return s && s.getAttribute('content')
                    ? `http://www.netflix.com/watch/${s.getAttribute('content').split('/').pop().split('?').shift()}`
                    : o.url;
                }),
              );
            }
            setKnownPlatformUrl(o) {
              const i = [];
              return (
                o.forEach((r) => {
                  i.push(
                    'netflix' === r.id
                      ? this.getNetflixUrl(r).pipe(
                          Ca((a) => (console.error(a), (0, be.of)(r.url))),
                          $a((a) => ((r.url = a), r)),
                        )
                      : (0, be.of)(r),
                  );
                }),
                (0, be.forkJoin)(i)
              );
            }
            getSources(o) {
              let i = null;
              return (
                o.movie
                  ? (i = `/movies/${o.movie.ids.trakt}`)
                  : o.show &&
                    o.episode &&
                    (i = `/shows/${o.show.ids.trakt}/seasons/${o.episode.seasonNumber}/episodes/${o.episode.number}`),
                de.WakoHttpRequestService.get('https://trakt.tv' + i, null, '3d').pipe(
                  $a((r) => {
                    const a = [];
                    try {
                      new DOMParser()
                        .parseFromString(r, 'text/html')
                        .querySelectorAll('.streaming-links .sources a')
                        .forEach((m) => {
                          try {
                            var v, _, k, I;
                            let $ = null === (v = m.getAttribute('data-source')) || void 0 === v ? void 0 : v.trim();
                            const O = null === (_ = m.getAttribute('data-country')) || void 0 === _ ? void 0 : _.trim(),
                              B = null === (k = m.getAttribute('href')) || void 0 === k ? void 0 : k.trim();
                            if ('#' === B) return;
                            const W =
                              null === (I = m.querySelector('img')) || void 0 === I
                                ? void 0
                                : I.getAttribute('data-original');
                            !$ && B.match('/watchnow') && ($ = B.split('/').pop());
                            const G = $ ? this.getNameFromId($) : 'N/A';
                            a.push({
                              id: $,
                              name: G,
                              country: O,
                              url: 'https://trakt.tv' + B,
                              logoUrl: 'https://trakt.tv' + W,
                            });
                          } catch ($) {
                            console.error($);
                          }
                        });
                    } catch (s) {
                      console.error(s);
                    }
                    return a;
                  }),
                )
              );
            }
          }
          return (
            ((n = e).ɵfac = function (o) {
              return new (o || n)();
            }),
            (n.ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        function Rg(n, e) {
          1 & n && f.ɵɵelement(0, 'ion-spinner');
        }
        function Ng(n, e) {
          1 & n && (f.ɵɵelementStart(0, 'ion-text'), f.ɵɵtext(1), f.ɵɵpipe(2, 'translate'), f.ɵɵelementEnd()),
            2 & n && (f.ɵɵadvance(), f.ɵɵtextInterpolate(f.ɵɵpipeBind1(2, 1, 'noSourceFound')));
        }
        function Hg(n, e) {
          if (1 & n) {
            const t = f.ɵɵgetCurrentView();
            f.ɵɵelementStart(0, 'ion-button', 3),
              f.ɵɵlistener('click', function () {
                const i = f.ɵɵrestoreView(t).$implicit,
                  r = f.ɵɵnextContext();
                return f.ɵɵresetView(r.goTo(i));
              }),
              f.ɵɵtext(1),
              f.ɵɵpipe(2, 'titlecase'),
              f.ɵɵelementEnd();
          }
          if (2 & n) {
            const t = e.$implicit;
            f.ɵɵclassMap(t.id), f.ɵɵadvance(), f.ɵɵtextInterpolate1(' ', f.ɵɵpipeBind1(2, 4, t.name), ' ');
          }
        }
        let rr = (() => {
            var n;
            class e {
              constructor(o) {
                (this.watchnowService = o), (this.type = 'button'), (this.sources = []), (this.loading = !0);
              }
              ngOnInit() {
                this.watchnowService
                  .getSources({ movie: this.movie, show: this.show, episode: this.episode })
                  .pipe(
                    (function Ee(n) {
                      return ie((e, t) => {
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
                (function q(n, e) {
                  'FirebasePlugin' in window && window.FirebasePlugin.logEvent(n, e);
                })('addon_watchnow', { type: this.type, source: o.id }),
                  de.BrowserService.open(o.url, !1);
              }
            }
            return (
              ((n = e).ɵfac = function (o) {
                return new (o || n)(f.ɵɵdirectiveInject(Ql));
              }),
              (n.ɵcmp = f.ɵɵdefineComponent({
                type: n,
                selectors: [['wk-open-button']],
                inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
                standalone: !0,
                features: [f.ɵɵStandaloneFeature],
                decls: 4,
                vars: 3,
                consts: [
                  [1, 'container'],
                  [4, 'ngIf'],
                  ['expand', 'block', 3, 'class', 'click', 4, 'ngFor', 'ngForOf'],
                  ['expand', 'block', 3, 'click'],
                ],
                template: function (o, i) {
                  1 & o &&
                    (f.ɵɵelementStart(0, 'div', 0),
                    f.ɵɵtemplate(1, Rg, 1, 0, 'ion-spinner', 1)(2, Ng, 3, 3, 'ion-text', 1)(
                      3,
                      Hg,
                      3,
                      6,
                      'ion-button',
                      2,
                    ),
                    f.ɵɵelementEnd()),
                    2 & o &&
                      (f.ɵɵadvance(),
                      f.ɵɵproperty('ngIf', i.loading),
                      f.ɵɵadvance(),
                      f.ɵɵproperty('ngIf', !i.loading && 0 === i.sources.length),
                      f.ɵɵadvance(),
                      f.ɵɵproperty('ngForOf', i.sources));
                },
                dependencies: [U.NgIf, U.NgFor, U.TitleCasePipe, J.TranslateModule, J.TranslatePipe, ig, rg, og],
                styles: [
                  '.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--background: #e50914}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--background: #999}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--background: #607d8b}',
                ],
              })),
              e
            );
          })(),
          Jl = (() => {
            var n;
            class e extends de.EpisodeDetailBaseComponent {
              setShowEpisode(o, i) {
                (this.show = o), (this.episode = i);
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = f.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [f.ɵɵInheritDefinitionFeature, f.ɵɵStandaloneFeature],
                decls: 1,
                vars: 2,
                consts: [[3, 'show', 'episode']],
                template: function (o, i) {
                  1 & o && f.ɵɵelement(0, 'wk-open-button', 0),
                    2 & o && f.ɵɵproperty('show', i.show)('episode', i.episode);
                },
                dependencies: [rr],
                encapsulation: 2,
              })),
              e
            );
          })(),
          ec = (() => {
            var n;
            class e extends de.MovieDetailBaseComponent {
              setMovie(o) {
                this.movie = o;
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = f.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [f.ɵɵInheritDefinitionFeature, f.ɵɵStandaloneFeature],
                decls: 1,
                vars: 1,
                consts: [[3, 'movie']],
                template: function (o, i) {
                  1 & o && f.ɵɵelement(0, 'wk-open-button', 0), 2 & o && f.ɵɵproperty('movie', i.movie);
                },
                dependencies: [rr],
                encapsulation: 2,
              })),
              e
            );
          })(),
          tc = (() => {
            var n;
            class e extends de.PluginBaseService {
              constructor(o) {
                super(), (this.translate = o);
              }
              initialize() {
                Te('plugin initialized');
              }
              afterInstall() {
                Te('plugin installed');
              }
              afterUpdate() {
                Te('plugin updated');
              }
              setTranslation(o, i) {
                this.translate.setDefaultLang(o), this.translate.use(o), this.translate.setTranslation(o, i);
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
              getFileActionButtons(o, i, r, a, s, d) {
                return (0, R.A)(function* () {
                  throw new Error('Method not implemented.');
                })();
              }
            }
            return (
              ((n = e).ɵfac = function (o) {
                return new (o || n)(f.ɵɵinject(J.TranslateService));
              }),
              (n.ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
              e
            );
          })(),
          nc = (() => {
            var n;
            class e extends de.ShowDetailBaseComponent {
              setShow(o) {
                this.show = o;
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = f.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [f.ɵɵInheritDefinitionFeature, f.ɵɵStandaloneFeature],
                decls: 1,
                vars: 1,
                consts: [[3, 'show']],
                template: function (o, i) {
                  1 & o && f.ɵɵelement(0, 'wk-open-button', 0), 2 & o && f.ɵɵproperty('show', i.show);
                },
                dependencies: [rr],
                encapsulation: 2,
              })),
              e
            );
          })();
        var Sa = ae(165);
        const oc = new f.InjectionToken('STORAGE_CONFIG_TOKEN');
        class Vg extends Sa.Storage {
          constructor() {
            super();
          }
          create() {
            var e = this;
            return (0, R.A)(function* () {
              return e;
            })();
          }
          defineDriver() {
            return (0, R.A)(function* () {})();
          }
          get driver() {
            return 'noop';
          }
          get(e) {
            return (0, R.A)(function* () {
              return null;
            })();
          }
          set(e, t) {
            return (0, R.A)(function* () {})();
          }
          remove(e) {
            return (0, R.A)(function* () {})();
          }
          clear() {
            return (0, R.A)(function* () {})();
          }
          length() {
            return (0, R.A)(function* () {
              return 0;
            })();
          }
          keys() {
            return (0, R.A)(function* () {
              return [];
            })();
          }
          forEach(e) {
            return (0, R.A)(function* () {})();
          }
          setEncryptionKey(e) {}
        }
        function Wg(n, e) {
          return (0, U.isPlatformServer)(n) ? new Vg() : new Sa.Storage(e);
        }
        let Ug = (() => {
          class n {
            static forRoot(t = null) {
              return {
                ngModule: n,
                providers: [
                  { provide: oc, useValue: t },
                  { provide: Sa.Storage, useFactory: Wg, deps: [f.PLATFORM_ID, oc] },
                ],
              };
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = f.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = f.ɵɵdefineInjector({})),
            n
          );
        })();
        const qg = [ec, Jl, nc, rr];
        let ic = (() => {
          var n;
          class e extends de.PluginBaseModule {}
          return (
            ((n = e).pluginService = tc),
            (n.movieComponent = ec),
            (n.episodeComponent = Jl),
            (n.showComponent = nc),
            (n.ɵfac = (() => {
              let t;
              return function (i) {
                return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
              };
            })()),
            (n.ɵmod = f.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = f.ɵɵdefineInjector({
              providers: [tc, Ql, ...de.WakoProviders, lg({ swipeBackEnabled: !0, backButtonText: '', mode: 'md' })],
              imports: [U.CommonModule, re.FormsModule, J.TranslateModule.forRoot(), Ug.forRoot({}), qg],
            })),
            e
          );
        })();
        const Gg = ic;
      })(),
      lr
    );
  })(),
);
