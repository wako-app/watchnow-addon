!(function (_t, Bn) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = Bn(
        require('ionic.angular'),
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
            'ionic.angular',
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
          Bn,
        )
      : 'object' == typeof exports
        ? (exports.plugin = Bn(
            require('ionic.angular'),
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
        : (_t.plugin = Bn(
            _t['ionic.angular'],
            _t['ionic.storage'],
            _t['ng.common'],
            _t['ng.core'],
            _t['ng.forms'],
            _t['ng.router'],
            _t['ngx-translate.core'],
            _t.rxjs,
            _t.tslib,
            _t['wako-app.mobile-sdk'],
          ));
})(typeof self < 'u' ? self : this, (Sa, _t, Bn, rc, ac, sc, lc, cc, dc, uc) =>
  (() => {
    var Y,
      oe,
      Ea = {
        412: (Y, oe, E) => {
          'use strict';
          E.d(oe, { c: () => Te });
          var ie = E(911);
          let g;
          const ae = (U, q, Q) => {
              const _e = q.startsWith('animation')
                ? ((U) => (
                    void 0 === g &&
                      (g =
                        void 0 === U.style.animationName && void 0 !== U.style.webkitAnimationName ? '-webkit-' : ''),
                    g
                  ))(U)
                : '';
              U.style.setProperty(_e + q, Q);
            },
            Ce = (U = [], q) => {
              if (void 0 !== q) {
                const Q = Array.isArray(q) ? q : [q];
                return [...U, ...Q];
              }
              return U;
            },
            Te = (U) => {
              let q,
                Q,
                _e,
                L,
                be,
                h,
                de,
                we,
                ve,
                te,
                ue,
                se = [],
                ye = [],
                fe = [],
                Ie = !1,
                Le = {},
                Oe = [],
                Fe = [],
                F = {},
                H = 0,
                ee = !1,
                ge = !1,
                ke = !0,
                Pe = !1,
                Me = !0,
                Xe = !1;
              const Ge = U,
                S = [],
                O = [],
                z = [],
                ne = [],
                V = [],
                gt = [],
                Se = [],
                et = [],
                We = [],
                dt = [],
                bt = [],
                Nt =
                  'function' == typeof AnimationEffect ||
                  (void 0 !== ie.w && 'function' == typeof ie.w.AnimationEffect),
                ot = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && Nt,
                At = () => bt,
                Yt = (A, J) => {
                  const he = J.findIndex((je) => je.c === A);
                  he > -1 && J.splice(he, 1);
                },
                _n = (A, J) => ((null != J && J.oneTimeCallback ? O : S).push({ c: A, o: J }), ue),
                Hn = () => {
                  ot &&
                    (bt.forEach((A) => {
                      A.cancel();
                    }),
                    (bt.length = 0));
                },
                si = () => {
                  gt.forEach((A) => {
                    null != A && A.parentNode && A.parentNode.removeChild(A);
                  }),
                    (gt.length = 0);
                },
                En = () => (void 0 !== be ? be : de ? de.getFill() : 'both'),
                ut = () => (void 0 !== we ? we : void 0 !== h ? h : de ? de.getDirection() : 'normal'),
                pt = () => (ee ? 'linear' : void 0 !== _e ? _e : de ? de.getEasing() : 'linear'),
                qt = () => (ge ? 0 : void 0 !== ve ? ve : void 0 !== Q ? Q : de ? de.getDuration() : 0),
                Un = () => (void 0 !== L ? L : de ? de.getIterations() : 1),
                hn = () => (void 0 !== te ? te : void 0 !== q ? q : de ? de.getDelay() : 0),
                fn = () => {
                  0 !== H &&
                    (H--,
                    0 === H &&
                      ((() => {
                        We.forEach((Ye) => Ye()), dt.forEach((Ye) => Ye());
                        const A = ke ? 1 : 0,
                          J = Oe,
                          he = Fe,
                          je = F;
                        ne.forEach((Ye) => {
                          const tt = Ye.classList;
                          J.forEach((Ot) => tt.add(Ot)), he.forEach((Ot) => tt.remove(Ot));
                          for (const Ot in je) je.hasOwnProperty(Ot) && ae(Ye, Ot, je[Ot]);
                        }),
                          (ve = void 0),
                          (we = void 0),
                          (te = void 0),
                          S.forEach((Ye) => Ye.c(A, ue)),
                          O.forEach((Ye) => Ye.c(A, ue)),
                          (O.length = 0),
                          (Me = !0),
                          ke && (Pe = !0),
                          (ke = !0);
                      })(),
                      de && de.animationFinish()));
                },
                Zt = () => {
                  (() => {
                    Se.forEach((je) => je()), et.forEach((je) => je());
                    const A = ye,
                      J = fe,
                      he = Le;
                    ne.forEach((je) => {
                      const Ye = je.classList;
                      A.forEach((tt) => Ye.add(tt)), J.forEach((tt) => Ye.remove(tt));
                      for (const tt in he) he.hasOwnProperty(tt) && ae(je, tt, he[tt]);
                    });
                  })(),
                    se.length > 0 &&
                      ot &&
                      (ne.forEach((A) => {
                        const J = A.animate(se, {
                          id: Ge,
                          delay: hn(),
                          duration: qt(),
                          easing: pt(),
                          iterations: Un(),
                          fill: En(),
                          direction: ut(),
                        });
                        J.pause(), bt.push(J);
                      }),
                      bt.length > 0 &&
                        (bt[0].onfinish = () => {
                          fn();
                        })),
                    (Ie = !0);
                },
                Lt = (A) => {
                  (A = Math.min(Math.max(A, 0), 0.9999)),
                    ot &&
                      bt.forEach((J) => {
                        (J.currentTime = J.effect.getComputedTiming().delay + qt() * A), J.pause();
                      });
                },
                Dn = (A) => {
                  bt.forEach((J) => {
                    J.effect.updateTiming({
                      delay: hn(),
                      duration: qt(),
                      easing: pt(),
                      iterations: Un(),
                      fill: En(),
                      direction: ut(),
                    });
                  }),
                    void 0 !== A && Lt(A);
                },
                it = (A = !1, J = !0, he) => (
                  A &&
                    V.forEach((je) => {
                      je.update(A, J, he);
                    }),
                  ot && Dn(he),
                  ue
                ),
                zo = () => {
                  Ie &&
                    (ot
                      ? bt.forEach((A) => {
                          A.pause();
                        })
                      : ne.forEach((A) => {
                          ae(A, 'animation-play-state', 'paused');
                        }),
                    (Xe = !0));
                },
                Xn = (A) =>
                  new Promise((J) => {
                    null != A && A.sync && ((ge = !0), _n(() => (ge = !1), { oneTimeCallback: !0 })),
                      Ie || Zt(),
                      Pe && (ot && (Lt(0), Dn()), (Pe = !1)),
                      Me && ((H = V.length + 1), (Me = !1));
                    const he = () => {
                        Yt(je, O), J();
                      },
                      je = () => {
                        Yt(he, z), J();
                      };
                    _n(je, { oneTimeCallback: !0 }),
                      ((A) => {
                        z.push({ c: A, o: { oneTimeCallback: !0 } });
                      })(he),
                      V.forEach((Ye) => {
                        Ye.play();
                      }),
                      ot
                        ? (bt.forEach((A) => {
                            A.play();
                          }),
                          (0 === se.length || 0 === ne.length) && fn())
                        : fn(),
                      (Xe = !1);
                  }),
                mn = (A, J) => {
                  const he = se[0];
                  return (
                    void 0 === he || (void 0 !== he.offset && 0 !== he.offset)
                      ? (se = [{ offset: 0, [A]: J }, ...se])
                      : (he[A] = J),
                    ue
                  );
                };
              return (ue = {
                parentAnimation: de,
                elements: ne,
                childAnimations: V,
                id: Ge,
                animationFinish: fn,
                from: mn,
                to: (A, J) => {
                  const he = se[se.length - 1];
                  return (
                    void 0 === he || (void 0 !== he.offset && 1 !== he.offset)
                      ? (se = [...se, { offset: 1, [A]: J }])
                      : (he[A] = J),
                    ue
                  );
                },
                fromTo: (A, J, he) => mn(A, J).to(A, he),
                parent: (A) => ((de = A), ue),
                play: Xn,
                pause: () => (
                  V.forEach((A) => {
                    A.pause();
                  }),
                  zo(),
                  ue
                ),
                stop: () => {
                  V.forEach((A) => {
                    A.stop();
                  }),
                    Ie && (Hn(), (Ie = !1)),
                    (ee = !1),
                    (ge = !1),
                    (Me = !0),
                    (we = void 0),
                    (ve = void 0),
                    (te = void 0),
                    (H = 0),
                    (Pe = !1),
                    (ke = !0),
                    (Xe = !1),
                    z.forEach((A) => A.c(0, ue)),
                    (z.length = 0);
                },
                destroy: (A) => (
                  V.forEach((J) => {
                    J.destroy(A);
                  }),
                  ((A) => {
                    Hn(), A && si();
                  })(A),
                  (ne.length = 0),
                  (V.length = 0),
                  (se.length = 0),
                  (S.length = 0),
                  (O.length = 0),
                  (Ie = !1),
                  (Me = !0),
                  ue
                ),
                keyframes: (A) => {
                  const J = se !== A;
                  return (
                    (se = A),
                    J &&
                      ((A) => {
                        ot &&
                          At().forEach((J) => {
                            const he = J.effect;
                            if (he.setKeyframes) he.setKeyframes(A);
                            else {
                              const je = new KeyframeEffect(he.target, A, he.getTiming());
                              J.effect = je;
                            }
                          });
                      })(se),
                    ue
                  );
                },
                addAnimation: (A) => {
                  if (null != A)
                    if (Array.isArray(A)) for (const J of A) J.parent(ue), V.push(J);
                    else A.parent(ue), V.push(A);
                  return ue;
                },
                addElement: (A) => {
                  if (null != A)
                    if (1 === A.nodeType) ne.push(A);
                    else if (A.length >= 0) for (let J = 0; J < A.length; J++) ne.push(A[J]);
                    else console.error('Invalid addElement value');
                  return ue;
                },
                update: it,
                fill: (A) => ((be = A), it(!0), ue),
                direction: (A) => ((h = A), it(!0), ue),
                iterations: (A) => ((L = A), it(!0), ue),
                duration: (A) => (!ot && 0 === A && (A = 1), (Q = A), it(!0), ue),
                easing: (A) => ((_e = A), it(!0), ue),
                delay: (A) => ((q = A), it(!0), ue),
                getWebAnimations: At,
                getKeyframes: () => se,
                getFill: En,
                getDirection: ut,
                getDelay: hn,
                getIterations: Un,
                getEasing: pt,
                getDuration: qt,
                afterAddRead: (A) => (We.push(A), ue),
                afterAddWrite: (A) => (dt.push(A), ue),
                afterClearStyles: (A = []) => {
                  for (const J of A) F[J] = '';
                  return ue;
                },
                afterStyles: (A = {}) => ((F = A), ue),
                afterRemoveClass: (A) => ((Fe = Ce(Fe, A)), ue),
                afterAddClass: (A) => ((Oe = Ce(Oe, A)), ue),
                beforeAddRead: (A) => (Se.push(A), ue),
                beforeAddWrite: (A) => (et.push(A), ue),
                beforeClearStyles: (A = []) => {
                  for (const J of A) Le[J] = '';
                  return ue;
                },
                beforeStyles: (A = {}) => ((Le = A), ue),
                beforeRemoveClass: (A) => ((fe = Ce(fe, A)), ue),
                beforeAddClass: (A) => ((ye = Ce(ye, A)), ue),
                onFinish: _n,
                isRunning: () => 0 !== H && !Xe,
                progressStart: (A = !1, J) => (
                  V.forEach((he) => {
                    he.progressStart(A, J);
                  }),
                  zo(),
                  (ee = A),
                  Ie || Zt(),
                  it(!1, !0, J),
                  ue
                ),
                progressStep: (A) => (
                  V.forEach((J) => {
                    J.progressStep(A);
                  }),
                  Lt(A),
                  ue
                ),
                progressEnd: (A, J, he) => (
                  (ee = !1),
                  V.forEach((je) => {
                    je.progressEnd(A, J, he);
                  }),
                  void 0 !== he && (ve = he),
                  (Pe = !1),
                  (ke = !0),
                  0 === A
                    ? ((we = 'reverse' === ut() ? 'normal' : 'reverse'),
                      'reverse' === we && (ke = !1),
                      ot ? (it(), Lt(1 - J)) : ((te = (1 - J) * qt() * -1), it(!1, !1)))
                    : 1 === A && (ot ? (it(), Lt(J)) : ((te = J * qt() * -1), it(!1, !1))),
                  void 0 !== A && !de && Xn(),
                  ue
                ),
              });
            };
        },
        86: (Y, oe, E) => {
          'use strict';
          E.d(oe, { B: () => ae, G: () => Ce });
          class g {
            constructor(U, q, Q, _e, L) {
              (this.id = q), (this.name = Q), (this.disableScroll = L), (this.priority = 1e6 * _e + q), (this.ctrl = U);
            }
            canStart() {
              return !!this.ctrl && this.ctrl.canStart(this.name);
            }
            start() {
              return !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority);
            }
            capture() {
              if (!this.ctrl) return !1;
              const U = this.ctrl.capture(this.name, this.id, this.priority);
              return U && this.disableScroll && this.ctrl.disableScroll(this.id), U;
            }
            release() {
              this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
            }
            destroy() {
              this.release(), (this.ctrl = void 0);
            }
          }
          class xe {
            constructor(U, q, Q, _e) {
              (this.id = q), (this.disable = Q), (this.disableScroll = _e), (this.ctrl = U);
            }
            block() {
              if (this.ctrl) {
                if (this.disable) for (const U of this.disable) this.ctrl.disableGesture(U, this.id);
                this.disableScroll && this.ctrl.disableScroll(this.id);
              }
            }
            unblock() {
              if (this.ctrl) {
                if (this.disable) for (const U of this.disable) this.ctrl.enableGesture(U, this.id);
                this.disableScroll && this.ctrl.enableScroll(this.id);
              }
            }
            destroy() {
              this.unblock(), (this.ctrl = void 0);
            }
          }
          const ae = 'backdrop-no-scroll',
            Ce = new (class ie {
              constructor() {
                (this.gestureId = 0),
                  (this.requestedStart = new Map()),
                  (this.disabledGestures = new Map()),
                  (this.disabledScroll = new Set());
              }
              createGesture(U) {
                var q;
                return new g(
                  this,
                  this.newID(),
                  U.name,
                  null !== (q = U.priority) && void 0 !== q ? q : 0,
                  !!U.disableScroll,
                );
              }
              createBlocker(U = {}) {
                return new xe(this, this.newID(), U.disable, !!U.disableScroll);
              }
              start(U, q, Q) {
                return this.canStart(U) ? (this.requestedStart.set(q, Q), !0) : (this.requestedStart.delete(q), !1);
              }
              capture(U, q, Q) {
                if (!this.start(U, q, Q)) return !1;
                const _e = this.requestedStart;
                let L = -1e4;
                if (
                  (_e.forEach((be) => {
                    L = Math.max(L, be);
                  }),
                  L === Q)
                ) {
                  (this.capturedId = q), _e.clear();
                  const be = new CustomEvent('ionGestureCaptured', { detail: { gestureName: U } });
                  return document.dispatchEvent(be), !0;
                }
                return _e.delete(q), !1;
              }
              release(U) {
                this.requestedStart.delete(U), this.capturedId === U && (this.capturedId = void 0);
              }
              disableGesture(U, q) {
                let Q = this.disabledGestures.get(U);
                void 0 === Q && ((Q = new Set()), this.disabledGestures.set(U, Q)), Q.add(q);
              }
              enableGesture(U, q) {
                const Q = this.disabledGestures.get(U);
                void 0 !== Q && Q.delete(q);
              }
              disableScroll(U) {
                this.disabledScroll.add(U), 1 === this.disabledScroll.size && document.body.classList.add(ae);
              }
              enableScroll(U) {
                this.disabledScroll.delete(U), 0 === this.disabledScroll.size && document.body.classList.remove(ae);
              }
              canStart(U) {
                return !(void 0 !== this.capturedId || this.isDisabled(U));
              }
              isCaptured() {
                return void 0 !== this.capturedId;
              }
              isScrollDisabled() {
                return this.disabledScroll.size > 0;
              }
              isDisabled(U) {
                const q = this.disabledGestures.get(U);
                return !!(q && q.size > 0);
              }
              newID() {
                return this.gestureId++, this.gestureId;
              }
            })();
        },
        935: (Y, oe, E) => {
          'use strict';
          E.d(oe, {
            a: () => q,
            b: () => Q,
            c: () => xe,
            d: () => Ce,
            e: () => se,
            f: () => h,
            g: () => _e,
            h: () => be,
            i: () => U,
            j: () => ae,
            k: () => ye,
            l: () => Le,
            r: () => L,
          });
          const xe = (F, H) => {
              F.componentOnReady ? F.componentOnReady().then((ee) => H(ee)) : L(() => H(F));
            },
            ae = (F) => void 0 !== F.componentOnReady,
            Ce = (F, H = []) => {
              const ee = {};
              return (
                H.forEach((ge) => {
                  F.hasAttribute(ge) &&
                    (null !== F.getAttribute(ge) && (ee[ge] = F.getAttribute(ge)), F.removeAttribute(ge));
                }),
                ee
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
            U = (F, H) => {
              let ee = Te;
              return H && H.length > 0 && (ee = ee.filter((ge) => !H.includes(ge))), Ce(F, ee);
            },
            q = (F, H, ee, ge) => {
              var we;
              if (typeof window < 'u') {
                const ve = window,
                  te = null === (we = null == ve ? void 0 : ve.Ionic) || void 0 === we ? void 0 : we.config;
                if (te) {
                  const ke = te.get('_ael');
                  if (ke) return ke(F, H, ee, ge);
                  if (te._ael) return te._ael(F, H, ee, ge);
                }
              }
              return F.addEventListener(H, ee, ge);
            },
            Q = (F, H, ee, ge) => {
              var we;
              if (typeof window < 'u') {
                const ve = window,
                  te = null === (we = null == ve ? void 0 : ve.Ionic) || void 0 === we ? void 0 : we.config;
                if (te) {
                  const ke = te.get('_rel');
                  if (ke) return ke(F, H, ee, ge);
                  if (te._rel) return te._rel(F, H, ee, ge);
                }
              }
              return F.removeEventListener(H, ee, ge);
            },
            _e = (F, H = F) => F.shadowRoot || H,
            L = (F) =>
              'function' == typeof __zone_symbol__requestAnimationFrame
                ? __zone_symbol__requestAnimationFrame(F)
                : 'function' == typeof requestAnimationFrame
                  ? requestAnimationFrame(F)
                  : setTimeout(F),
            be = (F) => !!F.shadowRoot && !!F.attachShadow,
            h = (F) => {
              if ((F.focus(), F.classList.contains('ion-focusable'))) {
                const H = F.closest('ion-app');
                H && H.setFocus([F]);
              }
            },
            se = (F, H, ee, ge, we) => {
              if (F || be(H)) {
                let ve = H.querySelector('input.aux-input');
                ve ||
                  ((ve = H.ownerDocument.createElement('input')),
                  (ve.type = 'hidden'),
                  ve.classList.add('aux-input'),
                  H.appendChild(ve)),
                  (ve.disabled = we),
                  (ve.name = ee),
                  (ve.value = ge || '');
              }
            },
            ye = (F, H, ee) => Math.max(F, Math.min(H, ee)),
            Le = (F, H) => {
              const ee = F._original || F;
              return { _original: F, emit: Oe(ee.emit.bind(ee), H) };
            },
            Oe = (F, H = 0) => {
              let ee;
              return (...ge) => {
                clearTimeout(ee), (ee = setTimeout(F, H, ...ge));
              };
            };
        },
        382: (Y, oe, E) => {
          'use strict';
          E.d(oe, {
            L: () => Ce,
            a: () => Te,
            b: () => U,
            c: () => q,
            d: () => Q,
            e: () => Me,
            g: () => Ge,
            w: () => Pe,
          });
          var ie = E(994),
            ae = (E(530), E(338), E(935));
          const Ce = 'ionViewWillEnter',
            Te = 'ionViewDidEnter',
            U = 'ionViewWillLeave',
            q = 'ionViewDidLeave',
            Q = 'ionViewWillUnload',
            Pe = () => new Promise((S) => (0, ae.r)(() => (0, ae.r)(() => S()))),
            Me = (function () {
              var S = (0, ie.A)(function* (O) {
                const z = O;
                if (z) {
                  if (null != z.componentOnReady) {
                    if (null != (yield z.componentOnReady())) return;
                  } else if (null != z.__registerHost) return void (yield new Promise((V) => (0, ae.r)(V)));
                  yield Promise.all(Array.from(z.children).map(Me));
                }
              });
              return function (z) {
                return S.apply(this, arguments);
              };
            })(),
            Ge = (S) =>
              S.classList.contains('ion-page')
                ? S
                : S.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || S;
        },
        221: (Y, oe, E) => {
          'use strict';
          E.r(oe), E.d(oe, { GESTURE_CONTROLLER: () => ie.G, createGesture: () => Q });
          var ie = E(86);
          const g = (h, se, ye, fe) => {
              const Ie = xe(h) ? { capture: !!fe.capture, passive: !!fe.passive } : !!fe.capture;
              let de, Le;
              return (
                h.__zone_symbol__addEventListener
                  ? ((de = '__zone_symbol__addEventListener'), (Le = '__zone_symbol__removeEventListener'))
                  : ((de = 'addEventListener'), (Le = 'removeEventListener')),
                h[de](se, ye, Ie),
                () => {
                  h[Le](se, ye, Ie);
                }
              );
            },
            xe = (h) => {
              if (void 0 === ae)
                try {
                  const se = Object.defineProperty({}, 'passive', {
                    get: () => {
                      ae = !0;
                    },
                  });
                  h.addEventListener('optsTest', () => {}, se);
                } catch {
                  ae = !1;
                }
              return !!ae;
            };
          let ae;
          const U = (h) => (h instanceof Document ? h : h.ownerDocument),
            Q = (h) => {
              let se = !1,
                ye = !1,
                fe = !0,
                Ie = !1;
              const de = Object.assign(
                  { disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 },
                  h,
                ),
                Le = de.canStart,
                Oe = de.onWillStart,
                Fe = de.onStart,
                F = de.onEnd,
                H = de.notCaptured,
                ee = de.onMove,
                ge = de.threshold,
                we = de.passive,
                ve = de.blurOnStart,
                te = {
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
                ke = ((h, se, ye) => {
                  const fe = ye * (Math.PI / 180),
                    Ie = 'x' === h,
                    de = Math.cos(fe),
                    Le = se * se;
                  let Oe = 0,
                    Fe = 0,
                    F = !1,
                    H = 0;
                  return {
                    start(ee, ge) {
                      (Oe = ee), (Fe = ge), (H = 0), (F = !0);
                    },
                    detect(ee, ge) {
                      if (!F) return !1;
                      const we = ee - Oe,
                        ve = ge - Fe,
                        te = we * we + ve * ve;
                      if (te < Le) return !1;
                      const ke = Math.sqrt(te),
                        Pe = (Ie ? we : ve) / ke;
                      return (H = Pe > de ? 1 : Pe < -de ? -1 : 0), (F = !1), !0;
                    },
                    isGesture: () => 0 !== H,
                    getDirection: () => H,
                  };
                })(de.direction, de.threshold, de.maxAngle),
                Pe = ie.G.createGesture({
                  name: h.gestureName,
                  priority: h.gesturePriority,
                  disableScroll: h.disableScroll,
                }),
                Xe = () => {
                  se && ((Ie = !1), ee && ee(te));
                },
                Ge = () =>
                  !!Pe.capture() &&
                  ((se = !0),
                  (fe = !1),
                  (te.startX = te.currentX),
                  (te.startY = te.currentY),
                  (te.startTime = te.currentTime),
                  Oe ? Oe(te).then(O) : O(),
                  !0),
                O = () => {
                  ve &&
                    (() => {
                      if (typeof document < 'u') {
                        const Se = document.activeElement;
                        null != Se && Se.blur && Se.blur();
                      }
                    })(),
                    Fe && Fe(te),
                    (fe = !0);
                },
                z = () => {
                  (se = !1), (ye = !1), (Ie = !1), (fe = !0), Pe.release();
                },
                ne = (Se) => {
                  const et = se,
                    We = fe;
                  if ((z(), We)) {
                    if ((_e(te, Se), et)) return void (F && F(te));
                    H && H(te);
                  }
                },
                V = ((h, se, ye, fe, Ie) => {
                  let de,
                    Le,
                    Oe,
                    Fe,
                    F,
                    H,
                    ee,
                    ge = 0;
                  const we = (S) => {
                      (ge = Date.now() + 2e3),
                        se(S) &&
                          (!Le && ye && (Le = g(h, 'touchmove', ye, Ie)),
                          Oe || (Oe = g(S.target, 'touchend', te, Ie)),
                          Fe || (Fe = g(S.target, 'touchcancel', te, Ie)));
                    },
                    ve = (S) => {
                      ge > Date.now() ||
                        (se(S) &&
                          (!H && ye && (H = g(U(h), 'mousemove', ye, Ie)), ee || (ee = g(U(h), 'mouseup', ke, Ie))));
                    },
                    te = (S) => {
                      Pe(), fe && fe(S);
                    },
                    ke = (S) => {
                      Me(), fe && fe(S);
                    },
                    Pe = () => {
                      Le && Le(), Oe && Oe(), Fe && Fe(), (Le = Oe = Fe = void 0);
                    },
                    Me = () => {
                      H && H(), ee && ee(), (H = ee = void 0);
                    },
                    ue = () => {
                      Pe(), Me();
                    },
                    Xe = (S = !0) => {
                      S
                        ? (de || (de = g(h, 'touchstart', we, Ie)), F || (F = g(h, 'mousedown', ve, Ie)))
                        : (de && de(), F && F(), (de = F = void 0), ue());
                    };
                  return {
                    enable: Xe,
                    stop: ue,
                    destroy: () => {
                      Xe(!1), (fe = ye = se = void 0);
                    },
                  };
                })(
                  de.el,
                  (Se) => {
                    const et = be(Se);
                    return (
                      !(
                        ye ||
                        !fe ||
                        (L(Se, te),
                        (te.startX = te.currentX),
                        (te.startY = te.currentY),
                        (te.startTime = te.currentTime = et),
                        (te.velocityX = te.velocityY = te.deltaX = te.deltaY = 0),
                        (te.event = Se),
                        Le && !1 === Le(te)) ||
                        (Pe.release(), !Pe.start())
                      ) && ((ye = !0), 0 === ge ? Ge() : (ke.start(te.startX, te.startY), !0))
                    );
                  },
                  (Se) => {
                    se
                      ? !Ie && fe && ((Ie = !0), _e(te, Se), requestAnimationFrame(Xe))
                      : (_e(te, Se), ke.detect(te.currentX, te.currentY) && (!ke.isGesture() || !Ge()) && gt());
                  },
                  ne,
                  { capture: !1, passive: we },
                ),
                gt = () => {
                  z(), V.stop(), H && H(te);
                };
              return {
                enable(Se = !0) {
                  Se || (se && ne(void 0), z()), V.enable(Se);
                },
                destroy() {
                  Pe.destroy(), V.destroy();
                },
              };
            },
            _e = (h, se) => {
              if (!se) return;
              const ye = h.currentX,
                fe = h.currentY,
                Ie = h.currentTime;
              L(se, h);
              const de = h.currentX,
                Le = h.currentY,
                Fe = (h.currentTime = be(se)) - Ie;
              if (Fe > 0 && Fe < 100) {
                const H = (Le - fe) / Fe;
                (h.velocityX = ((de - ye) / Fe) * 0.7 + 0.3 * h.velocityX), (h.velocityY = 0.7 * H + 0.3 * h.velocityY);
              }
              (h.deltaX = de - h.startX), (h.deltaY = Le - h.startY), (h.event = se);
            },
            L = (h, se) => {
              let ye = 0,
                fe = 0;
              if (h) {
                const Ie = h.changedTouches;
                if (Ie && Ie.length > 0) {
                  const de = Ie[0];
                  (ye = de.clientX), (fe = de.clientY);
                } else void 0 !== h.pageX && ((ye = h.pageX), (fe = h.pageY));
              }
              (se.currentX = ye), (se.currentY = fe);
            },
            be = (h) => h.timeStamp || Date.now();
        },
        911: (Y, oe, E) => {
          'use strict';
          E.d(oe, { d: () => g, w: () => ie });
          const ie = typeof window < 'u' ? window : void 0,
            g = typeof document < 'u' ? document : void 0;
        },
        338: (Y, oe, E) => {
          'use strict';
          E.d(oe, { a: () => g, b: () => xe, p: () => ie });
          const ie = (ae, ...Ce) => console.warn(`[Ionic Warning]: ${ae}`, ...Ce),
            g = (ae, ...Ce) => console.error(`[Ionic Error]: ${ae}`, ...Ce),
            xe = (ae, ...Ce) => console.error(`<${ae.tagName.toLowerCase()}> must be used inside ${Ce.join(' or ')}.`);
        },
        530: (Y, oe, E) => {
          'use strict';
          E.d(oe, { a: () => L, b: () => Xe, c: () => xe, i: () => Ge });
          var ie = E(445);
          class g {
            constructor() {
              this.m = new Map();
            }
            reset(O) {
              this.m = new Map(Object.entries(O));
            }
            get(O, z) {
              const ne = this.m.get(O);
              return void 0 !== ne ? ne : z;
            }
            getBoolean(O, z = !1) {
              const ne = this.m.get(O);
              return void 0 === ne ? z : 'string' == typeof ne ? 'true' === ne : !!ne;
            }
            getNumber(O, z) {
              const ne = parseFloat(this.m.get(O));
              return isNaN(ne) ? (void 0 !== z ? z : NaN) : ne;
            }
            set(O, z) {
              this.m.set(O, z);
            }
          }
          const xe = new g(),
            q = 'ionic:',
            Q = 'ionic-persist-config',
            L = (S, O) => ('string' == typeof S && ((O = S), (S = void 0)), ((S) => be(S))(S).includes(O)),
            be = (S = window) => {
              if (typeof S > 'u') return [];
              S.Ionic = S.Ionic || {};
              let O = S.Ionic.platforms;
              return (
                null == O &&
                  ((O = S.Ionic.platforms = h(S)),
                  O.forEach((z) => S.document.documentElement.classList.add(`plt-${z}`))),
                O
              );
            },
            h = (S) => {
              const O = xe.get('platform');
              return Object.keys(Me).filter((z) => {
                const ne = null == O ? void 0 : O[z];
                return 'function' == typeof ne ? ne(S) : Me[z](S);
              });
            },
            ye = (S) => !!(ke(S, /iPad/i) || (ke(S, /Macintosh/i) && F(S))),
            de = (S) => ke(S, /android|sink/i),
            F = (S) => Pe(S, '(any-pointer:coarse)'),
            ee = (S) => ge(S) || we(S),
            ge = (S) => !!(S.cordova || S.phonegap || S.PhoneGap),
            we = (S) => {
              const O = S.Capacitor;
              return !(null == O || !O.isNative);
            },
            ke = (S, O) => O.test(S.navigator.userAgent),
            Pe = (S, O) => {
              var z;
              return null === (z = S.matchMedia) || void 0 === z ? void 0 : z.call(S, O).matches;
            },
            Me = {
              ipad: ye,
              iphone: (S) => ke(S, /iPhone/i),
              ios: (S) => ke(S, /iPhone|iPod/i) || ye(S),
              android: de,
              phablet: (S) => {
                const O = S.innerWidth,
                  z = S.innerHeight,
                  ne = Math.min(O, z),
                  V = Math.max(O, z);
                return ne > 390 && ne < 520 && V > 620 && V < 800;
              },
              tablet: (S) => {
                const O = S.innerWidth,
                  z = S.innerHeight,
                  ne = Math.min(O, z),
                  V = Math.max(O, z);
                return ye(S) || ((S) => de(S) && !ke(S, /mobile/i))(S) || (ne > 460 && ne < 820 && V > 780 && V < 1400);
              },
              cordova: ge,
              capacitor: we,
              electron: (S) => ke(S, /electron/i),
              pwa: (S) => {
                var O;
                return !!(
                  (null !== (O = S.matchMedia) && void 0 !== O && O.call(S, '(display-mode: standalone)').matches) ||
                  S.navigator.standalone
                );
              },
              mobile: F,
              mobileweb: (S) => F(S) && !ee(S),
              desktop: (S) => !F(S),
              hybrid: ee,
            };
          let ue;
          const Xe = (S) => (S && (0, ie.Wi)(S)) || ue,
            Ge = (S = {}) => {
              if (typeof window > 'u') return;
              const O = window.document,
                z = window,
                ne = (z.Ionic = z.Ionic || {}),
                V = {};
              S._ael && (V.ael = S._ael), S._rel && (V.rel = S._rel), S._ce && (V.ce = S._ce), (0, ie.zb)(V);
              const gt = Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        ((S) => {
                          try {
                            const O = S.sessionStorage.getItem(Q);
                            return null !== O ? JSON.parse(O) : {};
                          } catch {
                            return {};
                          }
                        })(z),
                      ),
                      { persistConfig: !1 },
                    ),
                    ne.config,
                  ),
                  ((S) => {
                    const O = {};
                    return (
                      S.location.search
                        .slice(1)
                        .split('&')
                        .map((z) => z.split('='))
                        .map(([z, ne]) => {
                          try {
                            return [decodeURIComponent(z), decodeURIComponent(ne)];
                          } catch {
                            return ['', ''];
                          }
                        })
                        .filter(([z]) => ((S, O) => S.substr(0, O.length) === O)(z, q))
                        .map(([z, ne]) => [z.slice(6), ne])
                        .forEach(([z, ne]) => {
                          O[z] = ne;
                        }),
                      O
                    );
                  })(z),
                ),
                S,
              );
              xe.reset(gt),
                xe.getBoolean('persistConfig') &&
                  ((S, O) => {
                    try {
                      S.sessionStorage.setItem(Q, JSON.stringify(O));
                    } catch {
                      return;
                    }
                  })(z, gt),
                be(z),
                (ne.config = xe),
                (ne.mode = ue = xe.get('mode', O.documentElement.getAttribute('mode') || (L(z, 'ios') ? 'ios' : 'md'))),
                xe.set('mode', ue),
                O.documentElement.setAttribute('mode', ue),
                O.documentElement.classList.add(ue),
                xe.getBoolean('_testing') && xe.set('animated', !1);
              const Se = (We) => {
                  var dt;
                  return null === (dt = We.tagName) || void 0 === dt ? void 0 : dt.startsWith('ION-');
                },
                et = (We) => ['ios', 'md'].includes(We);
              (0, ie.iY)((We) => {
                for (; We; ) {
                  const dt = We.mode || We.getAttribute('mode');
                  if (dt) {
                    if (et(dt)) return dt;
                    Se(We) && console.warn('Invalid ionic mode: "' + dt + '", expected: "ios" or "md"');
                  }
                  We = We.parentElement;
                }
                return ue;
              });
            };
        },
        864: (Y) => {
          function oe(E) {
            return Promise.resolve().then(() => {
              var ie = new Error("Cannot find module '" + E + "'");
              throw ((ie.code = 'MODULE_NOT_FOUND'), ie);
            });
          }
          (oe.keys = () => []), (oe.resolve = oe), (oe.id = 864), (Y.exports = oe);
        },
        376: (Y) => {
          function oe(E) {
            return Promise.resolve().then(() => {
              var ie = new Error("Cannot find module '" + E + "'");
              throw ((ie.code = 'MODULE_NOT_FOUND'), ie);
            });
          }
          (oe.keys = () => []), (oe.resolve = oe), (oe.id = 376), (Y.exports = oe);
        },
        202: (Y) => {
          'use strict';
          Y.exports = Sa;
        },
        165: (Y) => {
          'use strict';
          Y.exports = _t;
        },
        714: (Y) => {
          'use strict';
          Y.exports = Bn;
        },
        264: (Y) => {
          'use strict';
          Y.exports = rc;
        },
        122: (Y) => {
          'use strict';
          Y.exports = ac;
        },
        346: (Y) => {
          'use strict';
          Y.exports = sc;
        },
        555: (Y) => {
          'use strict';
          Y.exports = lc;
        },
        961: (Y) => {
          'use strict';
          Y.exports = cc;
        },
        652: (Y) => {
          'use strict';
          Y.exports = dc;
        },
        325: (Y) => {
          'use strict';
          Y.exports = uc;
        },
        445: (Y, oe, E) => {
          'use strict';
          E.d(oe, {
            L2: () => U,
            wt: () => ne,
            xr: () => So,
            lh: () => Po,
            $x: () => vi,
            OX: () => Hn,
            Wi: () => Tn,
            h: () => hn,
            w$: () => Ci,
            gv: () => _n,
            iY: () => qn,
            zb: () => gt,
            bN: () => Nn,
          });
          var ie = E(994),
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
            Ce = Object.defineProperty,
            U = { isDev: !!g.isDev, isBrowser: !0, isServer: !1, isTesting: !!g.isTesting },
            q = g.hotModuleReplacement
              ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = new WeakMap())
              : new WeakMap(),
            Q = (l) => q.get(l),
            be = (l, u) => u in l,
            se = (l, u) => (0, console.error)(l, u),
            ye = g.isTesting
              ? ['STENCIL:']
              : [
                  '%cstencil',
                  'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
                ],
            fe = (...l) => console.error(...ye, ...l),
            Ie = (...l) => console.warn(...ye, ...l),
            Oe = new Map(),
            H = new Map(),
            ee = [],
            ke = 's-id',
            Ge = 'http://www.w3.org/1999/xlink',
            S = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'],
            O = typeof window < 'u' ? window : {},
            z = O.document || { head: {} },
            ne = O.HTMLElement || class {},
            V = {
              $flags$: 0,
              $resourcesUrl$: '',
              jmp: (l) => l(),
              raf: (l) => requestAnimationFrame(l),
              ael: (l, u, f, b) => l.addEventListener(u, f, b),
              rel: (l, u, f, b) => l.removeEventListener(u, f, b),
              ce: (l, u) => new CustomEvent(l, u),
            },
            gt = (l) => {
              Object.assign(V, l);
            },
            Se = g.shadowDom,
            et = (() => {
              let l = !1;
              try {
                z.addEventListener(
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
            Nt = !1,
            ot = [],
            At = [],
            un = [],
            zt = (l, u) => (f) => {
              l.push(f), Nt || ((Nt = !0), u && 4 & V.$flags$ ? pn(Yt) : V.raf(Yt));
            },
            kn = (l) => {
              for (let u = 0; u < l.length; u++)
                try {
                  l[u](performance.now());
                } catch (f) {
                  se(f);
                }
              l.length = 0;
            },
            Rn = (l, u) => {
              let f = 0,
                b = 0;
              for (; f < l.length && (b = performance.now()) < u; )
                try {
                  l[f++](b);
                } catch (y) {
                  se(y);
                }
              f === l.length ? (l.length = 0) : 0 !== f && l.splice(0, f);
            },
            Yt = () => {
              if ((g.asyncQueue && bt++, kn(ot), g.asyncQueue)) {
                const l = 2 == (6 & V.$flags$) ? performance.now() + 14 * Math.ceil(0.1 * bt) : 1 / 0;
                Rn(At, l),
                  Rn(un, l),
                  At.length > 0 && (un.push(...At), (At.length = 0)),
                  (Nt = ot.length + At.length + un.length > 0) ? V.raf(Yt) : (bt = 0);
              } else kn(At), (Nt = ot.length > 0) && V.raf(Yt);
            },
            pn = (l) => Promise.resolve(void 0).then(l),
            _n = zt(ot, !1),
            Nn = zt(At, !0),
            Hn = (l) => {
              const u = new URL(l, V.$resourcesUrl$);
              return u.origin !== O.location.origin ? u.href : u.pathname;
            },
            Vn = {},
            In = (l) => 'object' == (l = typeof l) || 'function' === l;
          ((l, u) => {
            for (var f in u) Ce(l, f, { get: u[f], enumerable: !0 });
          })({}, { err: () => $n, map: () => Co, ok: () => Cn, unwrap: () => $o, unwrapErr: () => Sn });
          var Cn = (l) => ({ isOk: !0, isErr: !1, value: l }),
            $n = (l) => ({ isOk: !1, isErr: !0, value: l });
          function Co(l, u) {
            if (l.isOk) {
              const f = u(l.value);
              return f instanceof Promise ? f.then((b) => Cn(b)) : Cn(f);
            }
            if (l.isErr) return $n(l.value);
            throw 'should never get here';
          }
          var $o = (l) => {
              if (l.isOk) return l.value;
              throw l.value;
            },
            Sn = (l) => {
              if (l.isErr) return l.value;
              throw l.value;
            },
            En = 0,
            ut = (l, u = '') => {
              if (g.profile && performance.mark) {
                const f = `st:${l}:${u}:${En++}`;
                return performance.mark(f), () => performance.measure(`[Stencil] ${l}() <${u}>`, f);
              }
              return () => {};
            },
            hn = (l, u, ...f) => {
              let b = null,
                y = null,
                w = null,
                C = !1,
                D = !1;
              const T = [],
                P = (N) => {
                  for (let K = 0; K < N.length; K++)
                    (b = N[K]),
                      Array.isArray(b)
                        ? P(b)
                        : null != b &&
                          'boolean' != typeof b &&
                          ((C = 'function' != typeof l && !In(b))
                            ? (b = String(b))
                            : g.isDev &&
                              'function' != typeof l &&
                              void 0 === b.$flags$ &&
                              fe(
                                "vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.",
                              ),
                          C && D ? (T[T.length - 1].$text$ += b) : T.push(C ? Kt(null, b) : b),
                          (D = C));
                };
              if (
                (P(f),
                u &&
                  (g.isDev && 'input' === l && di(u),
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
                  T.some(Gn) &&
                  fe(
                    "The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.",
                  ),
                g.vdomFunctional && 'function' == typeof l)
              )
                return l(null === u ? {} : u, T, li);
              const B = Kt(l, null);
              return (
                (B.$attrs$ = u),
                T.length > 0 && (B.$children$ = T),
                g.vdomKey && (B.$key$ = y),
                g.slotRelocation && (B.$name$ = w),
                B
              );
            },
            Kt = (l, u) => {
              const f = { $flags$: 0, $tag$: l, $text$: u, $elm$: null, $children$: null };
              return (
                g.vdomAttribute && (f.$attrs$ = null),
                g.vdomKey && (f.$key$ = null),
                g.slotRelocation && (f.$name$ = null),
                f
              );
            },
            So = {},
            Gn = (l) => l && l.$tag$ === So,
            li = { forEach: (l, u) => l.map(Eo).forEach(u), map: (l, u) => l.map(Eo).map(u).map(ci) },
            Eo = (l) => ({
              vattrs: l.$attrs$,
              vchildren: l.$children$,
              vkey: l.$key$,
              vname: l.$name$,
              vtag: l.$tag$,
              vtext: l.$text$,
            }),
            ci = (l) => {
              if ('function' == typeof l.vtag) {
                const f = { ...l.vattrs };
                return l.vkey && (f.key = l.vkey), l.vname && (f.name = l.vname), hn(l.vtag, f, ...(l.vchildren || []));
              }
              const u = Kt(l.vtag, l.vtext);
              return (u.$attrs$ = l.vattrs), (u.$children$ = l.vchildren), (u.$key$ = l.vkey), (u.$name$ = l.vname), u;
            },
            di = (l) => {
              const u = Object.keys(l),
                f = u.indexOf('value');
              if (-1 === f) return;
              const b = u.indexOf('type'),
                y = u.indexOf('min'),
                w = u.indexOf('max'),
                C = u.indexOf('step');
              (f < b || f < y || f < w || f < C) &&
                Ie('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
            },
            Yn = (l, u, f, b, y, w, C) => {
              let D, T, P, B;
              if (1 === w.nodeType) {
                if (
                  ((D = w.getAttribute('c-id')),
                  D &&
                    ((T = D.split('.')),
                    (T[0] === C || '0' === T[0]) &&
                      ((P = {
                        $flags$: 0,
                        $hostId$: T[0],
                        $nodeId$: T[1],
                        $depth$: T[2],
                        $index$: T[3],
                        $tag$: w.tagName.toLowerCase(),
                        $elm$: w,
                        $attrs$: null,
                        $children$: null,
                        $key$: null,
                        $name$: null,
                        $text$: null,
                      }),
                      u.push(P),
                      w.removeAttribute('c-id'),
                      l.$children$ || (l.$children$ = []),
                      (l.$children$[P.$index$] = P),
                      (l = P),
                      b && '0' === P.$depth$ && (b[P.$index$] = P.$elm$))),
                  w.shadowRoot)
                )
                  for (B = w.shadowRoot.childNodes.length - 1; B >= 0; B--)
                    Yn(l, u, f, b, y, w.shadowRoot.childNodes[B], C);
                for (B = w.childNodes.length - 1; B >= 0; B--) Yn(l, u, f, b, y, w.childNodes[B], C);
              } else if (8 === w.nodeType)
                (T = w.nodeValue.split('.')),
                  (T[1] === C || '0' === T[1]) &&
                    ((D = T[0]),
                    (P = {
                      $flags$: 0,
                      $hostId$: T[1],
                      $nodeId$: T[2],
                      $depth$: T[3],
                      $index$: T[4],
                      $elm$: w,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $tag$: null,
                      $text$: null,
                    }),
                    't' === D
                      ? ((P.$elm$ = w.nextSibling),
                        P.$elm$ &&
                          3 === P.$elm$.nodeType &&
                          ((P.$text$ = P.$elm$.textContent),
                          u.push(P),
                          w.remove(),
                          l.$children$ || (l.$children$ = []),
                          (l.$children$[P.$index$] = P),
                          b && '0' === P.$depth$ && (b[P.$index$] = P.$elm$)))
                      : P.$hostId$ === C &&
                        ('s' === D
                          ? ((P.$tag$ = 'slot'),
                            (w['s-sn'] = T[5] ? (P.$name$ = T[5]) : ''),
                            (w['s-sr'] = !0),
                            g.shadowDom &&
                              b &&
                              ((P.$elm$ = z.createElement(P.$tag$)),
                              P.$name$ && P.$elm$.setAttribute('name', P.$name$),
                              w.parentNode.insertBefore(P.$elm$, w),
                              w.remove(),
                              '0' === P.$depth$ && (b[P.$index$] = P.$elm$)),
                            f.push(P),
                            l.$children$ || (l.$children$ = []),
                            (l.$children$[P.$index$] = P))
                          : 'r' === D &&
                            (g.shadowDom && b ? w.remove() : g.slotRelocation && ((y['s-cr'] = w), (w['s-cn'] = !0)))));
              else if (l && 'style' === l.$tag$) {
                const N = Kt(null, w.textContent);
                (N.$elm$ = w), (N.$index$ = '0'), (l.$children$ = [N]);
              }
            },
            Xt = (l, u) => {
              if (1 === l.nodeType) {
                let f = 0;
                if (l.shadowRoot) for (; f < l.shadowRoot.childNodes.length; f++) Xt(l.shadowRoot.childNodes[f], u);
                for (f = 0; f < l.childNodes.length; f++) Xt(l.childNodes[f], u);
              } else if (8 === l.nodeType) {
                const f = l.nodeValue.split('.');
                'o' === f[0] && (u.set(f[1] + '.' + f[2], l), (l.nodeValue = ''), (l['s-en'] = f[3]));
              }
            },
            qn = (l) => ee.push(l),
            Tn = (l) => Q(l).$modeName$,
            Po = (l, u, f) => {
              const b = ((l) => (g.lazyLoad ? Q(l).$hostElement$ : l))(l);
              return {
                emit: (y) => (
                  g.isDev &&
                    !b.isConnected &&
                    Ie(`The "${u}" event was emitted, but the dispatcher node is no longer connected to the dom.`),
                  Zt(b, u, { bubbles: !!(4 & f), composed: !!(2 & f), cancelable: !!(1 & f), detail: y })
                ),
              };
            },
            Zt = (l, u, f) => {
              const b = V.ce(u, f);
              return l.dispatchEvent(b), b;
            },
            Lt = new WeakMap(),
            it = (l, u, f) => {
              var b;
              const y = Pn(u, f),
                w = H.get(y);
              if (!g.attachStyles) return y;
              if (((l = 11 === l.nodeType ? l : z), w))
                if ('string' == typeof w) {
                  let D,
                    C = Lt.get((l = l.head || l));
                  if ((C || Lt.set(l, (C = new Set())), !C.has(y))) {
                    if (g.hydrateClientSide && l.host && (D = l.querySelector(`[sty-id="${y}"]`))) D.innerHTML = w;
                    else {
                      (D = z.createElement('style')), (D.innerHTML = w);
                      const T =
                        null != (b = V.$nonce$)
                          ? b
                          : (function Wn(l) {
                              var u, f, b;
                              return null !=
                                (b =
                                  null ==
                                  (f = null == (u = l.head) ? void 0 : u.querySelector('meta[name="csp-nonce"]'))
                                    ? void 0
                                    : f.getAttribute('content'))
                                ? b
                                : void 0;
                            })(z);
                      null != T && D.setAttribute('nonce', T),
                        (g.hydrateServerSide || g.hotModuleReplacement) && 2 & u.$flags$ && D.setAttribute('sty-id', y),
                        (!(1 & u.$flags$) || (1 & u.$flags$ && 'HEAD' !== l.nodeName)) &&
                          l.insertBefore(D, l.querySelector('link'));
                    }
                    4 & u.$flags$ && (D.innerHTML += 'slot-fb{display:contents}slot-fb[hidden]{display:none}'),
                      C && C.add(y);
                  }
                } else
                  g.constructableCSS &&
                    !l.adoptedStyleSheets.includes(w) &&
                    (l.adoptedStyleSheets = [...l.adoptedStyleSheets, w]);
              return y;
            },
            Pn = (l, u) => 'sc-' + (g.mode && u && 32 & l.$flags$ ? l.$tagName$ + '-' + u : l.$tagName$),
            Ao = (l, u, f, b, y, w) => {
              if (f !== b) {
                let C = be(l, u),
                  D = u.toLowerCase();
                if (g.vdomClass && 'class' === u) {
                  const T = l.classList,
                    P = Lo(f),
                    B = Lo(b);
                  T.remove(...P.filter((N) => N && !B.includes(N))), T.add(...B.filter((N) => N && !P.includes(N)));
                } else if (g.vdomStyle && 'style' === u) {
                  if (g.updatable)
                    for (const T in f)
                      (!b || null == b[T]) &&
                        (!g.hydrateServerSide && T.includes('-') ? l.style.removeProperty(T) : (l.style[T] = ''));
                  for (const T in b)
                    (!f || b[T] !== f[T]) &&
                      (!g.hydrateServerSide && T.includes('-') ? l.style.setProperty(T, b[T]) : (l.style[T] = b[T]));
                } else if (!g.vdomKey || 'key' !== u)
                  if (g.vdomRef && 'ref' === u) b && b(l);
                  else if (
                    !g.vdomListener ||
                    (g.lazyLoad ? C : l.__lookupSetter__(u)) ||
                    'o' !== u[0] ||
                    'n' !== u[1]
                  ) {
                    if (g.vdomPropOrAttr) {
                      const T = In(b);
                      if ((C || (T && null !== b)) && !y)
                        try {
                          if (l.tagName.includes('-')) l[u] = b;
                          else {
                            const B = null == b ? '' : b;
                            'list' === u ? (C = !1) : (null == f || l[u] != B) && (l[u] = B);
                          }
                        } catch {}
                      let P = !1;
                      g.vdomXlink && D !== (D = D.replace(/^xlink\:?/, '')) && ((u = D), (P = !0)),
                        null == b || !1 === b
                          ? (!1 !== b || '' === l.getAttribute(u)) &&
                            (g.vdomXlink && P ? l.removeAttributeNS(Ge, u) : l.removeAttribute(u))
                          : (!C || 4 & w || y) &&
                            !T &&
                            ((b = !0 === b ? '' : b),
                            g.vdomXlink && P ? l.setAttributeNS(Ge, u, b) : l.setAttribute(u, b));
                    }
                  } else if (((u = '-' === u[2] ? u.slice(3) : be(O, D) ? D.slice(2) : D[2] + u.slice(3)), f || b)) {
                    const T = u.endsWith(Oo);
                    (u = u.replace(pi, '')), f && V.rel(l, u, f, T), b && V.ael(l, u, b, T);
                  }
              }
            },
            zo = /\s/,
            Lo = (l) => (l ? l.split(zo) : []),
            Oo = 'Capture',
            pi = new RegExp(Oo + '$'),
            Mo = (l, u, f) => {
              const b = 11 === u.$elm$.nodeType && u.$elm$.host ? u.$elm$.host : u.$elm$,
                y = (l && l.$attrs$) || Vn,
                w = u.$attrs$ || Vn;
              if (g.updatable) for (const C of Xn(Object.keys(y))) C in w || Ao(b, C, y[C], void 0, f, u.$flags$);
              for (const C of Xn(Object.keys(w))) Ao(b, C, y[C], w[C], f, u.$flags$);
            };
          function Xn(l) {
            return l.includes('ref') ? [...l.filter((u) => 'ref' !== u), 'ref'] : l;
          }
          var Qt,
            mn,
            It,
            gn = !1,
            A = !1,
            J = !1,
            he = !1,
            je = (l, u, f, b) => {
              var y;
              const w = u.$children$[f];
              let D,
                T,
                P,
                C = 0;
              if (
                (g.slotRelocation &&
                  !gn &&
                  ((J = !0),
                  'slot' === w.$tag$ && (Qt && b.classList.add(Qt + '-s'), (w.$flags$ |= w.$children$ ? 2 : 1))),
                g.isDev &&
                  w.$elm$ &&
                  fe(
                    `The JSX ${null !== w.$text$ ? `"${w.$text$}" text` : `"${w.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`,
                  ),
                g.vdomText && null !== w.$text$)
              )
                D = w.$elm$ = z.createTextNode(w.$text$);
              else if (g.slotRelocation && 1 & w.$flags$)
                D = w.$elm$ = g.isDebug || g.hydrateServerSide ? Da(w) : z.createTextNode('');
              else {
                if (
                  (g.svg && !he && (he = 'svg' === w.$tag$),
                  (D = w.$elm$ =
                    g.svg
                      ? z.createElementNS(
                          he ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                          !gn && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$,
                        )
                      : z.createElement(!gn && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$)),
                  g.svg && he && 'foreignObject' === w.$tag$ && (he = !1),
                  g.vdomAttribute && Mo(null, w, he),
                  !!D.getRootNode().querySelector('body') &&
                    g.scoped &&
                    ((l) => null != l)(Qt) &&
                    D['s-si'] !== Qt &&
                    D.classList.add((D['s-si'] = Qt)),
                  g.scoped && bi(D, b),
                  w.$children$)
                )
                  for (C = 0; C < w.$children$.length; ++C) (T = je(l, w, C, D)), T && D.appendChild(T);
                g.svg && ('svg' === w.$tag$ ? (he = !1) : 'foreignObject' === D.tagName && (he = !0));
              }
              return (
                (D['s-hn'] = It),
                g.slotRelocation &&
                  3 & w.$flags$ &&
                  ((D['s-sr'] = !0),
                  (D['s-cr'] = mn),
                  (D['s-sn'] = w.$name$ || ''),
                  (D['s-rf'] = null == (y = w.$attrs$) ? void 0 : y.ref),
                  (P = l && l.$children$ && l.$children$[f]),
                  P && P.$tag$ === w.$tag$ && l.$elm$ && (g.experimentalSlotFixes ? Ye(l.$elm$) : tt(l.$elm$, !1))),
                D
              );
            },
            Ye = (l) => {
              V.$flags$ |= 1;
              const u = l.closest(It.toLowerCase());
              if (null != u) {
                const f = Array.from(u.childNodes).find((y) => y['s-cr']),
                  b = Array.from(l.childNodes);
                for (const y of f ? b.reverse() : b)
                  null != y['s-sh'] && (ht(u, y, null != f ? f : null), (y['s-sh'] = void 0), (J = !0));
              }
              V.$flags$ &= -2;
            },
            tt = (l, u) => {
              V.$flags$ |= 1;
              const f = Array.from(l.childNodes);
              if (l['s-sr'] && g.experimentalSlotFixes) {
                let b = l;
                for (; (b = b.nextSibling); ) b && b['s-sn'] === l['s-sn'] && b['s-sh'] === It && f.push(b);
              }
              for (let b = f.length - 1; b >= 0; b--) {
                const y = f[b];
                y['s-hn'] !== It &&
                  y['s-ol'] &&
                  (ht(gi(y), y, mi(y)), y['s-ol'].remove(), (y['s-ol'] = void 0), (y['s-sh'] = void 0), (J = !0)),
                  u && tt(y, u);
              }
              V.$flags$ &= -2;
            },
            Ot = (l, u, f, b, y, w) => {
              let D,
                C = (g.slotRelocation && l['s-cr'] && l['s-cr'].parentNode) || l;
              for (g.shadowDom && C.shadowRoot && C.tagName === It && (C = C.shadowRoot); y <= w; ++y)
                b[y] && ((D = je(null, f, y, l)), D && ((b[y].$elm$ = D), ht(C, D, g.slotRelocation ? mi(u) : u)));
            },
            hi = (l, u, f) => {
              for (let b = u; b <= f; ++b) {
                const y = l[b];
                if (y) {
                  const w = y.$elm$;
                  lr(y), w && (g.slotRelocation && ((A = !0), w['s-ol'] ? w['s-ol'].remove() : tt(w, !0)), w.remove());
                }
              }
            },
            Fo = (l, u, f = !1) =>
              !(
                l.$tag$ !== u.$tag$ ||
                (g.slotRelocation && 'slot' === l.$tag$
                  ? ('$nodeId$' in l && f && 8 !== l.$elm$.nodeType) || l.$name$ !== u.$name$
                  : g.vdomKey && !f && l.$key$ !== u.$key$)
              ),
            mi = (l) => (l && l['s-ol']) || l,
            gi = (l) => (l['s-ol'] ? l['s-ol'] : l).parentNode,
            bn = (l, u, f = !1) => {
              const b = (u.$elm$ = l.$elm$),
                y = l.$children$,
                w = u.$children$,
                C = u.$tag$,
                D = u.$text$;
              let T;
              g.vdomText && null !== D
                ? g.vdomText && g.slotRelocation && (T = b['s-cr'])
                  ? (T.parentNode.textContent = D)
                  : g.vdomText && l.$text$ !== D && (b.data = D)
                : (g.svg && (he = 'svg' === C || ('foreignObject' !== C && he)),
                  (g.vdomAttribute || g.reflect) &&
                    (g.slot && 'slot' === C && !gn
                      ? g.experimentalSlotFixes &&
                        l.$name$ !== u.$name$ &&
                        ((u.$elm$['s-sn'] = u.$name$ || ''), Ye(u.$elm$.parentElement))
                      : Mo(l, u, he)),
                  g.updatable && null !== y && null !== w
                    ? ((l, u, f, b, y = !1) => {
                        let Ue,
                          Re,
                          w = 0,
                          C = 0,
                          D = 0,
                          T = 0,
                          P = u.length - 1,
                          B = u[0],
                          N = u[P],
                          K = b.length - 1,
                          le = b[0],
                          De = b[K];
                        for (; w <= P && C <= K; )
                          if (null == B) B = u[++w];
                          else if (null == N) N = u[--P];
                          else if (null == le) le = b[++C];
                          else if (null == De) De = b[--K];
                          else if (Fo(B, le, y)) bn(B, le, y), (B = u[++w]), (le = b[++C]);
                          else if (Fo(N, De, y)) bn(N, De, y), (N = u[--P]), (De = b[--K]);
                          else if (Fo(B, De, y))
                            g.slotRelocation &&
                              ('slot' === B.$tag$ || 'slot' === De.$tag$) &&
                              tt(B.$elm$.parentNode, !1),
                              bn(B, De, y),
                              ht(l, B.$elm$, N.$elm$.nextSibling),
                              (B = u[++w]),
                              (De = b[--K]);
                          else if (Fo(N, le, y))
                            g.slotRelocation &&
                              ('slot' === B.$tag$ || 'slot' === De.$tag$) &&
                              tt(N.$elm$.parentNode, !1),
                              bn(N, le, y),
                              ht(l, N.$elm$, B.$elm$),
                              (N = u[--P]),
                              (le = b[++C]);
                          else {
                            if (((D = -1), g.vdomKey))
                              for (T = w; T <= P; ++T)
                                if (u[T] && null !== u[T].$key$ && u[T].$key$ === le.$key$) {
                                  D = T;
                                  break;
                                }
                            g.vdomKey && D >= 0
                              ? ((Re = u[D]),
                                Re.$tag$ !== le.$tag$
                                  ? (Ue = je(u && u[C], f, D, l))
                                  : (bn(Re, le, y), (u[D] = void 0), (Ue = Re.$elm$)),
                                (le = b[++C]))
                              : ((Ue = je(u && u[C], f, C, l)), (le = b[++C])),
                              Ue &&
                                (g.slotRelocation
                                  ? ht(gi(B.$elm$), Ue, mi(B.$elm$))
                                  : ht(B.$elm$.parentNode, Ue, B.$elm$));
                          }
                        w > P
                          ? Ot(l, null == b[K + 1] ? null : b[K + 1].$elm$, f, b, C, K)
                          : g.updatable && C > K && hi(u, w, P);
                      })(b, y, u, w, f)
                    : null !== w
                      ? (g.updatable && g.vdomText && null !== l.$text$ && (b.textContent = ''),
                        Ot(b, null, u, w, 0, w.length - 1))
                      : !f && g.updatable && null !== y && hi(y, 0, y.length - 1),
                  g.svg && he && 'svg' === C && (he = !1));
            },
            Zn = (l) => {
              const u = l.childNodes;
              for (const f of u)
                if (1 === f.nodeType) {
                  if (f['s-sr']) {
                    const b = f['s-sn'];
                    f.hidden = !1;
                    for (const y of u)
                      if (y !== f)
                        if (y['s-hn'] !== f['s-hn'] || '' !== b) {
                          if (
                            (1 === y.nodeType && (b === y.getAttribute('slot') || b === y['s-sn'])) ||
                            (3 === y.nodeType && b === y['s-sn'])
                          ) {
                            f.hidden = !0;
                            break;
                          }
                        } else if (1 === y.nodeType || (3 === y.nodeType && '' !== y.textContent.trim())) {
                          f.hidden = !0;
                          break;
                        }
                  }
                  Zn(f);
                }
            },
            Mt = [],
            ar = (l) => {
              let u, f, b;
              for (const y of l.childNodes) {
                if (y['s-sr'] && (u = y['s-cr']) && u.parentNode) {
                  f = u.parentNode.childNodes;
                  const w = y['s-sn'];
                  for (b = f.length - 1; b >= 0; b--)
                    if (
                      ((u = f[b]),
                      !(
                        u['s-cn'] ||
                        u['s-nr'] ||
                        u['s-hn'] === y['s-hn'] ||
                        (g.experimentalSlotFixes && u['s-sh'] && u['s-sh'] === y['s-hn'])
                      ))
                    )
                      if (sr(u, w)) {
                        let C = Mt.find((D) => D.$nodeToRelocate$ === u);
                        (A = !0),
                          (u['s-sn'] = u['s-sn'] || w),
                          C
                            ? ((C.$nodeToRelocate$['s-sh'] = y['s-hn']), (C.$slotRefNode$ = y))
                            : ((u['s-sh'] = y['s-hn']), Mt.push({ $slotRefNode$: y, $nodeToRelocate$: u })),
                          u['s-sr'] &&
                            Mt.map((D) => {
                              sr(D.$nodeToRelocate$, u['s-sn']) &&
                                ((C = Mt.find((T) => T.$nodeToRelocate$ === u)),
                                C && !D.$slotRefNode$ && (D.$slotRefNode$ = C.$slotRefNode$));
                            });
                      } else Mt.some((C) => C.$nodeToRelocate$ === u) || Mt.push({ $nodeToRelocate$: u });
                }
                1 === y.nodeType && ar(y);
              }
            },
            sr = (l, u) =>
              1 === l.nodeType
                ? (null === l.getAttribute('slot') && '' === u) || l.getAttribute('slot') === u
                : l['s-sn'] === u || '' === u,
            lr = (l) => {
              g.vdomRef && (l.$attrs$ && l.$attrs$.ref && l.$attrs$.ref(null), l.$children$ && l.$children$.map(lr));
            },
            ht = (l, u, f) => {
              const b = null == l ? void 0 : l.insertBefore(u, f);
              return g.scoped && bi(u, l), b;
            },
            cr = (l) => {
              const u = [];
              return l && u.push(...(l['s-scs'] || []), l['s-si'], l['s-sc'], ...cr(l.parentElement)), u;
            },
            bi = (l, u, f = !1) => {
              var b;
              if (l && u && 1 === l.nodeType) {
                const y = new Set(cr(u).filter(Boolean));
                if (y.size && (null == (b = l.classList) || b.add(...(l['s-scs'] = [...y])), l['s-ol'] || f))
                  for (const w of Array.from(l.childNodes)) bi(w, l, !0);
              }
            },
            dr = (l, u, f = !1) => {
              var b, y, w, C, D;
              const T = l.$hostElement$,
                P = l.$cmpMeta$,
                B = l.$vnode$ || Kt(null, null),
                N = Gn(u) ? u : hn(null, null, u);
              if (((It = T.tagName), g.isDev && Array.isArray(u) && u.some(Gn)))
                throw new Error(
                  `The <Host> must be the single root component.\nLooks like the render() function of "${It.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `,
                );
              if (
                (g.reflect &&
                  P.$attrsToReflect$ &&
                  ((N.$attrs$ = N.$attrs$ || {}), P.$attrsToReflect$.map(([K, le]) => (N.$attrs$[le] = T[K]))),
                f && N.$attrs$)
              )
                for (const K of Object.keys(N.$attrs$))
                  T.hasAttribute(K) && !['key', 'ref', 'style', 'class'].includes(K) && (N.$attrs$[K] = T[K]);
              if (
                ((N.$tag$ = null),
                (N.$flags$ |= 4),
                (l.$vnode$ = N),
                (N.$elm$ = B.$elm$ = (g.shadowDom && T.shadowRoot) || T),
                (g.scoped || g.shadowDom) && (Qt = T['s-sc']),
                (gn = Se && !!(1 & P.$flags$)),
                g.slotRelocation && ((mn = T['s-cr']), (A = !1)),
                bn(B, N, f),
                g.slotRelocation)
              ) {
                if (((V.$flags$ |= 1), J)) {
                  ar(N.$elm$);
                  for (const K of Mt) {
                    const le = K.$nodeToRelocate$;
                    if (!le['s-ol']) {
                      const De = g.isDebug || g.hydrateServerSide ? ur(le) : z.createTextNode('');
                      (De['s-nr'] = le), ht(le.parentNode, (le['s-ol'] = De), le);
                    }
                  }
                  for (const K of Mt) {
                    const le = K.$nodeToRelocate$,
                      De = K.$slotRefNode$;
                    if (De) {
                      const Ue = De.parentNode;
                      let Re = De.nextSibling;
                      if (!g.experimentalSlotFixes || (Re && 1 === Re.nodeType)) {
                        let Ee = null == (b = le['s-ol']) ? void 0 : b.previousSibling;
                        for (; Ee; ) {
                          let Be = null != (y = Ee['s-nr']) ? y : null;
                          if (Be && Be['s-sn'] === le['s-sn'] && Ue === Be.parentNode) {
                            for (Be = Be.nextSibling; Be === le || (null != Be && Be['s-sr']); )
                              Be = null == Be ? void 0 : Be.nextSibling;
                            if (!Be || !Be['s-nr']) {
                              Re = Be;
                              break;
                            }
                          }
                          Ee = Ee.previousSibling;
                        }
                      }
                      ((!Re && Ue !== le.parentNode) || le.nextSibling !== Re) &&
                        le !== Re &&
                        (!g.experimentalSlotFixes &&
                          !le['s-hn'] &&
                          le['s-ol'] &&
                          (le['s-hn'] = le['s-ol'].parentNode.nodeName),
                        ht(Ue, le, Re),
                        1 === le.nodeType && (le.hidden = null != (w = le['s-ih']) && w)),
                        le && 'function' == typeof De['s-rf'] && De['s-rf'](le);
                    } else 1 === le.nodeType && (f && (le['s-ih'] = null != (C = le.hidden) && C), (le.hidden = !0));
                  }
                }
                A && Zn(N.$elm$), (V.$flags$ &= -2), (Mt.length = 0);
              }
              if (g.experimentalScopedSlotChanges && 2 & P.$flags$)
                for (const K of N.$elm$.childNodes)
                  K['s-hn'] !== It &&
                    !K['s-sh'] &&
                    (f && null == K['s-ih'] && (K['s-ih'] = null != (D = K.hidden) && D), (K.hidden = !0));
              mn = void 0;
            },
            Da = (l) =>
              z.createComment(`<slot${l.$name$ ? ' name="' + l.$name$ + '"' : ''}> (host=${It.toLowerCase()})`),
            ur = (l) =>
              z.createComment(
                'org-location for ' + (l.localName ? `<${l.localName}> (host=${l['s-hn']})` : `[${l.textContent}]`),
              ),
            Ct = (l, u) => {
              g.asyncLoading &&
                u &&
                !l.$onRenderResolve$ &&
                u['s-p'] &&
                u['s-p'].push(new Promise((f) => (l.$onRenderResolve$ = f)));
            },
            Dt = (l, u) => {
              if ((g.taskQueue && g.updatable && (l.$flags$ |= 16), g.asyncLoading && 4 & l.$flags$))
                return void (l.$flags$ |= 512);
              Ct(l, l.$ancestorComponent$);
              const f = () => pr(l, u);
              return g.taskQueue ? Nn(f) : f();
            },
            pr = (l, u) => {
              const f = l.$hostElement$,
                b = ut('scheduleUpdate', l.$cmpMeta$.$tagName$),
                y = g.lazyLoad ? l.$lazyInstance$ : f;
              if (!y)
                throw new Error(
                  `Can't render component <${f.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
                );
              let w;
              return (
                u
                  ? (g.lazyLoad &&
                      g.hostListener &&
                      ((l.$flags$ |= 256),
                      l.$queuedListeners$ &&
                        (l.$queuedListeners$.map(([C, D]) => $t(y, C, D)), (l.$queuedListeners$ = void 0))),
                    Jt(f, 'componentWillLoad'),
                    g.cmpWillLoad && (w = $t(y, 'componentWillLoad')))
                  : (Jt(f, 'componentWillUpdate'), g.cmpWillUpdate && (w = $t(y, 'componentWillUpdate'))),
                Jt(f, 'componentWillRender'),
                g.cmpWillRender && (w = Qn(w, () => $t(y, 'componentWillRender'))),
                b(),
                Qn(w, () => Pa(l, y, u))
              );
            },
            Qn = (l, u) =>
              hr(l)
                ? l.then(u).catch((f) => {
                    console.error(f), u();
                  })
                : u(),
            hr = (l) => l instanceof Promise || (l && l.then && 'function' == typeof l.then),
            Pa = (function () {
              var l = (0, ie.A)(function* (u, f, b) {
                var y;
                const w = u.$hostElement$,
                  C = ut('update', u.$cmpMeta$.$tagName$),
                  D = w['s-rc'];
                g.style &&
                  b &&
                  ((l) => {
                    const u = l.$cmpMeta$,
                      f = l.$hostElement$,
                      b = u.$flags$,
                      y = ut('attachStyles', u.$tagName$),
                      w = it(g.shadowDom && Se && f.shadowRoot ? f.shadowRoot : f.getRootNode(), u, l.$modeName$);
                    (g.shadowDom || g.scoped) &&
                      g.cssAnnotations &&
                      10 & b &&
                      2 & b &&
                      ((f['s-sc'] = w), f.classList.add(w + '-h'), g.scoped && 2 & b && f.classList.add(w + '-s')),
                      y();
                  })(u);
                const T = ut('render', u.$cmpMeta$.$tagName$);
                if (
                  (g.isDev && (u.$flags$ |= 1024),
                  g.hydrateServerSide ? yield c(u, f, w, b) : c(u, f, w, b),
                  g.isDev &&
                    ((u.$renderCount$ = void 0 === u.$renderCount$ ? 1 : u.$renderCount$ + 1), (u.$flags$ &= -1025)),
                  g.hydrateServerSide)
                )
                  try {
                    jo(w),
                      b && (1 & u.$cmpMeta$.$flags$ ? (w['s-en'] = '') : 2 & u.$cmpMeta$.$flags$ && (w['s-en'] = 'c'));
                  } catch (P) {
                    se(P, w);
                  }
                if ((g.asyncLoading && D && (D.map((P) => P()), (w['s-rc'] = void 0)), T(), C(), g.asyncLoading)) {
                  const P = null != (y = w['s-p']) ? y : [],
                    B = () => Ae(u);
                  0 === P.length ? B() : (Promise.all(P).then(B), (u.$flags$ |= 4), (P.length = 0));
                } else Ae(u);
              });
              return function (f, b, y) {
                return l.apply(this, arguments);
              };
            })(),
            c = (l, u, f, b) => {
              const y = !!g.allRenderFn,
                w = !!g.lazyLoad,
                C = !!g.taskQueue,
                D = !!g.updatable;
              try {
                if (
                  ((u = (y || u.render) && u.render()),
                  D && C && (l.$flags$ &= -17),
                  (D || w) && (l.$flags$ |= 2),
                  g.hasRenderFn || g.reflect)
                )
                  if (g.vdomRender || g.reflect) {
                    if (g.hydrateServerSide) return Promise.resolve(u).then((T) => dr(l, T, b));
                    dr(l, u, b);
                  } else 1 & l.$cmpMeta$.$flags$ ? (f.shadowRoot.textContent = u) : (f.textContent = u);
              } catch (T) {
                se(T, l.$hostElement$);
              }
              return null;
            },
            Ae = (l) => {
              const u = l.$cmpMeta$.$tagName$,
                f = l.$hostElement$,
                b = ut('postUpdate', u),
                y = g.lazyLoad ? l.$lazyInstance$ : f,
                w = l.$ancestorComponent$;
              g.cmpDidRender &&
                (g.isDev && (l.$flags$ |= 1024), $t(y, 'componentDidRender'), g.isDev && (l.$flags$ &= -1025)),
                Jt(f, 'componentDidRender'),
                64 & l.$flags$
                  ? (g.cmpDidUpdate &&
                      (g.isDev && (l.$flags$ |= 1024), $t(y, 'componentDidUpdate'), g.isDev && (l.$flags$ &= -1025)),
                    Jt(f, 'componentDidUpdate'),
                    b())
                  : ((l.$flags$ |= 64),
                    g.asyncLoading && g.cssAnnotations && Ft(f),
                    g.cmpDidLoad &&
                      (g.isDev && (l.$flags$ |= 2048), $t(y, 'componentDidLoad'), g.isDev && (l.$flags$ &= -2049)),
                    Jt(f, 'componentDidLoad'),
                    b(),
                    g.asyncLoading && (l.$onReadyResolve$(f), w || Jn(u))),
                g.method && g.lazyLoad && l.$onInstanceResolve$(f),
                g.asyncLoading &&
                  (l.$onRenderResolve$ && (l.$onRenderResolve$(), (l.$onRenderResolve$ = void 0)),
                  512 & l.$flags$ && pn(() => Dt(l, !1)),
                  (l.$flags$ &= -517));
            },
            vi = (l) => {
              if (g.updatable && (U.isBrowser || U.isTesting)) {
                const u = Q(l),
                  f = u.$hostElement$.isConnected;
                return f && 2 == (18 & u.$flags$) && Dt(u, !1), f;
              }
              return !1;
            },
            Jn = (l) => {
              g.cssAnnotations && Ft(z.documentElement),
                g.asyncQueue && (V.$flags$ |= 2),
                pn(() => Zt(O, 'appload', { detail: { namespace: 'app' } })),
                g.profile &&
                  performance.measure &&
                  performance.measure(`[Stencil] app initial load (by ${l})`, 'st:app:start');
            },
            $t = (l, u, f) => {
              if (l && l[u])
                try {
                  return l[u](f);
                } catch (b) {
                  se(b);
                }
            },
            Jt = (l, u) => {
              g.lifecycleDOMEvents &&
                Zt(l, 'stencil_' + u, { bubbles: !0, composed: !0, detail: { namespace: 'app' } });
            },
            Ft = (l) => {
              var u, f;
              return g.hydratedClass
                ? l.classList.add(null != (u = g.hydratedSelectorName) ? u : 'hydrated')
                : g.hydratedAttribute
                  ? l.setAttribute(null != (f = g.hydratedSelectorName) ? f : 'hydrated', '')
                  : void 0;
            },
            jo = (l) => {
              const u = l.children;
              if (null != u)
                for (let f = 0, b = u.length; f < b; f++) {
                  const y = u[f];
                  'function' == typeof y.connectedCallback && y.connectedCallback(), jo(y);
                }
            },
            xi = (l, u, f) => {
              var b, y;
              const w = l.prototype;
              if (
                (g.formAssociated &&
                  64 & u.$flags$ &&
                  1 & f &&
                  S.forEach((C) =>
                    Object.defineProperty(w, C, {
                      value(...D) {
                        const T = Q(this),
                          B = g.lazyLoad ? T.$lazyInstance$ : g.lazyLoad ? T.$hostElement$ : this;
                        if (B) {
                          const N = B[C];
                          'function' == typeof N && N.call(B, ...D);
                        } else
                          T.$onReadyPromise$.then((N) => {
                            const K = N[C];
                            'function' == typeof K && K.call(N, ...D);
                          });
                      },
                    }),
                  ),
                (g.member && u.$members$) || (g.watchCallback && (u.$watchers$ || l.watchers)))
              ) {
                g.watchCallback && l.watchers && !u.$watchers$ && (u.$watchers$ = l.watchers);
                const C = Object.entries(null != (b = u.$members$) ? b : {});
                if (
                  (C.map(([D, [T]]) => {
                    (g.prop || g.state) && (31 & T || ((!g.lazyLoad || 2 & f) && 32 & T))
                      ? Object.defineProperty(w, D, {
                          get() {
                            return ((l, u) => Q(this).$instanceValues$.get(u))(0, D);
                          },
                          set(P) {
                            if (g.isDev) {
                              const B = Q(this);
                              !(1 & f) &&
                                0 === (B && 8 & B.$flags$) &&
                                31 & T &&
                                !(1024 & T) &&
                                Ie(
                                  `@Prop() "${D}" on <${u.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`,
                                );
                            }
                            ((l, u, f, b) => {
                              const y = Q(l);
                              if (g.lazyLoad && !y)
                                throw new Error(
                                  `Couldn't find host element for "${b.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`,
                                );
                              const w = g.lazyLoad ? y.$hostElement$ : l,
                                C = y.$instanceValues$.get(u),
                                D = y.$flags$,
                                T = g.lazyLoad ? y.$lazyInstance$ : w;
                              f = ((l, u) =>
                                null == l || In(l)
                                  ? l
                                  : g.propBoolean && 4 & u
                                    ? 'false' !== l && ('' === l || !!l)
                                    : g.propNumber && 2 & u
                                      ? parseFloat(l)
                                      : g.propString && 1 & u
                                        ? String(l)
                                        : l)(f, b.$members$[u][0]);
                              const P = Number.isNaN(C) && Number.isNaN(f);
                              if (
                                (!g.lazyLoad || !(8 & D) || void 0 === C) &&
                                f !== C &&
                                !P &&
                                (y.$instanceValues$.set(u, f),
                                g.isDev &&
                                  (1024 & y.$flags$
                                    ? Ie(
                                        `The state/prop "${u}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        f,
                                        '\nOld value',
                                        C,
                                      )
                                    : 2048 & y.$flags$ &&
                                      Ie(
                                        `The state/prop "${u}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        f,
                                        '\nOld value',
                                        C,
                                      )),
                                !g.lazyLoad || T)
                              ) {
                                if (g.watchCallback && b.$watchers$ && 128 & D) {
                                  const N = b.$watchers$[u];
                                  N &&
                                    N.map((K) => {
                                      try {
                                        T[K](f, C, u);
                                      } catch (le) {
                                        se(le, w);
                                      }
                                    });
                                }
                                if (g.updatable && 2 == (18 & D)) {
                                  if (
                                    g.cmpShouldUpdate &&
                                    T.componentShouldUpdate &&
                                    !1 === T.componentShouldUpdate(f, C, u)
                                  )
                                    return;
                                  Dt(y, !1);
                                }
                              }
                            })(this, D, P, u);
                          },
                          configurable: !0,
                          enumerable: !0,
                        })
                      : g.lazyLoad &&
                        g.method &&
                        1 & f &&
                        64 & T &&
                        Object.defineProperty(w, D, {
                          value(...P) {
                            var B;
                            const N = Q(this);
                            return null == (B = null == N ? void 0 : N.$onInstancePromise$)
                              ? void 0
                              : B.then(() => {
                                  var K;
                                  return null == (K = N.$lazyInstance$) ? void 0 : K[D](...P);
                                });
                          },
                        });
                  }),
                  g.observeAttribute && (!g.lazyLoad || 1 & f))
                ) {
                  const D = new Map();
                  (w.attributeChangedCallback = function (T, P, B) {
                    V.jmp(() => {
                      var N;
                      const K = D.get(T);
                      if (this.hasOwnProperty(K)) (B = this[K]), delete this[K];
                      else {
                        if (w.hasOwnProperty(K) && 'number' == typeof this[K] && this[K] == B) return;
                        if (null == K) {
                          const le = Q(this),
                            De = null == le ? void 0 : le.$flags$;
                          if (De && !(8 & De) && 128 & De && B !== P) {
                            const Re = g.lazyLoad ? le.$lazyInstance$ : g.lazyLoad ? le.$hostElement$ : this,
                              Ee = null == (N = u.$watchers$) ? void 0 : N[T];
                            null == Ee ||
                              Ee.forEach((Be) => {
                                null != Re[Be] && Re[Be].call(Re, B, P, T);
                              });
                          }
                          return;
                        }
                      }
                      this[K] = (null !== B || 'boolean' != typeof this[K]) && B;
                    });
                  }),
                    (l.observedAttributes = Array.from(
                      new Set([
                        ...Object.keys(null != (y = u.$watchers$) ? y : {}),
                        ...C.filter(([T, P]) => 15 & P[0]).map(([T, P]) => {
                          var B;
                          const N = P[1] || T;
                          return (
                            D.set(N, T),
                            g.reflect && 512 & P[0] && (null == (B = u.$attrsToReflect$) || B.push([T, N])),
                            N
                          );
                        }),
                      ]),
                    ));
                }
              }
              return l;
            },
            yi = (function () {
              var l = (0, ie.A)(function* (u, f, b, y) {
                let w;
                if (!(32 & f.$flags$)) {
                  if (((f.$flags$ |= 32), (g.lazyLoad || g.hydrateClientSide) && b.$lazyBundleId$)) {
                    const P = ((l, u, f) => {
                      const b = l.$tagName$.replace(/-/g, '_'),
                        y = l.$lazyBundleId$;
                      if (g.isDev && 'string' != typeof y)
                        return void fe(
                          `Trying to lazily load component <${l.$tagName$}> with style mode "${u.$modeName$}", but it does not exist.`,
                        );
                      if (!y) return;
                      const w = !g.hotModuleReplacement && Oe.get(y);
                      return w
                        ? w[b]
                        : E(864)(`./${y}.entry.js${g.hotModuleReplacement && f ? '?s-hmr=' + f : ''}`).then(
                            (C) => (g.hotModuleReplacement || Oe.set(y, C), C[b]),
                            se,
                          );
                    })(b, f, y);
                    if (P && 'then' in P) {
                      const N = ((l, u) =>
                        g.profile && performance.mark
                          ? (0 === performance.getEntriesByName(l, 'mark').length && performance.mark(l),
                            () => {
                              0 === performance.getEntriesByName(u, 'measure').length && performance.measure(u, l);
                            })
                          : () => {})(
                        `st:load:${b.$tagName$}:${f.$modeName$}`,
                        `[Stencil] Load module for <${b.$tagName$}>`,
                      );
                      (w = yield P), N();
                    } else w = P;
                    if (!w) throw new Error(`Constructor for "${b.$tagName$}#${f.$modeName$}" was not found`);
                    g.member &&
                      !w.isProxied &&
                      (g.watchCallback && (b.$watchers$ = w.watchers), xi(w, b, 2), (w.isProxied = !0));
                    const B = ut('createInstance', b.$tagName$);
                    g.member && (f.$flags$ |= 8);
                    try {
                      new w(f);
                    } catch (N) {
                      se(N);
                    }
                    g.member && (f.$flags$ &= -9), g.watchCallback && (f.$flags$ |= 128), B(), zn(f.$lazyInstance$);
                  } else (w = u.constructor), customElements.whenDefined(u.localName).then(() => (f.$flags$ |= 128));
                  if (g.style && w && w.style) {
                    let P;
                    'string' == typeof w.style
                      ? (P = w.style)
                      : g.mode &&
                        'string' != typeof w.style &&
                        ((f.$modeName$ = ((l) => ee.map((u) => u(l)).find((u) => !!u))(u)),
                        f.$modeName$ && (P = w.style[f.$modeName$]),
                        g.hydrateServerSide && f.$modeName$ && u.setAttribute('s-mode', f.$modeName$));
                    const B = Pn(b, f.$modeName$);
                    if (!H.has(B)) {
                      const N = ut('registerStyles', b.$tagName$);
                      !g.hydrateServerSide &&
                        g.shadowDom &&
                        g.shadowDomShim &&
                        8 & b.$flags$ &&
                        (P = yield E.e(82)
                          .then(E.bind(E, 82))
                          .then((K) => K.scopeCss(P, B))),
                        ((l, u, f) => {
                          let b = H.get(l);
                          dt && f
                            ? ((b = b || new CSSStyleSheet()), 'string' == typeof b ? (b = u) : b.replaceSync(u))
                            : (b = u),
                            H.set(l, b);
                        })(B, P, !!(1 & b.$flags$)),
                        N();
                    }
                  }
                }
                const C = f.$ancestorComponent$,
                  D = () => Dt(f, !0);
                g.asyncLoading && C && C['s-rc'] ? C['s-rc'].push(D) : D();
              });
              return function (f, b, y, w) {
                return l.apply(this, arguments);
              };
            })(),
            zn = (l) => {
              g.lazyLoad && g.connectedCallback && $t(l, 'connectedCallback');
            },
            wi = (l) => {
              const u = (l['s-cr'] = z.createComment(g.isDebug ? `content-ref (host=${l.localName})` : ''));
              (u['s-cn'] = !0), ht(l, u, l.firstChild);
            },
            to = (l) => {
              g.lazyLoad && g.disconnectedCallback && $t(l, 'disconnectedCallback'),
                g.cmpDidUnload && $t(l, 'componentDidUnload');
            },
            No = (function () {
              var l = (0, ie.A)(function* (u) {
                if (!(1 & V.$flags$)) {
                  const f = Q(u);
                  g.hostListener && f.$rmListeners$ && (f.$rmListeners$.map((b) => b()), (f.$rmListeners$ = void 0)),
                    g.lazyLoad
                      ? null != f && f.$lazyInstance$
                        ? to(f.$lazyInstance$)
                        : null != f && f.$onReadyPromise$ && f.$onReadyPromise$.then(() => to(f.$lazyInstance$))
                      : to(u);
                }
              });
              return function (f) {
                return l.apply(this, arguments);
              };
            })(),
            vn = (l) => {
              const u = l.cloneNode;
              l.cloneNode = function (f) {
                const b = this,
                  y = !!g.shadowDom && b.shadowRoot && Se,
                  w = u.call(b, !!y && f);
                if (g.slot && !y && f) {
                  let D,
                    T,
                    C = 0;
                  const P = [
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
                    (D = b.childNodes[C]['s-nr']),
                      (T = P.every((B) => !b.childNodes[C][B])),
                      D &&
                        (g.appendChildSlotFix && w.__appendChild
                          ? w.__appendChild(D.cloneNode(!0))
                          : w.appendChild(D.cloneNode(!0))),
                      T && w.appendChild(b.childNodes[C].cloneNode(!0));
                }
                return w;
              };
            },
            Ve = (l) => {
              (l.__appendChild = l.appendChild),
                (l.appendChild = function (u) {
                  const f = (u['s-sn'] = io(u)),
                    b = tn(this.childNodes, f, this.tagName);
                  if (b) {
                    const y = ro(b, f),
                      w = y[y.length - 1],
                      C = ht(w.parentNode, u, w.nextSibling);
                    return Zn(this), C;
                  }
                  return this.__appendChild(u);
                });
            },
            Ho = (l) => {
              (l.__removeChild = l.removeChild),
                (l.removeChild = function (u) {
                  if (u && typeof u['s-sn'] < 'u') {
                    const f = tn(this.childNodes, u['s-sn'], this.tagName);
                    if (f) {
                      const y = ro(f, u['s-sn']).find((w) => w === u);
                      if (y) return y.remove(), void Zn(this);
                    }
                  }
                  return this.__removeChild(u);
                });
            },
            X = (l) => {
              const u = l.prepend;
              l.prepend = function (...f) {
                f.forEach((b) => {
                  'string' == typeof b && (b = this.ownerDocument.createTextNode(b));
                  const y = (b['s-sn'] = io(b)),
                    w = tn(this.childNodes, y, this.tagName);
                  if (w) {
                    const C = document.createTextNode('');
                    (C['s-nr'] = b), w['s-cr'].parentNode.__appendChild(C), (b['s-ol'] = C);
                    const T = ro(w, y)[0];
                    return ht(T.parentNode, b, T.nextSibling);
                  }
                  return 1 === b.nodeType && b.getAttribute('slot') && (b.hidden = !0), u.call(this, b);
                });
              };
            },
            ki = (l) => {
              l.append = function (...u) {
                u.forEach((f) => {
                  'string' == typeof f && (f = this.ownerDocument.createTextNode(f)), this.appendChild(f);
                });
              };
            },
            Aa = (l) => {
              const u = l.insertAdjacentHTML;
              l.insertAdjacentHTML = function (f, b) {
                if ('afterbegin' !== f && 'beforeend' !== f) return u.call(this, f, b);
                const y = this.ownerDocument.createElement('_');
                let w;
                if (((y.innerHTML = b), 'afterbegin' === f)) for (; (w = y.firstChild); ) this.prepend(w);
                else if ('beforeend' === f) for (; (w = y.firstChild); ) this.append(w);
              };
            },
            za = (l) => {
              l.insertAdjacentText = function (u, f) {
                this.insertAdjacentHTML(u, f);
              };
            },
            fr = (l) => {
              const u = l.insertAdjacentElement;
              l.insertAdjacentElement = function (f, b) {
                return 'afterbegin' !== f && 'beforeend' !== f
                  ? u.call(this, f, b)
                  : 'afterbegin' === f
                    ? (this.prepend(b), b)
                    : ('beforeend' === f && this.append(b), b);
              };
            },
            _i = (l) => {
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
                            en(this.childNodes)
                              .map((y) => {
                                var w, C;
                                const D = [];
                                let T = y.nextSibling;
                                for (; T && T['s-sn'] === y['s-sn']; )
                                  (3 === T.nodeType || 1 === T.nodeType) &&
                                    D.push(null != (C = null == (w = T.textContent) ? void 0 : w.trim()) ? C : ''),
                                    (T = T.nextSibling);
                                return D.filter((P) => '' !== P).join(' ');
                              })
                              .filter((y) => '' !== y)
                              .join(' ') +
                            ' '
                          );
                        },
                        set(f) {
                          en(this.childNodes).forEach((y) => {
                            let w = y.nextSibling;
                            for (; w && w['s-sn'] === y['s-sn']; ) {
                              const C = w;
                              (w = w.nextSibling), C.remove();
                            }
                            if ('' === y['s-sn']) {
                              const C = this.ownerDocument.createTextNode(f);
                              (C['s-sn'] = ''), ht(y.parentElement, C, y.nextSibling);
                            } else y.remove();
                          });
                        },
                      }
                    : {
                        get() {
                          var f;
                          const b = tn(this.childNodes, '', this.tagName);
                          return 3 === (null == (f = null == b ? void 0 : b.nextSibling) ? void 0 : f.nodeType)
                            ? b.nextSibling.textContent
                            : b
                              ? b.textContent
                              : this.__textContent;
                        },
                        set(f) {
                          var b;
                          const y = tn(this.childNodes, '', this.tagName);
                          if (3 === (null == (b = null == y ? void 0 : y.nextSibling) ? void 0 : b.nodeType))
                            y.nextSibling.textContent = f;
                          else if (y) y.textContent = f;
                          else {
                            this.__textContent = f;
                            const w = this['s-cr'];
                            w && ht(this, w, this.firstChild);
                          }
                        },
                      },
                );
            },
            oo = (l, u) => {
              class f extends Array {
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
                        const w = new f();
                        for (let C = 0; C < y.length; C++) {
                          const D = y[C]['s-nr'];
                          D && w.push(D);
                        }
                        return w;
                      }
                      return f.from(y);
                    },
                  });
              }
            },
            en = (l) => {
              const u = [];
              for (const f of Array.from(l)) f['s-sr'] && u.push(f), u.push(...en(f.childNodes));
              return u;
            },
            io = (l) => l['s-sn'] || (1 === l.nodeType && l.getAttribute('slot')) || '',
            tn = (l, u, f) => {
              let y,
                b = 0;
              for (; b < l.length; b++)
                if (
                  ((y = l[b]), (y['s-sr'] && y['s-sn'] === u && y['s-hn'] === f) || ((y = tn(y.childNodes, u, f)), y))
                )
                  return y;
              return null;
            },
            ro = (l, u) => {
              const f = [l];
              for (; (l = l.nextSibling) && l['s-sn'] === u; ) f.push(l);
              return f;
            },
            Ci = (l, u) => {
              const f = { $flags$: u[0], $tagName$: u[1] };
              g.member && (f.$members$ = u[2]),
                g.hostListener && (f.$listeners$ = u[3]),
                g.watchCallback && (f.$watchers$ = l.$watchers$),
                g.reflect && (f.$attrsToReflect$ = []),
                g.shadowDom && !Se && 1 & f.$flags$ && (f.$flags$ |= 8),
                g.experimentalSlotFixes
                  ? g.scoped &&
                    2 & f.$flags$ &&
                    ((l, u) => {
                      vn(l), Ve(l), ki(l), X(l), fr(l), Aa(l), za(l), _i(l), oo(l, u), Ho(l);
                    })(l.prototype, f)
                  : (g.slotChildNodesFix && oo(l.prototype, f),
                    g.cloneNodeFix && vn(l.prototype),
                    g.appendChildSlotFix && Ve(l.prototype),
                    g.scopedSlotTextContentFix && 2 & f.$flags$ && _i(l.prototype));
              const b = l.prototype.connectedCallback,
                y = l.prototype.disconnectedCallback;
              return (
                Object.assign(l.prototype, {
                  __registerHost() {
                    ((l, u) => {
                      const f = { $flags$: 0, $hostElement$: l, $cmpMeta$: u, $instanceValues$: new Map() };
                      g.isDev && (f.$renderCount$ = 0),
                        g.method &&
                          g.lazyLoad &&
                          (f.$onInstancePromise$ = new Promise((b) => (f.$onInstanceResolve$ = b))),
                        g.asyncLoading &&
                          ((f.$onReadyPromise$ = new Promise((b) => (f.$onReadyResolve$ = b))),
                          (l['s-p'] = []),
                          (l['s-rc'] = [])),
                        q.set(l, f);
                    })(this, f);
                  },
                  connectedCallback() {
                    const w = Q(this);
                    Wo(this, w, f.$listeners$, !1),
                      ((l) => {
                        if (!(1 & V.$flags$)) {
                          const u = Q(l),
                            f = u.$cmpMeta$,
                            b = ut('connectedCallback', f.$tagName$);
                          if ((g.hostListenerTargetParent && Wo(l, u, f.$listeners$, !0), 1 & u.$flags$))
                            Wo(l, u, f.$listeners$, !1),
                              null != u && u.$lazyInstance$
                                ? zn(u.$lazyInstance$)
                                : null != u &&
                                  u.$onReadyPromise$ &&
                                  u.$onReadyPromise$.then(() => zn(u.$lazyInstance$));
                          else {
                            let y;
                            if (((u.$flags$ |= 1), g.hydrateClientSide && ((y = l.getAttribute(ke)), y))) {
                              if (g.shadowDom && Se && 1 & f.$flags$) {
                                const w = g.mode ? it(l.shadowRoot, f, l.getAttribute('s-mode')) : it(l.shadowRoot, f);
                                l.classList.remove(w + '-h', w + '-s');
                              }
                              ((l, u, f, b) => {
                                const y = ut('hydrateClient', u),
                                  w = l.shadowRoot,
                                  C = [],
                                  T = g.shadowDom && w ? [] : null,
                                  P = (b.$vnode$ = Kt(u, null));
                                V.$orgLocNodes$ || Xt(z.body, (V.$orgLocNodes$ = new Map())),
                                  (l[ke] = f),
                                  l.removeAttribute(ke),
                                  Yn(P, C, [], T, l, l, f),
                                  C.map((B) => {
                                    const N = B.$hostId$ + '.' + B.$nodeId$,
                                      K = V.$orgLocNodes$.get(N),
                                      le = B.$elm$;
                                    K && Se && '' === K['s-en'] && K.parentNode.insertBefore(le, K.nextSibling),
                                      w || ((le['s-hn'] = u), K && ((le['s-ol'] = K), (le['s-ol']['s-nr'] = le))),
                                      V.$orgLocNodes$.delete(N);
                                  }),
                                  g.shadowDom &&
                                    w &&
                                    T.map((B) => {
                                      B && w.appendChild(B);
                                    }),
                                  y();
                              })(l, f.$tagName$, y, u);
                            }
                            if (
                              (g.slotRelocation &&
                                !y &&
                                (g.hydrateServerSide || ((g.slot || g.shadowDom) && 12 & f.$flags$)) &&
                                wi(l),
                              g.asyncLoading)
                            ) {
                              let w = l;
                              for (; (w = w.parentNode || w.host); )
                                if (
                                  (g.hydrateClientSide && 1 === w.nodeType && w.hasAttribute('s-id') && w['s-p']) ||
                                  w['s-p']
                                ) {
                                  Ct(u, (u.$ancestorComponent$ = w));
                                  break;
                                }
                            }
                            g.prop &&
                              !g.hydrateServerSide &&
                              f.$members$ &&
                              Object.entries(f.$members$).map(([w, [C]]) => {
                                if (31 & C && l.hasOwnProperty(w)) {
                                  const D = l[w];
                                  delete l[w], (l[w] = D);
                                }
                              }),
                              g.initializeNextTick ? pn(() => yi(l, u, f)) : yi(l, u, f);
                          }
                          b();
                        }
                      })(this),
                      g.connectedCallback && b && b.call(this);
                  },
                  disconnectedCallback() {
                    No(this), g.disconnectedCallback && y && y.call(this);
                  },
                  __attachShadow() {
                    if (Se)
                      if (this.shadowRoot) {
                        if ('open' !== this.shadowRoot.mode)
                          throw new Error(
                            `Unable to re-use existing shadow root for ${f.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`,
                          );
                      } else
                        this.attachShadow(
                          g.shadowDelegatesFocus
                            ? { mode: 'open', delegatesFocus: !!(16 & f.$flags$) }
                            : { mode: 'open' },
                        );
                    else this.shadowRoot = this;
                  },
                }),
                (l.is = f.$tagName$),
                xi(l, f, 3)
              );
            },
            Wo = (l, u, f, b) => {
              g.hostListener &&
                f &&
                (g.hostListenerTargetParent && (f = f.filter(b ? ([y]) => 32 & y : ([y]) => !(32 & y))),
                f.map(([y, w, C]) => {
                  const D = g.hostListenerTarget ? Oa(l, y) : l,
                    T = $i(u, C),
                    P = Si(y);
                  V.ael(D, w, T, P), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => V.rel(D, w, T, P));
                }));
            },
            $i = (l, u) => (f) => {
              var b;
              try {
                g.lazyLoad
                  ? 256 & l.$flags$
                    ? null == (b = l.$lazyInstance$) || b[u](f)
                    : (l.$queuedListeners$ = l.$queuedListeners$ || []).push([u, f])
                  : l.$hostElement$[u](f);
              } catch (y) {
                se(y);
              }
            },
            Oa = (l, u) =>
              g.hostListenerTargetDocument && 4 & u
                ? z
                : g.hostListenerTargetWindow && 8 & u
                  ? O
                  : g.hostListenerTargetBody && 16 & u
                    ? z.body
                    : g.hostListenerTargetParent && 32 & u && l.parentElement
                      ? l.parentElement
                      : l,
            Si = (l) => (et ? { passive: !!(1 & l), capture: !!(2 & l) } : !!(2 & l));
        },
        994: (Y, oe, E) => {
          'use strict';
          function ie(xe, ae, Ce, Te, U, q, Q) {
            try {
              var _e = xe[q](Q),
                L = _e.value;
            } catch (be) {
              return void Ce(be);
            }
            _e.done ? ae(L) : Promise.resolve(L).then(Te, U);
          }
          function g(xe) {
            return function () {
              var ae = this,
                Ce = arguments;
              return new Promise(function (Te, U) {
                var q = xe.apply(ae, Ce);
                function Q(L) {
                  ie(q, Te, U, Q, _e, 'next', L);
                }
                function _e(L) {
                  ie(q, Te, U, Q, _e, 'throw', L);
                }
                Q(void 0);
              });
            };
          }
          E.d(oe, { A: () => g });
        },
      },
      Ta = {};
    function re(Y) {
      var oe = Ta[Y];
      if (void 0 !== oe) return oe.exports;
      var E = (Ta[Y] = { exports: {} });
      return Ea[Y](E, E.exports, re), E.exports;
    }
    (re.m = Ea),
      (re.d = (Y, oe) => {
        for (var E in oe) re.o(oe, E) && !re.o(Y, E) && Object.defineProperty(Y, E, { enumerable: !0, get: oe[E] });
      }),
      (re.f = {}),
      (re.e = (Y) => Promise.all(Object.keys(re.f).reduce((oe, E) => (re.f[E](Y, oe), oe), []))),
      (re.u = (Y) =>
        Y +
        '.' +
        { 82: 'c492c7a894eaaad9', 262: '8e4268bc0a9dc546', 506: '0230b7e21e4edf05', 592: 'fedc63c3baac303c' }[Y] +
        '.js'),
      (re.miniCssF = (Y) => {}),
      (re.o = (Y, oe) => Object.prototype.hasOwnProperty.call(Y, oe)),
      (Y = {}),
      (oe = 'plugin:'),
      (re.l = (E, ie, g, xe) => {
        if (Y[E]) Y[E].push(ie);
        else {
          var ae, Ce;
          if (void 0 !== g)
            for (var Te = document.getElementsByTagName('script'), U = 0; U < Te.length; U++) {
              var q = Te[U];
              if (q.getAttribute('src') == E || q.getAttribute('data-webpack') == oe + g) {
                ae = q;
                break;
              }
            }
          ae ||
            ((Ce = !0),
            ((ae = document.createElement('script')).type = 'module'),
            (ae.charset = 'utf-8'),
            (ae.timeout = 120),
            re.nc && ae.setAttribute('nonce', re.nc),
            ae.setAttribute('data-webpack', oe + g),
            (ae.src = re.tu(E))),
            (Y[E] = [ie]);
          var Q = (L, be) => {
              (ae.onerror = ae.onload = null), clearTimeout(_e);
              var h = Y[E];
              if ((delete Y[E], ae.parentNode && ae.parentNode.removeChild(ae), h && h.forEach((se) => se(be)), L))
                return L(be);
            },
            _e = setTimeout(Q.bind(null, void 0, { type: 'timeout', target: ae }), 12e4);
          (ae.onerror = Q.bind(null, ae.onerror)),
            (ae.onload = Q.bind(null, ae.onload)),
            Ce && document.head.appendChild(ae);
        }
      }),
      (re.r = (Y) => {
        typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(Y, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(Y, '__esModule', { value: !0 });
      }),
      (() => {
        var Y;
        re.tt = () => (
          void 0 === Y &&
            ((Y = { createScriptURL: (oe) => oe }),
            typeof trustedTypes < 'u' &&
              trustedTypes.createPolicy &&
              (Y = trustedTypes.createPolicy('angular#bundler', Y))),
          Y
        );
      })(),
      (re.tu = (Y) => re.tt().createScriptURL(Y)),
      (re.p = ''),
      (() => {
        var Y = { 792: 0 };
        re.f.j = (ie, g) => {
          var xe = re.o(Y, ie) ? Y[ie] : void 0;
          if (0 !== xe)
            if (xe) g.push(xe[2]);
            else {
              var ae = new Promise((q, Q) => (xe = Y[ie] = [q, Q]));
              g.push((xe[2] = ae));
              var Ce = re.p + re.u(ie),
                Te = new Error();
              re.l(
                Ce,
                (q) => {
                  if (re.o(Y, ie) && (0 !== (xe = Y[ie]) && (Y[ie] = void 0), xe)) {
                    var Q = q && ('load' === q.type ? 'missing' : q.type),
                      _e = q && q.target && q.target.src;
                    (Te.message = 'Loading chunk ' + ie + ' failed.\n(' + Q + ': ' + _e + ')'),
                      (Te.name = 'ChunkLoadError'),
                      (Te.type = Q),
                      (Te.request = _e),
                      xe[1](Te);
                  }
                },
                'chunk-' + ie,
                ie,
              );
            }
        };
        var oe = (ie, g) => {
            var Te,
              U,
              [xe, ae, Ce] = g,
              q = 0;
            if (xe.some((_e) => 0 !== Y[_e])) {
              for (Te in ae) re.o(ae, Te) && (re.m[Te] = ae[Te]);
              Ce && Ce(re);
            }
            for (ie && ie(g); q < xe.length; q++) re.o(Y, (U = xe[q])) && Y[U] && Y[U][0](), (Y[U] = 0);
          },
          E = ((typeof self < 'u' ? self : this).webpackChunkplugin =
            (typeof self < 'u' ? self : this).webpackChunkplugin || []);
        E.forEach(oe.bind(null, 0)), (E.push = oe.bind(null, E.push.bind(E)));
      })();
    var rr = {};
    return (
      (() => {
        'use strict';
        re.r(rr), re.d(rr, { PluginModule: () => ic, default: () => nb });
        var Y = re(555),
          oe = re(325),
          E = re(994);
        function ie(n) {
          return 'function' == typeof n;
        }
        function xe(n) {
          return (e) => {
            if (
              (function g(n) {
                return ie(null == n ? void 0 : n.lift);
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
          (0, oe.wakoLog)('plugin.watchnow', n);
        }
        var U = re(714);
        function q(n) {
          return (q =
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
        function L(n, e, t) {
          return (
            (e = (function _e(n) {
              var e = (function Q(n, e) {
                if ('object' != q(n) || !n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var o = t.call(n, e || 'default');
                  if ('object' != q(o)) return o;
                  throw new TypeError('@@toPrimitive must return a primitive value.');
                }
                return ('string' === e ? String : Number)(n);
              })(n, 'string');
              return 'symbol' == q(e) ? e : e + '';
            })(e)) in n
              ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
              : (n[e] = t),
            n
          );
        }
        var be = re(652),
          h = re(264),
          se = re(346),
          ye = re(382),
          fe = re(961);
        const Oe = (function Le(n) {
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
        function Fe(n, e) {
          if (n) {
            const t = n.indexOf(e);
            0 <= t && n.splice(t, 1);
          }
        }
        class F {
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
              if (ie(o))
                try {
                  o();
                } catch (r) {
                  e = r instanceof Oe ? r.errors : [r];
                }
              const { _finalizers: i } = this;
              if (i) {
                this._finalizers = null;
                for (const r of i)
                  try {
                    ge(r);
                  } catch (a) {
                    (e = null != e ? e : []), a instanceof Oe ? (e = [...e, ...a.errors]) : e.push(a);
                  }
              }
              if (e) throw new Oe(e);
            }
          }
          add(e) {
            var t;
            if (e && e !== this)
              if (this.closed) ge(e);
              else {
                if (e instanceof F) {
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
            t === e ? (this._parentage = null) : Array.isArray(t) && Fe(t, e);
          }
          remove(e) {
            const { _finalizers: t } = this;
            t && Fe(t, e), e instanceof F && e._removeParent(this);
          }
        }
        function ee(n) {
          return n instanceof F || (n && 'closed' in n && ie(n.remove) && ie(n.add) && ie(n.unsubscribe));
        }
        function ge(n) {
          ie(n) ? n() : n.unsubscribe();
        }
        F.EMPTY = (() => {
          const n = new F();
          return (n.closed = !0), n;
        })();
        const we = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
          },
          ve = {
            setTimeout(n, e, ...t) {
              const { delegate: o } = ve;
              return null != o && o.setTimeout ? o.setTimeout(n, e, ...t) : setTimeout(n, e, ...t);
            },
            clearTimeout(n) {
              const { delegate: e } = ve;
              return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(n);
            },
            delegate: void 0,
          };
        function te(n) {
          ve.setTimeout(() => {
            const { onUnhandledError: e } = we;
            if (!e) throw n;
            e(n);
          });
        }
        function ke() {}
        const Pe = Xe('C', void 0, void 0);
        function Xe(n, e, t) {
          return { kind: n, value: e, error: t };
        }
        let Ge = null;
        class z extends F {
          constructor(e) {
            super(),
              (this.isStopped = !1),
              e ? ((this.destination = e), ee(e) && e.add(this)) : (this.destination = bt);
          }
          static create(e, t, o) {
            return new Se(e, t, o);
          }
          next(e) {
            this.isStopped
              ? dt(
                  (function ue(n) {
                    return Xe('N', n, void 0);
                  })(e),
                  this,
                )
              : this._next(e);
          }
          error(e) {
            this.isStopped
              ? dt(
                  (function Me(n) {
                    return Xe('E', void 0, n);
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
        const ne = Function.prototype.bind;
        function V(n, e) {
          return ne.call(n, e);
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
                et(o);
              }
          }
          error(e) {
            const { partialObserver: t } = this;
            if (t.error)
              try {
                t.error(e);
              } catch (o) {
                et(o);
              }
            else et(e);
          }
          complete() {
            const { partialObserver: e } = this;
            if (e.complete)
              try {
                e.complete();
              } catch (t) {
                et(t);
              }
          }
        }
        class Se extends z {
          constructor(e, t, o) {
            let i;
            if ((super(), ie(e) || !e))
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
        function et(n) {
          we.useDeprecatedSynchronousErrorHandling
            ? (function O(n) {
                we.useDeprecatedSynchronousErrorHandling && Ge && ((Ge.errorThrown = !0), (Ge.error = n));
              })(n)
            : te(n);
        }
        function dt(n, e) {
          const { onStoppedNotification: t } = we;
          t && ve.setTimeout(() => t(n, e));
        }
        const bt = {
            closed: !0,
            next: ke,
            error: function We(n) {
              throw n;
            },
            complete: ke,
          },
          Nt = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
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
                  (n && n instanceof z) ||
                  ((function Rn(n) {
                    return n && ie(n.next) && ie(n.error) && ie(n.complete);
                  })(n) &&
                    ee(n))
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
              return new (o = kn(o))((i, r) => {
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
            [Nt]() {
              return this;
            }
            pipe(...t) {
              return (function un(n) {
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
              return new (t = kn(t))((o, i) => {
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
        function kn(n) {
          var e;
          return null !== (e = null != n ? n : we.Promise) && void 0 !== e ? e : Promise;
        }
        const si = (function Hn() {
          return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
        })();
        function $n(n) {
          return new zt((e) => {
            (function $o(n, e) {
              var t, o, i, r;
              return (0, be.__awaiter)(this, void 0, void 0, function* () {
                try {
                  for (t = (0, be.__asyncValues)(n); !(o = yield t.next()).done; )
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
        function Sn(n, e, t, o, i) {
          return new En(n, e, t, o, i);
        }
        class En extends z {
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
        re(122);
        const Xt = new h.InjectionToken('USERCONFIG');
        class qn {
          constructor(e = {}) {
            L(this, 'data', void 0),
              (this.data = e),
              console.warn(
                "[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.",
              );
          }
          get(e) {
            return this.data[e];
          }
        }
        let Tn = (() => {
          var n;
          class e {
            constructor() {
              L(this, 'zone', (0, h.inject)(h.NgZone)),
                L(this, 'applicationRef', (0, h.inject)(h.ApplicationRef)),
                L(this, 'config', (0, h.inject)(Xt));
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
            L(e, '\u0275fac', function (o) {
              return new (o || n)();
            }),
            L(e, '\u0275prov', h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        class Do {
          constructor(e, t, o, i, r, a) {
            L(this, 'environmentInjector', void 0),
              L(this, 'injector', void 0),
              L(this, 'applicationRef', void 0),
              L(this, 'zone', void 0),
              L(this, 'elementReferenceKey', void 0),
              L(this, 'enableSignalsSupport', void 0),
              L(this, 'elRefMap', new WeakMap()),
              L(this, 'elEventsMap', new WeakMap()),
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
                      fn(
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
        const fn = (n, e, t, o, i, r, a, s, d, p, m, v) => {
            const _ = h.Injector.create({ providers: Dn(d), parent: t }),
              k = (0, h.createComponent)(s, { environmentInjector: e, elementInjector: _ }),
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
                const { modal: j, popover: G, ...W } = d;
                for (const Z in W) k.setInput(Z, W[Z]);
                void 0 !== j && Object.assign(I, { modal: j }), void 0 !== G && Object.assign(I, { popover: G });
              } else Object.assign(I, d);
            if (p) for (const j of p) $.classList.add(j);
            const M = Zt(n, I, $);
            return a.appendChild($), o.attachView(k.hostView), i.set($, k), r.set($, M), $;
          },
          Po = [ye.L, ye.a, ye.b, ye.c, ye.d],
          Zt = (n, e, t) =>
            n.run(() => {
              const o = Po.filter((i) => 'function' == typeof e[i]).map((i) => {
                const r = (a) => e[i](a.detail);
                return t.addEventListener(i, r), () => t.removeEventListener(i, r);
              });
              return () => o.forEach((i) => i());
            }),
          Lt = new h.InjectionToken('NavParamsToken'),
          Dn = (n) => [
            { provide: Lt, useValue: n },
            { provide: qn, useFactory: it, deps: [Lt] },
          ],
          it = (n) => new qn(n),
          gi = new h.InjectionToken('');
        let bn = (() => {
          var n;
          class e {
            constructor() {
              L(this, 'outletDataSubscriptions', new Map());
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
                r = (0, fe.combineLatest)([i.queryParams, i.params, i.data])
                  .pipe(
                    (function ut(n, e) {
                      return xe((t, o) => {
                        let i = null,
                          r = 0,
                          a = !1;
                        const s = () => a && !i && o.complete();
                        t.subscribe(
                          Sn(
                            o,
                            (d) => {
                              null == i || i.unsubscribe();
                              let p = 0;
                              const m = r++;
                              (function _o(n) {
                                if (n instanceof zt) return n;
                                if (null != n) {
                                  if (
                                    (function pn(n) {
                                      return ie(n[Nt]);
                                    })(n)
                                  )
                                    return (function In(n) {
                                      return new zt((e) => {
                                        const t = n[Nt]();
                                        if (ie(t.subscribe)) return t.subscribe(e);
                                        throw new TypeError(
                                          'Provided object does not correctly implement Symbol.observable',
                                        );
                                      });
                                    })(n);
                                  if (((n) => n && 'number' == typeof n.length && 'function' != typeof n)(n))
                                    return (function Wn(n) {
                                      return new zt((e) => {
                                        for (let t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                                        e.complete();
                                      });
                                    })(n);
                                  if (
                                    (function de(n) {
                                      return ie(null == n ? void 0 : n.then);
                                    })(n)
                                  )
                                    return (function Io(n) {
                                      return new zt((e) => {
                                        n.then(
                                          (t) => {
                                            e.closed || (e.next(t), e.complete());
                                          },
                                          (t) => e.error(t),
                                        ).then(null, te);
                                      });
                                    })(n);
                                  if (
                                    (function _n(n) {
                                      return Symbol.asyncIterator && ie(null == n ? void 0 : n[Symbol.asyncIterator]);
                                    })(n)
                                  )
                                    return $n(n);
                                  if (
                                    (function Vn(n) {
                                      return ie(null == n ? void 0 : n[si]);
                                    })(n)
                                  )
                                    return (function Cn(n) {
                                      return new zt((e) => {
                                        for (const t of n) if ((e.next(t), e.closed)) return;
                                        e.complete();
                                      });
                                    })(n);
                                  if (
                                    (function ko(n) {
                                      return ie(null == n ? void 0 : n.getReader);
                                    })(n)
                                  )
                                    return (function Co(n) {
                                      return $n(
                                        (function wo(n) {
                                          return (0, be.__asyncGenerator)(this, arguments, function* () {
                                            const t = n.getReader();
                                            try {
                                              for (;;) {
                                                const { value: o, done: i } = yield (0, be.__await)(t.read());
                                                if (i) return yield (0, be.__await)(void 0);
                                                yield yield (0, be.__await)(o);
                                              }
                                            } finally {
                                              t.releaseLock();
                                            }
                                          });
                                        })(n),
                                      );
                                    })(n);
                                }
                                throw (function Nn(n) {
                                  return new TypeError(
                                    `You provided ${null !== n && 'object' == typeof n ? 'an invalid object' : `'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
                                  );
                                })(n);
                              })(n(d, m)).subscribe(
                                (i = Sn(
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
                    })(([a, s, d], p) => ((d = { ...a, ...s, ...d }), 0 === p ? (0, fe.of)(d) : Promise.resolve(d))),
                  )
                  .subscribe((a) => {
                    if (!o.isActivated || !o.activatedComponentRef || o.activatedRoute !== i || null === i.component)
                      return void this.unsubscribeFromRouteData(o);
                    const s = (0, h.reflectComponentType)(i.component);
                    if (s) for (const { templateName: d } of s.inputs) o.activatedComponentRef.setInput(d, a[d]);
                    else this.unsubscribeFromRouteData(o);
                  });
              this.outletDataSubscriptions.set(o, r);
            }
          }
          return (
            (n = e),
            L(e, '\u0275fac', function (o) {
              return new (o || n)();
            }),
            L(e, '\u0275prov', h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        function Mt(n) {
          return null != n && n.componentInputBindingEnabled ? new bn() : null;
        }
        class An {
          constructor(e) {
            L(this, 'ctrl', void 0), (this.ctrl = e);
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
        var c = re(445),
          R = re(935),
          Ae = re(338);
        const Jn = 'ion-content',
          $t = '.ion-content-scroll-host',
          Jt = `${Jn}, ${$t}`,
          Ft = (n) => 'ION-CONTENT' === n.tagName,
          Ro = (n) => n.closest(Jt),
          eo = (n) => {
            if (Ft(n)) {
              const t = n.scrollY;
              return (n.scrollY = !1), t;
            }
            return n.style.setProperty('overflow', 'hidden'), !0;
          },
          to = (function () {
            var n = (0, E.A)(function* (e, t, o, i, r, a) {
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
                yield new Promise((p) => (0, R.c)(d, p)),
                d
              );
            });
            return function (t, o, i, r, a, s) {
              return n.apply(this, arguments);
            };
          })(),
          No = (n, e) => {
            if (e) {
              if (n) return n.removeViewFromDom(e.parentElement, e);
              e.remove();
            }
            return Promise.resolve();
          },
          no = () => {
            let n, e;
            return {
              attachViewToDom: (function () {
                var i = (0, E.A)(function* (r, a, s = {}, d = []) {
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
                      yield new Promise((I) => (0, R.c)(k, I));
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
          vn = () => {
            let n;
            return {
              lock: (function () {
                var t = (0, E.A)(function* () {
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
        var Ve = re(911);
        const Ho = () => {
          if (void 0 !== Ve.w) return Ve.w.Capacitor;
        };
        var X = re(530);
        var oo = re(86);
        const en =
            '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
          io = (n, e) => {
            const t = n.querySelector(en);
            ro(t, null != e ? e : n);
          },
          tn = (n, e) => {
            const t = Array.from(n.querySelectorAll(en));
            ro(t.length > 0 ? t[t.length - 1] : null, null != e ? e : n);
          },
          ro = (n, e) => {
            let t = n;
            const o = null == n ? void 0 : n.shadowRoot;
            o && (t = o.querySelector(en) || n), t ? (0, R.f)(t) : e.focus();
          };
        let Ii = 0,
          Ci = 0;
        const Vo = new WeakMap(),
          ao = (n) => ({
            create: (e) => Ei(n, e),
            dismiss: (e, t, o) => f(document, e, t, n, o),
            getTop: () =>
              (0, E.A)(function* () {
                return w(document, n);
              })(),
          }),
          mr = ao('ion-action-sheet'),
          $i = ao('ion-modal'),
          Si = ao('ion-popover'),
          Uo = (n) => {
            typeof document < 'u' && u(document);
            const e = Ii++;
            n.overlayIndex = e;
          },
          Go = (n) => (n.hasAttribute('id') || (n.id = 'ion-overlay-' + ++Ci), n.id),
          Ei = (n, e) =>
            typeof window < 'u' && typeof window.customElements < 'u'
              ? window.customElements.whenDefined(n).then(() => {
                  const t = document.createElement(n);
                  return (
                    t.classList.add('overlay-hidden'),
                    Object.assign(t, Object.assign(Object.assign({}, e), { hasController: !0 })),
                    B(document).appendChild(t),
                    new Promise((o) => (0, R.c)(t, o))
                  );
                })
              : Promise.resolve(),
          Yo = (n, e) => {
            let t = n;
            const o = null == n ? void 0 : n.shadowRoot;
            o && (t = o.querySelector(en) || n), t ? (0, R.f)(t) : e.focus();
          },
          u = (n) => {
            0 === Ii &&
              ((Ii = 1),
              n.addEventListener(
                'focus',
                (e) => {
                  ((n, e) => {
                    const t = w(e, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover'),
                      o = n.target;
                    t &&
                      o &&
                      !t.classList.contains(qo) &&
                      (t.shadowRoot
                        ? (() => {
                            if (t.contains(o)) t.lastFocus = o;
                            else if ('ION-TOAST' === o.tagName) Yo(t.lastFocus, t);
                            else {
                              const a = t.lastFocus;
                              io(t), a === e.activeElement && tn(t), (t.lastFocus = e.activeElement);
                            }
                          })()
                        : (() => {
                            if (t === o) t.lastFocus = void 0;
                            else if ('ION-TOAST' === o.tagName) Yo(t.lastFocus, t);
                            else {
                              const a = (0, R.g)(t);
                              if (!a.contains(o)) return;
                              const s = a.querySelector('.ion-overlay-wrapper');
                              if (!s) return;
                              if (s.contains(o) || o === a.querySelector('ion-backdrop')) t.lastFocus = o;
                              else {
                                const d = t.lastFocus;
                                io(s, t), d === e.activeElement && tn(s, t), (t.lastFocus = e.activeElement);
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
                    t.dismiss(void 0, Ee);
                  });
              }),
              (X.c.get('experimentalCloseWatcher', !1) && void 0 !== Ve.w && 'CloseWatcher' in Ve.w) ||
                n.addEventListener('keydown', (e) => {
                  if ('Escape' === e.key) {
                    const t = w(n);
                    null != t && t.backdropDismiss && t.dismiss(void 0, Ee);
                  }
                }));
          },
          f = (n, e, t, o, i) => {
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
            const t = B(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
            t && (n ? t.setAttribute('aria-hidden', 'true') : t.removeAttribute('aria-hidden'));
          },
          D = (function () {
            var n = (0, E.A)(function* (e, t, o, i, r) {
              var a, s;
              if (e.presented) return;
              'ION-TOAST' !== e.el.tagName && C(!0),
                document.body.classList.add(oo.B),
                hc(e.el),
                Ma(e.el),
                (e.presented = !0),
                e.willPresent.emit(),
                null === (a = e.willPresentShorthand) || void 0 === a || a.emit();
              const d = (0, X.b)(e),
                p = e.enterAnimation ? e.enterAnimation : X.c.get(t, 'ios' === d ? o : i);
              (yield N(e, p, e.el, r)) &&
                (e.didPresent.emit(), null === (s = e.didPresentShorthand) || void 0 === s || s.emit()),
                'ION-TOAST' !== e.el.tagName && T(e.el),
                e.keyboardClose &&
                  (null === document.activeElement || !e.el.contains(document.activeElement)) &&
                  e.el.focus(),
                e.el.removeAttribute('aria-hidden');
            });
            return function (t, o, i, r, a) {
              return n.apply(this, arguments);
            };
          })(),
          T = (function () {
            var n = (0, E.A)(function* (e) {
              let t = document.activeElement;
              if (!t) return;
              const o = null == t ? void 0 : t.shadowRoot;
              o && (t = o.querySelector(en) || t),
                yield e.onDidDismiss(),
                (null === document.activeElement || document.activeElement === document.body) && t.focus();
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          P = (function () {
            var n = (0, E.A)(function* (e, t, o, i, r, a, s) {
              var d, p;
              if (!e.presented) return !1;
              const m = void 0 !== Ve.d ? y(Ve.d).filter((_) => 'ION-TOAST' !== _.tagName) : [];
              1 === m.length && m[0].id === e.el.id && (C(!1), document.body.classList.remove(oo.B)),
                (e.presented = !1);
              try {
                Ma(e.el),
                  e.el.style.setProperty('pointer-events', 'none'),
                  e.willDismiss.emit({ data: t, role: o }),
                  null === (d = e.willDismissShorthand) || void 0 === d || d.emit({ data: t, role: o });
                const _ = (0, X.b)(e),
                  k = e.leaveAnimation ? e.leaveAnimation : X.c.get(i, 'ios' === _ ? r : a);
                o !== Be && (yield N(e, k, e.el, s)),
                  e.didDismiss.emit({ data: t, role: o }),
                  null === (p = e.didDismissShorthand) || void 0 === p || p.emit({ data: t, role: o }),
                  (Vo.get(e) || []).forEach(($) => $.destroy()),
                  Vo.delete(e),
                  e.el.classList.add('overlay-hidden'),
                  e.el.style.removeProperty('pointer-events'),
                  void 0 !== e.el.lastFocus && (e.el.lastFocus = void 0);
              } catch (_) {
                console.error(_);
              }
              return e.el.remove(), fc(), !0;
            });
            return function (t, o, i, r, a, s, d) {
              return n.apply(this, arguments);
            };
          })(),
          B = (n) => n.querySelector('ion-app') || n.body,
          N = (function () {
            var n = (0, E.A)(function* (e, t, o, i) {
              o.classList.remove('overlay-hidden');
              const a = t(e.el, i);
              (!e.animated || !X.c.getBoolean('animated', !0)) && a.duration(0),
                e.keyboardClose &&
                  a.beforeAddWrite(() => {
                    const d = o.ownerDocument.activeElement;
                    null != d && d.matches('input,ion-input, ion-textarea') && d.blur();
                  });
              const s = Vo.get(e) || [];
              return Vo.set(e, [...s, a]), yield a.play(), !0;
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
              (0, R.b)(n, e, o), t(i);
            };
            (0, R.a)(n, e, o);
          },
          De = (n) => 'cancel' === n || n === Ee,
          Ue = (n) => n(),
          Ee = 'backdrop',
          Be = 'gesture',
          rt = (n) => {
            let t,
              e = !1;
            const o = no(),
              i = (s = !1) => {
                if (t && !s) return { delegate: t, inline: e };
                const { el: d, hasController: p, delegate: m } = n;
                return (e = null !== d.parentNode && !p), (t = e ? m || o : m), { inline: e, delegate: t };
              };
            return {
              attachViewToDom: (function () {
                var s = (0, E.A)(function* (d) {
                  const { delegate: p } = i(!0);
                  if (p) return yield p.attachViewToDom(n.el, d);
                  const { hasController: m } = n;
                  if (m && void 0 !== d) throw new Error('framework delegate is missing');
                  return null;
                });
                return function (p) {
                  return s.apply(this, arguments);
                };
              })(),
              removeViewFromDom: () => {
                const { delegate: s } = i();
                s && void 0 !== n.el && s.removeViewFromDom(n.el.parentElement, n.el);
              },
            };
          },
          br = () => {
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
                  : (0, Ae.p)(
                      `A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                      o,
                    );
              },
              removeClickListener: e,
            };
          },
          Ma = (n) => {
            void 0 !== Ve.d && n.setAttribute('aria-hidden', 'true');
          },
          hc = (n) => {
            var e;
            if (void 0 === Ve.d) return;
            const t = y(Ve.d);
            for (let o = t.length - 1; o >= 0; o--) {
              const i = t[o],
                r = null !== (e = t[o + 1]) && void 0 !== e ? e : n;
              (r.hasAttribute('aria-hidden') || 'ION-TOAST' !== r.tagName) && i.setAttribute('aria-hidden', 'true');
            }
          },
          fc = () => {
            if (void 0 === Ve.d) return;
            const n = y(Ve.d);
            for (let e = n.length - 1; e >= 0; e--) {
              const t = n[e];
              if ((t.removeAttribute('aria-hidden'), 'ION-TOAST' !== t.tagName)) break;
            }
          },
          qo = 'ion-disable-focus-trap',
          Ze = (n, e) => null !== e.closest(n),
          qe = (n, e) =>
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
          gc = /^[a-z][a-z0-9+\-.]*:/,
          Fa = (function () {
            var n = (0, E.A)(function* (e, t, o, i) {
              if (null != e && '#' !== e[0] && !gc.test(e)) {
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
        var pe = re(412);
        const Ha = (n, e, t, o, i) => $c(n[1], e[1], t[1], o[1], i).map((r) => Cc(n[0], e[0], t[0], o[0], r)),
          Cc = (n, e, t, o, i) =>
            i * (3 * e * Math.pow(i - 1, 2) + i * (-3 * t * i + 3 * t + o * i)) - n * Math.pow(i - 1, 3),
          $c = (n, e, t, o, i) =>
            Ec((o -= i) - 3 * (t -= i) + 3 * (e -= i) - (n -= i), 3 * t - 6 * e + 3 * n, 3 * e - 3 * n, n).filter(
              (a) => a >= 0 && a <= 1,
            ),
          Ec = (n, e, t, o) => {
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
        var xr = re(221);
        const Pc = (0, c.w$)(
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
        function lo() {
          typeof customElements > 'u' ||
            ['ion-backdrop'].forEach((e) => {
              'ion-backdrop' === e && (customElements.get(e) || customElements.define(e, Pc));
            });
        }
        var Ko = (function (n) {
          return (n.Dark = 'DARK'), (n.Light = 'LIGHT'), (n.Default = 'DEFAULT'), n;
        })(Ko || {});
        const yr = {
            getEngine() {
              const n = Ho();
              if (null != n && n.isPluginAvailable('StatusBar')) return n.Plugins.StatusBar;
            },
            setStyle(n) {
              const e = this.getEngine();
              e && e.setStyle(n);
            },
            getStyle:
              ((n = (0, E.A)(function* () {
                const e = this.getEngine();
                if (!e) return Ko.Default;
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
          Va = () => {
            !Ve.w || Ve.w.innerWidth >= 768 || yr.setStyle({ style: Ko.Dark });
          },
          kr = (n = Ko.Default) => {
            !Ve.w || Ve.w.innerWidth >= 768 || yr.setStyle({ style: n });
          },
          Wa = (function () {
            var n = (0, E.A)(function* (e, t) {
              'function' != typeof e.canDismiss ||
                !(yield e.canDismiss(void 0, Be)) ||
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
            const G = (0, xr.createGesture)({
              el: n,
              gestureName: 'modalSwipeToClose',
              gesturePriority: 39,
              direction: 'y',
              threshold: 10,
              canStart: (W) => {
                const Z = W.event.target;
                return (
                  null === Z ||
                  !Z.closest ||
                  ((d = Ro(Z)),
                  d
                    ? ((p = Ft(d) ? (0, R.g)(d).querySelector('.inner-scroll') : d),
                      !d.querySelector('ion-refresher') && 0 === p.scrollTop)
                    : null === Z.closest('ion-footer'))
                );
              },
              onStart: (W) => {
                const { deltaY: Z } = W;
                (v = !d || !Ft(d) || d.scrollY),
                  (s = void 0 !== n.canDismiss && !0 !== n.canDismiss),
                  Z > 0 && d && eo(d),
                  e.progressStart(!0, a ? 1 : 0);
              },
              onMove: (W) => {
                const { deltaY: Z } = W;
                Z > 0 && d && eo(d);
                const ce = W.deltaY / r,
                  me = ce >= 0 && s,
                  ze = me ? 0.2 : 0.9999,
                  Ne = me ? _r(ce / ze) : ce,
                  He = (0, R.k)(1e-4, Ne, ze);
                e.progressStep(He), He >= 0.5 && _ < 0.5 ? kr(t) : He < 0.5 && _ >= 0.5 && Va(), (_ = He);
              },
              onEnd: (W) => {
                const Z = W.velocityY,
                  ce = W.deltaY / r,
                  me = ce >= 0 && s,
                  ze = me ? 0.2 : 0.9999,
                  Ne = me ? _r(ce / ze) : ce,
                  He = (0, R.k)(1e-4, Ne, ze),
                  st = !me && (W.deltaY + 1e3 * Z) / r >= 0.5;
                let lt = st ? -0.001 : 0.001;
                st
                  ? (e.easing('cubic-bezier(0.32, 0.72, 0, 1)'),
                    (lt += Ha([0, 0], [0.32, 0.72], [0, 1], [1, 1], He)[0]))
                  : (e.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                    (lt += Ha([0, 0], [1, 0], [0.68, 0.28], [1, 1], He)[0]));
                const ft = Ua(st ? ce * r : (1 - He) * r, Z);
                (a = st),
                  G.enable(!1),
                  d &&
                    ((n, e) => {
                      Ft(n) ? (n.scrollY = e) : n.style.removeProperty('overflow');
                    })(d, v),
                  e
                    .onFinish(() => {
                      st || G.enable(!0);
                    })
                    .progressEnd(st ? 1 : 0, lt, ft),
                  me && He > ze / 4 ? Wa(n, e) : st && o();
              },
            });
            return G;
          },
          Ua = (n, e) => (0, R.k)(400, n / Math.abs(1.1 * e), 500),
          Ga = (n) => {
            const { currentBreakpoint: e, backdropBreakpoint: t } = n,
              o = void 0 === t || t < e,
              i = o ? `calc(var(--backdrop-opacity) * ${e})` : '0',
              r = (0, pe.c)('backdropAnimation').fromTo('opacity', 0, i);
            return (
              o && r.beforeStyles({ 'pointer-events': 'none' }).afterClearStyles(['pointer-events']),
              {
                wrapperAnimation: (0, pe.c)('wrapperAnimation').keyframes([
                  { offset: 0, opacity: 1, transform: 'translateY(100%)' },
                  { offset: 1, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                ]),
                backdropAnimation: r,
              }
            );
          },
          Ya = (n) => {
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
              a = (0, pe.c)('backdropAnimation').keyframes(0 !== t ? r : i);
            return {
              wrapperAnimation: (0, pe.c)('wrapperAnimation').keyframes([
                { offset: 0, opacity: 1, transform: `translateY(${100 - 100 * e}%)` },
                { offset: 1, opacity: 1, transform: 'translateY(100%)' },
              ]),
              backdropAnimation: a,
            };
          },
          qa = (n, e) => {
            const { presentingEl: t, currentBreakpoint: o } = e,
              i = (0, R.g)(n),
              { wrapperAnimation: r, backdropAnimation: a } =
                void 0 !== o
                  ? Ga(e)
                  : {
                      backdropAnimation: (0, pe.c)()
                        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                        .beforeStyles({ 'pointer-events': 'none' })
                        .afterClearStyles(['pointer-events']),
                      wrapperAnimation: (0, pe.c)().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)'),
                    };
            a.addElement(i.querySelector('ion-backdrop')),
              r.addElement(i.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
            const s = (0, pe.c)('entering-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(500)
              .addAnimation(r);
            if (t) {
              const d = window.innerWidth < 768,
                p = 'ION-MODAL' === t.tagName && void 0 !== t.presentingElement,
                m = (0, R.g)(t),
                v = (0, pe.c)().beforeStyles({
                  transform: 'translateY(0)',
                  'transform-origin': 'top center',
                  overflow: 'hidden',
                }),
                _ = document.body;
              if (d) {
                const k = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  M = `translateY(${p ? '-10px' : k}) scale(0.915)`;
                v
                  .afterStyles({ transform: M })
                  .beforeAddWrite(() => _.style.setProperty('background-color', 'black'))
                  .addElement(t)
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                    { offset: 1, filter: 'contrast(0.85)', transform: M, borderRadius: '10px 10px 0 0' },
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
                const $ = (0, pe.c)()
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
          Ka = (n, e, t = 500) => {
            const { presentingEl: o, currentBreakpoint: i } = e,
              r = (0, R.g)(n),
              { wrapperAnimation: a, backdropAnimation: s } =
                void 0 !== i
                  ? Ya(e)
                  : {
                      backdropAnimation: (0, pe.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, pe.c)().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)'),
                    };
            s.addElement(r.querySelector('ion-backdrop')),
              a.addElement(r.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({ opacity: 1 });
            const d = (0, pe.c)('leaving-base')
              .addElement(n)
              .easing('cubic-bezier(0.32,0.72,0,1)')
              .duration(t)
              .addAnimation(a);
            if (o) {
              const p = window.innerWidth < 768,
                m = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
                v = (0, R.g)(o),
                _ = (0, pe.c)()
                  .beforeClearStyles(['transform'])
                  .afterClearStyles(['transform'])
                  .onFinish((I) => {
                    1 === I &&
                      (o.style.setProperty('overflow', ''),
                      Array.from(k.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter(
                        (M) => void 0 !== M.presentingElement,
                      ).length <= 1 && k.style.setProperty('background-color', ''));
                  }),
                k = document.body;
              if (p) {
                const I = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  j = `translateY(${m ? '-10px' : I}) scale(0.915)`;
                _.addElement(o).keyframes([
                  { offset: 0, filter: 'contrast(0.85)', transform: j, borderRadius: '10px 10px 0 0' },
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
                const M = (0, pe.c)()
                  .addElement(v.querySelector('.modal-shadow'))
                  .afterStyles({ transform: 'translateY(0) scale(1)' })
                  .keyframes([
                    { offset: 0, opacity: '0', transform: $ },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' },
                  ]);
                d.addAnimation([_, M]);
              } else a.fromTo('opacity', '1', '0');
            } else d.addAnimation(s);
            return d;
          },
          Mc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, R.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? Ga(e)
                  : {
                      backdropAnimation: (0, pe.c)()
                        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                        .beforeStyles({ 'pointer-events': 'none' })
                        .afterClearStyles(['pointer-events']),
                      wrapperAnimation: (0, pe.c)().keyframes([
                        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
                        { offset: 1, opacity: 1, transform: 'translateY(0px)' },
                      ]),
                    };
            return (
              r.addElement(o.querySelector('ion-backdrop')),
              i.addElement(o.querySelector('.modal-wrapper')),
              (0, pe.c)().addElement(n).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([r, i])
            );
          },
          jc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, R.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? Ya(e)
                  : {
                      backdropAnimation: (0, pe.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0),
                      wrapperAnimation: (0, pe.c)().keyframes([
                        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
                        { offset: 1, opacity: 0, transform: 'translateY(40px)' },
                      ]),
                    };
            return (
              r.addElement(o.querySelector('ion-backdrop')),
              i.addElement(o.querySelector('.modal-wrapper')),
              (0, pe.c)().easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([r, i])
            );
          },
          Hc = (0, c.w$)(
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
                  (this.lockController = vn()),
                  (this.triggerController = br()),
                  (this.coreDelegate = no()),
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
                    void 0 === e && this.dismiss(void 0, Ee);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = Vc[e.type];
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
                Uo(e), this.triggerChanged();
              }
              disconnectedCallback() {
                this.triggerController.removeClickListener();
              }
              componentWillLoad() {
                var e;
                const { breakpoints: t, initialBreakpoint: o, el: i, htmlAttributes: r } = this,
                  a = (this.isSheetModal = void 0 !== t && void 0 !== o),
                  s = ['aria-label', 'role'];
                (this.inheritedAttributes = (0, R.d)(i, s)),
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
                    (0, Ae.p)('Your breakpoints array must include the initialBreakpoint value.'),
                  (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || Go(this.el);
              }
              componentDidLoad() {
                !0 === this.isOpen && (0, R.r)(() => this.present()),
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
                return (0, E.A)(function* () {
                  const { canDismiss: i } = o;
                  return 'function' == typeof i ? i(e, t) : i;
                })();
              }
              present() {
                var e = this;
                return (0, E.A)(function* () {
                  const t = yield e.lockController.lock();
                  if (e.presented) return void t();
                  const { presentingElement: o, el: i } = e;
                  e.currentBreakpoint = e.initialBreakpoint;
                  const { inline: r, delegate: a } = e.getDelegate(!0);
                  e.ionMount.emit(),
                    (e.usersElement = yield to(a, i, e.component, ['ion-page'], e.componentProps, r)),
                    (0, R.j)(i) ? yield (0, ye.e)(e.usersElement) : e.keepContentsMounted || (yield (0, ye.w)()),
                    (0, c.bN)(() => e.el.classList.add('show-modal'));
                  const s = void 0 !== o;
                  s && 'ios' === (0, X.b)(e) && ((e.statusBarStyle = yield yr.getStyle()), Va()),
                    yield D(e, 'modalEnter', qa, Mc, {
                      presentingEl: o,
                      currentBreakpoint: e.initialBreakpoint,
                      backdropBreakpoint: e.backdropBreakpoint,
                    }),
                    typeof window < 'u' &&
                      ((e.keyboardOpenCallback = () => {
                        e.gesture &&
                          (e.gesture.enable(!1),
                          (0, R.r)(() => {
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
                  i = this.leaveAnimation || X.c.get('modalLeave', Ka),
                  r = (this.animation = i(o, { presentingEl: this.presentingElement }));
                if (!((n) => n.querySelector($t) || n.querySelector(Jt))(o))
                  return void ((n) => {
                    (0, Ae.b)(n, Jn);
                  })(o);
                const s = null !== (t = this.statusBarStyle) && void 0 !== t ? t : Ko.Default;
                (this.gesture = Ac(o, r, s, () => {
                  (this.gestureAnimationDismissing = !0),
                    kr(this.statusBarStyle),
                    this.animation.onFinish(
                      (0, E.A)(function* () {
                        yield e.dismiss(void 0, Be), (e.gestureAnimationDismissing = !1);
                      }),
                    );
                })),
                  this.gesture.enable(!0);
              }
              initSheetGesture() {
                const { wrapperEl: e, initialBreakpoint: t, backdropBreakpoint: o } = this;
                if (!e || void 0 === t) return;
                const i = this.enterAnimation || X.c.get('modalEnter', qa),
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
                    M = 0,
                    j = !1;
                  const W = r.childAnimations.find((Qe) => 'wrapperAnimation' === Qe.id),
                    Z = r.childAnimations.find((Qe) => 'backdropAnimation' === Qe.id),
                    ce = a[a.length - 1],
                    me = a[0],
                    ze = () => {
                      n.style.setProperty('pointer-events', 'auto'),
                        e.style.setProperty('pointer-events', 'auto'),
                        n.classList.remove(qo);
                    },
                    Ne = () => {
                      n.style.setProperty('pointer-events', 'none'),
                        e.style.setProperty('pointer-events', 'none'),
                        n.classList.add(qo);
                    };
                  W &&
                    Z &&
                    (W.keyframes([..._.WRAPPER_KEYFRAMES]),
                    Z.keyframes([..._.BACKDROP_KEYFRAMES]),
                    r.progressStart(!0, 1 - $),
                    $ > i ? ze() : Ne()),
                    k && $ !== ce && (k.scrollY = !1);
                  const ft = (Qe) => {
                      const { breakpoint: Je, canDismiss: mt, breakpointOffset: ct, animated: wn } = Qe,
                        Rt = mt && 0 === Je,
                        kt = Rt ? $ : Je,
                        or = 0 !== kt;
                      return (
                        ($ = 0),
                        W &&
                          Z &&
                          (W.keyframes([
                            { offset: 0, transform: `translateY(${100 * ct}%)` },
                            { offset: 1, transform: `translateY(${100 * (1 - kt)}%)` },
                          ]),
                          Z.keyframes([
                            { offset: 0, opacity: `calc(var(--backdrop-opacity) * ${wr(1 - ct, i)})` },
                            { offset: 1, opacity: `calc(var(--backdrop-opacity) * ${wr(kt, i)})` },
                          ]),
                          r.progressStep(0)),
                        Bt.enable(!1),
                        Rt ? Wa(n, r) : or || d(),
                        k && kt === a[a.length - 1] && (k.scrollY = !0),
                        new Promise((ai) => {
                          r.onFinish(
                            () => {
                              or
                                ? W && Z
                                  ? (0, R.r)(() => {
                                      W.keyframes([..._.WRAPPER_KEYFRAMES]),
                                        Z.keyframes([..._.BACKDROP_KEYFRAMES]),
                                        r.progressStart(!0, 1 - kt),
                                        ($ = kt),
                                        p($),
                                        $ > i ? ze() : Ne(),
                                        Bt.enable(!0),
                                        ai();
                                    })
                                  : (Bt.enable(!0), ai())
                                : ai();
                            },
                            { oneTimeCallback: !0 },
                          ).progressEnd(1, 0, wn ? 500 : 0);
                        })
                      );
                    },
                    Bt = (0, xr.createGesture)({
                      el: t,
                      gestureName: 'modalSheet',
                      gesturePriority: 40,
                      direction: 'y',
                      threshold: 10,
                      canStart: (Qe) => {
                        const Je = Ro(Qe.event.target);
                        if ((($ = s()), 1 === $ && Je)) {
                          const mt = Ft(Je) ? (0, R.g)(Je).querySelector('.inner-scroll') : Je;
                          return !Je.querySelector('ion-refresher') && 0 === mt.scrollTop;
                        }
                        return !0;
                      },
                      onStart: (Qe) => {
                        (j = void 0 !== n.canDismiss && !0 !== n.canDismiss && 0 === me),
                          Qe.deltaY > 0 && k && (k.scrollY = !1),
                          (0, R.r)(() => {
                            n.focus();
                          }),
                          r.progressStart(!0, 1 - $);
                      },
                      onMove: (Qe) => {
                        Qe.deltaY > 0 && k && (k.scrollY = !1);
                        const mt = a.length > 1 ? 1 - a[1] : void 0,
                          ct = 1 - $ + Qe.deltaY / I,
                          wn = void 0 !== mt && ct >= mt && j,
                          Rt = wn ? 0.95 : 0.9999,
                          kt = wn && void 0 !== mt ? mt + _r((ct - mt) / (Rt - mt)) : ct;
                        (M = (0, R.k)(1e-4, kt, Rt)), r.progressStep(M);
                      },
                      onEnd: (Qe) => {
                        const ct = $ - (Qe.deltaY + 350 * Qe.velocityY) / I,
                          wn = a.reduce((Rt, kt) => (Math.abs(kt - ct) < Math.abs(Rt - ct) ? kt : Rt));
                        ft({ breakpoint: wn, breakpointOffset: M, canDismiss: j, animated: !0 });
                      },
                    });
                  return { gesture: Bt, moveSheetToBreakpoint: ft };
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
                    (0, E.A)(function* () {
                      (e.currentBreakpoint = 0),
                        e.ionBreakpointDidChange.emit({ breakpoint: e.currentBreakpoint }),
                        yield e.dismiss(void 0, Be),
                        (e.gestureAnimationDismissing = !1);
                    }),
                  );
              }
              dismiss(e, t) {
                var o = this;
                return (0, E.A)(function* () {
                  var i;
                  if (o.gestureAnimationDismissing && t !== Be) return !1;
                  const r = yield o.lockController.lock();
                  if ('handler' !== t && !(yield o.checkCanDismiss(e, t))) return r(), !1;
                  const { presentingElement: a } = o;
                  void 0 !== a && 'ios' === (0, X.b)(o) && kr(o.statusBarStyle),
                    typeof window < 'u' &&
                      o.keyboardOpenCallback &&
                      (window.removeEventListener(vr, o.keyboardOpenCallback), (o.keyboardOpenCallback = void 0));
                  const d = yield P(o, e, t, 'modalLeave', Ka, jc, {
                    presentingEl: a,
                    currentBreakpoint: null !== (i = o.currentBreakpoint) && void 0 !== i ? i : o.initialBreakpoint,
                    backdropBreakpoint: o.backdropBreakpoint,
                  });
                  if (d) {
                    const { delegate: p } = o.getDelegate();
                    yield No(p, o.usersElement),
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
                return (0, E.A)(function* () {
                  if (!t.isSheetModal) return void (0, Ae.p)('setCurrentBreakpoint is only supported on sheet modals.');
                  if (!t.breakpoints.includes(e))
                    return void (0, Ae.p)(
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
                return (0, E.A)(function* () {
                  return e.currentBreakpoint;
                })();
              }
              moveToNextBreakpoint() {
                var e = this;
                return (0, E.A)(function* () {
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
                          [qo]: !1 === s,
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
          Vc = {
            ionModalDidPresent: 'ionViewDidEnter',
            ionModalWillPresent: 'ionViewWillEnter',
            ionModalWillDismiss: 'ionViewWillLeave',
            ionModalDidDismiss: 'ionViewDidLeave',
          };
        var n;
        const Wc = function Xa() {
            typeof customElements > 'u' ||
              ['ion-modal', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-modal':
                    customElements.get(e) || customElements.define(e, Hc);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || lo();
                }
              });
          },
          Za = (n, e, t) => {
            const o = e.getBoundingClientRect(),
              i = o.height;
            let r = o.width;
            return 'cover' === n && t && (r = t.getBoundingClientRect().width), { contentWidth: r, contentHeight: i };
          },
          Yc = (n, e, t) => {
            let o = [];
            switch (e) {
              case 'hover':
                let i;
                o = [
                  {
                    eventName: 'mouseenter',
                    callback:
                      ((r = (0, E.A)(function* (a) {
                        a.stopPropagation(),
                          i && clearTimeout(i),
                          (i = setTimeout(() => {
                            (0, R.r)(() => {
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
          Qa = (n, e) => (e && 'ION-ITEM' === e.tagName ? n.findIndex((t) => t === e) : -1),
          Pi = (n) => {
            const t = (0, R.g)(n).querySelector('button');
            t && (0, R.r)(() => t.focus());
          },
          Zc = (n) => {
            const e = (function () {
              var t = (0, E.A)(function* (o) {
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
                      const p = ((n, e) => n[Qa(n, e) + 1])(a, r);
                      void 0 !== p && Pi(p);
                      break;
                    case 'ArrowUp':
                      o.preventDefault();
                      const m = ((n, e) => n[Qa(n, e) - 1])(a, r);
                      void 0 !== m && Pi(m);
                      break;
                    case 'Home':
                      o.preventDefault();
                      const v = a[0];
                      void 0 !== v && Pi(v);
                      break;
                    case 'End':
                      o.preventDefault();
                      const _ = a[a.length - 1];
                      void 0 !== _ && Pi(_);
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
          Ja = (n, e, t, o, i, r, a, s, d, p, m) => {
            var v;
            let _ = { top: 0, left: 0, width: 0, height: 0 };
            if ('event' === r) {
              if (!m) return d;
              _ = { top: m.clientY, left: m.clientX, width: 1, height: 1 };
            } else {
              const ze =
                p ||
                (null === (v = null == m ? void 0 : m.detail) || void 0 === v ? void 0 : v.ionShadowTarget) ||
                (null == m ? void 0 : m.target);
              if (!ze) return d;
              const Ne = ze.getBoundingClientRect();
              _ = { top: Ne.top, left: Ne.left, width: Ne.width, height: Ne.height };
            }
            const k = ed(a, _, e, t, o, i, n),
              I = td(s, a, _, e, t),
              $ = k.top + I.top,
              M = k.left + I.left,
              { arrowTop: j, arrowLeft: G } = Jc(a, o, i, $, M, e, t, n),
              { originX: W, originY: Z } = Qc(a, s, n);
            return { top: $, left: M, referenceCoordinates: _, arrowTop: j, arrowLeft: G, originX: W, originY: Z };
          },
          Qc = (n, e, t) => {
            switch (n) {
              case 'top':
                return { originX: es(e), originY: 'bottom' };
              case 'bottom':
                return { originX: es(e), originY: 'top' };
              case 'left':
                return { originX: 'right', originY: Ai(e) };
              case 'right':
                return { originX: 'left', originY: Ai(e) };
              case 'start':
                return { originX: t ? 'left' : 'right', originY: Ai(e) };
              case 'end':
                return { originX: t ? 'right' : 'left', originY: Ai(e) };
            }
          },
          es = (n) => {
            switch (n) {
              case 'start':
                return 'left';
              case 'center':
                return 'center';
              case 'end':
                return 'right';
            }
          },
          Ai = (n) => {
            switch (n) {
              case 'start':
                return 'top';
              case 'center':
                return 'center';
              case 'end':
                return 'bottom';
            }
          },
          Jc = (n, e, t, o, i, r, a, s) => {
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
          ed = (n, e, t, o, i, r, a) => {
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
          td = (n, e, t, o, i) => {
            switch (n) {
              case 'center':
                return od(e, t, o, i);
              case 'end':
                return nd(e, t, o, i);
              default:
                return { top: 0, left: 0 };
            }
          },
          nd = (n, e, t, o) => {
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
          od = (n, e, t, o) => {
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
          ts = (n, e, t, o, i, r, a, s, d, p, m, v, _ = 0, k = 0, I = 0) => {
            let $ = _;
            const M = k;
            let W,
              j = t,
              G = e,
              Z = p,
              ce = m,
              me = !1,
              ze = !1;
            const Ne = v ? v.top + v.height : r / 2 - s / 2,
              He = v ? v.height : 0;
            let at = !1;
            return (
              j < o + d
                ? ((j = o), (me = !0), (Z = 'left'))
                : a + o + j + d > i && ((ze = !0), (j = i - a - o), (Z = 'right')),
              Ne + He + s > r &&
                ('top' === n || 'bottom' === n) &&
                (Ne - s > 0
                  ? ((G = Math.max(12, Ne - s - He - (I - 1))), ($ = G + s), (ce = 'bottom'), (at = !0))
                  : (W = o)),
              {
                top: G,
                left: j,
                bottom: W,
                originX: Z,
                originY: ce,
                checkSafeAreaLeft: me,
                checkSafeAreaRight: ze,
                arrowTop: $,
                arrowLeft: M,
                addPopoverBottomClass: at,
              }
            );
          },
          ad = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              _ = p.defaultView.innerHeight,
              k = (0, R.g)(n),
              I = k.querySelector('.popover-content'),
              $ = k.querySelector('.popover-arrow'),
              M =
                r ||
                (null === (t = null == o ? void 0 : o.detail) || void 0 === t ? void 0 : t.ionShadowTarget) ||
                (null == o ? void 0 : o.target),
              { contentWidth: j, contentHeight: G } = Za(i, I, M),
              { arrowWidth: W, arrowHeight: Z } = ((n) => {
                if (!n) return { arrowWidth: 0, arrowHeight: 0 };
                const { width: e, height: t } = n.getBoundingClientRect();
                return { arrowWidth: e, arrowHeight: t };
              })($),
              me = Ja(
                m,
                j,
                G,
                W,
                Z,
                a,
                s,
                d,
                { top: _ / 2 - G / 2, left: v / 2 - j / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              ze = 'cover' === i ? 0 : 5,
              Ne = 'cover' === i ? 0 : 25,
              {
                originX: He,
                originY: at,
                top: st,
                left: lt,
                bottom: ft,
                checkSafeAreaLeft: Bt,
                checkSafeAreaRight: Qe,
                arrowTop: Je,
                arrowLeft: mt,
                addPopoverBottomClass: ct,
              } = ts(
                s,
                me.top,
                me.left,
                ze,
                v,
                _,
                j,
                G,
                Ne,
                me.originX,
                me.originY,
                me.referenceCoordinates,
                me.arrowTop,
                me.arrowLeft,
                Z,
              ),
              wn = (0, pe.c)(),
              Rt = (0, pe.c)(),
              kt = (0, pe.c)();
            return (
              Rt.addElement(k.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              kt
                .addElement(k.querySelector('.popover-arrow'))
                .addElement(k.querySelector('.popover-content'))
                .fromTo('opacity', 0.01, 1),
              wn
                .easing('ease')
                .duration(100)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${j}px`),
                    ct && n.classList.add('popover-bottom'),
                    void 0 !== ft && I.style.setProperty('bottom', `${ft}px`);
                  let ir = `${lt}px`;
                  Bt && (ir = `${lt}px + var(--ion-safe-area-left, 0)`),
                    Qe && (ir = `${lt}px - var(--ion-safe-area-right, 0)`),
                    I.style.setProperty('top', `calc(${st}px + var(--offset-y, 0))`),
                    I.style.setProperty('left', `calc(${ir} + var(--offset-x, 0))`),
                    I.style.setProperty('transform-origin', `${at} ${He}`),
                    null !== $ &&
                      (((n, e = !1, t, o) => !((!t && !o) || ('top' !== n && 'bottom' !== n && e)))(
                        s,
                        me.top !== st || me.left !== lt,
                        o,
                        r,
                      )
                        ? ($.style.setProperty('top', `calc(${Je}px + var(--offset-y, 0))`),
                          $.style.setProperty('left', `calc(${mt}px + var(--offset-x, 0))`))
                        : $.style.setProperty('display', 'none'));
                })
                .addAnimation([Rt, kt])
            );
          },
          sd = (n) => {
            const e = (0, R.g)(n),
              t = e.querySelector('.popover-content'),
              o = e.querySelector('.popover-arrow'),
              i = (0, pe.c)(),
              r = (0, pe.c)(),
              a = (0, pe.c)();
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
          cd = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              _ = p.defaultView.innerHeight,
              k = (0, R.g)(n),
              I = k.querySelector('.popover-content'),
              $ =
                r ||
                (null === (t = null == o ? void 0 : o.detail) || void 0 === t ? void 0 : t.ionShadowTarget) ||
                (null == o ? void 0 : o.target),
              { contentWidth: M, contentHeight: j } = Za(i, I, $),
              W = Ja(
                m,
                M,
                j,
                0,
                0,
                a,
                s,
                d,
                { top: _ / 2 - j / 2, left: v / 2 - M / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              Z = 'cover' === i ? 0 : 12,
              {
                originX: ce,
                originY: me,
                top: ze,
                left: Ne,
                bottom: He,
              } = ts(s, W.top, W.left, Z, v, _, M, j, 0, W.originX, W.originY, W.referenceCoordinates),
              at = (0, pe.c)(),
              st = (0, pe.c)(),
              lt = (0, pe.c)(),
              ft = (0, pe.c)(),
              Bt = (0, pe.c)();
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
                  top: `calc(${ze}px + var(--offset-y, 0px))`,
                  left: `calc(${Ne}px + var(--offset-x, 0px))`,
                  'transform-origin': `${me} ${ce}`,
                })
                .beforeAddWrite(() => {
                  void 0 !== He && I.style.setProperty('bottom', `${He}px`);
                })
                .fromTo('transform', 'scale(0.8)', 'scale(1)'),
              Bt.addElement(k.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1),
              at
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .duration(300)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${M}px`),
                    'bottom' === me && n.classList.add('popover-bottom');
                })
                .addAnimation([st, lt, ft, Bt])
            );
          },
          dd = (n) => {
            const e = (0, R.g)(n),
              t = e.querySelector('.popover-content'),
              o = (0, pe.c)(),
              i = (0, pe.c)(),
              r = (0, pe.c)();
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
          hd = (0, c.w$)(
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
                  (this.coreDelegate = no()),
                  (this.lockController = vn()),
                  (this.inline = !1),
                  (this.focusDescendantOnPresent = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, Ee);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = fd[e.type];
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
                      ? (this.destroyTriggerInteraction = Yc(r, t, o))
                      : (0, Ae.p)(
                          `A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,
                          this.el,
                        );
                  }),
                  (this.configureKeyboardInteraction = () => {
                    const { destroyKeyboardInteraction: e, el: t } = this;
                    e && e(), (this.destroyKeyboardInteraction = Zc(t));
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
                        const a = (0, R.g)(o).querySelector('.popover-content');
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
                Uo(t), e();
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
                      : Go(o);
                (this.parentPopover = o.closest(`ion-popover:not(#${i})`)),
                  void 0 === this.alignment && (this.alignment = 'ios' === (0, X.b)(this) ? 'center' : 'start');
              }
              componentDidLoad() {
                const { parentPopover: e, isOpen: t } = this;
                !0 === t && (0, R.r)(() => this.present()),
                  e &&
                    (0, R.a)(e, 'ionPopoverWillDismiss', () => {
                      this.dismiss(void 0, void 0, !1);
                    }),
                  this.configureTriggerInteraction();
              }
              presentFromTrigger(e, t = !1) {
                var o = this;
                return (0, E.A)(function* () {
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
                return (0, E.A)(function* () {
                  const o = yield t.lockController.lock();
                  if (t.presented) return void o();
                  const { el: i } = t,
                    { inline: r, delegate: a } = t.getDelegate(!0);
                  t.ionMount.emit(),
                    (t.usersElement = yield to(a, i, t.component, ['popover-viewport'], t.componentProps, r)),
                    t.keyboardEvents || t.configureKeyboardInteraction(),
                    t.configureDismissInteraction(),
                    (0, R.j)(i) ? yield (0, ye.e)(t.usersElement) : t.keepContentsMounted || (yield (0, ye.w)()),
                    yield D(t, 'popoverEnter', ad, cd, {
                      event: e || t.event,
                      size: t.size,
                      trigger: t.triggerEl,
                      reference: t.reference,
                      side: t.side,
                      align: t.alignment,
                    }),
                    t.focusDescendantOnPresent && io(i),
                    o();
                })();
              }
              dismiss(e, t, o = !0) {
                var i = this;
                return (0, E.A)(function* () {
                  const r = yield i.lockController.lock(),
                    { destroyKeyboardInteraction: a, destroyDismissInteraction: s } = i;
                  o && i.parentPopover && i.parentPopover.dismiss(e, t, o);
                  const d = yield P(i, e, t, 'popoverLeave', sd, dd, i.event);
                  if (d) {
                    a && (a(), (i.destroyKeyboardInteraction = void 0)),
                      s && (s(), (i.destroyDismissInteraction = void 0));
                    const { delegate: p } = i.getDelegate();
                    yield No(p, i.usersElement);
                  }
                  return r(), d;
                })();
              }
              getParentPopover() {
                var e = this;
                return (0, E.A)(function* () {
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
                        [qo]: !1 === d,
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
          fd = {
            ionPopoverDidPresent: 'ionViewDidEnter',
            ionPopoverWillPresent: 'ionViewWillEnter',
            ionPopoverWillDismiss: 'ionViewWillLeave',
            ionPopoverDidDismiss: 'ionViewDidLeave',
          };
        const md = function Ir() {
          typeof customElements > 'u' ||
            ['ion-popover', 'ion-backdrop'].forEach((e) => {
              switch (e) {
                case 'ion-popover':
                  customElements.get(e) || customElements.define(e, hd);
                  break;
                case 'ion-backdrop':
                  customElements.get(e) || lo();
              }
            });
        };
        var ns = (function (n) {
          return (n.Heavy = 'HEAVY'), (n.Medium = 'MEDIUM'), (n.Light = 'LIGHT'), n;
        })(ns || {});
        const co = {
            getEngine() {
              const n = Ho();
              if (null != n && n.isPluginAvailable('Haptics')) return n.Plugins.Haptics;
            },
            available() {
              if (!this.getEngine()) return !1;
              const e = Ho();
              return (
                'web' !== (null == e ? void 0 : e.getPlatform()) ||
                (typeof navigator < 'u' && void 0 !== navigator.vibrate)
              );
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
              this.impact({ style: ns.Light });
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
          Xo = () => co.available(),
          os = () => {
            Xo() && co.selectionStart();
          },
          is = () => {
            Xo() && co.selectionChanged();
          },
          as = (n, e) => {
            let t, o;
            const i = (s, d, p) => {
                if (typeof document > 'u') return;
                const m = document.elementFromPoint(s, d);
                m && e(m) && !m.disabled ? m !== t && (a(), r(m, p)) : a();
              },
              r = (s, d) => {
                (t = s), o || (o = t);
                const p = t;
                (0, c.bN)(() => p.classList.add('ion-activated')), d();
              },
              a = (s = !1) => {
                if (!t) return;
                const d = t;
                (0, c.bN)(() => d.classList.remove('ion-activated')), s && o !== t && t.click(), (t = void 0);
              };
            return (0, xr.createGesture)({
              el: n,
              gestureName: 'buttonActiveDrag',
              threshold: 0,
              onStart: (s) => i(s.currentX, s.currentY, os),
              onMove: (s) => i(s.currentX, s.currentY, is),
              onEnd: () => {
                a(!0), Xo() && co.selectionEnd(), (o = void 0);
              },
            });
          };
        let Cr;
        const ss = (n, e, t, o, i) => (
            (t = 'ios' === (t && Li(t)) ? 'ios' : 'md'),
            o && 'ios' === t
              ? (n = Li(o))
              : i && 'md' === t
                ? (n = Li(i))
                : (!n && e && !ls(e) && (n = e), zi(n) && (n = Li(n))),
            zi(n) && '' !== n.trim() && '' === n.replace(/[a-z]|-|\d/gi, '') ? n : null
          ),
          $r = (n) => (zi(n) && ((n = n.trim()), ls(n)) ? n : null),
          ls = (n) => n.length > 0 && /(\/|\.)/.test(n),
          zi = (n) => 'string' == typeof n,
          Li = (n) => n.toLowerCase(),
          kd = (n) =>
            n && '' !== n.dir
              ? 'rtl' === n.dir.toLowerCase()
              : 'rtl' === (null == document ? void 0 : document.dir.toLowerCase()),
          cs = (n) => {
            if (1 === n.nodeType) {
              if ('script' === n.nodeName.toLowerCase()) return !1;
              for (let e = 0; e < n.attributes.length; e++) {
                const t = n.attributes[e].name;
                if (zi(t) && 0 === t.toLowerCase().indexOf('on')) return !1;
              }
              for (let e = 0; e < n.childNodes.length; e++) if (!cs(n.childNodes[e])) return !1;
            }
            return !0;
          },
          Ln = new Map(),
          ds = new Map();
        let Sr;
        const Ed = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(),
                  this.__registerHost(),
                  this.__attachShadow(),
                  (this.iconName = null),
                  (this.inheritedAttributes = {}),
                  (this.didLoadIcon = !1),
                  (this.svgContent = void 0),
                  (this.isVisible = !1),
                  (this.mode = Td()),
                  (this.color = void 0),
                  (this.ios = void 0),
                  (this.md = void 0),
                  (this.flipRtl = void 0),
                  (this.name = void 0),
                  (this.src = void 0),
                  (this.icon = void 0),
                  (this.size = void 0),
                  (this.lazy = !1),
                  (this.sanitize = !0);
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
                  (this.isVisible = !0), this.loadIcon();
                });
              }
              componentDidLoad() {
                this.didLoadIcon || this.loadIcon();
              }
              disconnectedCallback() {
                this.io && (this.io.disconnect(), (this.io = void 0));
              }
              waitUntilVisible(e, t, o) {
                if (c.L2.isBrowser && this.lazy && typeof window < 'u' && window.IntersectionObserver) {
                  const i = (this.io = new window.IntersectionObserver(
                    (r) => {
                      r[0].isIntersecting && (i.disconnect(), (this.io = void 0), o());
                    },
                    { rootMargin: t },
                  ));
                  i.observe(e);
                } else o();
              }
              loadIcon() {
                if (c.L2.isBrowser && this.isVisible) {
                  const e = ((n) => {
                    let e = $r(n.src);
                    return (
                      e ||
                      ((e = ss(n.name, n.icon, n.mode, n.ios, n.md)),
                      e
                        ? ((n, e) => {
                            const t = (() => {
                              if (typeof window > 'u') return new Map();
                              if (!Cr) {
                                const n = window;
                                (n.Ionicons = n.Ionicons || {}), (Cr = n.Ionicons.map = n.Ionicons.map || new Map());
                              }
                              return Cr;
                            })().get(n);
                            if (t) return t;
                            try {
                              return (0, c.OX)(`svg/${n}.svg`);
                            } catch {
                              console.warn(
                                `[Ionicons Warning]: Could not load icon with name "${n}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,
                                e,
                              );
                            }
                          })(e, n)
                        : n.icon && ((e = $r(n.icon)), e || ((e = $r(n.icon[n.mode])), e))
                          ? e
                          : null)
                    );
                  })(this);
                  e &&
                    (Ln.has(e)
                      ? (this.svgContent = Ln.get(e))
                      : ((n, e) => {
                          let t = ds.get(n);
                          if (!t) {
                            if (!(typeof fetch < 'u' && typeof document < 'u')) return Ln.set(n, ''), Promise.resolve();
                            if (
                              ((n) => n.startsWith('data:image/svg+xml'))(n) &&
                              ((n) => -1 !== n.indexOf(';utf8,'))(n)
                            ) {
                              Sr || (Sr = new DOMParser());
                              const i = Sr.parseFromString(n, 'text/html').querySelector('svg');
                              return i && Ln.set(n, i.outerHTML), Promise.resolve();
                            }
                            (t = fetch(n).then((o) => {
                              if (o.ok)
                                return o.text().then((i) => {
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
                                        if ((t.setAttribute('class', (o + ' s-ion-icon').trim()), cs(t)))
                                          return e.innerHTML;
                                      }
                                      return '';
                                    })(i)),
                                    Ln.set(n, i || '');
                                });
                              Ln.set(n, '');
                            })),
                              ds.set(n, t);
                          }
                          return t;
                        })(e, this.sanitize).then(() => (this.svgContent = Ln.get(e))),
                    (this.didLoadIcon = !0));
                }
                this.iconName = ss(this.name, this.icon, this.mode, this.ios, this.md);
              }
              render() {
                const { flipRtl: e, iconName: t, inheritedAttributes: o, el: i } = this,
                  r = this.mode || 'md',
                  a = !!t && (t.includes('arrow') || t.includes('chevron')) && !1 !== e,
                  s = e || a;
                return (0, c.h)(
                  c.xr,
                  Object.assign(
                    {
                      role: 'img',
                      class: Object.assign(Object.assign({ [r]: !0 }, Dd(this.color)), {
                        [`icon-${this.size}`]: !!this.size,
                        'flip-rtl': s,
                        'icon-rtl': s && kd(i),
                      }),
                    },
                    o,
                  ),
                  (0, c.h)(
                    'div',
                    c.L2.isBrowser && this.svgContent
                      ? { class: 'icon-inner', innerHTML: this.svgContent }
                      : { class: 'icon-inner' },
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
                return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
              }
            },
            [
              1,
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
          Td = () => (c.L2.isBrowser && typeof document < 'u' && document.documentElement.getAttribute('mode')) || 'md',
          Dd = (n) => (n ? { 'ion-color': !0, [`ion-color-${n}`]: !0 } : null);
        const Ad = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
              }
              addRipple(e, t) {
                var o = this;
                return (0, E.A)(function* () {
                  return new Promise((i) => {
                    (0, c.gv)(() => {
                      const r = o.el.getBoundingClientRect(),
                        a = r.width,
                        s = r.height,
                        d = Math.sqrt(a * a + s * s),
                        p = Math.max(s, a),
                        m = o.unbounded ? p : d + Ld,
                        v = Math.floor(p * Od),
                        _ = m / v;
                      let k = e - r.left,
                        I = t - r.top;
                      o.unbounded && ((k = 0.5 * a), (I = 0.5 * s));
                      const $ = k - 0.5 * v,
                        M = I - 0.5 * v,
                        j = 0.5 * a - k,
                        G = 0.5 * s - I;
                      (0, c.bN)(() => {
                        const W = document.createElement('div');
                        W.classList.add('ripple-effect');
                        const Z = W.style;
                        (Z.top = M + 'px'),
                          (Z.left = $ + 'px'),
                          (Z.width = Z.height = v + 'px'),
                          Z.setProperty('--final-scale', `${_}`),
                          Z.setProperty('--translate-end', `${j}px, ${G}px`),
                          (o.el.shadowRoot || o.el).appendChild(W),
                          setTimeout(() => {
                            i(() => {
                              zd(W);
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
          zd = (n) => {
            n.classList.add('fade-out'),
              setTimeout(() => {
                n.remove();
              }, 200);
          },
          Ld = 10,
          Od = 0.5;
        function xn() {
          typeof customElements > 'u' ||
            ['ion-ripple-effect'].forEach((e) => {
              'ion-ripple-effect' === e && (customElements.get(e) || customElements.define(e, Ad));
            });
        }
        const Md = (n) => {
            const e = (0, pe.c)(),
              t = (0, pe.c)(),
              o = (0, pe.c)();
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
          Fd = (n) => {
            const e = (0, pe.c)(),
              t = (0, pe.c)(),
              o = (0, pe.c)();
            return (
              t.addElement(n.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(0%)', 'translateY(100%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([t, o])
            );
          },
          jd = (n) => {
            const e = (0, pe.c)(),
              t = (0, pe.c)(),
              o = (0, pe.c)();
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
          Bd = (n) => {
            const e = (0, pe.c)(),
              t = (0, pe.c)(),
              o = (0, pe.c)();
            return (
              t.addElement(n.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
              o
                .addElement(n.querySelector('.action-sheet-wrapper'))
                .fromTo('transform', 'translateY(0%)', 'translateY(100%)'),
              e.addElement(n).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([t, o])
            );
          },
          Hd = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(),
                  this.__registerHost(),
                  (this.didPresent = (0, c.lh)(this, 'ionActionSheetDidPresent', 7)),
                  (this.willPresent = (0, c.lh)(this, 'ionActionSheetWillPresent', 7)),
                  (this.willDismiss = (0, c.lh)(this, 'ionActionSheetWillDismiss', 7)),
                  (this.didDismiss = (0, c.lh)(this, 'ionActionSheetDidDismiss', 7)),
                  (this.didPresentShorthand = (0, c.lh)(this, 'didPresent', 7)),
                  (this.willPresentShorthand = (0, c.lh)(this, 'willPresent', 7)),
                  (this.willDismissShorthand = (0, c.lh)(this, 'willDismiss', 7)),
                  (this.didDismissShorthand = (0, c.lh)(this, 'didDismiss', 7)),
                  (this.delegateController = rt(this)),
                  (this.lockController = vn()),
                  (this.triggerController = br()),
                  (this.presented = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, Ee);
                  }),
                  (this.dispatchCancelHandler = (e) => {
                    if (De(e.detail.role)) {
                      const o = this.getButtons().find((i) => 'cancel' === i.role);
                      this.callButtonHandler(o);
                    }
                  }),
                  (this.overlayIndex = void 0),
                  (this.delegate = void 0),
                  (this.hasController = !1),
                  (this.keyboardClose = !0),
                  (this.enterAnimation = void 0),
                  (this.leaveAnimation = void 0),
                  (this.buttons = []),
                  (this.cssClass = void 0),
                  (this.backdropDismiss = !0),
                  (this.header = void 0),
                  (this.subHeader = void 0),
                  (this.translucent = !1),
                  (this.animated = !0),
                  (this.htmlAttributes = void 0),
                  (this.isOpen = !1),
                  (this.trigger = void 0);
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
                return (0, E.A)(function* () {
                  const t = yield e.lockController.lock();
                  yield e.delegateController.attachViewToDom(), yield D(e, 'actionSheetEnter', Md, jd), t();
                })();
              }
              dismiss(e, t) {
                var o = this;
                return (0, E.A)(function* () {
                  const i = yield o.lockController.lock(),
                    r = yield P(o, e, t, 'actionSheetLeave', Fd, Bd);
                  return r && o.delegateController.removeViewFromDom(), i(), r;
                })();
              }
              onDidDismiss() {
                return K(this.el, 'ionActionSheetDidDismiss');
              }
              onWillDismiss() {
                return K(this.el, 'ionActionSheetWillDismiss');
              }
              buttonClick(e) {
                var t = this;
                return (0, E.A)(function* () {
                  const o = e.role;
                  return De(o)
                    ? t.dismiss(e.data, o)
                    : (yield t.callButtonHandler(e))
                      ? t.dismiss(e.data, e.role)
                      : Promise.resolve();
                })();
              }
              callButtonHandler(e) {
                return (0, E.A)(function* () {
                  return !(
                    e &&
                    !1 ===
                      (yield ((n, e) => {
                        if ('function' == typeof n)
                          return X.c.get(
                            '_zoneGate',
                            Ue,
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
                Uo(this.el), this.triggerChanged();
              }
              disconnectedCallback() {
                this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
                  this.triggerController.removeClickListener();
              }
              componentWillLoad() {
                var e;
                (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || Go(this.el);
              }
              componentDidLoad() {
                const { groupEl: e, wrapperEl: t } = this;
                !this.gesture &&
                  'ios' === (0, X.b)(this) &&
                  t &&
                  e &&
                  (0, c.gv)(() => {
                    e.scrollHeight > e.clientHeight ||
                      ((this.gesture = as(t, (i) => i.classList.contains('action-sheet-button'))),
                      this.gesture.enable(!0));
                  }),
                  !0 === this.isOpen && (0, R.r)(() => this.present()),
                  this.triggerChanged();
              }
              render() {
                const { header: e, htmlAttributes: t, overlayIndex: o } = this,
                  i = (0, X.b)(this),
                  r = this.getButtons(),
                  a = r.find((p) => 'cancel' === p.role),
                  s = r.filter((p) => 'cancel' !== p.role),
                  d = `action-sheet-${o}-header`;
                return (0, c.h)(
                  c.xr,
                  Object.assign(
                    {
                      key: '7bbd202ca9e19727e7514abbe073687d982f80c3',
                      role: 'dialog',
                      'aria-modal': 'true',
                      'aria-labelledby': void 0 !== e ? d : null,
                      tabindex: '-1',
                    },
                    t,
                    {
                      style: { zIndex: `${2e4 + this.overlayIndex}` },
                      class: Object.assign(Object.assign({ [i]: !0 }, yt(this.cssClass)), {
                        'overlay-hidden': !0,
                        'action-sheet-translucent': this.translucent,
                      }),
                      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
                      onIonBackdropTap: this.onBackdropTap,
                    },
                  ),
                  (0, c.h)('ion-backdrop', {
                    key: '23344a9221a2e6720d7b9de5249dc37256cafa7b',
                    tappable: this.backdropDismiss,
                  }),
                  (0, c.h)('div', {
                    key: 'fbc2ba15549c2ab04e759e82df6e177fd80cc0a6',
                    tabindex: '0',
                    'aria-hidden': 'true',
                  }),
                  (0, c.h)(
                    'div',
                    {
                      key: '748ee5235d0b4cb26d6f1b7589f77af2e37ad28a',
                      class: 'action-sheet-wrapper ion-overlay-wrapper',
                      ref: (p) => (this.wrapperEl = p),
                    },
                    (0, c.h)(
                      'div',
                      { key: '7ce5fa236cf75e9b1e49c4725c9a811078706554', class: 'action-sheet-container' },
                      (0, c.h)(
                        'div',
                        {
                          key: 'dc2251f3bcee4a93e3449f09621cbd2b65d329e9',
                          class: 'action-sheet-group',
                          ref: (p) => (this.groupEl = p),
                        },
                        void 0 !== e &&
                          (0, c.h)(
                            'div',
                            {
                              key: '48d325c8a852f56ed57a9ada1a6709d05ba32ee2',
                              id: d,
                              class: {
                                'action-sheet-title': !0,
                                'action-sheet-has-sub-title': void 0 !== this.subHeader,
                              },
                            },
                            e,
                            this.subHeader &&
                              (0, c.h)(
                                'div',
                                { key: '66093728052eb67f37a35f3232761ce4a08896f3', class: 'action-sheet-sub-title' },
                                this.subHeader,
                              ),
                          ),
                        s.map((p) =>
                          (0, c.h)(
                            'button',
                            Object.assign({}, p.htmlAttributes, {
                              type: 'button',
                              id: p.id,
                              class: us(p),
                              onClick: () => this.buttonClick(p),
                              disabled: p.disabled,
                            }),
                            (0, c.h)(
                              'span',
                              { class: 'action-sheet-button-inner' },
                              p.icon &&
                                (0, c.h)('ion-icon', {
                                  icon: p.icon,
                                  'aria-hidden': 'true',
                                  lazy: !1,
                                  class: 'action-sheet-icon',
                                }),
                              p.text,
                            ),
                            'md' === i && (0, c.h)('ion-ripple-effect', null),
                          ),
                        ),
                      ),
                      a &&
                        (0, c.h)(
                          'div',
                          {
                            key: 'f4eb8e3e2885b85af5080df18d0de0bdd1d719de',
                            class: 'action-sheet-group action-sheet-group-cancel',
                          },
                          (0, c.h)(
                            'button',
                            Object.assign({ key: '169f4eb09255aba85062baad49ceb151239fbfb7' }, a.htmlAttributes, {
                              type: 'button',
                              class: us(a),
                              onClick: () => this.buttonClick(a),
                            }),
                            (0, c.h)(
                              'span',
                              { key: '25fb8a466dd67ea94c79cfb4f9965527e1ce6d42', class: 'action-sheet-button-inner' },
                              a.icon &&
                                (0, c.h)('ion-icon', {
                                  key: 'eb5b071e120a2c86afdf967af6a763a43044d1ca',
                                  icon: a.icon,
                                  'aria-hidden': 'true',
                                  lazy: !1,
                                  class: 'action-sheet-icon',
                                }),
                              a.text,
                            ),
                            'md' === i &&
                              (0, c.h)('ion-ripple-effect', { key: '452ad7e1052b2c681e2d98de8193949755ad4d54' }),
                          ),
                        ),
                    ),
                  ),
                  (0, c.h)('div', {
                    key: 'e1cecf280c987c050d9445e2c458b903f153089b',
                    tabindex: '0',
                    'aria-hidden': 'true',
                  }),
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
              34,
              'ion-action-sheet',
              {
                overlayIndex: [2, 'overlay-index'],
                delegate: [16],
                hasController: [4, 'has-controller'],
                keyboardClose: [4, 'keyboard-close'],
                enterAnimation: [16],
                leaveAnimation: [16],
                buttons: [16],
                cssClass: [1, 'css-class'],
                backdropDismiss: [4, 'backdrop-dismiss'],
                header: [1],
                subHeader: [1, 'sub-header'],
                translucent: [4],
                animated: [4],
                htmlAttributes: [16],
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
          us = (n) =>
            Object.assign(
              {
                'action-sheet-button': !0,
                'ion-activatable': !n.disabled,
                'ion-focusable': !n.disabled,
                [`action-sheet-${n.role}`]: void 0 !== n.role,
              },
              yt(n.cssClass),
            );
        const Vd = function ps() {
            typeof customElements > 'u' ||
              ['ion-action-sheet', 'ion-backdrop', 'ion-icon', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-action-sheet':
                    customElements.get(e) || customElements.define(e, Hd);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || lo();
                    break;
                  case 'ion-icon':
                    customElements.get(e) ||
                      (function on() {
                        typeof customElements > 'u' ||
                          ['ion-icon'].forEach((e) => {
                            'ion-icon' === e && (customElements.get(e) || customElements.define(e, Ed));
                          });
                      })();
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) || xn();
                }
              });
          },
          Gd = (0, c.w$)(
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
                      ? Fa(this.href, e, this.routerDirection, this.routerAnimation)
                      : (0, R.h)(t) && this.submitForm(e);
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
                  (this.inheritedAttributes = (0, R.i)(this.el));
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
                      : ((0, Ae.p)(
                          `Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,
                          this.el,
                        ),
                        null)
                    : ((0, Ae.p)(
                        `Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,
                        this.el,
                      ),
                      null);
                }
                return void 0 !== e
                  ? ((0, Ae.p)(
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
                  M = void 0 === d ? 'button' : 'a',
                  j = 'button' === M ? { type: o } : { download: this.download, href: d, rel: r, target: a };
                let G = this.fill;
                return (
                  null == G && (G = this.inToolbar || this.inListHeader ? 'clear' : 'solid'),
                  'button' !== o && this.renderHiddenButton(),
                  (0, c.h)(
                    c.xr,
                    {
                      key: '340a809d85698741bb36e796355cae89a970655f',
                      onClick: this.handleClick,
                      'aria-disabled': i ? 'true' : null,
                      class: qe(p, {
                        [e]: !0,
                        [t]: !0,
                        [`${t}-${m}`]: void 0 !== m,
                        [`${t}-${$}`]: void 0 !== $,
                        [`${t}-${_}`]: void 0 !== _,
                        [`${t}-${G}`]: !0,
                        [`${t}-strong`]: k,
                        'in-toolbar': Ze('ion-toolbar', this.el),
                        'in-toolbar-color': Ze('ion-toolbar[color]', this.el),
                        'in-buttons': Ze('ion-buttons', this.el),
                        'button-has-icon-only': v,
                        'button-disabled': i,
                        'ion-activatable': !0,
                        'ion-focusable': !0,
                      }),
                    },
                    (0, c.h)(
                      M,
                      Object.assign(
                        { key: '03ae1b94a0d606aa65aa6f82c2fc76abcf3f1300' },
                        j,
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
        const Yd = function Oi() {
            typeof customElements > 'u' ||
              ['ion-button', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-button':
                    customElements.get(e) || customElements.define(e, Gd);
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) || xn();
                }
              });
          },
          hs = {
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
          Kd = (0, c.w$)(
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
                  r = null !== (e = hs[i]) && void 0 !== e ? e : hs.lines,
                  a = 'number' == typeof t.duration && t.duration > 10 ? t.duration : r.dur,
                  s = [];
                if (void 0 !== r.circles) for (let d = 0; d < r.circles; d++) s.push(Xd(r, a, d, r.circles));
                else if (void 0 !== r.lines) for (let d = 0; d < r.lines; d++) s.push(Zd(r, a, d, r.lines));
                return (0, c.h)(
                  c.xr,
                  {
                    key: '9d30ee9f5aa0dd0e220da07e75d05b8b2435224d',
                    class: qe(t.color, {
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
          Xd = (n, e, t, o) => {
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
          Zd = (n, e, t, o) => {
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
          Jd = function Qd() {
            typeof customElements > 'u' ||
              ['ion-spinner'].forEach((e) => {
                'ion-spinner' === e && (customElements.get(e) || customElements.define(e, Kd));
              });
          },
          tu = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.color = void 0);
              }
              render() {
                const e = (0, X.b)(this);
                return (0, c.h)(
                  c.xr,
                  { key: 'e134d70c04344b708a2ecf6253722781ad2ca826', class: qe(this.color, { [e]: !0 }) },
                  (0, c.h)('slot', { key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8' }),
                );
              }
              static get style() {
                return ':host(.ion-color){color:var(--ion-color-base)}';
              }
            },
            [1, 'ion-text', { color: [513] }],
          ),
          ou = function nu() {
            typeof customElements > 'u' ||
              ['ion-text'].forEach((e) => {
                'ion-text' === e && (customElements.get(e) || customElements.define(e, tu));
              });
          },
          Ar = (n) => {
            const e = n.getTimezoneOffset();
            return n.setMinutes(n.getMinutes() - e), n;
          };
        Ar(new Date('2022T01:00')), Ar(new Date('2022T13:00'));
        var Np = Object.defineProperty;
        typeof window < 'u' && window,
          ((n, e) => {
            for (var t in e) Np(n, t, { get: e[t], enumerable: !0 });
          })({}, { err: () => Zs, map: () => oh, ok: () => Wr, unwrap: () => ih, unwrapErr: () => rh });
        var Wr = (n) => ({ isOk: !0, isErr: !1, value: n }),
          Zs = (n) => ({ isOk: !1, isErr: !0, value: n });
        function oh(n, e) {
          if (n.isOk) {
            const t = e(n.value);
            return t instanceof Promise ? t.then((o) => Wr(o)) : Wr(t);
          }
          if (n.isErr) return Zs(n.value);
          throw 'should never get here';
        }
        var ih = (n) => {
            if (n.isOk) return n.value;
            throw n.value;
          },
          rh = (n) => {
            if (n.isErr) return n.value;
            throw n.value;
          };
        new RegExp('Capture$');
        const Et = ['*'],
          ng = (n, e) => {
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
          og = (n, e) => {
            const t = n.prototype;
            e.forEach((o) => {
              t[o] = function () {
                const i = arguments;
                return this.z.runOutsideAngular(() => this.el[o].apply(this.el, i));
              };
            });
          };
        function Tt(n) {
          return function (t) {
            const { defineCustomElementFn: o, inputs: i, methods: r } = n;
            return void 0 !== o && o(), i && ng(t, i), r && og(t, r), t;
          };
        }
        let ig = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  L(this, 'z', void 0),
                    L(this, 'el', void 0),
                    (this.z = r),
                    o.detach(),
                    (this.el = i.nativeElement),
                    ((n, e, t) => {
                      t.forEach((o) => (n[o] = (0, fe.fromEvent)(e, o)));
                    })(this, this.el, ['ionFocus', 'ionBlur']);
                }
              }),
              L(n, '\u0275fac', function (o) {
                return new (o || n)(
                  h.ɵɵdirectiveInject(h.ChangeDetectorRef),
                  h.ɵɵdirectiveInject(h.ElementRef),
                  h.ɵɵdirectiveInject(h.NgZone),
                );
              }),
              L(
                n,
                '\u0275cmp',
                h.ɵɵdefineComponent({
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
                  features: [h.ɵɵStandaloneFeature],
                  ngContentSelectors: Et,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (h.ɵɵprojectionDef(), h.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (
              (e = (0, be.__decorate)(
                [
                  Tt({
                    defineCustomElementFn: Yd,
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
          rg = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  L(this, 'z', void 0), L(this, 'el', void 0), (this.z = r), o.detach(), (this.el = i.nativeElement);
                }
              }),
              L(n, '\u0275fac', function (o) {
                return new (o || n)(
                  h.ɵɵdirectiveInject(h.ChangeDetectorRef),
                  h.ɵɵdirectiveInject(h.ElementRef),
                  h.ɵɵdirectiveInject(h.NgZone),
                );
              }),
              L(
                n,
                '\u0275cmp',
                h.ɵɵdefineComponent({
                  type: n,
                  selectors: [['ion-spinner']],
                  inputs: { color: 'color', duration: 'duration', name: 'name', paused: 'paused' },
                  standalone: !0,
                  features: [h.ɵɵStandaloneFeature],
                  ngContentSelectors: Et,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (h.ɵɵprojectionDef(), h.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (
              (e = (0, be.__decorate)(
                [Tt({ defineCustomElementFn: Jd, inputs: ['color', 'duration', 'name', 'paused'] })],
                e,
              )),
              e
            );
          })(),
          ag = (() => {
            var n;
            let e =
              ((n = class {
                constructor(o, i, r) {
                  L(this, 'z', void 0), L(this, 'el', void 0), (this.z = r), o.detach(), (this.el = i.nativeElement);
                }
              }),
              L(n, '\u0275fac', function (o) {
                return new (o || n)(
                  h.ɵɵdirectiveInject(h.ChangeDetectorRef),
                  h.ɵɵdirectiveInject(h.ElementRef),
                  h.ɵɵdirectiveInject(h.NgZone),
                );
              }),
              L(
                n,
                '\u0275cmp',
                h.ɵɵdefineComponent({
                  type: n,
                  selectors: [['ion-text']],
                  inputs: { color: 'color', mode: 'mode' },
                  standalone: !0,
                  features: [h.ɵɵStandaloneFeature],
                  ngContentSelectors: Et,
                  decls: 1,
                  vars: 0,
                  template: function (o, i) {
                    1 & o && (h.ɵɵprojectionDef(), h.ɵɵprojection(0));
                  },
                  encapsulation: 2,
                  changeDetection: 0,
                }),
              ),
              n);
            return (e = (0, be.__decorate)([Tt({ defineCustomElementFn: ou, inputs: ['color', 'mode'] })], e)), e;
          })(),
          sg = (() => {
            var n;
            class e extends An {
              constructor() {
                super($i),
                  L(this, 'angularDelegate', (0, h.inject)(Tn)),
                  L(this, 'injector', (0, h.inject)(h.Injector)),
                  L(this, 'environmentInjector', (0, h.inject)(h.EnvironmentInjector)),
                  Wc();
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
              L(e, '\u0275fac', function (o) {
                return new (o || n)();
              }),
              L(e, '\u0275prov', h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
              e
            );
          })();
        class lg extends An {
          constructor() {
            super(Si),
              L(this, 'angularDelegate', (0, h.inject)(Tn)),
              L(this, 'injector', (0, h.inject)(h.Injector)),
              L(this, 'environmentInjector', (0, h.inject)(h.EnvironmentInjector)),
              md();
          }
          create(e) {
            return super.create({
              ...e,
              delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover'),
            });
          }
        }
        const cg = (n = {}) =>
            (0, h.makeEnvironmentProviders)([
              { provide: Xt, useValue: n },
              { provide: h.APP_INITIALIZER, useFactory: dg, multi: !0, deps: [Xt, U.DOCUMENT] },
              { provide: gi, useFactory: Mt, deps: [se.Router] },
              Tn,
              sg,
              lg,
            ]),
          dg = (n, e) => () => {
            e.documentElement.classList.add('ion-ce'), (0, X.i)(n);
          };
        let ug = (() => {
          var n;
          class e extends An {
            constructor() {
              super(mr), Vd();
            }
          }
          return (
            (n = e),
            L(e, '\u0275fac', function (o) {
              return new (o || n)();
            }),
            L(e, '\u0275prov', h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: 'root' })),
            e
          );
        })();
        var Hg = re(202);
        function Zl(n, e) {
          return xe((t, o) => {
            let i = 0;
            t.subscribe(
              Sn(o, (r) => {
                o.next(n.call(e, r, i++));
              }),
            );
          });
        }
        let Ql = (() => {
          var n;
          class e {
            constructor() {
              this.platform = (0, h.inject)(Hg.Platform);
            }
            getPlatform() {
              return oe.WakoGlobal && oe.WakoGlobal.isTvLayout
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
              return (0, fe.forkJoin)([this.getSourcesFromWatchhub(o), this.getSourcesFromTrakt(o)]).pipe(
                Zl(([i, r]) => {
                  const a = { amazon_video: 'prime', amazon_prime: 'prime', disney_plus: 'disney', disney: 'disney' },
                    s = new Map(),
                    d = new Set();
                  return (
                    i.forEach((p) => {
                      p.id && (s.set(a[p.id] || p.id, p), d.add(p.url));
                    }),
                    r.forEach((p) => {
                      if (!p.id || d.has(p.url)) return;
                      const m = a[p.id] || p.id;
                      s.has(m) || (s.set(m, p), d.add(p.url));
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
              return (0, E.A)(function* () {
                try {
                  var r;
                  const a = void 0 !== o.seasonNumber ? 'series' : 'movie';
                  let s = o.imdbId;
                  'series' === a &&
                    void 0 !== o.seasonNumber &&
                    void 0 !== o.episodeNumber &&
                    (s = `${o.imdbId}:${o.seasonNumber}:${o.episodeNumber}`);
                  const d = yield (0, fe.firstValueFrom)(
                    oe.WakoHttpRequestService.get(`https://watchhub.strem.io/stream/${a}/${s}.json`),
                  );
                  if (null == d || null === (r = d.streams) || void 0 === r || !r.length) return [];
                  const p = i.getPlatform();
                  return d.streams.map((m) => {
                    const v = i.getPlatformSpecificUrl(m),
                      _ = i.getSourceIdFromName(m.name),
                      k = {
                        id: _,
                        name: m.name,
                        url: v,
                        country: 'all',
                        logoUrl: i.getSourceLogo(_),
                        platform: i.getSourcePlatform(_),
                      };
                    return 'androidTv' === p && (k.intentUrl = v), k;
                  });
                } catch (a) {
                  return console.error('Error fetching Watchhub streams:', a), [];
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
              var i, r, a, s;
              const d =
                (null === (i = o.movie) || void 0 === i || null === (i = i.ids) || void 0 === i ? void 0 : i.imdb) ||
                (null === (r = o.show) || void 0 === r || null === (r = r.ids) || void 0 === r ? void 0 : r.imdb);
              if (!d) return (0, fe.of)([]);
              if (
                o.show &&
                o.episode &&
                ('number' != typeof o.episode.seasonNumber || 'number' != typeof o.episode.number)
              )
                return (0, fe.of)([]);
              const p = {
                imdbId: d,
                seasonNumber: null === (a = o.episode) || void 0 === a ? void 0 : a.seasonNumber,
                episodeNumber: null === (s = o.episode) || void 0 === s ? void 0 : s.number,
              };
              return (0, fe.from)(this.getWatchhubStreams(p));
            }
            getSourcesFromTrakt(o) {
              let i = null;
              if (o.movie) {
                var r;
                if (null === (r = o.movie.ids) || void 0 === r || !r.trakt) return (0, fe.of)([]);
                i = `/movies/${o.movie.ids.trakt}`;
              } else if (o.show && o.episode) {
                var a;
                if (
                  null === (a = o.show.ids) ||
                  void 0 === a ||
                  !a.trakt ||
                  'number' != typeof o.episode.seasonNumber ||
                  'number' != typeof o.episode.number
                )
                  return (0, fe.of)([]);
                i = `/shows/${o.show.ids.trakt}/seasons/${o.episode.seasonNumber}/episodes/${o.episode.number}`;
              }
              return i
                ? oe.WakoHttpRequestService.get('https://trakt.tv' + i, null, '3d').pipe(
                    Zl((s) => {
                      const d = [];
                      try {
                        new DOMParser()
                          .parseFromString(s, 'text/html')
                          .querySelectorAll('.streaming-links .sources a')
                          .forEach((_) => {
                            try {
                              var k, I, $, M;
                              let j = null === (k = _.getAttribute('data-source')) || void 0 === k ? void 0 : k.trim();
                              const G =
                                  null === (I = _.getAttribute('data-country')) || void 0 === I ? void 0 : I.trim(),
                                W = null === ($ = _.getAttribute('href')) || void 0 === $ ? void 0 : $.trim();
                              if ('#' === W) return;
                              null === (M = _.querySelector('img')) || void 0 === M || M.getAttribute('data-original'),
                                !j && W.match('/watchnow') && (j = W.split('/').pop());
                              const ce = j ? this.getNameFromId(j) : 'N/A';
                              d.push({
                                id: j,
                                name: ce,
                                country: G,
                                url: 'https://trakt.tv' + W,
                                logoUrl: this.getSourceLogo(j),
                                platform: j ? this.getSourcePlatform(j) : void 0,
                              });
                            } catch (j) {
                              console.error(j);
                            }
                          });
                      } catch (p) {
                        console.error(p);
                      }
                      return d;
                    }),
                    (0, fe.catchError)((s) => (console.error('Error fetching Trakt sources:', s), (0, fe.of)([]))),
                  )
                : (0, fe.of)([]);
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
          }
          return (
            ((n = e).ɵfac = function (o) {
              return new (o || n)();
            }),
            (n.ɵprov = h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            e
          );
        })();
        const Vg = (n, e) => e.id;
        function Wg(n, e) {
          1 & n && (h.ɵɵelementStart(0, 'div', 2), h.ɵɵelement(1, 'ion-spinner'), h.ɵɵelementEnd());
        }
        function Ug(n, e) {
          1 & n && (h.ɵɵelementStart(0, 'ion-text'), h.ɵɵtext(1), h.ɵɵpipe(2, 'translate'), h.ɵɵelementEnd()),
            2 & n && (h.ɵɵadvance(), h.ɵɵtextInterpolate(h.ɵɵpipeBind1(2, 1, 'noSourceFound')));
        }
        function Gg(n, e) {
          if ((1 & n && h.ɵɵelement(0, 'img', 6), 2 & n)) {
            const t = h.ɵɵnextContext().$implicit;
            h.ɵɵproperty('src', t.logoUrl, h.ɵɵsanitizeUrl)('alt', t.name);
          }
        }
        function Yg(n, e) {
          if (1 & n) {
            const t = h.ɵɵgetCurrentView();
            h.ɵɵelementStart(0, 'ion-button', 4),
              h.ɵɵlistener('click', function () {
                const i = h.ɵɵrestoreView(t).$implicit,
                  r = h.ɵɵnextContext(4);
                return h.ɵɵresetView(r.goTo(i));
              }),
              h.ɵɵelementStart(1, 'div', 5),
              h.ɵɵtemplate(2, Gg, 1, 2, 'img', 6),
              h.ɵɵelementStart(3, 'span'),
              h.ɵɵtext(4),
              h.ɵɵpipe(5, 'titlecase'),
              h.ɵɵelementEnd()()();
          }
          if (2 & n) {
            const t = e.$implicit;
            h.ɵɵclassMap(t.id),
              h.ɵɵproperty('color', 'primary'),
              h.ɵɵadvance(2),
              h.ɵɵconditional(t.logoUrl ? 2 : -1),
              h.ɵɵadvance(2),
              h.ɵɵtextInterpolate(h.ɵɵpipeBind1(5, 5, t.name));
          }
        }
        function qg(n, e) {
          if ((1 & n && h.ɵɵrepeaterCreate(0, Yg, 6, 7, 'ion-button', 3, Vg), 2 & n)) {
            const t = h.ɵɵnextContext(3);
            h.ɵɵrepeater(t.sources);
          }
        }
        function Kg(n, e) {
          if ((1 & n && h.ɵɵtemplate(0, Ug, 3, 3, 'ion-text')(1, qg, 2, 0), 2 & n)) {
            const t = h.ɵɵnextContext(2);
            h.ɵɵconditional(t.sources.length ? 1 : 0);
          }
        }
        function Xg(n, e) {
          if (
            (1 & n &&
              (h.ɵɵelementStart(0, 'div', 0), h.ɵɵtemplate(1, Wg, 2, 0, 'div', 2)(2, Kg, 2, 1), h.ɵɵelementEnd()),
            2 & n)
          ) {
            const t = h.ɵɵnextContext();
            h.ɵɵadvance(), h.ɵɵconditional(t.loading ? 1 : 2);
          }
        }
        function Zg(n, e) {
          1 & n && h.ɵɵelement(0, 'ion-spinner');
        }
        function Qg(n, e) {
          if (1 & n) {
            const t = h.ɵɵgetCurrentView();
            h.ɵɵelementStart(0, 'ion-button', 7),
              h.ɵɵlistener('click', function () {
                h.ɵɵrestoreView(t);
                const i = h.ɵɵnextContext();
                return h.ɵɵresetView(i.showSourcesActionSheet());
              }),
              h.ɵɵtemplate(1, Zg, 1, 0, 'ion-spinner'),
              h.ɵɵelementStart(2, 'span'),
              h.ɵɵtext(3),
              h.ɵɵpipe(4, 'translate'),
              h.ɵɵelementEnd()();
          }
          if (2 & n) {
            const t = h.ɵɵnextContext();
            h.ɵɵproperty('disabled', t.loading || !t.sources.length),
              h.ɵɵadvance(),
              h.ɵɵconditional(t.loading ? 1 : -1),
              h.ɵɵadvance(2),
              h.ɵɵtextInterpolate2(
                '',
                h.ɵɵpipeBind1(4, 4, 'watchNow'),
                ' ',
                !t.loading && t.sources.length ? '(' + t.sources.length + ')' : '',
                '',
              );
          }
        }
        let Ca = (() => {
            var n;
            class e {
              constructor(o, i) {
                (this.watchnowService = o),
                  (this.actionSheetCtrl = i),
                  (this.type = 'button'),
                  (this.isTvLayout = oe.WakoGlobal.isTvLayout),
                  (this.sources = []),
                  (this.loading = !0);
              }
              ngOnInit() {
                this.watchnowService
                  .getSources({ movie: this.movie, show: this.show, episode: this.episode })
                  .pipe(
                    (function ae(n) {
                      return xe((e, t) => {
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
                !(function Te(n, e) {
                  'FirebasePlugin' in window && window.FirebasePlugin.logEvent(n, e);
                })('addon_watchnow', { type: this.type, source: o.id });
                const i = (o.url.startsWith('intent://') && o.intentUrl) || o.url;
                oe.BrowserService.open(i, !1);
              }
              showSourcesActionSheet() {
                var o = this;
                return (0, E.A)(function* () {
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
            }
            return (
              ((n = e).ɵfac = function (o) {
                return new (o || n)(h.ɵɵdirectiveInject(Ql), h.ɵɵdirectiveInject(ug));
              }),
              (n.ɵcmp = h.ɵɵdefineComponent({
                type: n,
                selectors: [['wk-open-button']],
                inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
                standalone: !0,
                features: [h.ɵɵStandaloneFeature],
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
                template: function (o, i) {
                  1 & o && h.ɵɵtemplate(0, Xg, 3, 1, 'div', 0)(1, Qg, 5, 6, 'ion-button', 1),
                    2 & o && h.ɵɵconditional(i.isTvLayout ? 1 : 0);
                },
                dependencies: [U.TitleCasePipe, Y.TranslateModule, Y.TranslatePipe, rg, ag, ig],
                styles: [
                  '.container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:48px}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-bottom:8px}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--ion-color-primary: #e50914;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.prime[_ngcontent-%COMP%]{--ion-color-primary: #00a8e1;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.disney[_ngcontent-%COMP%]{--ion-color-primary: #0063e5;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.hulu[_ngcontent-%COMP%]{--ion-color-primary: #1ce783;--ion-color-primary-contrast: #000000}.container[_ngcontent-%COMP%]   .button.hbo[_ngcontent-%COMP%]{--ion-color-primary: #8f00ff;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--ion-color-primary: #000000;--ion-color-primary-contrast: #ffffff}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--ion-color-primary: #01875f;--ion-color-primary-contrast: #ffffff}.button-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;width:100%}.source-logo[_ngcontent-%COMP%]{width:20px;height:20px;object-fit:contain}',
                ],
              })),
              e
            );
          })(),
          Jl = (() => {
            var n;
            class e extends oe.EpisodeDetailBaseComponent {
              setShowEpisode(o, i) {
                (this.show = o), (this.episode = i);
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = h.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = h.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [h.ɵɵInheritDefinitionFeature, h.ɵɵStandaloneFeature],
                decls: 1,
                vars: 2,
                consts: [[3, 'show', 'episode']],
                template: function (o, i) {
                  1 & o && h.ɵɵelement(0, 'wk-open-button', 0),
                    2 & o && h.ɵɵproperty('show', i.show)('episode', i.episode);
                },
                dependencies: [Ca],
                encapsulation: 2,
              })),
              e
            );
          })(),
          ec = (() => {
            var n;
            class e extends oe.MovieDetailBaseComponent {
              setMovie(o) {
                this.movie = o;
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = h.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = h.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [h.ɵɵInheritDefinitionFeature, h.ɵɵStandaloneFeature],
                decls: 1,
                vars: 1,
                consts: [[3, 'movie']],
                template: function (o, i) {
                  1 & o && h.ɵɵelement(0, 'wk-open-button', 0), 2 & o && h.ɵɵproperty('movie', i.movie);
                },
                dependencies: [Ca],
                encapsulation: 2,
              })),
              e
            );
          })(),
          tc = (() => {
            var n;
            class e extends oe.ShowDetailBaseComponent {
              setShow(o) {
                this.show = o;
              }
            }
            return (
              ((n = e).ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = h.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵcmp = h.ɵɵdefineComponent({
                type: n,
                selectors: [['ng-component']],
                standalone: !0,
                features: [h.ɵɵInheritDefinitionFeature, h.ɵɵStandaloneFeature],
                decls: 1,
                vars: 1,
                consts: [[3, 'show']],
                template: function (o, i) {
                  1 & o && h.ɵɵelement(0, 'wk-open-button', 0), 2 & o && h.ɵɵproperty('show', i.show);
                },
                dependencies: [Ca],
                encapsulation: 2,
              })),
              e
            );
          })(),
          nc = (() => {
            var n;
            class e extends oe.PluginBaseService {
              constructor(o) {
                super(), (this.translate = o);
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
                return (0, E.A)(function* () {
                  throw new Error('Method not implemented.');
                })();
              }
            }
            return (
              ((n = e).ɵfac = function (o) {
                return new (o || n)(h.ɵɵinject(Y.TranslateService));
              }),
              (n.ɵprov = h.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
              e
            );
          })();
        var $a = re(165);
        const oc = new h.InjectionToken('STORAGE_CONFIG_TOKEN');
        class Jg extends $a.Storage {
          constructor() {
            super();
          }
          create() {
            var e = this;
            return (0, E.A)(function* () {
              return e;
            })();
          }
          defineDriver() {
            return (0, E.A)(function* () {})();
          }
          get driver() {
            return 'noop';
          }
          get(e) {
            return (0, E.A)(function* () {
              return null;
            })();
          }
          set(e, t) {
            return (0, E.A)(function* () {})();
          }
          remove(e) {
            return (0, E.A)(function* () {})();
          }
          clear() {
            return (0, E.A)(function* () {})();
          }
          length() {
            return (0, E.A)(function* () {
              return 0;
            })();
          }
          keys() {
            return (0, E.A)(function* () {
              return [];
            })();
          }
          forEach(e) {
            return (0, E.A)(function* () {})();
          }
          setEncryptionKey(e) {}
        }
        function eb(n, e) {
          return (0, U.isPlatformServer)(n) ? new Jg() : new $a.Storage(e);
        }
        let tb = (() => {
            class n {
              static forRoot(t = null) {
                return {
                  ngModule: n,
                  providers: [
                    { provide: oc, useValue: t },
                    { provide: $a.Storage, useFactory: eb, deps: [h.PLATFORM_ID, oc] },
                  ],
                };
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵmod = h.ɵɵdefineNgModule({ type: n })),
              (n.ɵinj = h.ɵɵdefineInjector({})),
              n
            );
          })(),
          ic = (() => {
            var n;
            class e extends oe.PluginBaseModule {}
            return (
              ((n = e).pluginService = nc),
              (n.movieComponent = ec),
              (n.episodeComponent = Jl),
              (n.showComponent = tc),
              (n.ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = h.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })()),
              (n.ɵmod = h.ɵɵdefineNgModule({ type: n })),
              (n.ɵinj = h.ɵɵdefineInjector({
                providers: [nc, Ql, ...oe.WakoProviders, cg({ swipeBackEnabled: !0, backButtonText: '', mode: 'md' })],
                imports: [Y.TranslateModule.forRoot(), tb.forRoot({}), ec, Jl, tc],
              })),
              e
            );
          })();
        const nb = ic;
      })(),
      rr
    );
  })(),
);
