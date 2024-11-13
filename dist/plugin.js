!(function (Dt, jn) {
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
        : (Dt.plugin = jn(
            Dt['ionic.storage'],
            Dt['ng.common'],
            Dt['ng.core'],
            Dt['ng.forms'],
            Dt['ng.router'],
            Dt['ngx-translate.core'],
            Dt.rxjs,
            Dt.tslib,
            Dt['wako-app.mobile-sdk'],
          ));
})(typeof self < 'u' ? self : this, (Na, Dt, jn, mc, gc, bc, vc, xc, yc) =>
  (() => {
    var W,
      ae,
      Ha = {
        412: (W, ae, Z) => {
          'use strict';
          Z.d(ae, { c: () => $e });
          var de = Z(911);
          let g;
          const oe = (U, B, f) => {
              const ye = B.startsWith('animation')
                ? ((U) => (
                    void 0 === g &&
                      (g =
                        void 0 === U.style.animationName && void 0 !== U.style.webkitAnimationName ? '-webkit-' : ''),
                    g
                  ))(U)
                : '';
              U.style.setProperty(ye + B, f);
            },
            _e = (U = [], B) => {
              if (void 0 !== B) {
                const f = Array.isArray(B) ? B : [B];
                return [...U, ...f];
              }
              return U;
            },
            $e = (U) => {
              let B,
                f,
                ye,
                ge,
                Ae,
                te,
                ie,
                Ce,
                ke,
                re,
                ue,
                le = [],
                Ee = [],
                we = [],
                ve = !1,
                je = {},
                Fe = [],
                Pe = [],
                j = {},
                R = 0,
                ne = !1,
                fe = !1,
                be = !0,
                Se = !1,
                Me = !0,
                Ke = !1;
              const vt = U,
                $ = [],
                O = [],
                z = [],
                Q = [],
                V = [],
                nt = [],
                De = [],
                ot = [],
                We = [],
                xt = [],
                ct = [],
                Ct =
                  'function' == typeof AnimationEffect ||
                  (void 0 !== de.w && 'function' == typeof de.w.AnimationEffect),
                Je = 'function' == typeof Element && 'function' == typeof Element.prototype.animate && Ct,
                Tt = () => ct,
                Kt = (T, J) => {
                  const he = J.findIndex((Re) => Re.c === T);
                  he > -1 && J.splice(he, 1);
                },
                wn = (T, J) => ((J?.oneTimeCallback ? O : $).push({ c: T, o: J }), ue),
                Bn = () => {
                  Je &&
                    (ct.forEach((T) => {
                      T.cancel();
                    }),
                    (ct.length = 0));
                },
                Ao = () => {
                  nt.forEach((T) => {
                    T?.parentNode && T.parentNode.removeChild(T);
                  }),
                    (nt.length = 0);
                },
                Un = () => (void 0 !== Ae ? Ae : ie ? ie.getFill() : 'both'),
                mt = () => (void 0 !== Ce ? Ce : void 0 !== te ? te : ie ? ie.getDirection() : 'normal'),
                qn = () => (ne ? 'linear' : void 0 !== ye ? ye : ie ? ie.getEasing() : 'linear'),
                Xt = () => (fe ? 0 : void 0 !== ke ? ke : void 0 !== f ? f : ie ? ie.getDuration() : 0),
                Yn = () => (void 0 !== ge ? ge : ie ? ie.getIterations() : 1),
                un = () => (void 0 !== re ? re : void 0 !== B ? B : ie ? ie.getDelay() : 0),
                hn = () => {
                  0 !== R &&
                    (R--,
                    0 === R &&
                      ((() => {
                        We.forEach((et) => et()), xt.forEach((et) => et());
                        const T = be ? 1 : 0,
                          J = Fe,
                          he = Pe,
                          Re = j;
                        Q.forEach((et) => {
                          const ut = et.classList;
                          J.forEach((zt) => ut.add(zt)), he.forEach((zt) => ut.remove(zt));
                          for (const zt in Re) Re.hasOwnProperty(zt) && oe(et, zt, Re[zt]);
                        }),
                          (ke = void 0),
                          (Ce = void 0),
                          (re = void 0),
                          $.forEach((et) => et.c(T, ue)),
                          O.forEach((et) => et.c(T, ue)),
                          (O.length = 0),
                          (Me = !0),
                          be && (Se = !0),
                          (be = !0);
                      })(),
                      ie && ie.animationFinish()));
                },
                fn = () => {
                  (() => {
                    De.forEach((Re) => Re()), ot.forEach((Re) => Re());
                    const T = Ee,
                      J = we,
                      he = je;
                    Q.forEach((Re) => {
                      const et = Re.classList;
                      T.forEach((ut) => et.add(ut)), J.forEach((ut) => et.remove(ut));
                      for (const ut in he) he.hasOwnProperty(ut) && oe(Re, ut, he[ut]);
                    });
                  })(),
                    le.length > 0 &&
                      Je &&
                      (Q.forEach((T) => {
                        const J = T.animate(le, {
                          id: vt,
                          delay: un(),
                          duration: Xt(),
                          easing: qn(),
                          iterations: Yn(),
                          fill: Un(),
                          direction: mt(),
                        });
                        J.pause(), ct.push(J);
                      }),
                      ct.length > 0 &&
                        (ct[0].onfinish = () => {
                          hn();
                        })),
                    (ve = !0);
                },
                Qt = (T) => {
                  (T = Math.min(Math.max(T, 0), 0.9999)),
                    Je &&
                      ct.forEach((J) => {
                        (J.currentTime = J.effect.getComputedTiming().delay + Xt() * T), J.pause();
                      });
                },
                Jn = (T) => {
                  ct.forEach((J) => {
                    J.effect.updateTiming({
                      delay: un(),
                      duration: Xt(),
                      easing: qn(),
                      iterations: Yn(),
                      fill: Un(),
                      direction: mt(),
                    });
                  }),
                    void 0 !== T && Qt(T);
                },
                dt = (T = !1, J = !0, he) => (
                  T &&
                    V.forEach((Re) => {
                      Re.update(T, J, he);
                    }),
                  Je && Jn(he),
                  ue
                ),
                No = () => {
                  ve &&
                    (Je
                      ? ct.forEach((T) => {
                          T.pause();
                        })
                      : Q.forEach((T) => {
                          oe(T, 'animation-play-state', 'paused');
                        }),
                    (Ke = !0));
                },
                _n = (T) =>
                  new Promise((J) => {
                    T?.sync && ((fe = !0), wn(() => (fe = !1), { oneTimeCallback: !0 })),
                      ve || fn(),
                      Se && (Je && (Qt(0), Jn()), (Se = !1)),
                      Me && ((R = V.length + 1), (Me = !1));
                    const he = () => {
                        Kt(Re, O), J();
                      },
                      Re = () => {
                        Kt(he, z), J();
                      };
                    wn(Re, { oneTimeCallback: !0 }),
                      ((T) => {
                        z.push({ c: T, o: { oneTimeCallback: !0 } });
                      })(he),
                      V.forEach((et) => {
                        et.play();
                      }),
                      Je
                        ? (ct.forEach((T) => {
                            T.play();
                          }),
                          (0 === le.length || 0 === Q.length) && hn())
                        : hn(),
                      (Ke = !1);
                  }),
                mn = (T, J) => {
                  const he = le[0];
                  return (
                    void 0 === he || (void 0 !== he.offset && 0 !== he.offset)
                      ? (le = [{ offset: 0, [T]: J }, ...le])
                      : (he[T] = J),
                    ue
                  );
                };
              return (ue = {
                parentAnimation: ie,
                elements: Q,
                childAnimations: V,
                id: vt,
                animationFinish: hn,
                from: mn,
                to: (T, J) => {
                  const he = le[le.length - 1];
                  return (
                    void 0 === he || (void 0 !== he.offset && 1 !== he.offset)
                      ? (le = [...le, { offset: 1, [T]: J }])
                      : (he[T] = J),
                    ue
                  );
                },
                fromTo: (T, J, he) => mn(T, J).to(T, he),
                parent: (T) => ((ie = T), ue),
                play: _n,
                pause: () => (
                  V.forEach((T) => {
                    T.pause();
                  }),
                  No(),
                  ue
                ),
                stop: () => {
                  V.forEach((T) => {
                    T.stop();
                  }),
                    ve && (Bn(), (ve = !1)),
                    (ne = !1),
                    (fe = !1),
                    (Me = !0),
                    (Ce = void 0),
                    (ke = void 0),
                    (re = void 0),
                    (R = 0),
                    (Se = !1),
                    (be = !0),
                    (Ke = !1),
                    z.forEach((T) => T.c(0, ue)),
                    (z.length = 0);
                },
                destroy: (T) => (
                  V.forEach((J) => {
                    J.destroy(T);
                  }),
                  ((T) => {
                    Bn(), T && Ao();
                  })(T),
                  (Q.length = 0),
                  (V.length = 0),
                  (le.length = 0),
                  ($.length = 0),
                  (O.length = 0),
                  (ve = !1),
                  (Me = !0),
                  ue
                ),
                keyframes: (T) => {
                  const J = le !== T;
                  return (
                    (le = T),
                    J &&
                      ((T) => {
                        Je &&
                          Tt().forEach((J) => {
                            const he = J.effect;
                            if (he.setKeyframes) he.setKeyframes(T);
                            else {
                              const Re = new KeyframeEffect(he.target, T, he.getTiming());
                              J.effect = Re;
                            }
                          });
                      })(le),
                    ue
                  );
                },
                addAnimation: (T) => {
                  if (null != T)
                    if (Array.isArray(T)) for (const J of T) J.parent(ue), V.push(J);
                    else T.parent(ue), V.push(T);
                  return ue;
                },
                addElement: (T) => {
                  if (null != T)
                    if (1 === T.nodeType) Q.push(T);
                    else if (T.length >= 0) for (let J = 0; J < T.length; J++) Q.push(T[J]);
                    else console.error('Invalid addElement value');
                  return ue;
                },
                update: dt,
                fill: (T) => ((Ae = T), dt(!0), ue),
                direction: (T) => ((te = T), dt(!0), ue),
                iterations: (T) => ((ge = T), dt(!0), ue),
                duration: (T) => (!Je && 0 === T && (T = 1), (f = T), dt(!0), ue),
                easing: (T) => ((ye = T), dt(!0), ue),
                delay: (T) => ((B = T), dt(!0), ue),
                getWebAnimations: Tt,
                getKeyframes: () => le,
                getFill: Un,
                getDirection: mt,
                getDelay: un,
                getIterations: Yn,
                getEasing: qn,
                getDuration: Xt,
                afterAddRead: (T) => (We.push(T), ue),
                afterAddWrite: (T) => (xt.push(T), ue),
                afterClearStyles: (T = []) => {
                  for (const J of T) j[J] = '';
                  return ue;
                },
                afterStyles: (T = {}) => ((j = T), ue),
                afterRemoveClass: (T) => ((Pe = _e(Pe, T)), ue),
                afterAddClass: (T) => ((Fe = _e(Fe, T)), ue),
                beforeAddRead: (T) => (De.push(T), ue),
                beforeAddWrite: (T) => (ot.push(T), ue),
                beforeClearStyles: (T = []) => {
                  for (const J of T) je[J] = '';
                  return ue;
                },
                beforeStyles: (T = {}) => ((je = T), ue),
                beforeRemoveClass: (T) => ((we = _e(we, T)), ue),
                beforeAddClass: (T) => ((Ee = _e(Ee, T)), ue),
                onFinish: wn,
                isRunning: () => 0 !== R && !Ke,
                progressStart: (T = !1, J) => (
                  V.forEach((he) => {
                    he.progressStart(T, J);
                  }),
                  No(),
                  (ne = T),
                  ve || fn(),
                  dt(!1, !0, J),
                  ue
                ),
                progressStep: (T) => (
                  V.forEach((J) => {
                    J.progressStep(T);
                  }),
                  Qt(T),
                  ue
                ),
                progressEnd: (T, J, he) => (
                  (ne = !1),
                  V.forEach((Re) => {
                    Re.progressEnd(T, J, he);
                  }),
                  void 0 !== he && (ke = he),
                  (Se = !1),
                  (be = !0),
                  0 === T
                    ? ((Ce = 'reverse' === mt() ? 'normal' : 'reverse'),
                      'reverse' === Ce && (be = !1),
                      Je ? (dt(), Qt(1 - J)) : ((re = (1 - J) * Xt() * -1), dt(!1, !1)))
                    : 1 === T && (Je ? (dt(), Qt(J)) : ((re = J * Xt() * -1), dt(!1, !1))),
                  void 0 !== T && !ie && _n(),
                  ue
                ),
              });
            };
        },
        86: (W, ae, Z) => {
          'use strict';
          Z.d(ae, { B: () => oe, G: () => _e });
          class g {
            constructor(U, B, f, ye, ge) {
              (this.id = B),
                (this.name = f),
                (this.disableScroll = ge),
                (this.priority = 1e6 * ye + B),
                (this.ctrl = U);
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
            constructor(U, B, f, ye) {
              (this.id = B), (this.disable = f), (this.disableScroll = ye), (this.ctrl = U);
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
          const oe = 'backdrop-no-scroll',
            _e = new (class de {
              constructor() {
                (this.gestureId = 0),
                  (this.requestedStart = new Map()),
                  (this.disabledGestures = new Map()),
                  (this.disabledScroll = new Set());
              }
              createGesture(U) {
                var B;
                return new g(
                  this,
                  this.newID(),
                  U.name,
                  null !== (B = U.priority) && void 0 !== B ? B : 0,
                  !!U.disableScroll,
                );
              }
              createBlocker(U = {}) {
                return new xe(this, this.newID(), U.disable, !!U.disableScroll);
              }
              start(U, B, f) {
                return this.canStart(U) ? (this.requestedStart.set(B, f), !0) : (this.requestedStart.delete(B), !1);
              }
              capture(U, B, f) {
                if (!this.start(U, B, f)) return !1;
                const ye = this.requestedStart;
                let ge = -1e4;
                if (
                  (ye.forEach((Ae) => {
                    ge = Math.max(ge, Ae);
                  }),
                  ge === f)
                ) {
                  (this.capturedId = B), ye.clear();
                  const Ae = new CustomEvent('ionGestureCaptured', { detail: { gestureName: U } });
                  return document.dispatchEvent(Ae), !0;
                }
                return ye.delete(B), !1;
              }
              release(U) {
                this.requestedStart.delete(U), this.capturedId === U && (this.capturedId = void 0);
              }
              disableGesture(U, B) {
                let f = this.disabledGestures.get(U);
                void 0 === f && ((f = new Set()), this.disabledGestures.set(U, f)), f.add(B);
              }
              enableGesture(U, B) {
                const f = this.disabledGestures.get(U);
                void 0 !== f && f.delete(B);
              }
              disableScroll(U) {
                this.disabledScroll.add(U), 1 === this.disabledScroll.size && document.body.classList.add(oe);
              }
              enableScroll(U) {
                this.disabledScroll.delete(U), 0 === this.disabledScroll.size && document.body.classList.remove(oe);
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
                const B = this.disabledGestures.get(U);
                return !!(B && B.size > 0);
              }
              newID() {
                return this.gestureId++, this.gestureId;
              }
            })();
        },
        935: (W, ae, Z) => {
          'use strict';
          Z.d(ae, {
            a: () => B,
            b: () => f,
            c: () => xe,
            d: () => _e,
            e: () => le,
            f: () => te,
            g: () => ye,
            h: () => Ae,
            i: () => U,
            j: () => oe,
            k: () => Ee,
            l: () => je,
            r: () => ge,
          });
          const xe = (j, R) => {
              j.componentOnReady ? j.componentOnReady().then((ne) => R(ne)) : ge(() => R(j));
            },
            oe = (j) => void 0 !== j.componentOnReady,
            _e = (j, R = []) => {
              const ne = {};
              return (
                R.forEach((fe) => {
                  j.hasAttribute(fe) &&
                    (null !== j.getAttribute(fe) && (ne[fe] = j.getAttribute(fe)), j.removeAttribute(fe));
                }),
                ne
              );
            },
            $e = [
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
            U = (j, R) => {
              let ne = $e;
              return R && R.length > 0 && (ne = ne.filter((fe) => !R.includes(fe))), _e(j, ne);
            },
            B = (j, R, ne, fe) => {
              var Ce;
              if (typeof window < 'u') {
                const ke = window,
                  re = null === (Ce = ke?.Ionic) || void 0 === Ce ? void 0 : Ce.config;
                if (re) {
                  const be = re.get('_ael');
                  if (be) return be(j, R, ne, fe);
                  if (re._ael) return re._ael(j, R, ne, fe);
                }
              }
              return j.addEventListener(R, ne, fe);
            },
            f = (j, R, ne, fe) => {
              var Ce;
              if (typeof window < 'u') {
                const ke = window,
                  re = null === (Ce = ke?.Ionic) || void 0 === Ce ? void 0 : Ce.config;
                if (re) {
                  const be = re.get('_rel');
                  if (be) return be(j, R, ne, fe);
                  if (re._rel) return re._rel(j, R, ne, fe);
                }
              }
              return j.removeEventListener(R, ne, fe);
            },
            ye = (j, R = j) => j.shadowRoot || R,
            ge = (j) =>
              'function' == typeof __zone_symbol__requestAnimationFrame
                ? __zone_symbol__requestAnimationFrame(j)
                : 'function' == typeof requestAnimationFrame
                  ? requestAnimationFrame(j)
                  : setTimeout(j),
            Ae = (j) => !!j.shadowRoot && !!j.attachShadow,
            te = (j) => {
              if ((j.focus(), j.classList.contains('ion-focusable'))) {
                const R = j.closest('ion-app');
                R && R.setFocus([j]);
              }
            },
            le = (j, R, ne, fe, Ce) => {
              if (j || Ae(R)) {
                let ke = R.querySelector('input.aux-input');
                ke ||
                  ((ke = R.ownerDocument.createElement('input')),
                  (ke.type = 'hidden'),
                  ke.classList.add('aux-input'),
                  R.appendChild(ke)),
                  (ke.disabled = Ce),
                  (ke.name = ne),
                  (ke.value = fe || '');
              }
            },
            Ee = (j, R, ne) => Math.max(j, Math.min(R, ne)),
            je = (j, R) => {
              const ne = j._original || j;
              return { _original: j, emit: Fe(ne.emit.bind(ne), R) };
            },
            Fe = (j, R = 0) => {
              let ne;
              return (...fe) => {
                clearTimeout(ne), (ne = setTimeout(j, R, ...fe));
              };
            };
        },
        382: (W, ae, Z) => {
          'use strict';
          Z.d(ae, {
            L: () => _e,
            a: () => $e,
            b: () => U,
            c: () => B,
            d: () => f,
            e: () => Me,
            g: () => vt,
            w: () => Se,
          });
          var de = Z(994),
            oe = (Z(530), Z(338), Z(935));
          const _e = 'ionViewWillEnter',
            $e = 'ionViewDidEnter',
            U = 'ionViewWillLeave',
            B = 'ionViewDidLeave',
            f = 'ionViewWillUnload',
            Se = () => new Promise(($) => (0, oe.r)(() => (0, oe.r)(() => $()))),
            Me = (function () {
              var $ = (0, de.A)(function* (O) {
                const z = O;
                if (z) {
                  if (null != z.componentOnReady) {
                    if (null != (yield z.componentOnReady())) return;
                  } else if (null != z.__registerHost) return void (yield new Promise((V) => (0, oe.r)(V)));
                  yield Promise.all(Array.from(z.children).map(Me));
                }
              });
              return function (z) {
                return $.apply(this, arguments);
              };
            })(),
            vt = ($) =>
              $.classList.contains('ion-page')
                ? $
                : $.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs') || $;
        },
        221: (W, ae, Z) => {
          'use strict';
          Z.r(ae), Z.d(ae, { GESTURE_CONTROLLER: () => de.G, createGesture: () => f });
          var de = Z(86);
          const g = (te, le, Ee, we) => {
              const ve = xe(te) ? { capture: !!we.capture, passive: !!we.passive } : !!we.capture;
              let ie, je;
              return (
                te.__zone_symbol__addEventListener
                  ? ((ie = '__zone_symbol__addEventListener'), (je = '__zone_symbol__removeEventListener'))
                  : ((ie = 'addEventListener'), (je = 'removeEventListener')),
                te[ie](le, Ee, ve),
                () => {
                  te[je](le, Ee, ve);
                }
              );
            },
            xe = (te) => {
              if (void 0 === oe)
                try {
                  const le = Object.defineProperty({}, 'passive', {
                    get: () => {
                      oe = !0;
                    },
                  });
                  te.addEventListener('optsTest', () => {}, le);
                } catch {
                  oe = !1;
                }
              return !!oe;
            };
          let oe;
          const U = (te) => (te instanceof Document ? te : te.ownerDocument),
            f = (te) => {
              let le = !1,
                Ee = !1,
                we = !0,
                ve = !1;
              const ie = Object.assign(
                  { disableScroll: !1, direction: 'x', gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 },
                  te,
                ),
                je = ie.canStart,
                Fe = ie.onWillStart,
                Pe = ie.onStart,
                j = ie.onEnd,
                R = ie.notCaptured,
                ne = ie.onMove,
                fe = ie.threshold,
                Ce = ie.passive,
                ke = ie.blurOnStart,
                re = {
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
                be = ((te, le, Ee) => {
                  const we = Ee * (Math.PI / 180),
                    ve = 'x' === te,
                    ie = Math.cos(we),
                    je = le * le;
                  let Fe = 0,
                    Pe = 0,
                    j = !1,
                    R = 0;
                  return {
                    start(ne, fe) {
                      (Fe = ne), (Pe = fe), (R = 0), (j = !0);
                    },
                    detect(ne, fe) {
                      if (!j) return !1;
                      const Ce = ne - Fe,
                        ke = fe - Pe,
                        re = Ce * Ce + ke * ke;
                      if (re < je) return !1;
                      const be = Math.sqrt(re),
                        Se = (ve ? Ce : ke) / be;
                      return (R = Se > ie ? 1 : Se < -ie ? -1 : 0), (j = !1), !0;
                    },
                    isGesture: () => 0 !== R,
                    getDirection: () => R,
                  };
                })(ie.direction, ie.threshold, ie.maxAngle),
                Se = de.G.createGesture({
                  name: te.gestureName,
                  priority: te.gesturePriority,
                  disableScroll: te.disableScroll,
                }),
                Ke = () => {
                  le && ((ve = !1), ne && ne(re));
                },
                vt = () =>
                  !!Se.capture() &&
                  ((le = !0),
                  (we = !1),
                  (re.startX = re.currentX),
                  (re.startY = re.currentY),
                  (re.startTime = re.currentTime),
                  Fe ? Fe(re).then(O) : O(),
                  !0),
                O = () => {
                  ke &&
                    (() => {
                      if (typeof document < 'u') {
                        const De = document.activeElement;
                        De?.blur && De.blur();
                      }
                    })(),
                    Pe && Pe(re),
                    (we = !0);
                },
                z = () => {
                  (le = !1), (Ee = !1), (ve = !1), (we = !0), Se.release();
                },
                Q = (De) => {
                  const ot = le,
                    We = we;
                  if ((z(), We)) {
                    if ((ye(re, De), ot)) return void (j && j(re));
                    R && R(re);
                  }
                },
                V = ((te, le, Ee, we, ve) => {
                  let ie,
                    je,
                    Fe,
                    Pe,
                    j,
                    R,
                    ne,
                    fe = 0;
                  const Ce = ($) => {
                      (fe = Date.now() + 2e3),
                        le($) &&
                          (!je && Ee && (je = g(te, 'touchmove', Ee, ve)),
                          Fe || (Fe = g($.target, 'touchend', re, ve)),
                          Pe || (Pe = g($.target, 'touchcancel', re, ve)));
                    },
                    ke = ($) => {
                      fe > Date.now() ||
                        (le($) &&
                          (!R && Ee && (R = g(U(te), 'mousemove', Ee, ve)), ne || (ne = g(U(te), 'mouseup', be, ve))));
                    },
                    re = ($) => {
                      Se(), we && we($);
                    },
                    be = ($) => {
                      Me(), we && we($);
                    },
                    Se = () => {
                      je && je(), Fe && Fe(), Pe && Pe(), (je = Fe = Pe = void 0);
                    },
                    Me = () => {
                      R && R(), ne && ne(), (R = ne = void 0);
                    },
                    ue = () => {
                      Se(), Me();
                    },
                    Ke = ($ = !0) => {
                      $
                        ? (ie || (ie = g(te, 'touchstart', Ce, ve)), j || (j = g(te, 'mousedown', ke, ve)))
                        : (ie && ie(), j && j(), (ie = j = void 0), ue());
                    };
                  return {
                    enable: Ke,
                    stop: ue,
                    destroy: () => {
                      Ke(!1), (we = Ee = le = void 0);
                    },
                  };
                })(
                  ie.el,
                  (De) => {
                    const ot = Ae(De);
                    return (
                      !(
                        Ee ||
                        !we ||
                        (ge(De, re),
                        (re.startX = re.currentX),
                        (re.startY = re.currentY),
                        (re.startTime = re.currentTime = ot),
                        (re.velocityX = re.velocityY = re.deltaX = re.deltaY = 0),
                        (re.event = De),
                        je && !1 === je(re)) ||
                        (Se.release(), !Se.start())
                      ) && ((Ee = !0), 0 === fe ? vt() : (be.start(re.startX, re.startY), !0))
                    );
                  },
                  (De) => {
                    le
                      ? !ve && we && ((ve = !0), ye(re, De), requestAnimationFrame(Ke))
                      : (ye(re, De), be.detect(re.currentX, re.currentY) && (!be.isGesture() || !vt()) && nt());
                  },
                  Q,
                  { capture: !1, passive: Ce },
                ),
                nt = () => {
                  z(), V.stop(), R && R(re);
                };
              return {
                enable(De = !0) {
                  De || (le && Q(void 0), z()), V.enable(De);
                },
                destroy() {
                  Se.destroy(), V.destroy();
                },
              };
            },
            ye = (te, le) => {
              if (!le) return;
              const Ee = te.currentX,
                we = te.currentY,
                ve = te.currentTime;
              ge(le, te);
              const ie = te.currentX,
                je = te.currentY,
                Pe = (te.currentTime = Ae(le)) - ve;
              if (Pe > 0 && Pe < 100) {
                const R = (je - we) / Pe;
                (te.velocityX = ((ie - Ee) / Pe) * 0.7 + 0.3 * te.velocityX),
                  (te.velocityY = 0.7 * R + 0.3 * te.velocityY);
              }
              (te.deltaX = ie - te.startX), (te.deltaY = je - te.startY), (te.event = le);
            },
            ge = (te, le) => {
              let Ee = 0,
                we = 0;
              if (te) {
                const ve = te.changedTouches;
                if (ve && ve.length > 0) {
                  const ie = ve[0];
                  (Ee = ie.clientX), (we = ie.clientY);
                } else void 0 !== te.pageX && ((Ee = te.pageX), (we = te.pageY));
              }
              (le.currentX = Ee), (le.currentY = we);
            },
            Ae = (te) => te.timeStamp || Date.now();
        },
        911: (W, ae, Z) => {
          'use strict';
          Z.d(ae, { d: () => g, w: () => de });
          const de = typeof window < 'u' ? window : void 0,
            g = typeof document < 'u' ? document : void 0;
        },
        338: (W, ae, Z) => {
          'use strict';
          Z.d(ae, { a: () => g, b: () => xe, p: () => de });
          const de = (oe, ..._e) => console.warn(`[Ionic Warning]: ${oe}`, ..._e),
            g = (oe, ..._e) => console.error(`[Ionic Error]: ${oe}`, ..._e),
            xe = (oe, ..._e) => console.error(`<${oe.tagName.toLowerCase()}> must be used inside ${_e.join(' or ')}.`);
        },
        530: (W, ae, Z) => {
          'use strict';
          Z.d(ae, { a: () => ge, b: () => Ke, c: () => xe, i: () => vt });
          var de = Z(445);
          class g {
            constructor() {
              this.m = new Map();
            }
            reset(O) {
              this.m = new Map(Object.entries(O));
            }
            get(O, z) {
              const Q = this.m.get(O);
              return void 0 !== Q ? Q : z;
            }
            getBoolean(O, z = !1) {
              const Q = this.m.get(O);
              return void 0 === Q ? z : 'string' == typeof Q ? 'true' === Q : !!Q;
            }
            getNumber(O, z) {
              const Q = parseFloat(this.m.get(O));
              return isNaN(Q) ? (void 0 !== z ? z : NaN) : Q;
            }
            set(O, z) {
              this.m.set(O, z);
            }
          }
          const xe = new g(),
            B = 'ionic:',
            f = 'ionic-persist-config',
            ge = ($, O) => ('string' == typeof $ && ((O = $), ($ = void 0)), (($) => Ae($))($).includes(O)),
            Ae = ($ = window) => {
              if (typeof $ > 'u') return [];
              $.Ionic = $.Ionic || {};
              let O = $.Ionic.platforms;
              return (
                null == O &&
                  ((O = $.Ionic.platforms = te($)),
                  O.forEach((z) => $.document.documentElement.classList.add(`plt-${z}`))),
                O
              );
            },
            te = ($) => {
              const O = xe.get('platform');
              return Object.keys(Me).filter((z) => {
                const Q = O?.[z];
                return 'function' == typeof Q ? Q($) : Me[z]($);
              });
            },
            Ee = ($) => !!(be($, /iPad/i) || (be($, /Macintosh/i) && j($))),
            ie = ($) => be($, /android|sink/i),
            j = ($) => Se($, '(any-pointer:coarse)'),
            ne = ($) => fe($) || Ce($),
            fe = ($) => !!($.cordova || $.phonegap || $.PhoneGap),
            Ce = ($) => {
              const O = $.Capacitor;
              return !!O?.isNative;
            },
            be = ($, O) => O.test($.navigator.userAgent),
            Se = ($, O) => {
              var z;
              return null === (z = $.matchMedia) || void 0 === z ? void 0 : z.call($, O).matches;
            },
            Me = {
              ipad: Ee,
              iphone: ($) => be($, /iPhone/i),
              ios: ($) => be($, /iPhone|iPod/i) || Ee($),
              android: ie,
              phablet: ($) => {
                const O = $.innerWidth,
                  z = $.innerHeight,
                  Q = Math.min(O, z),
                  V = Math.max(O, z);
                return Q > 390 && Q < 520 && V > 620 && V < 800;
              },
              tablet: ($) => {
                const O = $.innerWidth,
                  z = $.innerHeight,
                  Q = Math.min(O, z),
                  V = Math.max(O, z);
                return Ee($) || (($) => ie($) && !be($, /mobile/i))($) || (Q > 460 && Q < 820 && V > 780 && V < 1400);
              },
              cordova: fe,
              capacitor: Ce,
              electron: ($) => be($, /electron/i),
              pwa: ($) => {
                var O;
                return !!(
                  (null !== (O = $.matchMedia) && void 0 !== O && O.call($, '(display-mode: standalone)').matches) ||
                  $.navigator.standalone
                );
              },
              mobile: j,
              mobileweb: ($) => j($) && !ne($),
              desktop: ($) => !j($),
              hybrid: ne,
            };
          let ue;
          const Ke = ($) => ($ && (0, de.Wi)($)) || ue,
            vt = ($ = {}) => {
              if (typeof window > 'u') return;
              const O = window.document,
                z = window,
                Q = (z.Ionic = z.Ionic || {}),
                V = {};
              $._ael && (V.ael = $._ael), $._rel && (V.rel = $._rel), $._ce && (V.ce = $._ce), (0, de.zb)(V);
              const nt = Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        (($) => {
                          try {
                            const O = $.sessionStorage.getItem(f);
                            return null !== O ? JSON.parse(O) : {};
                          } catch {
                            return {};
                          }
                        })(z),
                      ),
                      { persistConfig: !1 },
                    ),
                    Q.config,
                  ),
                  (($) => {
                    const O = {};
                    return (
                      $.location.search
                        .slice(1)
                        .split('&')
                        .map((z) => z.split('='))
                        .map(([z, Q]) => {
                          try {
                            return [decodeURIComponent(z), decodeURIComponent(Q)];
                          } catch {
                            return ['', ''];
                          }
                        })
                        .filter(([z]) => (($, O) => $.substr(0, O.length) === O)(z, B))
                        .map(([z, Q]) => [z.slice(6), Q])
                        .forEach(([z, Q]) => {
                          O[z] = Q;
                        }),
                      O
                    );
                  })(z),
                ),
                $,
              );
              xe.reset(nt),
                xe.getBoolean('persistConfig') &&
                  (($, O) => {
                    try {
                      $.sessionStorage.setItem(f, JSON.stringify(O));
                    } catch {
                      return;
                    }
                  })(z, nt),
                Ae(z),
                (Q.config = xe),
                (Q.mode = ue = xe.get('mode', O.documentElement.getAttribute('mode') || (ge(z, 'ios') ? 'ios' : 'md'))),
                xe.set('mode', ue),
                O.documentElement.setAttribute('mode', ue),
                O.documentElement.classList.add(ue),
                xe.getBoolean('_testing') && xe.set('animated', !1);
              const De = (We) => {
                  var xt;
                  return null === (xt = We.tagName) || void 0 === xt ? void 0 : xt.startsWith('ION-');
                },
                ot = (We) => ['ios', 'md'].includes(We);
              (0, de.iY)((We) => {
                for (; We; ) {
                  const xt = We.mode || We.getAttribute('mode');
                  if (xt) {
                    if (ot(xt)) return xt;
                    De(We) && console.warn('Invalid ionic mode: "' + xt + '", expected: "ios" or "md"');
                  }
                  We = We.parentElement;
                }
                return ue;
              });
            };
        },
        864: (W) => {
          function ae(Z) {
            return Promise.resolve().then(() => {
              var de = new Error("Cannot find module '" + Z + "'");
              throw ((de.code = 'MODULE_NOT_FOUND'), de);
            });
          }
          (ae.keys = () => []), (ae.resolve = ae), (ae.id = 864), (W.exports = ae);
        },
        376: (W) => {
          function ae(Z) {
            return Promise.resolve().then(() => {
              var de = new Error("Cannot find module '" + Z + "'");
              throw ((de.code = 'MODULE_NOT_FOUND'), de);
            });
          }
          (ae.keys = () => []), (ae.resolve = ae), (ae.id = 376), (W.exports = ae);
        },
        165: (W) => {
          'use strict';
          W.exports = Na;
        },
        714: (W) => {
          'use strict';
          W.exports = Dt;
        },
        264: (W) => {
          'use strict';
          W.exports = jn;
        },
        122: (W) => {
          'use strict';
          W.exports = mc;
        },
        346: (W) => {
          'use strict';
          W.exports = gc;
        },
        555: (W) => {
          'use strict';
          W.exports = bc;
        },
        961: (W) => {
          'use strict';
          W.exports = vc;
        },
        652: (W) => {
          'use strict';
          W.exports = xc;
        },
        325: (W) => {
          'use strict';
          W.exports = yc;
        },
        445: (W, ae, Z) => {
          'use strict';
          Z.d(ae, {
            L2: () => U,
            wt: () => Q,
            xr: () => Fo,
            lh: () => Ro,
            $x: () => Ft,
            OX: () => Bn,
            Wi: () => Qn,
            h: () => un,
            w$: () => wi,
            gv: () => wn,
            iY: () => Zn,
            zb: () => nt,
            bN: () => Pn,
          });
          var de = Z(994),
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
            _e = Object.defineProperty,
            U = { isDev: !!g.isDev, isBrowser: !0, isServer: !1, isTesting: !!g.isTesting },
            B = g.hotModuleReplacement
              ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = new WeakMap())
              : new WeakMap(),
            f = (l) => B.get(l),
            Ae = (l, u) => u in l,
            le = (l, u) => (0, console.error)(l, u),
            Ee = g.isTesting
              ? ['STENCIL:']
              : [
                  '%cstencil',
                  'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
                ],
            we = (...l) => console.error(...Ee, ...l),
            ve = (...l) => console.warn(...Ee, ...l),
            Fe = new Map(),
            R = new Map(),
            ne = [],
            be = 's-id',
            vt = 'http://www.w3.org/1999/xlink',
            $ = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'],
            O = typeof window < 'u' ? window : {},
            z = O.document || { head: {} },
            Q = O.HTMLElement || class {},
            V = {
              $flags$: 0,
              $resourcesUrl$: '',
              jmp: (l) => l(),
              raf: (l) => requestAnimationFrame(l),
              ael: (l, u, h, b) => l.addEventListener(u, h, b),
              rel: (l, u, h, b) => l.removeEventListener(u, h, b),
              ce: (l, u) => new CustomEvent(l, u),
            },
            nt = (l) => {
              Object.assign(V, l);
            },
            De = g.shadowDom,
            ot = (() => {
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
            xt =
              !!g.constructableCSS &&
              (() => {
                try {
                  return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
                } catch {}
                return !1;
              })(),
            ct = 0,
            Ct = !1,
            Je = [],
            Tt = [],
            yn = [],
            Fn = (l, u) => (h) => {
              l.push(h), Ct || ((Ct = !0), u && 4 & V.$flags$ ? cn(Kt) : V.raf(Kt));
            },
            Mn = (l) => {
              for (let u = 0; u < l.length; u++)
                try {
                  l[u](performance.now());
                } catch (h) {
                  le(h);
                }
              l.length = 0;
            },
            Rn = (l, u) => {
              let h = 0,
                b = 0;
              for (; h < l.length && (b = performance.now()) < u; )
                try {
                  l[h++](b);
                } catch (y) {
                  le(y);
                }
              h === l.length ? (l.length = 0) : 0 !== h && l.splice(0, h);
            },
            Kt = () => {
              if ((g.asyncQueue && ct++, Mn(Je), g.asyncQueue)) {
                const l = 2 == (6 & V.$flags$) ? performance.now() + 14 * Math.ceil(0.1 * ct) : 1 / 0;
                Rn(Tt, l),
                  Rn(yn, l),
                  Tt.length > 0 && (yn.push(...Tt), (Tt.length = 0)),
                  (Ct = Je.length + Tt.length + yn.length > 0) ? V.raf(Kt) : (ct = 0);
              } else Mn(Tt), (Ct = Je.length > 0) && V.raf(Kt);
            },
            cn = (l) => Promise.resolve(void 0).then(l),
            wn = Fn(Je, !1),
            Pn = Fn(Tt, !0),
            Bn = (l) => {
              const u = new URL(l, V.$resourcesUrl$);
              return u.origin !== O.location.origin ? u.href : u.pathname;
            },
            Nn = {},
            dn = (l) => 'object' == (l = typeof l) || 'function' === l;
          ((l, u) => {
            for (var h in u) _e(l, h, { get: u[h], enumerable: !0 });
          })({}, { err: () => Vn, map: () => Wn, ok: () => Nt, unwrap: () => ui, unwrapErr: () => pi });
          var Nt = (l) => ({ isOk: !0, isErr: !1, value: l }),
            Vn = (l) => ({ isOk: !1, isErr: !0, value: l });
          function Wn(l, u) {
            if (l.isOk) {
              const h = u(l.value);
              return h instanceof Promise ? h.then((b) => Nt(b)) : Nt(h);
            }
            if (l.isErr) return Vn(l.value);
            throw 'should never get here';
          }
          var ui = (l) => {
              if (l.isOk) return l.value;
              throw l.value;
            },
            pi = (l) => {
              if (l.isErr) return l.value;
              throw l.value;
            },
            Un = 0,
            mt = (l, u = '') => {
              if (g.profile && performance.mark) {
                const h = `st:${l}:${u}:${Un++}`;
                return performance.mark(h), () => performance.measure(`[Stencil] ${l}() <${u}>`, h);
              }
              return () => {};
            },
            un = (l, u, ...h) => {
              let b = null,
                y = null,
                w = null,
                _ = !1,
                D = !1;
              const S = [],
                A = (H) => {
                  for (let K = 0; K < H.length; K++)
                    (b = H[K]),
                      Array.isArray(b)
                        ? A(b)
                        : null != b &&
                          'boolean' != typeof b &&
                          ((_ = 'function' != typeof l && !dn(b))
                            ? (b = String(b))
                            : g.isDev &&
                              'function' != typeof l &&
                              void 0 === b.$flags$ &&
                              we(
                                "vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.",
                              ),
                          _ && D ? (S[S.length - 1].$text$ += b) : S.push(_ ? Zt(null, b) : b),
                          (D = _));
                };
              if (
                (A(h),
                u &&
                  (g.isDev && 'input' === l && Kn(u),
                  g.vdomKey && u.key && (y = u.key),
                  g.slotRelocation && u.name && (w = u.name),
                  g.vdomClass))
              ) {
                const H = u.className || u.class;
                H &&
                  (u.class =
                    'object' != typeof H
                      ? H
                      : Object.keys(H)
                          .filter((K) => H[K])
                          .join(' '));
              }
              if (
                (g.isDev &&
                  S.some(Gn) &&
                  we(
                    "The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.",
                  ),
                g.vdomFunctional && 'function' == typeof l)
              )
                return l(null === u ? {} : u, S, hi);
              const F = Zt(l, null);
              return (
                (F.$attrs$ = u),
                S.length > 0 && (F.$children$ = S),
                g.vdomKey && (F.$key$ = y),
                g.slotRelocation && (F.$name$ = w),
                F
              );
            },
            Zt = (l, u) => {
              const h = { $flags$: 0, $tag$: l, $text$: u, $elm$: null, $children$: null };
              return (
                g.vdomAttribute && (h.$attrs$ = null),
                g.vdomKey && (h.$key$ = null),
                g.slotRelocation && (h.$name$ = null),
                h
              );
            },
            Fo = {},
            Gn = (l) => l && l.$tag$ === Fo,
            hi = { forEach: (l, u) => l.map(pn).forEach(u), map: (l, u) => l.map(pn).map(u).map(fi) },
            pn = (l) => ({
              vattrs: l.$attrs$,
              vchildren: l.$children$,
              vkey: l.$key$,
              vname: l.$name$,
              vtag: l.$tag$,
              vtext: l.$text$,
            }),
            fi = (l) => {
              if ('function' == typeof l.vtag) {
                const h = { ...l.vattrs };
                return l.vkey && (h.key = l.vkey), l.vname && (h.name = l.vname), un(l.vtag, h, ...(l.vchildren || []));
              }
              const u = Zt(l.vtag, l.vtext);
              return (u.$attrs$ = l.vattrs), (u.$children$ = l.vchildren), (u.$key$ = l.vkey), (u.$name$ = l.vname), u;
            },
            Kn = (l) => {
              const u = Object.keys(l),
                h = u.indexOf('value');
              if (-1 === h) return;
              const b = u.indexOf('type'),
                y = u.indexOf('min'),
                w = u.indexOf('max'),
                _ = u.indexOf('step');
              (h < b || h < y || h < w || h < _) &&
                ve('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
            },
            In = (l, u, h, b, y, w, _) => {
              let D, S, A, F;
              if (1 === w.nodeType) {
                if (
                  ((D = w.getAttribute('c-id')),
                  D &&
                    ((S = D.split('.')),
                    (S[0] === _ || '0' === S[0]) &&
                      ((A = {
                        $flags$: 0,
                        $hostId$: S[0],
                        $nodeId$: S[1],
                        $depth$: S[2],
                        $index$: S[3],
                        $tag$: w.tagName.toLowerCase(),
                        $elm$: w,
                        $attrs$: null,
                        $children$: null,
                        $key$: null,
                        $name$: null,
                        $text$: null,
                      }),
                      u.push(A),
                      w.removeAttribute('c-id'),
                      l.$children$ || (l.$children$ = []),
                      (l.$children$[A.$index$] = A),
                      (l = A),
                      b && '0' === A.$depth$ && (b[A.$index$] = A.$elm$))),
                  w.shadowRoot)
                )
                  for (F = w.shadowRoot.childNodes.length - 1; F >= 0; F--)
                    In(l, u, h, b, y, w.shadowRoot.childNodes[F], _);
                for (F = w.childNodes.length - 1; F >= 0; F--) In(l, u, h, b, y, w.childNodes[F], _);
              } else if (8 === w.nodeType)
                (S = w.nodeValue.split('.')),
                  (S[1] === _ || '0' === S[1]) &&
                    ((D = S[0]),
                    (A = {
                      $flags$: 0,
                      $hostId$: S[1],
                      $nodeId$: S[2],
                      $depth$: S[3],
                      $index$: S[4],
                      $elm$: w,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $tag$: null,
                      $text$: null,
                    }),
                    't' === D
                      ? ((A.$elm$ = w.nextSibling),
                        A.$elm$ &&
                          3 === A.$elm$.nodeType &&
                          ((A.$text$ = A.$elm$.textContent),
                          u.push(A),
                          w.remove(),
                          l.$children$ || (l.$children$ = []),
                          (l.$children$[A.$index$] = A),
                          b && '0' === A.$depth$ && (b[A.$index$] = A.$elm$)))
                      : A.$hostId$ === _ &&
                        ('s' === D
                          ? ((A.$tag$ = 'slot'),
                            (w['s-sn'] = S[5] ? (A.$name$ = S[5]) : ''),
                            (w['s-sr'] = !0),
                            g.shadowDom &&
                              b &&
                              ((A.$elm$ = z.createElement(A.$tag$)),
                              A.$name$ && A.$elm$.setAttribute('name', A.$name$),
                              w.parentNode.insertBefore(A.$elm$, w),
                              w.remove(),
                              '0' === A.$depth$ && (b[A.$index$] = A.$elm$)),
                            h.push(A),
                            l.$children$ || (l.$children$ = []),
                            (l.$children$[A.$index$] = A))
                          : 'r' === D &&
                            (g.shadowDom && b ? w.remove() : g.slotRelocation && ((y['s-cr'] = w), (w['s-cn'] = !0)))));
              else if (l && 'style' === l.$tag$) {
                const H = Zt(null, w.textContent);
                (H.$elm$ = w), (H.$index$ = '0'), (l.$children$ = [H]);
              }
            },
            Cn = (l, u) => {
              if (1 === l.nodeType) {
                let h = 0;
                if (l.shadowRoot) for (; h < l.shadowRoot.childNodes.length; h++) Cn(l.shadowRoot.childNodes[h], u);
                for (h = 0; h < l.childNodes.length; h++) Cn(l.childNodes[h], u);
              } else if (8 === l.nodeType) {
                const h = l.nodeValue.split('.');
                'o' === h[0] && (u.set(h[1] + '.' + h[2], l), (l.nodeValue = ''), (l['s-en'] = h[3]));
              }
            },
            Zn = (l) => ne.push(l),
            Qn = (l) => f(l).$modeName$,
            Ro = (l, u, h) => {
              const b = ((l) => (g.lazyLoad ? f(l).$hostElement$ : l))(l);
              return {
                emit: (y) => (
                  g.isDev &&
                    !b.isConnected &&
                    ve(`The "${u}" event was emitted, but the dispatcher node is no longer connected to the dom.`),
                  fn(b, u, { bubbles: !!(4 & h), composed: !!(2 & h), cancelable: !!(1 & h), detail: y })
                ),
              };
            },
            fn = (l, u, h) => {
              const b = V.ce(u, h);
              return l.dispatchEvent(b), b;
            },
            Qt = new WeakMap(),
            dt = (l, u, h) => {
              var b;
              const y = eo(u, h),
                w = R.get(y);
              if (!g.attachStyles) return y;
              if (((l = 11 === l.nodeType ? l : z), w))
                if ('string' == typeof w) {
                  let D,
                    _ = Qt.get((l = l.head || l));
                  if ((_ || Qt.set(l, (_ = new Set())), !_.has(y))) {
                    if (g.hydrateClientSide && l.host && (D = l.querySelector(`[sty-id="${y}"]`))) D.innerHTML = w;
                    else {
                      (D = z.createElement('style')), (D.innerHTML = w);
                      const S =
                        null != (b = V.$nonce$)
                          ? b
                          : (function Hn(l) {
                              var u, h, b;
                              return null !=
                                (b =
                                  null ==
                                  (h = null == (u = l.head) ? void 0 : u.querySelector('meta[name="csp-nonce"]'))
                                    ? void 0
                                    : h.getAttribute('content'))
                                ? b
                                : void 0;
                            })(z);
                      null != S && D.setAttribute('nonce', S),
                        (g.hydrateServerSide || g.hotModuleReplacement) && 2 & u.$flags$ && D.setAttribute('sty-id', y),
                        (!(1 & u.$flags$) || (1 & u.$flags$ && 'HEAD' !== l.nodeName)) &&
                          l.insertBefore(D, l.querySelector('link'));
                    }
                    4 & u.$flags$ && (D.innerHTML += 'slot-fb{display:contents}slot-fb[hidden]{display:none}'),
                      _ && _.add(y);
                  }
                } else
                  g.constructableCSS &&
                    !l.adoptedStyleSheets.includes(w) &&
                    (l.adoptedStyleSheets = [...l.adoptedStyleSheets, w]);
              return y;
            },
            eo = (l, u) => 'sc-' + (g.mode && u && 32 & l.$flags$ ? l.$tagName$ + '-' + u : l.$tagName$),
            Bo = (l, u, h, b, y, w) => {
              if (h !== b) {
                let _ = Ae(l, u),
                  D = u.toLowerCase();
                if (g.vdomClass && 'class' === u) {
                  const S = l.classList,
                    A = Ho(h),
                    F = Ho(b);
                  S.remove(...A.filter((H) => H && !F.includes(H))), S.add(...F.filter((H) => H && !A.includes(H)));
                } else if (g.vdomStyle && 'style' === u) {
                  if (g.updatable)
                    for (const S in h)
                      (!b || null == b[S]) &&
                        (!g.hydrateServerSide && S.includes('-') ? l.style.removeProperty(S) : (l.style[S] = ''));
                  for (const S in b)
                    (!h || b[S] !== h[S]) &&
                      (!g.hydrateServerSide && S.includes('-') ? l.style.setProperty(S, b[S]) : (l.style[S] = b[S]));
                } else if (!g.vdomKey || 'key' !== u)
                  if (g.vdomRef && 'ref' === u) b && b(l);
                  else if (
                    !g.vdomListener ||
                    (g.lazyLoad ? _ : l.__lookupSetter__(u)) ||
                    'o' !== u[0] ||
                    'n' !== u[1]
                  ) {
                    if (g.vdomPropOrAttr) {
                      const S = dn(b);
                      if ((_ || (S && null !== b)) && !y)
                        try {
                          if (l.tagName.includes('-')) l[u] = b;
                          else {
                            const F = b ?? '';
                            'list' === u ? (_ = !1) : (null == h || l[u] != F) && (l[u] = F);
                          }
                        } catch {}
                      let A = !1;
                      g.vdomXlink && D !== (D = D.replace(/^xlink\:?/, '')) && ((u = D), (A = !0)),
                        null == b || !1 === b
                          ? (!1 !== b || '' === l.getAttribute(u)) &&
                            (g.vdomXlink && A ? l.removeAttributeNS(vt, u) : l.removeAttribute(u))
                          : (!_ || 4 & w || y) &&
                            !S &&
                            ((b = !0 === b ? '' : b),
                            g.vdomXlink && A ? l.setAttributeNS(vt, u, b) : l.setAttribute(u, b));
                    }
                  } else if (((u = '-' === u[2] ? u.slice(3) : Ae(O, D) ? D.slice(2) : D[2] + u.slice(3)), h || b)) {
                    const S = u.endsWith(to);
                    (u = u.replace(no, '')), h && V.rel(l, u, h, S), b && V.ael(l, u, b, S);
                  }
              }
            },
            No = /\s/,
            Ho = (l) => (l ? l.split(No) : []),
            to = 'Capture',
            no = new RegExp(to + '$'),
            oo = (l, u, h) => {
              const b = 11 === u.$elm$.nodeType && u.$elm$.host ? u.$elm$.host : u.$elm$,
                y = (l && l.$attrs$) || Nn,
                w = u.$attrs$ || Nn;
              if (g.updatable) for (const _ of _n(Object.keys(y))) _ in w || Bo(b, _, y[_], void 0, h, u.$flags$);
              for (const _ of _n(Object.keys(w))) Bo(b, _, y[_], w[_], h, u.$flags$);
            };
          function _n(l) {
            return l.includes('ref') ? [...l.filter((u) => 'ref' !== u), 'ref'] : l;
          }
          var Lt,
            mn,
            At,
            Jt = !1,
            T = !1,
            J = !1,
            he = !1,
            Re = (l, u, h, b) => {
              var y;
              const w = u.$children$[h];
              let D,
                S,
                A,
                _ = 0;
              if (
                (g.slotRelocation &&
                  !Jt &&
                  ((J = !0),
                  'slot' === w.$tag$ && (Lt && b.classList.add(Lt + '-s'), (w.$flags$ |= w.$children$ ? 2 : 1))),
                g.isDev &&
                  w.$elm$ &&
                  we(
                    `The JSX ${null !== w.$text$ ? `"${w.$text$}" text` : `"${w.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`,
                  ),
                g.vdomText && null !== w.$text$)
              )
                D = w.$elm$ = z.createTextNode(w.$text$);
              else if (g.slotRelocation && 1 & w.$flags$)
                D = w.$elm$ = g.isDebug || g.hydrateServerSide ? Wo(w) : z.createTextNode('');
              else {
                if (
                  (g.svg && !he && (he = 'svg' === w.$tag$),
                  (D = w.$elm$ =
                    g.svg
                      ? z.createElementNS(
                          he ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                          !Jt && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$,
                        )
                      : z.createElement(!Jt && g.slotRelocation && 2 & w.$flags$ ? 'slot-fb' : w.$tag$)),
                  g.svg && he && 'foreignObject' === w.$tag$ && (he = !1),
                  g.vdomAttribute && oo(null, w, he),
                  !!D.getRootNode().querySelector('body') &&
                    g.scoped &&
                    ((l) => null != l)(Lt) &&
                    D['s-si'] !== Lt &&
                    D.classList.add((D['s-si'] = Lt)),
                  g.scoped && jt(D, b),
                  w.$children$)
                )
                  for (_ = 0; _ < w.$children$.length; ++_) (S = Re(l, w, _, D)), S && D.appendChild(S);
                g.svg && ('svg' === w.$tag$ ? (he = !1) : 'foreignObject' === D.tagName && (he = !0));
              }
              return (
                (D['s-hn'] = At),
                g.slotRelocation &&
                  3 & w.$flags$ &&
                  ((D['s-sr'] = !0),
                  (D['s-cr'] = mn),
                  (D['s-sn'] = w.$name$ || ''),
                  (D['s-rf'] = null == (y = w.$attrs$) ? void 0 : y.ref),
                  (A = l && l.$children$ && l.$children$[h]),
                  A && A.$tag$ === w.$tag$ && l.$elm$ && (g.experimentalSlotFixes ? et(l.$elm$) : ut(l.$elm$, !1))),
                D
              );
            },
            et = (l) => {
              V.$flags$ |= 1;
              const u = l.closest(At.toLowerCase());
              if (null != u) {
                const h = Array.from(u.childNodes).find((y) => y['s-cr']),
                  b = Array.from(l.childNodes);
                for (const y of h ? b.reverse() : b)
                  null != y['s-sh'] && (it(u, y, h ?? null), (y['s-sh'] = void 0), (J = !0));
              }
              V.$flags$ &= -2;
            },
            ut = (l, u) => {
              V.$flags$ |= 1;
              const h = Array.from(l.childNodes);
              if (l['s-sr'] && g.experimentalSlotFixes) {
                let b = l;
                for (; (b = b.nextSibling); ) b && b['s-sn'] === l['s-sn'] && b['s-sh'] === At && h.push(b);
              }
              for (let b = h.length - 1; b >= 0; b--) {
                const y = h[b];
                y['s-hn'] !== At &&
                  y['s-ol'] &&
                  (it(ir(y), y, gi(y)), y['s-ol'].remove(), (y['s-ol'] = void 0), (y['s-sh'] = void 0), (J = !0)),
                  u && ut(y, u);
              }
              V.$flags$ &= -2;
            },
            zt = (l, u, h, b, y, w) => {
              let D,
                _ = (g.slotRelocation && l['s-cr'] && l['s-cr'].parentNode) || l;
              for (g.shadowDom && _.shadowRoot && _.tagName === At && (_ = _.shadowRoot); y <= w; ++y)
                b[y] && ((D = Re(null, h, y, l)), D && ((b[y].$elm$ = D), it(_, D, g.slotRelocation ? gi(u) : u)));
            },
            mi = (l, u, h) => {
              for (let b = u; b <= h; ++b) {
                const y = l[b];
                if (y) {
                  const w = y.$elm$;
                  sr(y), w && (g.slotRelocation && ((T = !0), w['s-ol'] ? w['s-ol'].remove() : ut(w, !0)), w.remove());
                }
              }
            },
            io = (l, u, h = !1) =>
              !(
                l.$tag$ !== u.$tag$ ||
                (g.slotRelocation && 'slot' === l.$tag$
                  ? ('$nodeId$' in l && h && 8 !== l.$elm$.nodeType) || l.$name$ !== u.$name$
                  : g.vdomKey && !h && l.$key$ !== u.$key$)
              ),
            gi = (l) => (l && l['s-ol']) || l,
            ir = (l) => (l['s-ol'] ? l['s-ol'] : l).parentNode,
            $n = (l, u, h = !1) => {
              const b = (u.$elm$ = l.$elm$),
                y = l.$children$,
                w = u.$children$,
                _ = u.$tag$,
                D = u.$text$;
              let S;
              g.vdomText && null !== D
                ? g.vdomText && g.slotRelocation && (S = b['s-cr'])
                  ? (S.parentNode.textContent = D)
                  : g.vdomText && l.$text$ !== D && (b.data = D)
                : (g.svg && (he = 'svg' === _ || ('foreignObject' !== _ && he)),
                  (g.vdomAttribute || g.reflect) &&
                    (g.slot && 'slot' === _ && !Jt
                      ? g.experimentalSlotFixes &&
                        l.$name$ !== u.$name$ &&
                        ((u.$elm$['s-sn'] = u.$name$ || ''), et(u.$elm$.parentElement))
                      : oo(l, u, he)),
                  g.updatable && null !== y && null !== w
                    ? ((l, u, h, b, y = !1) => {
                        let Ue,
                          qe,
                          w = 0,
                          _ = 0,
                          D = 0,
                          S = 0,
                          A = u.length - 1,
                          F = u[0],
                          H = u[A],
                          K = b.length - 1,
                          ee = b[0],
                          Te = b[K];
                        for (; w <= A && _ <= K; )
                          if (null == F) F = u[++w];
                          else if (null == H) H = u[--A];
                          else if (null == ee) ee = b[++_];
                          else if (null == Te) Te = b[--K];
                          else if (io(F, ee, y)) $n(F, ee, y), (F = u[++w]), (ee = b[++_]);
                          else if (io(H, Te, y)) $n(H, Te, y), (H = u[--A]), (Te = b[--K]);
                          else if (io(F, Te, y))
                            g.slotRelocation &&
                              ('slot' === F.$tag$ || 'slot' === Te.$tag$) &&
                              ut(F.$elm$.parentNode, !1),
                              $n(F, Te, y),
                              it(l, F.$elm$, H.$elm$.nextSibling),
                              (F = u[++w]),
                              (Te = b[--K]);
                          else if (io(H, ee, y))
                            g.slotRelocation &&
                              ('slot' === F.$tag$ || 'slot' === Te.$tag$) &&
                              ut(H.$elm$.parentNode, !1),
                              $n(H, ee, y),
                              it(l, H.$elm$, F.$elm$),
                              (H = u[--A]),
                              (ee = b[++_]);
                          else {
                            if (((D = -1), g.vdomKey))
                              for (S = w; S <= A; ++S)
                                if (u[S] && null !== u[S].$key$ && u[S].$key$ === ee.$key$) {
                                  D = S;
                                  break;
                                }
                            g.vdomKey && D >= 0
                              ? ((qe = u[D]),
                                qe.$tag$ !== ee.$tag$
                                  ? (Ue = Re(u && u[_], h, D, l))
                                  : ($n(qe, ee, y), (u[D] = void 0), (Ue = qe.$elm$)),
                                (ee = b[++_]))
                              : ((Ue = Re(u && u[_], h, _, l)), (ee = b[++_])),
                              Ue &&
                                (g.slotRelocation
                                  ? it(ir(F.$elm$), Ue, gi(F.$elm$))
                                  : it(F.$elm$.parentNode, Ue, F.$elm$));
                          }
                        w > A
                          ? zt(l, null == b[K + 1] ? null : b[K + 1].$elm$, h, b, _, K)
                          : g.updatable && _ > K && mi(u, w, A);
                      })(b, y, u, w, h)
                    : null !== w
                      ? (g.updatable && g.vdomText && null !== l.$text$ && (b.textContent = ''),
                        zt(b, null, u, w, 0, w.length - 1))
                      : !h && g.updatable && null !== y && mi(y, 0, y.length - 1),
                  g.svg && he && 'svg' === _ && (he = !1));
            },
            Vo = (l) => {
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
                  Vo(h);
                }
            },
            Ht = [],
            rr = (l) => {
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
                      if (ar(u, w)) {
                        let _ = Ht.find((D) => D.$nodeToRelocate$ === u);
                        (T = !0),
                          (u['s-sn'] = u['s-sn'] || w),
                          _
                            ? ((_.$nodeToRelocate$['s-sh'] = y['s-hn']), (_.$slotRefNode$ = y))
                            : ((u['s-sh'] = y['s-hn']), Ht.push({ $slotRefNode$: y, $nodeToRelocate$: u })),
                          u['s-sr'] &&
                            Ht.map((D) => {
                              ar(D.$nodeToRelocate$, u['s-sn']) &&
                                ((_ = Ht.find((S) => S.$nodeToRelocate$ === u)),
                                _ && !D.$slotRefNode$ && (D.$slotRefNode$ = _.$slotRefNode$));
                            });
                      } else Ht.some((_) => _.$nodeToRelocate$ === u) || Ht.push({ $nodeToRelocate$: u });
                }
                1 === y.nodeType && rr(y);
              }
            },
            ar = (l, u) =>
              1 === l.nodeType
                ? (null === l.getAttribute('slot') && '' === u) || l.getAttribute('slot') === u
                : l['s-sn'] === u || '' === u,
            sr = (l) => {
              g.vdomRef && (l.$attrs$ && l.$attrs$.ref && l.$attrs$.ref(null), l.$children$ && l.$children$.map(sr));
            },
            it = (l, u, h) => {
              const b = l?.insertBefore(u, h);
              return g.scoped && jt(u, l), b;
            },
            _t = (l) => {
              const u = [];
              return l && u.push(...(l['s-scs'] || []), l['s-si'], l['s-sc'], ..._t(l.parentElement)), u;
            },
            jt = (l, u, h = !1) => {
              var b;
              if (l && u && 1 === l.nodeType) {
                const y = new Set(_t(u).filter(Boolean));
                if (y.size && (null == (b = l.classList) || b.add(...(l['s-scs'] = [...y])), l['s-ol'] || h))
                  for (const w of Array.from(l.childNodes)) jt(w, l, !0);
              }
            },
            bi = (l, u, h = !1) => {
              var b, y, w, _, D;
              const S = l.$hostElement$,
                A = l.$cmpMeta$,
                F = l.$vnode$ || Zt(null, null),
                H = Gn(u) ? u : un(null, null, u);
              if (((At = S.tagName), g.isDev && Array.isArray(u) && u.some(Gn)))
                throw new Error(
                  `The <Host> must be the single root component.\nLooks like the render() function of "${At.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `,
                );
              if (
                (g.reflect &&
                  A.$attrsToReflect$ &&
                  ((H.$attrs$ = H.$attrs$ || {}), A.$attrsToReflect$.map(([K, ee]) => (H.$attrs$[ee] = S[K]))),
                h && H.$attrs$)
              )
                for (const K of Object.keys(H.$attrs$))
                  S.hasAttribute(K) && !['key', 'ref', 'style', 'class'].includes(K) && (H.$attrs$[K] = S[K]);
              if (
                ((H.$tag$ = null),
                (H.$flags$ |= 4),
                (l.$vnode$ = H),
                (H.$elm$ = F.$elm$ = (g.shadowDom && S.shadowRoot) || S),
                (g.scoped || g.shadowDom) && (Lt = S['s-sc']),
                (Jt = De && !!(1 & A.$flags$)),
                g.slotRelocation && ((mn = S['s-cr']), (T = !1)),
                $n(F, H, h),
                g.slotRelocation)
              ) {
                if (((V.$flags$ |= 1), J)) {
                  rr(H.$elm$);
                  for (const K of Ht) {
                    const ee = K.$nodeToRelocate$;
                    if (!ee['s-ol']) {
                      const Te = g.isDebug || g.hydrateServerSide ? lr(ee) : z.createTextNode('');
                      (Te['s-nr'] = ee), it(ee.parentNode, (ee['s-ol'] = Te), ee);
                    }
                  }
                  for (const K of Ht) {
                    const ee = K.$nodeToRelocate$,
                      Te = K.$slotRefNode$;
                    if (Te) {
                      const Ue = Te.parentNode;
                      let qe = Te.nextSibling;
                      if (!g.experimentalSlotFixes || (qe && 1 === qe.nodeType)) {
                        let ze = null == (b = ee['s-ol']) ? void 0 : b.previousSibling;
                        for (; ze; ) {
                          let He = null != (y = ze['s-nr']) ? y : null;
                          if (He && He['s-sn'] === ee['s-sn'] && Ue === He.parentNode) {
                            for (He = He.nextSibling; He === ee || He?.['s-sr']; ) He = He?.nextSibling;
                            if (!He || !He['s-nr']) {
                              qe = He;
                              break;
                            }
                          }
                          ze = ze.previousSibling;
                        }
                      }
                      ((!qe && Ue !== ee.parentNode) || ee.nextSibling !== qe) &&
                        ee !== qe &&
                        (!g.experimentalSlotFixes &&
                          !ee['s-hn'] &&
                          ee['s-ol'] &&
                          (ee['s-hn'] = ee['s-ol'].parentNode.nodeName),
                        it(Ue, ee, qe),
                        1 === ee.nodeType && (ee.hidden = null != (w = ee['s-ih']) && w)),
                        ee && 'function' == typeof Te['s-rf'] && Te['s-rf'](ee);
                    } else 1 === ee.nodeType && (h && (ee['s-ih'] = null != (_ = ee.hidden) && _), (ee.hidden = !0));
                  }
                }
                T && Vo(H.$elm$), (V.$flags$ &= -2), (Ht.length = 0);
              }
              if (g.experimentalScopedSlotChanges && 2 & A.$flags$)
                for (const K of H.$elm$.childNodes)
                  K['s-hn'] !== At &&
                    !K['s-sh'] &&
                    (h && null == K['s-ih'] && (K['s-ih'] = null != (D = K.hidden) && D), (K.hidden = !0));
              mn = void 0;
            },
            Wo = (l) =>
              z.createComment(`<slot${l.$name$ ? ' name="' + l.$name$ + '"' : ''}> (host=${At.toLowerCase()})`),
            lr = (l) =>
              z.createComment(
                'org-location for ' + (l.localName ? `<${l.localName}> (host=${l['s-hn']})` : `[${l.textContent}]`),
              ),
            cr = (l, u) => {
              g.asyncLoading &&
                u &&
                !l.$onRenderResolve$ &&
                u['s-p'] &&
                u['s-p'].push(new Promise((h) => (l.$onRenderResolve$ = h)));
            },
            Sn = (l, u) => {
              if ((g.taskQueue && g.updatable && (l.$flags$ |= 16), g.asyncLoading && 4 & l.$flags$))
                return void (l.$flags$ |= 512);
              cr(l, l.$ancestorComponent$);
              const h = () => N(l, u);
              return g.taskQueue ? Pn(h) : h();
            },
            N = (l, u) => {
              const h = l.$hostElement$,
                b = mt('scheduleUpdate', l.$cmpMeta$.$tagName$),
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
                        (l.$queuedListeners$.map(([_, D]) => yt(y, _, D)), (l.$queuedListeners$ = void 0))),
                    Vt(h, 'componentWillLoad'),
                    g.cmpWillLoad && (w = yt(y, 'componentWillLoad')))
                  : (Vt(h, 'componentWillUpdate'), g.cmpWillUpdate && (w = yt(y, 'componentWillUpdate'))),
                Vt(h, 'componentWillRender'),
                g.cmpWillRender && (w = c(w, () => yt(y, 'componentWillRender'))),
                b(),
                c(w, () => Le(l, y, u))
              );
            },
            c = (l, u) =>
              M(l)
                ? l.then(u).catch((h) => {
                    console.error(h), u();
                  })
                : u(),
            M = (l) => l instanceof Promise || (l && l.then && 'function' == typeof l.then),
            Le = (function () {
              var l = (0, de.A)(function* (u, h, b) {
                var y;
                const w = u.$hostElement$,
                  _ = mt('update', u.$cmpMeta$.$tagName$),
                  D = w['s-rc'];
                g.style &&
                  b &&
                  ((l) => {
                    const u = l.$cmpMeta$,
                      h = l.$hostElement$,
                      b = u.$flags$,
                      y = mt('attachStyles', u.$tagName$),
                      w = dt(g.shadowDom && De && h.shadowRoot ? h.shadowRoot : h.getRootNode(), u, l.$modeName$);
                    (g.shadowDom || g.scoped) &&
                      g.cssAnnotations &&
                      10 & b &&
                      2 & b &&
                      ((h['s-sc'] = w), h.classList.add(w + '-h'), g.scoped && 2 & b && h.classList.add(w + '-s')),
                      y();
                  })(u);
                const S = mt('render', u.$cmpMeta$.$tagName$);
                if (
                  (g.isDev && (u.$flags$ |= 1024),
                  g.hydrateServerSide ? yield qo(u, h, w, b) : qo(u, h, w, b),
                  g.isDev &&
                    ((u.$renderCount$ = void 0 === u.$renderCount$ ? 1 : u.$renderCount$ + 1), (u.$flags$ &= -1025)),
                  g.hydrateServerSide)
                )
                  try {
                    pr(w),
                      b && (1 & u.$cmpMeta$.$flags$ ? (w['s-en'] = '') : 2 & u.$cmpMeta$.$flags$ && (w['s-en'] = 'c'));
                  } catch (A) {
                    le(A, w);
                  }
                if ((g.asyncLoading && D && (D.map((A) => A()), (w['s-rc'] = void 0)), S(), _(), g.asyncLoading)) {
                  const A = null != (y = w['s-p']) ? y : [],
                    F = () => Yo(u);
                  0 === A.length ? F() : (Promise.all(A).then(F), (u.$flags$ |= 4), (A.length = 0));
                } else Yo(u);
              });
              return function (h, b, y) {
                return l.apply(this, arguments);
              };
            })(),
            qo = (l, u, h, b) => {
              const y = !!g.allRenderFn,
                w = !!g.lazyLoad,
                _ = !!g.taskQueue,
                D = !!g.updatable;
              try {
                if (
                  ((u = (y || u.render) && u.render()),
                  D && _ && (l.$flags$ &= -17),
                  (D || w) && (l.$flags$ |= 2),
                  g.hasRenderFn || g.reflect)
                )
                  if (g.vdomRender || g.reflect) {
                    if (g.hydrateServerSide) return Promise.resolve(u).then((S) => bi(l, S, b));
                    bi(l, u, b);
                  } else 1 & l.$cmpMeta$.$flags$ ? (h.shadowRoot.textContent = u) : (h.textContent = u);
              } catch (S) {
                le(S, l.$hostElement$);
              }
              return null;
            },
            Yo = (l) => {
              const u = l.$cmpMeta$.$tagName$,
                h = l.$hostElement$,
                b = mt('postUpdate', u),
                y = g.lazyLoad ? l.$lazyInstance$ : h,
                w = l.$ancestorComponent$;
              g.cmpDidRender &&
                (g.isDev && (l.$flags$ |= 1024), yt(y, 'componentDidRender'), g.isDev && (l.$flags$ &= -1025)),
                Vt(h, 'componentDidRender'),
                64 & l.$flags$
                  ? (g.cmpDidUpdate &&
                      (g.isDev && (l.$flags$ |= 1024), yt(y, 'componentDidUpdate'), g.isDev && (l.$flags$ &= -1025)),
                    Vt(h, 'componentDidUpdate'),
                    b())
                  : ((l.$flags$ |= 64),
                    g.asyncLoading && g.cssAnnotations && ur(h),
                    g.cmpDidLoad &&
                      (g.isDev && (l.$flags$ |= 2048), yt(y, 'componentDidLoad'), g.isDev && (l.$flags$ &= -2049)),
                    Vt(h, 'componentDidLoad'),
                    b(),
                    g.asyncLoading && (l.$onReadyResolve$(h), w || ro(u))),
                g.method && g.lazyLoad && l.$onInstanceResolve$(h),
                g.asyncLoading &&
                  (l.$onRenderResolve$ && (l.$onRenderResolve$(), (l.$onRenderResolve$ = void 0)),
                  512 & l.$flags$ && cn(() => Sn(l, !1)),
                  (l.$flags$ &= -517));
            },
            Ft = (l) => {
              if (g.updatable && (U.isBrowser || U.isTesting)) {
                const u = f(l),
                  h = u.$hostElement$.isConnected;
                return h && 2 == (18 & u.$flags$) && Sn(u, !1), h;
              }
              return !1;
            },
            ro = (l) => {
              g.cssAnnotations && ur(z.documentElement),
                g.asyncQueue && (V.$flags$ |= 2),
                cn(() => fn(O, 'appload', { detail: { namespace: 'app' } })),
                g.profile &&
                  performance.measure &&
                  performance.measure(`[Stencil] app initial load (by ${l})`, 'st:app:start');
            },
            yt = (l, u, h) => {
              if (l && l[u])
                try {
                  return l[u](h);
                } catch (b) {
                  le(b);
                }
            },
            Vt = (l, u) => {
              g.lifecycleDOMEvents &&
                fn(l, 'stencil_' + u, { bubbles: !0, composed: !0, detail: { namespace: 'app' } });
            },
            ur = (l) => {
              var u, h;
              return g.hydratedClass
                ? l.classList.add(null != (u = g.hydratedSelectorName) ? u : 'hydrated')
                : g.hydratedAttribute
                  ? l.setAttribute(null != (h = g.hydratedSelectorName) ? h : 'hydrated', '')
                  : void 0;
            },
            pr = (l) => {
              const u = l.children;
              if (null != u)
                for (let h = 0, b = u.length; h < b; h++) {
                  const y = u[h];
                  'function' == typeof y.connectedCallback && y.connectedCallback(), pr(y);
                }
            },
            ao = (l, u, h) => {
              var b, y;
              const w = l.prototype;
              if (
                (g.formAssociated &&
                  64 & u.$flags$ &&
                  1 & h &&
                  $.forEach((_) =>
                    Object.defineProperty(w, _, {
                      value(...D) {
                        const S = f(this),
                          F = g.lazyLoad ? S.$lazyInstance$ : g.lazyLoad ? S.$hostElement$ : this;
                        if (F) {
                          const H = F[_];
                          'function' == typeof H && H.call(F, ...D);
                        } else
                          S.$onReadyPromise$.then((H) => {
                            const K = H[_];
                            'function' == typeof K && K.call(H, ...D);
                          });
                      },
                    }),
                  ),
                (g.member && u.$members$) || (g.watchCallback && (u.$watchers$ || l.watchers)))
              ) {
                g.watchCallback && l.watchers && !u.$watchers$ && (u.$watchers$ = l.watchers);
                const _ = Object.entries(null != (b = u.$members$) ? b : {});
                if (
                  (_.map(([D, [S]]) => {
                    (g.prop || g.state) && (31 & S || ((!g.lazyLoad || 2 & h) && 32 & S))
                      ? Object.defineProperty(w, D, {
                          get() {
                            return ((l, u) => f(this).$instanceValues$.get(u))(0, D);
                          },
                          set(A) {
                            if (g.isDev) {
                              const F = f(this);
                              !(1 & h) &&
                                0 === (F && 8 & F.$flags$) &&
                                31 & S &&
                                !(1024 & S) &&
                                ve(
                                  `@Prop() "${D}" on <${u.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`,
                                );
                            }
                            ((l, u, h, b) => {
                              const y = f(l);
                              if (g.lazyLoad && !y)
                                throw new Error(
                                  `Couldn't find host element for "${b.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`,
                                );
                              const w = g.lazyLoad ? y.$hostElement$ : l,
                                _ = y.$instanceValues$.get(u),
                                D = y.$flags$,
                                S = g.lazyLoad ? y.$lazyInstance$ : w;
                              h = ((l, u) =>
                                null == l || dn(l)
                                  ? l
                                  : g.propBoolean && 4 & u
                                    ? 'false' !== l && ('' === l || !!l)
                                    : g.propNumber && 2 & u
                                      ? parseFloat(l)
                                      : g.propString && 1 & u
                                        ? String(l)
                                        : l)(h, b.$members$[u][0]);
                              const A = Number.isNaN(_) && Number.isNaN(h);
                              if (
                                (!g.lazyLoad || !(8 & D) || void 0 === _) &&
                                h !== _ &&
                                !A &&
                                (y.$instanceValues$.set(u, h),
                                g.isDev &&
                                  (1024 & y.$flags$
                                    ? ve(
                                        `The state/prop "${u}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        h,
                                        '\nOld value',
                                        _,
                                      )
                                    : 2048 & y.$flags$ &&
                                      ve(
                                        `The state/prop "${u}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
                                        '\nElement',
                                        w,
                                        '\nNew value',
                                        h,
                                        '\nOld value',
                                        _,
                                      )),
                                !g.lazyLoad || S)
                              ) {
                                if (g.watchCallback && b.$watchers$ && 128 & D) {
                                  const H = b.$watchers$[u];
                                  H &&
                                    H.map((K) => {
                                      try {
                                        S[K](h, _, u);
                                      } catch (ee) {
                                        le(ee, w);
                                      }
                                    });
                                }
                                if (g.updatable && 2 == (18 & D)) {
                                  if (
                                    g.cmpShouldUpdate &&
                                    S.componentShouldUpdate &&
                                    !1 === S.componentShouldUpdate(h, _, u)
                                  )
                                    return;
                                  Sn(y, !1);
                                }
                              }
                            })(this, D, A, u);
                          },
                          configurable: !0,
                          enumerable: !0,
                        })
                      : g.lazyLoad &&
                        g.method &&
                        1 & h &&
                        64 & S &&
                        Object.defineProperty(w, D, {
                          value(...A) {
                            var F;
                            const H = f(this);
                            return null == (F = H?.$onInstancePromise$)
                              ? void 0
                              : F.then(() => {
                                  var K;
                                  return null == (K = H.$lazyInstance$) ? void 0 : K[D](...A);
                                });
                          },
                        });
                  }),
                  g.observeAttribute && (!g.lazyLoad || 1 & h))
                ) {
                  const D = new Map();
                  (w.attributeChangedCallback = function (S, A, F) {
                    V.jmp(() => {
                      var H;
                      const K = D.get(S);
                      if (this.hasOwnProperty(K)) (F = this[K]), delete this[K];
                      else {
                        if (w.hasOwnProperty(K) && 'number' == typeof this[K] && this[K] == F) return;
                        if (null == K) {
                          const ee = f(this),
                            Te = ee?.$flags$;
                          if (Te && !(8 & Te) && 128 & Te && F !== A) {
                            const qe = g.lazyLoad ? ee.$lazyInstance$ : g.lazyLoad ? ee.$hostElement$ : this,
                              ze = null == (H = u.$watchers$) ? void 0 : H[S];
                            ze?.forEach((He) => {
                              null != qe[He] && qe[He].call(qe, F, A, S);
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
                        ..._.filter(([S, A]) => 15 & A[0]).map(([S, A]) => {
                          var F;
                          const H = A[1] || S;
                          return (
                            D.set(H, S),
                            g.reflect && 512 & A[0] && (null == (F = u.$attrsToReflect$) || F.push([S, H])),
                            H
                          );
                        }),
                      ]),
                    ));
                }
              }
              return l;
            },
            so = (function () {
              var l = (0, de.A)(function* (u, h, b, y) {
                let w;
                if (!(32 & h.$flags$)) {
                  if (((h.$flags$ |= 32), (g.lazyLoad || g.hydrateClientSide) && b.$lazyBundleId$)) {
                    const A = ((l, u, h) => {
                      const b = l.$tagName$.replace(/-/g, '_'),
                        y = l.$lazyBundleId$;
                      if (g.isDev && 'string' != typeof y)
                        return void we(
                          `Trying to lazily load component <${l.$tagName$}> with style mode "${u.$modeName$}", but it does not exist.`,
                        );
                      if (!y) return;
                      const w = !g.hotModuleReplacement && Fe.get(y);
                      return w
                        ? w[b]
                        : Z(864)(`./${y}.entry.js${g.hotModuleReplacement && h ? '?s-hmr=' + h : ''}`).then(
                            (_) => (g.hotModuleReplacement || Fe.set(y, _), _[b]),
                            le,
                          );
                    })(b, h, y);
                    if (A && 'then' in A) {
                      const H = ((l, u) =>
                        g.profile && performance.mark
                          ? (0 === performance.getEntriesByName(l, 'mark').length && performance.mark(l),
                            () => {
                              0 === performance.getEntriesByName(u, 'measure').length && performance.measure(u, l);
                            })
                          : () => {})(
                        `st:load:${b.$tagName$}:${h.$modeName$}`,
                        `[Stencil] Load module for <${b.$tagName$}>`,
                      );
                      (w = yield A), H();
                    } else w = A;
                    if (!w) throw new Error(`Constructor for "${b.$tagName$}#${h.$modeName$}" was not found`);
                    g.member &&
                      !w.isProxied &&
                      (g.watchCallback && (b.$watchers$ = w.watchers), ao(w, b, 2), (w.isProxied = !0));
                    const F = mt('createInstance', b.$tagName$);
                    g.member && (h.$flags$ |= 8);
                    try {
                      new w(h);
                    } catch (H) {
                      le(H);
                    }
                    g.member && (h.$flags$ &= -9), g.watchCallback && (h.$flags$ |= 128), F(), lo(h.$lazyInstance$);
                  } else (w = u.constructor), customElements.whenDefined(u.localName).then(() => (h.$flags$ |= 128));
                  if (g.style && w && w.style) {
                    let A;
                    'string' == typeof w.style
                      ? (A = w.style)
                      : g.mode &&
                        'string' != typeof w.style &&
                        ((h.$modeName$ = ((l) => ne.map((u) => u(l)).find((u) => !!u))(u)),
                        h.$modeName$ && (A = w.style[h.$modeName$]),
                        g.hydrateServerSide && h.$modeName$ && u.setAttribute('s-mode', h.$modeName$));
                    const F = eo(b, h.$modeName$);
                    if (!R.has(F)) {
                      const H = mt('registerStyles', b.$tagName$);
                      !g.hydrateServerSide &&
                        g.shadowDom &&
                        g.shadowDomShim &&
                        8 & b.$flags$ &&
                        (A = yield Z.e(82)
                          .then(Z.bind(Z, 82))
                          .then((K) => K.scopeCss(A, F))),
                        ((l, u, h) => {
                          let b = R.get(l);
                          xt && h
                            ? ((b = b || new CSSStyleSheet()), 'string' == typeof b ? (b = u) : b.replaceSync(u))
                            : (b = u),
                            R.set(l, b);
                        })(F, A, !!(1 & b.$flags$)),
                        H();
                    }
                  }
                }
                const _ = h.$ancestorComponent$,
                  D = () => Sn(h, !0);
                g.asyncLoading && _ && _['s-rc'] ? _['s-rc'].push(D) : D();
              });
              return function (h, b, y, w) {
                return l.apply(this, arguments);
              };
            })(),
            lo = (l) => {
              g.lazyLoad && g.connectedCallback && yt(l, 'connectedCallback');
            },
            uo = (l) => {
              const u = (l['s-cr'] = z.createComment(g.isDebug ? `content-ref (host=${l.localName})` : ''));
              (u['s-cn'] = !0), it(l, u, l.firstChild);
            },
            Ve = (l) => {
              g.lazyLoad && g.disconnectedCallback && yt(l, 'disconnectedCallback'),
                g.cmpDidUnload && yt(l, 'componentDidUnload');
            },
            po = (function () {
              var l = (0, de.A)(function* (u) {
                if (!(1 & V.$flags$)) {
                  const h = f(u);
                  g.hostListener && h.$rmListeners$ && (h.$rmListeners$.map((b) => b()), (h.$rmListeners$ = void 0)),
                    g.lazyLoad
                      ? h?.$lazyInstance$
                        ? Ve(h.$lazyInstance$)
                        : h?.$onReadyPromise$ && h.$onReadyPromise$.then(() => Ve(h.$lazyInstance$))
                      : Ve(u);
                }
              });
              return function (h) {
                return l.apply(this, arguments);
              };
            })(),
            ho = (l) => {
              const u = l.cloneNode;
              l.cloneNode = function (h) {
                const b = this,
                  y = !!g.shadowDom && b.shadowRoot && De,
                  w = u.call(b, !!y && h);
                if (g.slot && !y && h) {
                  let D,
                    S,
                    _ = 0;
                  const A = [
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
                  for (; _ < b.childNodes.length; _++)
                    (D = b.childNodes[_]['s-nr']),
                      (S = A.every((F) => !b.childNodes[_][F])),
                      D &&
                        (g.appendChildSlotFix && w.__appendChild
                          ? w.__appendChild(D.cloneNode(!0))
                          : w.appendChild(D.cloneNode(!0))),
                      S && w.appendChild(b.childNodes[_].cloneNode(!0));
                }
                return w;
              };
            },
            vi = (l) => {
              (l.__appendChild = l.appendChild),
                (l.appendChild = function (u) {
                  const h = (u['s-sn'] = yi(u)),
                    b = Mt(this.childNodes, h, this.tagName);
                  if (b) {
                    const y = gn(b, h),
                      w = y[y.length - 1],
                      _ = it(w.parentNode, u, w.nextSibling);
                    return Vo(this), _;
                  }
                  return this.__appendChild(u);
                });
            },
            Wa = (l) => {
              (l.__removeChild = l.removeChild),
                (l.removeChild = function (u) {
                  if (u && typeof u['s-sn'] < 'u') {
                    const h = Mt(this.childNodes, u['s-sn'], this.tagName);
                    if (h) {
                      const y = gn(h, u['s-sn']).find((w) => w === u);
                      if (y) return y.remove(), void Vo(this);
                    }
                  }
                  return this.__removeChild(u);
                });
            },
            hr = (l) => {
              const u = l.prepend;
              l.prepend = function (...h) {
                h.forEach((b) => {
                  'string' == typeof b && (b = this.ownerDocument.createTextNode(b));
                  const y = (b['s-sn'] = yi(b)),
                    w = Mt(this.childNodes, y, this.tagName);
                  if (w) {
                    const _ = document.createTextNode('');
                    (_['s-nr'] = b), w['s-cr'].parentNode.__appendChild(_), (b['s-ol'] = _);
                    const S = gn(w, y)[0];
                    return it(S.parentNode, b, S.nextSibling);
                  }
                  return 1 === b.nodeType && b.getAttribute('slot') && (b.hidden = !0), u.call(this, b);
                });
              };
            },
            Ua = (l) => {
              l.append = function (...u) {
                u.forEach((h) => {
                  'string' == typeof h && (h = this.ownerDocument.createTextNode(h)), this.appendChild(h);
                });
              };
            },
            xi = (l) => {
              const u = l.insertAdjacentHTML;
              l.insertAdjacentHTML = function (h, b) {
                if ('afterbegin' !== h && 'beforeend' !== h) return u.call(this, h, b);
                const y = this.ownerDocument.createElement('_');
                let w;
                if (((y.innerHTML = b), 'afterbegin' === h)) for (; (w = y.firstChild); ) this.prepend(w);
                else if ('beforeend' === h) for (; (w = y.firstChild); ) this.append(w);
              };
            },
            En = (l) => {
              l.insertAdjacentText = function (u, h) {
                this.insertAdjacentHTML(u, h);
              };
            },
            Xo = (l) => {
              const u = l.insertAdjacentElement;
              l.insertAdjacentElement = function (h, b) {
                return 'afterbegin' !== h && 'beforeend' !== h
                  ? u.call(this, h, b)
                  : 'afterbegin' === h
                    ? (this.prepend(b), b)
                    : ('beforeend' === h && this.append(b), b);
              };
            },
            fo = (l) => {
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
                            Dn(this.childNodes)
                              .map((y) => {
                                var w, _;
                                const D = [];
                                let S = y.nextSibling;
                                for (; S && S['s-sn'] === y['s-sn']; )
                                  (3 === S.nodeType || 1 === S.nodeType) &&
                                    D.push(null != (_ = null == (w = S.textContent) ? void 0 : w.trim()) ? _ : ''),
                                    (S = S.nextSibling);
                                return D.filter((A) => '' !== A).join(' ');
                              })
                              .filter((y) => '' !== y)
                              .join(' ') +
                            ' '
                          );
                        },
                        set(h) {
                          Dn(this.childNodes).forEach((y) => {
                            let w = y.nextSibling;
                            for (; w && w['s-sn'] === y['s-sn']; ) {
                              const _ = w;
                              (w = w.nextSibling), _.remove();
                            }
                            if ('' === y['s-sn']) {
                              const _ = this.ownerDocument.createTextNode(h);
                              (_['s-sn'] = ''), it(y.parentElement, _, y.nextSibling);
                            } else y.remove();
                          });
                        },
                      }
                    : {
                        get() {
                          var h;
                          const b = Mt(this.childNodes, '', this.tagName);
                          return 3 === (null == (h = b?.nextSibling) ? void 0 : h.nodeType)
                            ? b.nextSibling.textContent
                            : b
                              ? b.textContent
                              : this.__textContent;
                        },
                        set(h) {
                          var b;
                          const y = Mt(this.childNodes, '', this.tagName);
                          if (3 === (null == (b = y?.nextSibling) ? void 0 : b.nodeType)) y.nextSibling.textContent = h;
                          else if (y) y.textContent = h;
                          else {
                            this.__textContent = h;
                            const w = this['s-cr'];
                            w && it(this, w, this.firstChild);
                          }
                        },
                      },
                );
            },
            mo = (l, u) => {
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
                      if (!(1 & V.$flags$) && 2 & f(this).$flags$) {
                        const w = new h();
                        for (let _ = 0; _ < y.length; _++) {
                          const D = y[_]['s-nr'];
                          D && w.push(D);
                        }
                        return w;
                      }
                      return h.from(y);
                    },
                  });
              }
            },
            Dn = (l) => {
              const u = [];
              for (const h of Array.from(l)) h['s-sr'] && u.push(h), u.push(...Dn(h.childNodes));
              return u;
            },
            yi = (l) => l['s-sn'] || (1 === l.nodeType && l.getAttribute('slot')) || '',
            Mt = (l, u, h) => {
              let y,
                b = 0;
              for (; b < l.length; b++)
                if (
                  ((y = l[b]), (y['s-sr'] && y['s-sn'] === u && y['s-hn'] === h) || ((y = Mt(y.childNodes, u, h)), y))
                )
                  return y;
              return null;
            },
            gn = (l, u) => {
              const h = [l];
              for (; (l = l.nextSibling) && l['s-sn'] === u; ) h.push(l);
              return h;
            },
            wi = (l, u) => {
              const h = { $flags$: u[0], $tagName$: u[1] };
              g.member && (h.$members$ = u[2]),
                g.hostListener && (h.$listeners$ = u[3]),
                g.watchCallback && (h.$watchers$ = l.$watchers$),
                g.reflect && (h.$attrsToReflect$ = []),
                g.shadowDom && !De && 1 & h.$flags$ && (h.$flags$ |= 8),
                g.experimentalSlotFixes
                  ? g.scoped &&
                    2 & h.$flags$ &&
                    ((l, u) => {
                      ho(l), vi(l), Ua(l), hr(l), Xo(l), xi(l), En(l), fo(l), mo(l, u), Wa(l);
                    })(l.prototype, h)
                  : (g.slotChildNodesFix && mo(l.prototype, h),
                    g.cloneNodeFix && ho(l.prototype),
                    g.appendChildSlotFix && vi(l.prototype),
                    g.scopedSlotTextContentFix && 2 & h.$flags$ && fo(l.prototype));
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
                        B.set(l, h);
                    })(this, h);
                  },
                  connectedCallback() {
                    const w = f(this);
                    Zo(this, w, h.$listeners$, !1),
                      ((l) => {
                        if (!(1 & V.$flags$)) {
                          const u = f(l),
                            h = u.$cmpMeta$,
                            b = mt('connectedCallback', h.$tagName$);
                          if ((g.hostListenerTargetParent && Zo(l, u, h.$listeners$, !0), 1 & u.$flags$))
                            Zo(l, u, h.$listeners$, !1),
                              u?.$lazyInstance$
                                ? lo(u.$lazyInstance$)
                                : u?.$onReadyPromise$ && u.$onReadyPromise$.then(() => lo(u.$lazyInstance$));
                          else {
                            let y;
                            if (((u.$flags$ |= 1), g.hydrateClientSide && ((y = l.getAttribute(be)), y))) {
                              if (g.shadowDom && De && 1 & h.$flags$) {
                                const w = g.mode ? dt(l.shadowRoot, h, l.getAttribute('s-mode')) : dt(l.shadowRoot, h);
                                l.classList.remove(w + '-h', w + '-s');
                              }
                              ((l, u, h, b) => {
                                const y = mt('hydrateClient', u),
                                  w = l.shadowRoot,
                                  _ = [],
                                  S = g.shadowDom && w ? [] : null,
                                  A = (b.$vnode$ = Zt(u, null));
                                V.$orgLocNodes$ || Cn(z.body, (V.$orgLocNodes$ = new Map())),
                                  (l[be] = h),
                                  l.removeAttribute(be),
                                  In(A, _, [], S, l, l, h),
                                  _.map((F) => {
                                    const H = F.$hostId$ + '.' + F.$nodeId$,
                                      K = V.$orgLocNodes$.get(H),
                                      ee = F.$elm$;
                                    K && De && '' === K['s-en'] && K.parentNode.insertBefore(ee, K.nextSibling),
                                      w || ((ee['s-hn'] = u), K && ((ee['s-ol'] = K), (ee['s-ol']['s-nr'] = ee))),
                                      V.$orgLocNodes$.delete(H);
                                  }),
                                  g.shadowDom &&
                                    w &&
                                    S.map((F) => {
                                      F && w.appendChild(F);
                                    }),
                                  y();
                              })(l, h.$tagName$, y, u);
                            }
                            if (
                              (g.slotRelocation &&
                                !y &&
                                (g.hydrateServerSide || ((g.slot || g.shadowDom) && 12 & h.$flags$)) &&
                                uo(l),
                              g.asyncLoading)
                            ) {
                              let w = l;
                              for (; (w = w.parentNode || w.host); )
                                if (
                                  (g.hydrateClientSide && 1 === w.nodeType && w.hasAttribute('s-id') && w['s-p']) ||
                                  w['s-p']
                                ) {
                                  cr(u, (u.$ancestorComponent$ = w));
                                  break;
                                }
                            }
                            g.prop &&
                              !g.hydrateServerSide &&
                              h.$members$ &&
                              Object.entries(h.$members$).map(([w, [_]]) => {
                                if (31 & _ && l.hasOwnProperty(w)) {
                                  const D = l[w];
                                  delete l[w], (l[w] = D);
                                }
                              }),
                              g.initializeNextTick ? cn(() => so(l, u, h)) : so(l, u, h);
                          }
                          b();
                        }
                      })(this),
                      g.connectedCallback && b && b.call(this);
                  },
                  disconnectedCallback() {
                    po(this), g.disconnectedCallback && y && y.call(this);
                  },
                  __attachShadow() {
                    if (De)
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
                ao(l, h, 3)
              );
            },
            Zo = (l, u, h, b) => {
              g.hostListener &&
                h &&
                (g.hostListenerTargetParent && (h = h.filter(b ? ([y]) => 32 & y : ([y]) => !(32 & y))),
                h.map(([y, w, _]) => {
                  const D = g.hostListenerTarget ? bo(l, y) : l,
                    S = go(u, _),
                    A = mr(y);
                  V.ael(D, w, S, A), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => V.rel(D, w, S, A));
                }));
            },
            go = (l, u) => (h) => {
              var b;
              try {
                g.lazyLoad
                  ? 256 & l.$flags$
                    ? null == (b = l.$lazyInstance$) || b[u](h)
                    : (l.$queuedListeners$ = l.$queuedListeners$ || []).push([u, h])
                  : l.$hostElement$[u](h);
              } catch (y) {
                le(y);
              }
            },
            bo = (l, u) =>
              g.hostListenerTargetDocument && 4 & u
                ? z
                : g.hostListenerTargetWindow && 8 & u
                  ? O
                  : g.hostListenerTargetBody && 16 & u
                    ? z.body
                    : g.hostListenerTargetParent && 32 & u && l.parentElement
                      ? l.parentElement
                      : l,
            mr = (l) => (ot ? { passive: !!(1 & l), capture: !!(2 & l) } : !!(2 & l));
        },
        994: (W, ae, Z) => {
          'use strict';
          function de(xe, oe, _e, $e, U, B, f) {
            try {
              var ye = xe[B](f),
                ge = ye.value;
            } catch (Ae) {
              return void _e(Ae);
            }
            ye.done ? oe(ge) : Promise.resolve(ge).then($e, U);
          }
          function g(xe) {
            return function () {
              var oe = this,
                _e = arguments;
              return new Promise(function ($e, U) {
                var B = xe.apply(oe, _e);
                function f(ge) {
                  de(B, $e, U, f, ye, 'next', ge);
                }
                function ye(ge) {
                  de(B, $e, U, f, ye, 'throw', ge);
                }
                f(void 0);
              });
            };
          }
          Z.d(ae, { A: () => g });
        },
      },
      Va = {};
    function se(W) {
      var ae = Va[W];
      if (void 0 !== ae) return ae.exports;
      var Z = (Va[W] = { exports: {} });
      return Ha[W](Z, Z.exports, se), Z.exports;
    }
    (se.m = Ha),
      (se.d = (W, ae) => {
        for (var Z in ae) se.o(ae, Z) && !se.o(W, Z) && Object.defineProperty(W, Z, { enumerable: !0, get: ae[Z] });
      }),
      (se.f = {}),
      (se.e = (W) => Promise.all(Object.keys(se.f).reduce((ae, Z) => (se.f[Z](W, ae), ae), []))),
      (se.u = (W) =>
        W +
        '.' +
        { 82: 'c492c7a894eaaad9', 262: '98ee57aa059bdfb8', 506: '0230b7e21e4edf05', 592: 'fedc63c3baac303c' }[W] +
        '.js'),
      (se.miniCssF = (W) => {}),
      (se.o = (W, ae) => Object.prototype.hasOwnProperty.call(W, ae)),
      (W = {}),
      (ae = 'plugin:'),
      (se.l = (Z, de, g, xe) => {
        if (W[Z]) W[Z].push(de);
        else {
          var oe, _e;
          if (void 0 !== g)
            for (var $e = document.getElementsByTagName('script'), U = 0; U < $e.length; U++) {
              var B = $e[U];
              if (B.getAttribute('src') == Z || B.getAttribute('data-webpack') == ae + g) {
                oe = B;
                break;
              }
            }
          oe ||
            ((_e = !0),
            ((oe = document.createElement('script')).type = 'module'),
            (oe.charset = 'utf-8'),
            (oe.timeout = 120),
            se.nc && oe.setAttribute('nonce', se.nc),
            oe.setAttribute('data-webpack', ae + g),
            (oe.src = se.tu(Z))),
            (W[Z] = [de]);
          var f = (ge, Ae) => {
              (oe.onerror = oe.onload = null), clearTimeout(ye);
              var te = W[Z];
              if ((delete W[Z], oe.parentNode && oe.parentNode.removeChild(oe), te && te.forEach((le) => le(Ae)), ge))
                return ge(Ae);
            },
            ye = setTimeout(f.bind(null, void 0, { type: 'timeout', target: oe }), 12e4);
          (oe.onerror = f.bind(null, oe.onerror)),
            (oe.onload = f.bind(null, oe.onload)),
            _e && document.head.appendChild(oe);
        }
      }),
      (se.r = (W) => {
        typeof Symbol < 'u' && Symbol.toStringTag && Object.defineProperty(W, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(W, '__esModule', { value: !0 });
      }),
      (() => {
        var W;
        se.tt = () => (
          void 0 === W &&
            ((W = { createScriptURL: (ae) => ae }),
            typeof trustedTypes < 'u' &&
              trustedTypes.createPolicy &&
              (W = trustedTypes.createPolicy('angular#bundler', W))),
          W
        );
      })(),
      (se.tu = (W) => se.tt().createScriptURL(W)),
      (se.p = ''),
      (() => {
        var W = { 792: 0 };
        se.f.j = (de, g) => {
          var xe = se.o(W, de) ? W[de] : void 0;
          if (0 !== xe)
            if (xe) g.push(xe[2]);
            else {
              var oe = new Promise((B, f) => (xe = W[de] = [B, f]));
              g.push((xe[2] = oe));
              var _e = se.p + se.u(de),
                $e = new Error();
              se.l(
                _e,
                (B) => {
                  if (se.o(W, de) && (0 !== (xe = W[de]) && (W[de] = void 0), xe)) {
                    var f = B && ('load' === B.type ? 'missing' : B.type),
                      ye = B && B.target && B.target.src;
                    ($e.message = 'Loading chunk ' + de + ' failed.\n(' + f + ': ' + ye + ')'),
                      ($e.name = 'ChunkLoadError'),
                      ($e.type = f),
                      ($e.request = ye),
                      xe[1]($e);
                  }
                },
                'chunk-' + de,
                de,
              );
            }
        };
        var ae = (de, g) => {
            var $e,
              U,
              [xe, oe, _e] = g,
              B = 0;
            if (xe.some((ye) => 0 !== W[ye])) {
              for ($e in oe) se.o(oe, $e) && (se.m[$e] = oe[$e]);
              _e && _e(se);
            }
            for (de && de(g); B < xe.length; B++) se.o(W, (U = xe[B])) && W[U] && W[U][0](), (W[U] = 0);
          },
          Z = ((typeof self < 'u' ? self : this).webpackChunkplugin =
            (typeof self < 'u' ? self : this).webpackChunkplugin || []);
        Z.forEach(ae.bind(null, 0)), (Z.push = ae.bind(null, Z.push.bind(Z)));
      })();
    var nr = {};
    return (
      (() => {
        'use strict';
        se.r(nr), se.d(nr, { PluginModule: () => fc, default: () => nb });
        var W = se(714),
          ae = se(122),
          Z = se(555),
          de = se(325);
        function g(n) {
          return 'function' == typeof n;
        }
        function oe(n) {
          return (e) => {
            if (
              (function xe(n) {
                return g(n?.lift);
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
        function $e(...n) {
          (0, de.wakoLog)('plugin.watchnow', n);
        }
        var B = se(652),
          f = se(264),
          ye = se(346),
          ge = se(382),
          Ae = se(961);
        const te = (n) => n && 'number' == typeof n.length && 'function' != typeof n,
          we = (function Ee(n) {
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
        function ve(n, e) {
          if (n) {
            const t = n.indexOf(e);
            0 <= t && n.splice(t, 1);
          }
        }
        class ie {
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
                  e = r instanceof we ? r.errors : [r];
                }
              const { _finalizers: i } = this;
              if (i) {
                this._finalizers = null;
                for (const r of i)
                  try {
                    Pe(r);
                  } catch (a) {
                    (e = e ?? []), a instanceof we ? (e = [...e, ...a.errors]) : e.push(a);
                  }
              }
              if (e) throw new we(e);
            }
          }
          add(e) {
            var t;
            if (e && e !== this)
              if (this.closed) Pe(e);
              else {
                if (e instanceof ie) {
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
            t === e ? (this._parentage = null) : Array.isArray(t) && ve(t, e);
          }
          remove(e) {
            const { _finalizers: t } = this;
            t && ve(t, e), e instanceof ie && e._removeParent(this);
          }
        }
        function Fe(n) {
          return n instanceof ie || (n && 'closed' in n && g(n.remove) && g(n.add) && g(n.unsubscribe));
        }
        function Pe(n) {
          g(n) ? n() : n.unsubscribe();
        }
        ie.EMPTY = (() => {
          const n = new ie();
          return (n.closed = !0), n;
        })();
        const j = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
          },
          R = {
            setTimeout(n, e, ...t) {
              const { delegate: o } = R;
              return o?.setTimeout ? o.setTimeout(n, e, ...t) : setTimeout(n, e, ...t);
            },
            clearTimeout(n) {
              const { delegate: e } = R;
              return (e?.clearTimeout || clearTimeout)(n);
            },
            delegate: void 0,
          };
        function ne(n) {
          R.setTimeout(() => {
            const { onUnhandledError: e } = j;
            if (!e) throw n;
            e(n);
          });
        }
        function fe() {}
        const Ce = be('C', void 0, void 0);
        function be(n, e, t) {
          return { kind: n, value: e, error: t };
        }
        let Se = null;
        class Ke extends ie {
          constructor(e) {
            super(),
              (this.isStopped = !1),
              e ? ((this.destination = e), Fe(e) && e.add(this)) : (this.destination = De);
          }
          static create(e, t, o) {
            return new z(e, t, o);
          }
          next(e) {
            this.isStopped
              ? nt(
                  (function re(n) {
                    return be('N', n, void 0);
                  })(e),
                  this,
                )
              : this._next(e);
          }
          error(e) {
            this.isStopped
              ? nt(
                  (function ke(n) {
                    return be('E', void 0, n);
                  })(e),
                  this,
                )
              : ((this.isStopped = !0), this._error(e));
          }
          complete() {
            this.isStopped ? nt(Ce, this) : ((this.isStopped = !0), this._complete());
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
        const vt = Function.prototype.bind;
        function $(n, e) {
          return vt.call(n, e);
        }
        class O {
          constructor(e) {
            this.partialObserver = e;
          }
          next(e) {
            const { partialObserver: t } = this;
            if (t.next)
              try {
                t.next(e);
              } catch (o) {
                Q(o);
              }
          }
          error(e) {
            const { partialObserver: t } = this;
            if (t.error)
              try {
                t.error(e);
              } catch (o) {
                Q(o);
              }
            else Q(e);
          }
          complete() {
            const { partialObserver: e } = this;
            if (e.complete)
              try {
                e.complete();
              } catch (t) {
                Q(t);
              }
          }
        }
        class z extends Ke {
          constructor(e, t, o) {
            let i;
            if ((super(), g(e) || !e)) i = { next: e ?? void 0, error: t ?? void 0, complete: o ?? void 0 };
            else {
              let r;
              this && j.useDeprecatedNextContext
                ? ((r = Object.create(e)),
                  (r.unsubscribe = () => this.unsubscribe()),
                  (i = {
                    next: e.next && $(e.next, r),
                    error: e.error && $(e.error, r),
                    complete: e.complete && $(e.complete, r),
                  }))
                : (i = e);
            }
            this.destination = new O(i);
          }
        }
        function Q(n) {
          j.useDeprecatedSynchronousErrorHandling
            ? (function ue(n) {
                j.useDeprecatedSynchronousErrorHandling && Se && ((Se.errorThrown = !0), (Se.error = n));
              })(n)
            : ne(n);
        }
        function nt(n, e) {
          const { onStoppedNotification: t } = j;
          t && R.setTimeout(() => t(n, e));
        }
        const De = {
            closed: !0,
            next: fe,
            error: function V(n) {
              throw n;
            },
            complete: fe,
          },
          ot = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        function We(n) {
          return n;
        }
        let Ct = (() => {
          class n {
            constructor(t) {
              t && (this._subscribe = t);
            }
            lift(t) {
              const o = new n();
              return (o.source = this), (o.operator = t), o;
            }
            subscribe(t, o, i) {
              const r = (function yn(n) {
                return (
                  (n && n instanceof Ke) ||
                  ((function Tt(n) {
                    return n && g(n.next) && g(n.error) && g(n.complete);
                  })(n) &&
                    Fe(n))
                );
              })(t)
                ? t
                : new z(t, o, i);
              return (
                (function Me(n) {
                  if (j.useDeprecatedSynchronousErrorHandling) {
                    const e = !Se;
                    if ((e && (Se = { errorThrown: !1, error: null }), n(), e)) {
                      const { errorThrown: t, error: o } = Se;
                      if (((Se = null), t)) throw o;
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
              return new (o = Je(o))((i, r) => {
                const a = new z({
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
            [ot]() {
              return this;
            }
            pipe(...t) {
              return (function ct(n) {
                return 0 === n.length
                  ? We
                  : 1 === n.length
                    ? n[0]
                    : function (t) {
                        return n.reduce((o, i) => i(o), t);
                      };
              })(t)(this);
            }
            toPromise(t) {
              return new (t = Je(t))((o, i) => {
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
        function Je(n) {
          var e;
          return null !== (e = n ?? j.Promise) && void 0 !== e ? e : Promise;
        }
        const cn = (function Kt() {
          return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
        })();
        function Ao(n) {
          if (n instanceof Ct) return n;
          if (null != n) {
            if (
              (function Fn(n) {
                return g(n[ot]);
              })(n)
            )
              return (function Nn(n) {
                return new Ct((e) => {
                  const t = n[ot]();
                  if (g(t.subscribe)) return t.subscribe(e);
                  throw new TypeError('Provided object does not correctly implement Symbol.observable');
                });
              })(n);
            if (te(n))
              return (function zo(n) {
                return new Ct((e) => {
                  for (let t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                  e.complete();
                });
              })(n);
            if (
              (function le(n) {
                return g(n?.then);
              })(n)
            )
              return (function Oo(n) {
                return new Ct((e) => {
                  n.then(
                    (t) => {
                      e.closed || (e.next(t), e.complete());
                    },
                    (t) => e.error(t),
                  ).then(null, ne);
                });
              })(n);
            if (
              (function Mn(n) {
                return Symbol.asyncIterator && g(n?.[Symbol.asyncIterator]);
              })(n)
            )
              return dn(n);
            if (
              (function wn(n) {
                return g(n?.[cn]);
              })(n)
            )
              return (function Lo(n) {
                return new Ct((e) => {
                  for (const t of n) if ((e.next(t), e.closed)) return;
                  e.complete();
                });
              })(n);
            if (
              (function Bn(n) {
                return g(n?.getReader);
              })(n)
            )
              return (function Hn(n) {
                return dn(
                  (function Pn(n) {
                    return (0, B.__asyncGenerator)(this, arguments, function* () {
                      const t = n.getReader();
                      try {
                        for (;;) {
                          const { value: o, done: i } = yield (0, B.__await)(t.read());
                          if (i) return yield (0, B.__await)(void 0);
                          yield yield (0, B.__await)(o);
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
        function dn(n) {
          return new Ct((e) => {
            (function jo(n, e) {
              var t, o, i, r;
              return (0, B.__awaiter)(this, void 0, void 0, function* () {
                try {
                  for (t = (0, B.__asyncValues)(n); !(o = yield t.next()).done; )
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
        function Nt(n, e, t, o, i) {
          return new Vn(n, e, t, o, i);
        }
        class Vn extends Ke {
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
        function Wn(n, e) {
          return oe((t, o) => {
            let i = null,
              r = 0,
              a = !1;
            const s = () => a && !i && o.complete();
            t.subscribe(
              Nt(
                o,
                (d) => {
                  i?.unsubscribe();
                  let p = 0;
                  const m = r++;
                  Ao(n(d, m)).subscribe(
                    (i = Nt(
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
        }
        const pn = new f.InjectionToken('USERCONFIG');
        class Kn {
          data;
          constructor(e = {}) {
            (this.data = e),
              console.warn(
                "[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.",
              );
          }
          get(e) {
            return this.data[e];
          }
        }
        let kn = (() => {
          class n {
            zone = (0, f.inject)(f.NgZone);
            applicationRef = (0, f.inject)(f.ApplicationRef);
            config = (0, f.inject)(pn);
            create(t, o, i) {
              return new In(t, o, this.applicationRef, this.zone, i, this.config.useSetInputAPI ?? !1);
            }
            static ɵfac = function (o) {
              return new (o || n)();
            };
            static ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
          }
          return n;
        })();
        class In {
          environmentInjector;
          injector;
          applicationRef;
          zone;
          elementReferenceKey;
          enableSignalsSupport;
          elRefMap = new WeakMap();
          elEventsMap = new WeakMap();
          constructor(e, t, o, i, r, a) {
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
                      Cn(
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
        const Cn = (n, e, t, o, i, r, a, s, d, p, m, v) => {
            const I = f.Injector.create({ providers: Mo(d), parent: t }),
              k = (0, f.createComponent)(s, { environmentInjector: e, elementInjector: I }),
              C = k.instance,
              E = k.location.nativeElement;
            if (d)
              if (
                (m &&
                  void 0 !== C[m] &&
                  console.error(
                    `[Ionic Error]: ${m} is a reserved property when using ${a.tagName.toLowerCase()}. Rename or remove the "${m}" property from ${s.name}.`,
                  ),
                !0 === v && void 0 !== k.setInput)
              ) {
                const { modal: P, popover: q, ...Y } = d;
                for (const X in Y) k.setInput(X, Y[X]);
                void 0 !== P && Object.assign(C, { modal: P }), void 0 !== q && Object.assign(C, { popover: q });
              } else Object.assign(C, d);
            if (p) for (const P of p) E.classList.add(P);
            const L = Zn(n, C, E);
            return a.appendChild(E), o.attachView(k.hostView), i.set(E, k), r.set(E, L), E;
          },
          Xn = [ge.L, ge.a, ge.b, ge.c, ge.d],
          Zn = (n, e, t) =>
            n.run(() => {
              const o = Xn.filter((i) => 'function' == typeof e[i]).map((i) => {
                const r = (a) => e[i](a.detail);
                return t.addEventListener(i, r), () => t.removeEventListener(i, r);
              });
              return () => o.forEach((i) => i());
            }),
          Qn = new f.InjectionToken('NavParamsToken'),
          Mo = (n) => [
            { provide: Qn, useValue: n },
            { provide: Kn, useFactory: hn, deps: [Qn] },
          ],
          hn = (n) => new Kn(n),
          zt = new f.InjectionToken('');
        let mi = (() => {
          class n {
            outletDataSubscriptions = new Map();
            bindActivatedRouteToOutletComponent(t) {
              this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
            }
            unsubscribeFromRouteData(t) {
              this.outletDataSubscriptions.get(t)?.unsubscribe(), this.outletDataSubscriptions.delete(t);
            }
            subscribeToRouteData(t) {
              const { activatedRoute: o } = t,
                i = (0, Ae.combineLatest)([o.queryParams, o.params, o.data])
                  .pipe(
                    Wn(([r, a, s], d) => ((s = { ...r, ...a, ...s }), 0 === d ? (0, Ae.of)(s) : Promise.resolve(s))),
                  )
                  .subscribe((r) => {
                    if (!t.isActivated || !t.activatedComponentRef || t.activatedRoute !== o || null === o.component)
                      return void this.unsubscribeFromRouteData(t);
                    const a = (0, f.reflectComponentType)(o.component);
                    if (a) for (const { templateName: s } of a.inputs) t.activatedComponentRef.setInput(s, r[s]);
                    else this.unsubscribeFromRouteData(t);
                  });
              this.outletDataSubscriptions.set(t, i);
            }
            static ɵfac = function (o) {
              return new (o || n)();
            };
            static ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
          }
          return n;
        })();
        function io(n) {
          return n?.componentInputBindingEnabled ? new mi() : null;
        }
        class Sn {
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
        var N = se(994),
          c = se(445),
          M = se(935),
          Le = se(338);
        const qo = 'ion-content',
          dr = '.ion-content-scroll-host',
          Yo = `${qo}, ${dr}`,
          Ft = (n) => 'ION-CONTENT' === n.tagName,
          Vt = (n) => n.closest(Yo),
          Ko = (n) => {
            if (Ft(n)) {
              const t = n.scrollY;
              return (n.scrollY = !1), t;
            }
            return n.style.setProperty('overflow', 'hidden'), !0;
          },
          so = (function () {
            var n = (0, N.A)(function* (e, t, o, i, r, a) {
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
                yield new Promise((p) => (0, M.c)(d, p)),
                d
              );
            });
            return function (t, o, i, r, a, s) {
              return n.apply(this, arguments);
            };
          })(),
          lo = (n, e) => {
            if (e) {
              if (n) return n.removeViewFromDom(e.parentElement, e);
              e.remove();
            }
            return Promise.resolve();
          },
          co = () => {
            let n, e;
            return {
              attachViewToDom: (function () {
                var i = (0, N.A)(function* (r, a, s = {}, d = []) {
                  var p, m;
                  let v;
                  if (((n = r), a)) {
                    const k =
                      'string' == typeof a
                        ? null === (p = n.ownerDocument) || void 0 === p
                          ? void 0
                          : p.createElement(a)
                        : a;
                    d.forEach((C) => k.classList.add(C)),
                      Object.assign(k, s),
                      n.appendChild(k),
                      (v = k),
                      yield new Promise((C) => (0, M.c)(k, C));
                  } else if (
                    n.children.length > 0 &&
                    ('ION-MODAL' === n.tagName || 'ION-POPOVER' === n.tagName) &&
                    !(v = n.children[0]).classList.contains('ion-delegate-host')
                  ) {
                    const C = null === (m = n.ownerDocument) || void 0 === m ? void 0 : m.createElement('div');
                    C.classList.add('ion-delegate-host'),
                      d.forEach((E) => C.classList.add(E)),
                      C.append(...n.children),
                      n.appendChild(C),
                      (v = C);
                  }
                  const I = document.querySelector('ion-app') || document.body;
                  return (
                    (e = document.createComment('ionic teleport')),
                    n.parentNode.insertBefore(e, n),
                    I.appendChild(n),
                    v ?? n
                  );
                });
                return function (a, s) {
                  return i.apply(this, arguments);
                };
              })(),
              removeViewFromDom: () => (n && e && (e.parentNode.insertBefore(n, e), e.remove()), Promise.resolve()),
            };
          },
          uo = () => {
            let n;
            return {
              lock: (function () {
                var t = (0, N.A)(function* () {
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
        var Ve = se(911);
        var G = se(530);
        var xi = se(86);
        const En =
            '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
          Xo = (n, e) => {
            const t = n.querySelector(En);
            mo(t, e ?? n);
          },
          fo = (n, e) => {
            const t = Array.from(n.querySelectorAll(En));
            mo(t.length > 0 ? t[t.length - 1] : null, e ?? n);
          },
          mo = (n, e) => {
            let t = n;
            const o = n?.shadowRoot;
            o && (t = o.querySelector(En) || n), t ? (0, M.f)(t) : e.focus();
          };
        let Dn = 0,
          yi = 0;
        const Mt = new WeakMap(),
          gn = (n) => ({
            create: (e) => mr(n, e),
            dismiss: (e, t, o) => br(document, e, t, n, o),
            getTop: () =>
              (0, N.A)(function* () {
                return u(document, n);
              })(),
          }),
          ki = gn('ion-modal'),
          fr = gn('ion-popover'),
          go = (n) => {
            typeof document < 'u' && Ii(document);
            const e = Dn++;
            n.overlayIndex = e;
          },
          bo = (n) => (n.hasAttribute('id') || (n.id = 'ion-overlay-' + ++yi), n.id),
          mr = (n, e) =>
            typeof window < 'u' && typeof window.customElements < 'u'
              ? window.customElements.whenDefined(n).then(() => {
                  const t = document.createElement(n);
                  return (
                    t.classList.add('overlay-hidden'),
                    Object.assign(t, Object.assign(Object.assign({}, e), { hasController: !0 })),
                    _(document).appendChild(t),
                    new Promise((o) => (0, M.c)(t, o))
                  );
                })
              : Promise.resolve(),
          gr = (n, e) => {
            let t = n;
            const o = n?.shadowRoot;
            o && (t = o.querySelector(En) || n), t ? (0, M.f)(t) : e.focus();
          },
          Ii = (n) => {
            0 === Dn &&
              ((Dn = 1),
              n.addEventListener(
                'focus',
                (e) => {
                  ((n, e) => {
                    const t = u(e, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover'),
                      o = n.target;
                    t &&
                      o &&
                      !t.classList.contains(Qo) &&
                      (t.shadowRoot
                        ? (() => {
                            if (t.contains(o)) t.lastFocus = o;
                            else if ('ION-TOAST' === o.tagName) gr(t.lastFocus, t);
                            else {
                              const a = t.lastFocus;
                              Xo(t), a === e.activeElement && fo(t), (t.lastFocus = e.activeElement);
                            }
                          })()
                        : (() => {
                            if (t === o) t.lastFocus = void 0;
                            else if ('ION-TOAST' === o.tagName) gr(t.lastFocus, t);
                            else {
                              const a = (0, M.g)(t);
                              if (!a.contains(o)) return;
                              const s = a.querySelector('.ion-overlay-wrapper');
                              if (!s) return;
                              if (s.contains(o) || o === a.querySelector('ion-backdrop')) t.lastFocus = o;
                              else {
                                const d = t.lastFocus;
                                Xo(s, t), d === e.activeElement && fo(s, t), (t.lastFocus = e.activeElement);
                              }
                            }
                          })());
                  })(e, n);
                },
                !0,
              ),
              n.addEventListener('ionBackButton', (e) => {
                const t = u(n);
                t?.backdropDismiss &&
                  e.detail.register(100, () => {
                    t.dismiss(void 0, ee);
                  });
              }),
              (G.c.get('experimentalCloseWatcher', !1) && void 0 !== Ve.w && 'CloseWatcher' in Ve.w) ||
                n.addEventListener('keydown', (e) => {
                  if ('Escape' === e.key) {
                    const t = u(n);
                    t?.backdropDismiss && t.dismiss(void 0, ee);
                  }
                }));
          },
          br = (n, e, t, o, i) => {
            const r = u(n, o, i);
            return r ? r.dismiss(e, t) : Promise.reject('overlay does not exist');
          },
          l = (n, e) =>
            ((n, e) => (
              void 0 === e &&
                (e = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast'),
              Array.from(n.querySelectorAll(e)).filter((t) => t.overlayIndex > 0)
            ))(n, e).filter((t) => !((n) => n.classList.contains('overlay-hidden'))(t)),
          u = (n, e, t) => {
            const o = l(n, e);
            return void 0 === t ? o[o.length - 1] : o.find((i) => i.id === t);
          },
          h = (n = !1) => {
            const t = _(document).querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
            t && (n ? t.setAttribute('aria-hidden', 'true') : t.removeAttribute('aria-hidden'));
          },
          b = (function () {
            var n = (0, N.A)(function* (e, t, o, i, r) {
              var a, s;
              if (e.presented) return;
              'ION-TOAST' !== e.el.tagName && h(!0),
                document.body.classList.add(xi.B),
                Wt(e.el),
                He(e.el),
                (e.presented = !0),
                e.willPresent.emit(),
                null === (a = e.willPresentShorthand) || void 0 === a || a.emit();
              const d = (0, G.b)(e),
                p = e.enterAnimation ? e.enterAnimation : G.c.get(t, 'ios' === d ? o : i);
              (yield D(e, p, e.el, r)) &&
                (e.didPresent.emit(), null === (s = e.didPresentShorthand) || void 0 === s || s.emit()),
                'ION-TOAST' !== e.el.tagName && y(e.el),
                e.keyboardClose &&
                  (null === document.activeElement || !e.el.contains(document.activeElement)) &&
                  e.el.focus(),
                e.el.removeAttribute('aria-hidden');
            });
            return function (t, o, i, r, a) {
              return n.apply(this, arguments);
            };
          })(),
          y = (function () {
            var n = (0, N.A)(function* (e) {
              let t = document.activeElement;
              if (!t) return;
              const o = t?.shadowRoot;
              o && (t = o.querySelector(En) || t),
                yield e.onDidDismiss(),
                (null === document.activeElement || document.activeElement === document.body) && t.focus();
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          w = (function () {
            var n = (0, N.A)(function* (e, t, o, i, r, a, s) {
              var d, p;
              if (!e.presented) return !1;
              const m = void 0 !== Ve.d ? l(Ve.d).filter((I) => 'ION-TOAST' !== I.tagName) : [];
              1 === m.length && m[0].id === e.el.id && (h(!1), document.body.classList.remove(xi.B)),
                (e.presented = !1);
              try {
                He(e.el),
                  e.el.style.setProperty('pointer-events', 'none'),
                  e.willDismiss.emit({ data: t, role: o }),
                  null === (d = e.willDismissShorthand) || void 0 === d || d.emit({ data: t, role: o });
                const I = (0, G.b)(e),
                  k = e.leaveAnimation ? e.leaveAnimation : G.c.get(i, 'ios' === I ? r : a);
                o !== Te && (yield D(e, k, e.el, s)),
                  e.didDismiss.emit({ data: t, role: o }),
                  null === (p = e.didDismissShorthand) || void 0 === p || p.emit({ data: t, role: o }),
                  (Mt.get(e) || []).forEach((E) => E.destroy()),
                  Mt.delete(e),
                  e.el.classList.add('overlay-hidden'),
                  e.el.style.removeProperty('pointer-events'),
                  void 0 !== e.el.lastFocus && (e.el.lastFocus = void 0);
              } catch (I) {
                console.error(I);
              }
              return e.el.remove(), pt(), !0;
            });
            return function (t, o, i, r, a, s, d) {
              return n.apply(this, arguments);
            };
          })(),
          _ = (n) => n.querySelector('ion-app') || n.body,
          D = (function () {
            var n = (0, N.A)(function* (e, t, o, i) {
              o.classList.remove('overlay-hidden');
              const a = t(e.el, i);
              (!e.animated || !G.c.getBoolean('animated', !0)) && a.duration(0),
                e.keyboardClose &&
                  a.beforeAddWrite(() => {
                    const d = o.ownerDocument.activeElement;
                    d?.matches('input,ion-input, ion-textarea') && d.blur();
                  });
              const s = Mt.get(e) || [];
              return Mt.set(e, [...s, a]), yield a.play(), !0;
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          S = (n, e) => {
            let t;
            const o = new Promise((i) => (t = i));
            return (
              A(n, e, (i) => {
                t(i.detail);
              }),
              o
            );
          },
          A = (n, e, t) => {
            const o = (i) => {
              (0, M.b)(n, e, o), t(i);
            };
            (0, M.a)(n, e, o);
          },
          ee = 'backdrop',
          Te = 'gesture',
          He = (n) => {
            void 0 !== Ve.d && n.setAttribute('aria-hidden', 'true');
          },
          Wt = (n) => {
            var e;
            if (void 0 === Ve.d) return;
            const t = l(Ve.d);
            for (let o = t.length - 1; o >= 0; o--) {
              const i = t[o],
                r = null !== (e = t[o + 1]) && void 0 !== e ? e : n;
              (r.hasAttribute('aria-hidden') || 'ION-TOAST' !== r.tagName) && i.setAttribute('aria-hidden', 'true');
            }
          },
          pt = () => {
            if (void 0 === Ve.d) return;
            const n = l(Ve.d);
            for (let e = n.length - 1; e >= 0; e--) {
              const t = n[e];
              if ((t.removeAttribute('aria-hidden'), 'ION-TOAST' !== t.tagName)) break;
            }
          },
          Qo = 'ion-disable-focus-trap',
          Xe = (n, e) => null !== e.closest(n),
          Ye = (n, e) =>
            'string' == typeof n && n.length > 0 ? Object.assign({ 'ion-color': !0, [`ion-color-${n}`]: !0 }, e) : e,
          wt = (n) => {
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
          Cc = /^[a-z][a-z0-9+\-.]*:/,
          Ka = (function () {
            var n = (0, N.A)(function* (e, t, o, i) {
              if (null != e && '#' !== e[0] && !Cc.test(e)) {
                const r = document.querySelector('ion-router');
                if (r) return t?.preventDefault(), r.push(e, o, i);
              }
              return !1;
            });
            return function (t, o, i, r) {
              return n.apply(this, arguments);
            };
          })(),
          vr = 'ionKeyboardDidShow';
        var pe = se(412);
        const es = (n, e, t, o, i) => Lc(n[1], e[1], t[1], o[1], i).map((r) => Oc(n[0], e[0], t[0], o[0], r)),
          Oc = (n, e, t, o, i) =>
            i * (3 * e * Math.pow(i - 1, 2) + i * (-3 * t * i + 3 * t + o * i)) - n * Math.pow(i - 1, 3),
          Lc = (n, e, t, o, i) =>
            Fc((o -= i) - 3 * (t -= i) + 3 * (e -= i) - (n -= i), 3 * t - 6 * e + 3 * n, 3 * e - 3 * n, n).filter(
              (a) => a >= 0 && a <= 1,
            ),
          Fc = (n, e, t, o) => {
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
        var xr = se(221);
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
              const e = (0, G.b)(this);
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
        function xo() {
          typeof customElements > 'u' ||
            ['ion-backdrop'].forEach((e) => {
              'ion-backdrop' === e && (customElements.get(e) || customElements.define(e, Pc));
            });
        }
        var Jo = (function (n) {
          return (n.Dark = 'DARK'), (n.Light = 'LIGHT'), (n.Default = 'DEFAULT'), n;
        })(Jo || {});
        const yr = {
            getEngine() {
              const n = (() => {
                if (void 0 !== Ve.w) return Ve.w.Capacitor;
              })();
              if (n?.isPluginAvailable('StatusBar')) return n.Plugins.StatusBar;
            },
            setStyle(n) {
              const e = this.getEngine();
              e && e.setStyle(n);
            },
            getStyle:
              ((n = (0, N.A)(function* () {
                const e = this.getEngine();
                if (!e) return Jo.Default;
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
          ts = () => {
            !Ve.w || Ve.w.innerWidth >= 768 || yr.setStyle({ style: Jo.Dark });
          },
          kr = (n = Jo.Default) => {
            !Ve.w || Ve.w.innerWidth >= 768 || yr.setStyle({ style: n });
          },
          ns = (function () {
            var n = (0, N.A)(function* (e, t) {
              'function' != typeof e.canDismiss ||
                !(yield e.canDismiss(void 0, Te)) ||
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
          Ir = (n) => 0.00255275 * 2.71828 ** (-14.9619 * n) - 1.00255 * 2.71828 ** (-0.0380968 * n) + 1,
          Bc = (n, e, t, o) => {
            const r = n.offsetHeight;
            let a = !1,
              s = !1,
              d = null,
              p = null,
              v = !0,
              I = 0;
            const q = (0, xr.createGesture)({
              el: n,
              gestureName: 'modalSwipeToClose',
              gesturePriority: 39,
              direction: 'y',
              threshold: 10,
              canStart: (Y) => {
                const X = Y.event.target;
                return (
                  null === X ||
                  !X.closest ||
                  ((d = Vt(X)),
                  d
                    ? ((p = Ft(d) ? (0, M.g)(d).querySelector('.inner-scroll') : d),
                      !d.querySelector('ion-refresher') && 0 === p.scrollTop)
                    : null === X.closest('ion-footer'))
                );
              },
              onStart: (Y) => {
                const { deltaY: X } = Y;
                (v = !d || !Ft(d) || d.scrollY),
                  (s = void 0 !== n.canDismiss && !0 !== n.canDismiss),
                  X > 0 && d && Ko(d),
                  e.progressStart(!0, a ? 1 : 0);
              },
              onMove: (Y) => {
                const { deltaY: X } = Y;
                X > 0 && d && Ko(d);
                const ce = Y.deltaY / r,
                  me = ce >= 0 && s,
                  Oe = me ? 0.2 : 0.9999,
                  Be = me ? Ir(ce / Oe) : ce,
                  Ne = (0, M.k)(1e-4, Be, Oe);
                e.progressStep(Ne), Ne >= 0.5 && I < 0.5 ? kr(t) : Ne < 0.5 && I >= 0.5 && ts(), (I = Ne);
              },
              onEnd: (Y) => {
                const X = Y.velocityY,
                  ce = Y.deltaY / r,
                  me = ce >= 0 && s,
                  Oe = me ? 0.2 : 0.9999,
                  Be = me ? Ir(ce / Oe) : ce,
                  Ne = (0, M.k)(1e-4, Be, Oe),
                  at = !me && (Y.deltaY + 1e3 * X) / r >= 0.5;
                let st = at ? -0.001 : 0.001;
                at
                  ? (e.easing('cubic-bezier(0.32, 0.72, 0, 1)'),
                    (st += es([0, 0], [0.32, 0.72], [0, 1], [1, 1], Ne)[0]))
                  : (e.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                    (st += es([0, 0], [1, 0], [0.68, 0.28], [1, 1], Ne)[0]));
                const ht = os(at ? ce * r : (1 - Ne) * r, X);
                (a = at),
                  q.enable(!1),
                  d &&
                    ((n, e) => {
                      Ft(n) ? (n.scrollY = e) : n.style.removeProperty('overflow');
                    })(d, v),
                  e
                    .onFinish(() => {
                      at || q.enable(!0);
                    })
                    .progressEnd(at ? 1 : 0, st, ht),
                  me && Ne > Oe / 4 ? ns(n, e) : at && o();
              },
            });
            return q;
          },
          os = (n, e) => (0, M.k)(400, n / Math.abs(1.1 * e), 500),
          is = (n) => {
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
          rs = (n) => {
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
          as = (n, e) => {
            const { presentingEl: t, currentBreakpoint: o } = e,
              i = (0, M.g)(n),
              { wrapperAnimation: r, backdropAnimation: a } =
                void 0 !== o
                  ? is(e)
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
                m = (0, M.g)(t),
                v = (0, pe.c)().beforeStyles({
                  transform: 'translateY(0)',
                  'transform-origin': 'top center',
                  overflow: 'hidden',
                }),
                I = document.body;
              if (d) {
                const k = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  L = `translateY(${p ? '-10px' : k}) scale(0.915)`;
                v
                  .afterStyles({ transform: L })
                  .beforeAddWrite(() => I.style.setProperty('background-color', 'black'))
                  .addElement(t)
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                    { offset: 1, filter: 'contrast(0.85)', transform: L, borderRadius: '10px 10px 0 0' },
                  ]),
                  s.addAnimation(v);
              } else if ((s.addAnimation(a), p)) {
                const C = `translateY(-10px) scale(${p ? 0.915 : 1})`;
                v.afterStyles({ transform: C })
                  .addElement(m.querySelector('.modal-wrapper'))
                  .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                    { offset: 1, filter: 'contrast(0.85)', transform: C },
                  ]);
                const E = (0, pe.c)()
                  .afterStyles({ transform: C })
                  .addElement(m.querySelector('.modal-shadow'))
                  .keyframes([
                    { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
                    { offset: 1, opacity: '0', transform: C },
                  ]);
                s.addAnimation([v, E]);
              } else r.fromTo('opacity', '0', '1');
            } else s.addAnimation(a);
            return s;
          },
          ss = (n, e, t = 500) => {
            const { presentingEl: o, currentBreakpoint: i } = e,
              r = (0, M.g)(n),
              { wrapperAnimation: a, backdropAnimation: s } =
                void 0 !== i
                  ? rs(e)
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
                v = (0, M.g)(o),
                I = (0, pe.c)()
                  .beforeClearStyles(['transform'])
                  .afterClearStyles(['transform'])
                  .onFinish((C) => {
                    1 === C &&
                      (o.style.setProperty('overflow', ''),
                      Array.from(k.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter(
                        (L) => void 0 !== L.presentingElement,
                      ).length <= 1 && k.style.setProperty('background-color', ''));
                  }),
                k = document.body;
              if (p) {
                const C = CSS.supports('width', 'max(0px, 1px)') ? 'max(30px, var(--ion-safe-area-top))' : '30px',
                  P = `translateY(${m ? '-10px' : C}) scale(0.915)`;
                I.addElement(o).keyframes([
                  { offset: 0, filter: 'contrast(0.85)', transform: P, borderRadius: '10px 10px 0 0' },
                  { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                ]),
                  d.addAnimation(I);
              } else if ((d.addAnimation(s), m)) {
                const E = `translateY(-10px) scale(${m ? 0.915 : 1})`;
                I.addElement(v.querySelector('.modal-wrapper'))
                  .afterStyles({ transform: 'translate3d(0, 0, 0)' })
                  .keyframes([
                    { offset: 0, filter: 'contrast(0.85)', transform: E },
                    { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                  ]);
                const L = (0, pe.c)()
                  .addElement(v.querySelector('.modal-shadow'))
                  .afterStyles({ transform: 'translateY(0) scale(1)' })
                  .keyframes([
                    { offset: 0, opacity: '0', transform: E },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' },
                  ]);
                d.addAnimation([I, L]);
              } else a.fromTo('opacity', '1', '0');
            } else d.addAnimation(s);
            return d;
          },
          Wc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, M.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? is(e)
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
          qc = (n, e) => {
            const { currentBreakpoint: t } = e,
              o = (0, M.g)(n),
              { wrapperAnimation: i, backdropAnimation: r } =
                void 0 !== t
                  ? rs(e)
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
          Xc = (0, c.w$)(
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
                  (this.lockController = uo()),
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
                          : (0, Le.p)(
                              `A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                              o,
                            );
                      },
                      removeClickListener: e,
                    };
                  })()),
                  (this.coreDelegate = co()),
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
                    void 0 === e && this.dismiss(void 0, ee);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = Zc[e.type];
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
                go(e), this.triggerChanged();
              }
              disconnectedCallback() {
                this.triggerController.removeClickListener();
              }
              componentWillLoad() {
                var e;
                const { breakpoints: t, initialBreakpoint: o, el: i, htmlAttributes: r } = this,
                  a = (this.isSheetModal = void 0 !== t && void 0 !== o),
                  s = ['aria-label', 'role'];
                (this.inheritedAttributes = (0, M.d)(i, s)),
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
                    (0, Le.p)('Your breakpoints array must include the initialBreakpoint value.'),
                  (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) || bo(this.el);
              }
              componentDidLoad() {
                !0 === this.isOpen && (0, M.r)(() => this.present()),
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
                return (0, N.A)(function* () {
                  const { canDismiss: i } = o;
                  return 'function' == typeof i ? i(e, t) : i;
                })();
              }
              present() {
                var e = this;
                return (0, N.A)(function* () {
                  const t = yield e.lockController.lock();
                  if (e.presented) return void t();
                  const { presentingElement: o, el: i } = e;
                  e.currentBreakpoint = e.initialBreakpoint;
                  const { inline: r, delegate: a } = e.getDelegate(!0);
                  e.ionMount.emit(),
                    (e.usersElement = yield so(a, i, e.component, ['ion-page'], e.componentProps, r)),
                    (0, M.j)(i) ? yield (0, ge.e)(e.usersElement) : e.keepContentsMounted || (yield (0, ge.w)()),
                    (0, c.bN)(() => e.el.classList.add('show-modal'));
                  const s = void 0 !== o;
                  s && 'ios' === (0, G.b)(e) && ((e.statusBarStyle = yield yr.getStyle()), ts()),
                    yield b(e, 'modalEnter', as, Wc, {
                      presentingEl: o,
                      currentBreakpoint: e.initialBreakpoint,
                      backdropBreakpoint: e.backdropBreakpoint,
                    }),
                    typeof window < 'u' &&
                      ((e.keyboardOpenCallback = () => {
                        e.gesture &&
                          (e.gesture.enable(!1),
                          (0, M.r)(() => {
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
                if ('ios' !== (0, G.b)(this)) return;
                const { el: o } = this,
                  i = this.leaveAnimation || G.c.get('modalLeave', ss),
                  r = (this.animation = i(o, { presentingEl: this.presentingElement }));
                if (!((n) => n.querySelector(dr) || n.querySelector(Yo))(o))
                  return void ((n) => {
                    (0, Le.b)(n, qo);
                  })(o);
                const s = null !== (t = this.statusBarStyle) && void 0 !== t ? t : Jo.Default;
                (this.gesture = Bc(o, r, s, () => {
                  (this.gestureAnimationDismissing = !0),
                    kr(this.statusBarStyle),
                    this.animation.onFinish(
                      (0, N.A)(function* () {
                        yield e.dismiss(void 0, Te), (e.gestureAnimationDismissing = !1);
                      }),
                    );
                })),
                  this.gesture.enable(!0);
              }
              initSheetGesture() {
                const { wrapperEl: e, initialBreakpoint: t, backdropBreakpoint: o } = this;
                if (!e || void 0 === t) return;
                const i = this.enterAnimation || G.c.get('modalEnter', as),
                  r = (this.animation = i(this.el, {
                    presentingEl: this.presentingElement,
                    currentBreakpoint: t,
                    backdropBreakpoint: o,
                  }));
                r.progressStart(!0, 1);
                const { gesture: a, moveSheetToBreakpoint: s } = ((n, e, t, o, i, r, a = [], s, d, p) => {
                  const I = {
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
                    C = t.clientHeight;
                  let E = o,
                    L = 0,
                    P = !1;
                  const Y = r.childAnimations.find((Ze) => 'wrapperAnimation' === Ze.id),
                    X = r.childAnimations.find((Ze) => 'backdropAnimation' === Ze.id),
                    ce = a[a.length - 1],
                    me = a[0],
                    Oe = () => {
                      n.style.setProperty('pointer-events', 'auto'),
                        e.style.setProperty('pointer-events', 'auto'),
                        n.classList.remove(Qo);
                    },
                    Be = () => {
                      n.style.setProperty('pointer-events', 'none'),
                        e.style.setProperty('pointer-events', 'none'),
                        n.classList.add(Qo);
                    };
                  Y &&
                    X &&
                    (Y.keyframes([...I.WRAPPER_KEYFRAMES]),
                    X.keyframes([...I.BACKDROP_KEYFRAMES]),
                    r.progressStart(!0, 1 - E),
                    E > i ? Oe() : Be()),
                    k && E !== ce && (k.scrollY = !1);
                  const ht = (Ze) => {
                      const { breakpoint: Qe, canDismiss: ft, breakpointOffset: lt, animated: xn } = Ze,
                        Bt = ft && 0 === Qe,
                        It = Bt ? E : Qe,
                        er = 0 !== It;
                      return (
                        (E = 0),
                        Y &&
                          X &&
                          (Y.keyframes([
                            { offset: 0, transform: `translateY(${100 * lt}%)` },
                            { offset: 1, transform: `translateY(${100 * (1 - It)}%)` },
                          ]),
                          X.keyframes([
                            { offset: 0, opacity: `calc(var(--backdrop-opacity) * ${wr(1 - lt, i)})` },
                            { offset: 1, opacity: `calc(var(--backdrop-opacity) * ${wr(It, i)})` },
                          ]),
                          r.progressStep(0)),
                        Pt.enable(!1),
                        Bt ? ns(n, r) : er || d(),
                        k && It === a[a.length - 1] && (k.scrollY = !0),
                        new Promise((di) => {
                          r.onFinish(
                            () => {
                              er
                                ? Y && X
                                  ? (0, M.r)(() => {
                                      Y.keyframes([...I.WRAPPER_KEYFRAMES]),
                                        X.keyframes([...I.BACKDROP_KEYFRAMES]),
                                        r.progressStart(!0, 1 - It),
                                        (E = It),
                                        p(E),
                                        E > i ? Oe() : Be(),
                                        Pt.enable(!0),
                                        di();
                                    })
                                  : (Pt.enable(!0), di())
                                : di();
                            },
                            { oneTimeCallback: !0 },
                          ).progressEnd(1, 0, xn ? 500 : 0);
                        })
                      );
                    },
                    Pt = (0, xr.createGesture)({
                      el: t,
                      gestureName: 'modalSheet',
                      gesturePriority: 40,
                      direction: 'y',
                      threshold: 10,
                      canStart: (Ze) => {
                        const Qe = Vt(Ze.event.target);
                        if (((E = s()), 1 === E && Qe)) {
                          const ft = Ft(Qe) ? (0, M.g)(Qe).querySelector('.inner-scroll') : Qe;
                          return !Qe.querySelector('ion-refresher') && 0 === ft.scrollTop;
                        }
                        return !0;
                      },
                      onStart: (Ze) => {
                        (P = void 0 !== n.canDismiss && !0 !== n.canDismiss && 0 === me),
                          Ze.deltaY > 0 && k && (k.scrollY = !1),
                          (0, M.r)(() => {
                            n.focus();
                          }),
                          r.progressStart(!0, 1 - E);
                      },
                      onMove: (Ze) => {
                        Ze.deltaY > 0 && k && (k.scrollY = !1);
                        const ft = a.length > 1 ? 1 - a[1] : void 0,
                          lt = 1 - E + Ze.deltaY / C,
                          xn = void 0 !== ft && lt >= ft && P,
                          Bt = xn ? 0.95 : 0.9999,
                          It = xn && void 0 !== ft ? ft + Ir((lt - ft) / (Bt - ft)) : lt;
                        (L = (0, M.k)(1e-4, It, Bt)), r.progressStep(L);
                      },
                      onEnd: (Ze) => {
                        const lt = E - (Ze.deltaY + 350 * Ze.velocityY) / C,
                          xn = a.reduce((Bt, It) => (Math.abs(It - lt) < Math.abs(Bt - lt) ? It : Bt));
                        ht({ breakpoint: xn, breakpointOffset: L, canDismiss: P, animated: !0 });
                      },
                    });
                  return { gesture: Pt, moveSheetToBreakpoint: ht };
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
                    (0, N.A)(function* () {
                      (e.currentBreakpoint = 0),
                        e.ionBreakpointDidChange.emit({ breakpoint: e.currentBreakpoint }),
                        yield e.dismiss(void 0, Te),
                        (e.gestureAnimationDismissing = !1);
                    }),
                  );
              }
              dismiss(e, t) {
                var o = this;
                return (0, N.A)(function* () {
                  var i;
                  if (o.gestureAnimationDismissing && t !== Te) return !1;
                  const r = yield o.lockController.lock();
                  if ('handler' !== t && !(yield o.checkCanDismiss(e, t))) return r(), !1;
                  const { presentingElement: a } = o;
                  void 0 !== a && 'ios' === (0, G.b)(o) && kr(o.statusBarStyle),
                    typeof window < 'u' &&
                      o.keyboardOpenCallback &&
                      (window.removeEventListener(vr, o.keyboardOpenCallback), (o.keyboardOpenCallback = void 0));
                  const d = yield w(o, e, t, 'modalLeave', ss, qc, {
                    presentingEl: a,
                    currentBreakpoint: null !== (i = o.currentBreakpoint) && void 0 !== i ? i : o.initialBreakpoint,
                    backdropBreakpoint: o.backdropBreakpoint,
                  });
                  if (d) {
                    const { delegate: p } = o.getDelegate();
                    yield lo(p, o.usersElement),
                      (0, c.bN)(() => o.el.classList.remove('show-modal')),
                      o.animation && o.animation.destroy(),
                      o.gesture && o.gesture.destroy();
                  }
                  return (o.currentBreakpoint = void 0), (o.animation = void 0), r(), d;
                })();
              }
              onDidDismiss() {
                return S(this.el, 'ionModalDidDismiss');
              }
              onWillDismiss() {
                return S(this.el, 'ionModalWillDismiss');
              }
              setCurrentBreakpoint(e) {
                var t = this;
                return (0, N.A)(function* () {
                  if (!t.isSheetModal) return void (0, Le.p)('setCurrentBreakpoint is only supported on sheet modals.');
                  if (!t.breakpoints.includes(e))
                    return void (0, Le.p)(
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
                return (0, N.A)(function* () {
                  return e.currentBreakpoint;
                })();
              }
              moveToNextBreakpoint() {
                var e = this;
                return (0, N.A)(function* () {
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
                  p = (0, G.b)(this),
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
                          [Qo]: !1 === s,
                        },
                        wt(this.cssClass),
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
                    ref: (I) => (this.backdropEl = I),
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
                      ref: (I) => (this.wrapperEl = I),
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
          Zc = {
            ionModalDidPresent: 'ionViewDidEnter',
            ionModalWillPresent: 'ionViewWillEnter',
            ionModalWillDismiss: 'ionViewWillLeave',
            ionModalDidDismiss: 'ionViewDidLeave',
          };
        var n;
        const Qc = function ls() {
            typeof customElements > 'u' ||
              ['ion-modal', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-modal':
                    customElements.get(e) || customElements.define(e, Xc);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || xo();
                }
              });
          },
          cs = (n, e, t) => {
            const o = e.getBoundingClientRect(),
              i = o.height;
            let r = o.width;
            return 'cover' === n && t && (r = t.getBoundingClientRect().width), { contentWidth: r, contentHeight: i };
          },
          td = (n, e, t) => {
            let o = [];
            switch (e) {
              case 'hover':
                let i;
                o = [
                  {
                    eventName: 'mouseenter',
                    callback:
                      ((r = (0, N.A)(function* (a) {
                        a.stopPropagation(),
                          i && clearTimeout(i),
                          (i = setTimeout(() => {
                            (0, M.r)(() => {
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
          ds = (n, e) => (e && 'ION-ITEM' === e.tagName ? n.findIndex((t) => t === e) : -1),
          Si = (n) => {
            const t = (0, M.g)(n).querySelector('button');
            t && (0, M.r)(() => t.focus());
          },
          rd = (n) => {
            const e = (function () {
              var t = (0, N.A)(function* (o) {
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
                      const p = ((n, e) => n[ds(n, e) + 1])(a, r);
                      void 0 !== p && Si(p);
                      break;
                    case 'ArrowUp':
                      o.preventDefault();
                      const m = ((n, e) => n[ds(n, e) - 1])(a, r);
                      void 0 !== m && Si(m);
                      break;
                    case 'Home':
                      o.preventDefault();
                      const v = a[0];
                      void 0 !== v && Si(v);
                      break;
                    case 'End':
                      o.preventDefault();
                      const I = a[a.length - 1];
                      void 0 !== I && Si(I);
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
          us = (n, e, t, o, i, r, a, s, d, p, m) => {
            var v;
            let I = { top: 0, left: 0, width: 0, height: 0 };
            if ('event' === r) {
              if (!m) return d;
              I = { top: m.clientY, left: m.clientX, width: 1, height: 1 };
            } else {
              const me = m,
                Oe = p || (null === (v = me?.detail) || void 0 === v ? void 0 : v.ionShadowTarget) || me?.target;
              if (!Oe) return d;
              const Be = Oe.getBoundingClientRect();
              I = { top: Be.top, left: Be.left, width: Be.width, height: Be.height };
            }
            const k = ld(a, I, e, t, o, i, n),
              C = cd(s, a, I, e, t),
              E = k.top + C.top,
              L = k.left + C.left,
              { arrowTop: P, arrowLeft: q } = sd(a, o, i, E, L, e, t, n),
              { originX: Y, originY: X } = ad(a, s, n);
            return { top: E, left: L, referenceCoordinates: I, arrowTop: P, arrowLeft: q, originX: Y, originY: X };
          },
          ad = (n, e, t) => {
            switch (n) {
              case 'top':
                return { originX: ps(e), originY: 'bottom' };
              case 'bottom':
                return { originX: ps(e), originY: 'top' };
              case 'left':
                return { originX: 'right', originY: Ei(e) };
              case 'right':
                return { originX: 'left', originY: Ei(e) };
              case 'start':
                return { originX: t ? 'left' : 'right', originY: Ei(e) };
              case 'end':
                return { originX: t ? 'right' : 'left', originY: Ei(e) };
            }
          },
          ps = (n) => {
            switch (n) {
              case 'start':
                return 'left';
              case 'center':
                return 'center';
              case 'end':
                return 'right';
            }
          },
          Ei = (n) => {
            switch (n) {
              case 'start':
                return 'top';
              case 'center':
                return 'center';
              case 'end':
                return 'bottom';
            }
          },
          sd = (n, e, t, o, i, r, a, s) => {
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
          ld = (n, e, t, o, i, r, a) => {
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
          cd = (n, e, t, o, i) => {
            switch (n) {
              case 'center':
                return ud(e, t, o, i);
              case 'end':
                return dd(e, t, o, i);
              default:
                return { top: 0, left: 0 };
            }
          },
          dd = (n, e, t, o) => {
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
          ud = (n, e, t, o) => {
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
          hs = (n, e, t, o, i, r, a, s, d, p, m, v, I = 0, k = 0, C = 0) => {
            let E = I;
            const L = k;
            let Y,
              P = t,
              q = e,
              X = p,
              ce = m,
              me = !1,
              Oe = !1;
            const Be = v ? v.top + v.height : r / 2 - s / 2,
              Ne = v ? v.height : 0;
            let rt = !1;
            return (
              P < o + d
                ? ((P = o), (me = !0), (X = 'left'))
                : a + o + P + d > i && ((Oe = !0), (P = i - a - o), (X = 'right')),
              Be + Ne + s > r &&
                ('top' === n || 'bottom' === n) &&
                (Be - s > 0
                  ? ((q = Math.max(12, Be - s - Ne - (C - 1))), (E = q + s), (ce = 'bottom'), (rt = !0))
                  : (Y = o)),
              {
                top: q,
                left: P,
                bottom: Y,
                originX: X,
                originY: ce,
                checkSafeAreaLeft: me,
                checkSafeAreaRight: Oe,
                arrowTop: E,
                arrowLeft: L,
                addPopoverBottomClass: rt,
              }
            );
          },
          fd = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              I = p.defaultView.innerHeight,
              k = (0, M.g)(n),
              C = k.querySelector('.popover-content'),
              E = k.querySelector('.popover-arrow'),
              L = r || (null === (t = o?.detail) || void 0 === t ? void 0 : t.ionShadowTarget) || o?.target,
              { contentWidth: P, contentHeight: q } = cs(i, C, L),
              { arrowWidth: Y, arrowHeight: X } = ((n) => {
                if (!n) return { arrowWidth: 0, arrowHeight: 0 };
                const { width: e, height: t } = n.getBoundingClientRect();
                return { arrowWidth: e, arrowHeight: t };
              })(E),
              me = us(
                m,
                P,
                q,
                Y,
                X,
                a,
                s,
                d,
                { top: I / 2 - q / 2, left: v / 2 - P / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              Oe = 'cover' === i ? 0 : 5,
              Be = 'cover' === i ? 0 : 25,
              {
                originX: Ne,
                originY: rt,
                top: at,
                left: st,
                bottom: ht,
                checkSafeAreaLeft: Pt,
                checkSafeAreaRight: Ze,
                arrowTop: Qe,
                arrowLeft: ft,
                addPopoverBottomClass: lt,
              } = hs(
                s,
                me.top,
                me.left,
                Oe,
                v,
                I,
                P,
                q,
                Be,
                me.originX,
                me.originY,
                me.referenceCoordinates,
                me.arrowTop,
                me.arrowLeft,
                X,
              ),
              xn = (0, pe.c)(),
              Bt = (0, pe.c)(),
              It = (0, pe.c)();
            return (
              Bt.addElement(k.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              It.addElement(k.querySelector('.popover-arrow'))
                .addElement(k.querySelector('.popover-content'))
                .fromTo('opacity', 0.01, 1),
              xn
                .easing('ease')
                .duration(100)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${P}px`),
                    lt && n.classList.add('popover-bottom'),
                    void 0 !== ht && C.style.setProperty('bottom', `${ht}px`);
                  let tr = `${st}px`;
                  Pt && (tr = `${st}px + var(--ion-safe-area-left, 0)`),
                    Ze && (tr = `${st}px - var(--ion-safe-area-right, 0)`),
                    C.style.setProperty('top', `calc(${at}px + var(--offset-y, 0))`),
                    C.style.setProperty('left', `calc(${tr} + var(--offset-x, 0))`),
                    C.style.setProperty('transform-origin', `${rt} ${Ne}`),
                    null !== E &&
                      (((n, e = !1, t, o) => !((!t && !o) || ('top' !== n && 'bottom' !== n && e)))(
                        s,
                        me.top !== at || me.left !== st,
                        o,
                        r,
                      )
                        ? (E.style.setProperty('top', `calc(${Qe}px + var(--offset-y, 0))`),
                          E.style.setProperty('left', `calc(${ft}px + var(--offset-x, 0))`))
                        : E.style.setProperty('display', 'none'));
                })
                .addAnimation([Bt, It])
            );
          },
          md = (n) => {
            const e = (0, M.g)(n),
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
          bd = (n, e) => {
            var t;
            const { event: o, size: i, trigger: r, reference: a, side: s, align: d } = e,
              p = n.ownerDocument,
              m = 'rtl' === p.dir,
              v = p.defaultView.innerWidth,
              I = p.defaultView.innerHeight,
              k = (0, M.g)(n),
              C = k.querySelector('.popover-content'),
              E = r || (null === (t = o?.detail) || void 0 === t ? void 0 : t.ionShadowTarget) || o?.target,
              { contentWidth: L, contentHeight: P } = cs(i, C, E),
              Y = us(
                m,
                L,
                P,
                0,
                0,
                a,
                s,
                d,
                { top: I / 2 - P / 2, left: v / 2 - L / 2, originX: m ? 'right' : 'left', originY: 'top' },
                r,
                o,
              ),
              X = 'cover' === i ? 0 : 12,
              {
                originX: ce,
                originY: me,
                top: Oe,
                left: Be,
                bottom: Ne,
              } = hs(s, Y.top, Y.left, X, v, I, L, P, 0, Y.originX, Y.originY, Y.referenceCoordinates),
              rt = (0, pe.c)(),
              at = (0, pe.c)(),
              st = (0, pe.c)(),
              ht = (0, pe.c)(),
              Pt = (0, pe.c)();
            return (
              at
                .addElement(k.querySelector('ion-backdrop'))
                .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
              st.addElement(k.querySelector('.popover-wrapper')).duration(150).fromTo('opacity', 0.01, 1),
              ht
                .addElement(C)
                .beforeStyles({
                  top: `calc(${Oe}px + var(--offset-y, 0px))`,
                  left: `calc(${Be}px + var(--offset-x, 0px))`,
                  'transform-origin': `${me} ${ce}`,
                })
                .beforeAddWrite(() => {
                  void 0 !== Ne && C.style.setProperty('bottom', `${Ne}px`);
                })
                .fromTo('transform', 'scale(0.8)', 'scale(1)'),
              Pt.addElement(k.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1),
              rt
                .easing('cubic-bezier(0.36,0.66,0.04,1)')
                .duration(300)
                .beforeAddWrite(() => {
                  'cover' === i && n.style.setProperty('--width', `${L}px`),
                    'bottom' === me && n.classList.add('popover-bottom');
                })
                .addAnimation([at, st, ht, Pt])
            );
          },
          vd = (n) => {
            const e = (0, M.g)(n),
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
          wd = (0, c.w$)(
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
                  (this.coreDelegate = co()),
                  (this.lockController = uo()),
                  (this.inline = !1),
                  (this.focusDescendantOnPresent = !1),
                  (this.onBackdropTap = () => {
                    this.dismiss(void 0, ee);
                  }),
                  (this.onLifecycle = (e) => {
                    const t = this.usersElement,
                      o = kd[e.type];
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
                      ? (this.destroyTriggerInteraction = td(r, t, o))
                      : (0, Le.p)(
                          `A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,
                          this.el,
                        );
                  }),
                  (this.configureKeyboardInteraction = () => {
                    const { destroyKeyboardInteraction: e, el: t } = this;
                    e && e(), (this.destroyKeyboardInteraction = rd(t));
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
                        const a = (0, M.g)(o).querySelector('.popover-content');
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
                go(t), e();
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
                      : bo(o);
                (this.parentPopover = o.closest(`ion-popover:not(#${i})`)),
                  void 0 === this.alignment && (this.alignment = 'ios' === (0, G.b)(this) ? 'center' : 'start');
              }
              componentDidLoad() {
                const { parentPopover: e, isOpen: t } = this;
                !0 === t && (0, M.r)(() => this.present()),
                  e &&
                    (0, M.a)(e, 'ionPopoverWillDismiss', () => {
                      this.dismiss(void 0, void 0, !1);
                    }),
                  this.configureTriggerInteraction();
              }
              presentFromTrigger(e, t = !1) {
                var o = this;
                return (0, N.A)(function* () {
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
                return (0, N.A)(function* () {
                  const o = yield t.lockController.lock();
                  if (t.presented) return void o();
                  const { el: i } = t,
                    { inline: r, delegate: a } = t.getDelegate(!0);
                  t.ionMount.emit(),
                    (t.usersElement = yield so(a, i, t.component, ['popover-viewport'], t.componentProps, r)),
                    t.keyboardEvents || t.configureKeyboardInteraction(),
                    t.configureDismissInteraction(),
                    (0, M.j)(i) ? yield (0, ge.e)(t.usersElement) : t.keepContentsMounted || (yield (0, ge.w)()),
                    yield b(t, 'popoverEnter', fd, bd, {
                      event: e || t.event,
                      size: t.size,
                      trigger: t.triggerEl,
                      reference: t.reference,
                      side: t.side,
                      align: t.alignment,
                    }),
                    t.focusDescendantOnPresent && Xo(i),
                    o();
                })();
              }
              dismiss(e, t, o = !0) {
                var i = this;
                return (0, N.A)(function* () {
                  const r = yield i.lockController.lock(),
                    { destroyKeyboardInteraction: a, destroyDismissInteraction: s } = i;
                  o && i.parentPopover && i.parentPopover.dismiss(e, t, o);
                  const d = yield w(i, e, t, 'popoverLeave', md, vd, i.event);
                  if (d) {
                    a && (a(), (i.destroyKeyboardInteraction = void 0)),
                      s && (s(), (i.destroyDismissInteraction = void 0));
                    const { delegate: p } = i.getDelegate();
                    yield lo(p, i.usersElement);
                  }
                  return r(), d;
                })();
              }
              getParentPopover() {
                var e = this;
                return (0, N.A)(function* () {
                  return e.parentPopover;
                })();
              }
              onDidDismiss() {
                return S(this.el, 'ionPopoverDidDismiss');
              }
              onWillDismiss() {
                return S(this.el, 'ionPopoverWillDismiss');
              }
              render() {
                const e = (0, G.b)(this),
                  {
                    onLifecycle: t,
                    parentPopover: o,
                    dismissOnSelect: i,
                    side: r,
                    arrow: a,
                    htmlAttributes: s,
                    focusTrap: d,
                  } = this,
                  p = (0, G.a)('desktop'),
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
                      class: Object.assign(Object.assign({}, wt(this.cssClass)), {
                        [e]: !0,
                        'popover-translucent': this.translucent,
                        'overlay-hidden': !0,
                        'popover-desktop': p,
                        [`popover-side-${r}`]: !0,
                        [Qo]: !1 === d,
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
          kd = {
            ionPopoverDidPresent: 'ionViewDidEnter',
            ionPopoverWillPresent: 'ionViewWillEnter',
            ionPopoverWillDismiss: 'ionViewWillLeave',
            ionPopoverDidDismiss: 'ionViewDidLeave',
          };
        const Id = function Cr() {
            typeof customElements > 'u' ||
              ['ion-popover', 'ion-backdrop'].forEach((e) => {
                switch (e) {
                  case 'ion-popover':
                    customElements.get(e) || customElements.define(e, wd);
                    break;
                  case 'ion-backdrop':
                    customElements.get(e) || xo();
                }
              });
          },
          _d = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.type = 'bounded');
              }
              addRipple(e, t) {
                var o = this;
                return (0, N.A)(function* () {
                  return new Promise((i) => {
                    (0, c.gv)(() => {
                      const r = o.el.getBoundingClientRect(),
                        a = r.width,
                        s = r.height,
                        d = Math.sqrt(a * a + s * s),
                        p = Math.max(s, a),
                        m = o.unbounded ? p : d + Sd,
                        v = Math.floor(p * Ed),
                        I = m / v;
                      let k = e - r.left,
                        C = t - r.top;
                      o.unbounded && ((k = 0.5 * a), (C = 0.5 * s));
                      const E = k - 0.5 * v,
                        L = C - 0.5 * v,
                        P = 0.5 * a - k,
                        q = 0.5 * s - C;
                      (0, c.bN)(() => {
                        const Y = document.createElement('div');
                        Y.classList.add('ripple-effect');
                        const X = Y.style;
                        (X.top = L + 'px'),
                          (X.left = E + 'px'),
                          (X.width = X.height = v + 'px'),
                          X.setProperty('--final-scale', `${I}`),
                          X.setProperty('--translate-end', `${P}px, ${q}px`),
                          (o.el.shadowRoot || o.el).appendChild(Y),
                          setTimeout(() => {
                            i(() => {
                              $d(Y);
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
                const e = (0, G.b)(this);
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
          $d = (n) => {
            n.classList.add('fade-out'),
              setTimeout(() => {
                n.remove();
              }, 200);
          },
          Sd = 10,
          Ed = 0.5;
        const Ad = (0, c.w$)(
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
                    ? Ka(this.href, e, this.routerDirection, this.routerAnimation)
                    : (0, M.h)(t) && this.submitForm(e);
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
                (this.inheritedAttributes = (0, M.i)(this.el));
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
                    : ((0, Le.p)(
                        `Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,
                        this.el,
                      ),
                      null)
                  : ((0, Le.p)(
                      `Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,
                      this.el,
                    ),
                    null);
              }
              return void 0 !== e
                ? ((0, Le.p)(
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
              const e = (0, G.b)(this),
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
                  shape: I,
                  strong: k,
                  inheritedAttributes: C,
                } = this,
                E = void 0 === s && this.inItem ? 'small' : s,
                L = void 0 === d ? 'button' : 'a',
                P = 'button' === L ? { type: o } : { download: this.download, href: d, rel: r, target: a };
              let q = this.fill;
              return (
                null == q && (q = this.inToolbar || this.inListHeader ? 'clear' : 'solid'),
                'button' !== o && this.renderHiddenButton(),
                (0, c.h)(
                  c.xr,
                  {
                    key: '340a809d85698741bb36e796355cae89a970655f',
                    onClick: this.handleClick,
                    'aria-disabled': i ? 'true' : null,
                    class: Ye(p, {
                      [e]: !0,
                      [t]: !0,
                      [`${t}-${m}`]: void 0 !== m,
                      [`${t}-${E}`]: void 0 !== E,
                      [`${t}-${I}`]: void 0 !== I,
                      [`${t}-${q}`]: !0,
                      [`${t}-strong`]: k,
                      'in-toolbar': Xe('ion-toolbar', this.el),
                      'in-toolbar-color': Xe('ion-toolbar[color]', this.el),
                      'in-buttons': Xe('ion-buttons', this.el),
                      'button-has-icon-only': v,
                      'button-disabled': i,
                      'ion-activatable': !0,
                      'ion-focusable': !0,
                    }),
                  },
                  (0, c.h)(
                    L,
                    Object.assign(
                      { key: '03ae1b94a0d606aa65aa6f82c2fc76abcf3f1300' },
                      P,
                      {
                        class: 'button-native',
                        part: 'native',
                        disabled: i,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                      },
                      C,
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
        const zd = function Di() {
            typeof customElements > 'u' ||
              ['ion-button', 'ion-ripple-effect'].forEach((e) => {
                switch (e) {
                  case 'ion-button':
                    customElements.get(e) || customElements.define(e, Ad);
                    break;
                  case 'ion-ripple-effect':
                    customElements.get(e) ||
                      (function bn() {
                        typeof customElements > 'u' ||
                          ['ion-ripple-effect'].forEach((e) => {
                            'ion-ripple-effect' === e && (customElements.get(e) || customElements.define(e, _d));
                          });
                      })();
                }
              });
          },
          fs = {
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
          Ld = (0, c.w$)(
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
                const e = this.name || G.c.get('spinner'),
                  t = (0, G.b)(this);
                return e || ('ios' === t ? 'lines' : 'circular');
              }
              render() {
                var e;
                const t = this,
                  o = (0, G.b)(t),
                  i = t.getName(),
                  r = null !== (e = fs[i]) && void 0 !== e ? e : fs.lines,
                  a = 'number' == typeof t.duration && t.duration > 10 ? t.duration : r.dur,
                  s = [];
                if (void 0 !== r.circles) for (let d = 0; d < r.circles; d++) s.push(jd(r, a, d, r.circles));
                else if (void 0 !== r.lines) for (let d = 0; d < r.lines; d++) s.push(Fd(r, a, d, r.lines));
                return (0, c.h)(
                  c.xr,
                  {
                    key: '9d30ee9f5aa0dd0e220da07e75d05b8b2435224d',
                    class: Ye(t.color, {
                      [o]: !0,
                      [`spinner-${i}`]: !0,
                      'spinner-paused': t.paused || G.c.getBoolean('_testing'),
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
          jd = (n, e, t, o) => {
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
          Fd = (n, e, t, o) => {
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
          Rd = function Md() {
            typeof customElements > 'u' ||
              ['ion-spinner'].forEach((e) => {
                'ion-spinner' === e && (customElements.get(e) || customElements.define(e, Ld));
              });
          },
          Bd = (0, c.w$)(
            class extends c.wt {
              constructor() {
                super(), this.__registerHost(), this.__attachShadow(), (this.color = void 0);
              }
              render() {
                const e = (0, G.b)(this);
                return (0, c.h)(
                  c.xr,
                  { key: 'e134d70c04344b708a2ecf6253722781ad2ca826', class: Ye(this.color, { [e]: !0 }) },
                  (0, c.h)('slot', { key: 'da79c760f7ebbcd007ce110439f05a62cb22eac8' }),
                );
              }
              static get style() {
                return ':host(.ion-color){color:var(--ion-color-base)}';
              }
            },
            [1, 'ion-text', { color: [513] }],
          ),
          Hd = function Nd() {
            typeof customElements > 'u' ||
              ['ion-text'].forEach((e) => {
                'ion-text' === e && (customElements.get(e) || customElements.define(e, Bd));
              });
          },
          Dr = (n) => {
            const e = n.getTimezoneOffset();
            return n.setMinutes(n.getMinutes() - e), n;
          };
        Dr(new Date('2022T01:00')), Dr(new Date('2022T13:00'));
        var Np = Object.defineProperty;
        typeof window < 'u' && window,
          ((n, e) => {
            for (var t in e) Np(n, t, { get: e[t], enumerable: !0 });
          })({}, { err: () => al, map: () => oh, ok: () => Wr, unwrap: () => ih, unwrapErr: () => rh });
        var Wr = (n) => ({ isOk: !0, isErr: !1, value: n }),
          al = (n) => ({ isOk: !1, isErr: !0, value: n });
        function oh(n, e) {
          if (n.isOk) {
            const t = e(n.value);
            return t instanceof Promise ? t.then((o) => Wr(o)) : Wr(t);
          }
          if (n.isErr) return al(n.value);
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
        const St = ['*'],
          dg = (n, e) => {
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
          ug = (n, e) => {
            const t = n.prototype;
            e.forEach((o) => {
              t[o] = function () {
                const i = arguments;
                return this.z.runOutsideAngular(() => this.el[o].apply(this.el, i));
              };
            });
          };
        function Et(n) {
          return function (t) {
            const { defineCustomElementFn: o, inputs: i, methods: r } = n;
            return void 0 !== o && o(), i && dg(t, i), r && ug(t, r), t;
          };
        }
        let pg = (() => {
            let n = class Ea {
              z;
              el;
              constructor(t, o, i) {
                (this.z = i),
                  t.detach(),
                  (this.el = o.nativeElement),
                  ((n, e, t) => {
                    t.forEach((o) => (n[o] = (0, Ae.fromEvent)(e, o)));
                  })(this, this.el, ['ionFocus', 'ionBlur']);
              }
              static ɵfac = function (o) {
                return new (o || Ea)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              };
              static ɵcmp = f.ɵɵdefineComponent({
                type: Ea,
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
                ngContentSelectors: St,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return (
              (n = (0, B.__decorate)(
                [
                  Et({
                    defineCustomElementFn: zd,
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
          hg = (() => {
            let n = class Da {
              z;
              el;
              constructor(t, o, i) {
                (this.z = i), t.detach(), (this.el = o.nativeElement);
              }
              static ɵfac = function (o) {
                return new (o || Da)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              };
              static ɵcmp = f.ɵɵdefineComponent({
                type: Da,
                selectors: [['ion-spinner']],
                inputs: { color: 'color', duration: 'duration', name: 'name', paused: 'paused' },
                standalone: !0,
                features: [f.ɵɵStandaloneFeature],
                ngContentSelectors: St,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return (
              (n = (0, B.__decorate)(
                [Et({ defineCustomElementFn: Rd, inputs: ['color', 'duration', 'name', 'paused'] })],
                n,
              )),
              n
            );
          })(),
          fg = (() => {
            let n = class Ta {
              z;
              el;
              constructor(t, o, i) {
                (this.z = i), t.detach(), (this.el = o.nativeElement);
              }
              static ɵfac = function (o) {
                return new (o || Ta)(
                  f.ɵɵdirectiveInject(f.ChangeDetectorRef),
                  f.ɵɵdirectiveInject(f.ElementRef),
                  f.ɵɵdirectiveInject(f.NgZone),
                );
              };
              static ɵcmp = f.ɵɵdefineComponent({
                type: Ta,
                selectors: [['ion-text']],
                inputs: { color: 'color', mode: 'mode' },
                standalone: !0,
                features: [f.ɵɵStandaloneFeature],
                ngContentSelectors: St,
                decls: 1,
                vars: 0,
                template: function (o, i) {
                  1 & o && (f.ɵɵprojectionDef(), f.ɵɵprojection(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            };
            return (n = (0, B.__decorate)([Et({ defineCustomElementFn: Hd, inputs: ['color', 'mode'] })], n)), n;
          })(),
          mg = (() => {
            class n extends Sn {
              angularDelegate = (0, f.inject)(kn);
              injector = (0, f.inject)(f.Injector);
              environmentInjector = (0, f.inject)(f.EnvironmentInjector);
              constructor() {
                super(ki), Qc();
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
              static ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
            }
            return n;
          })();
        class gg extends Sn {
          angularDelegate = (0, f.inject)(kn);
          injector = (0, f.inject)(f.Injector);
          environmentInjector = (0, f.inject)(f.EnvironmentInjector);
          constructor() {
            super(fr), Id();
          }
          create(e) {
            return super.create({
              ...e,
              delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover'),
            });
          }
        }
        const bg = (n = {}) =>
            (0, f.makeEnvironmentProviders)([
              { provide: pn, useValue: n },
              { provide: f.APP_INITIALIZER, useFactory: vg, multi: !0, deps: [pn, W.DOCUMENT] },
              { provide: zt, useFactory: io, deps: [ye.Router] },
              kn,
              mg,
              gg,
            ]),
          vg = (n, e) => () => {
            e.documentElement.classList.add('ion-ce'), (0, G.i)(n);
          };
        function _a(n) {
          return oe((e, t) => {
            let r,
              o = null,
              i = !1;
            (o = e.subscribe(
              Nt(t, void 0, void 0, (a) => {
                (r = Ao(n(a, _a(n)(e)))), o ? (o.unsubscribe(), (o = null), r.subscribe(t)) : (i = !0);
              }),
            )),
              i && (o.unsubscribe(), (o = null), r.subscribe(t));
          });
        }
        function $a(n, e) {
          return oe((t, o) => {
            let i = 0;
            t.subscribe(
              Nt(o, (r) => {
                o.next(n.call(e, r, i++));
              }),
            );
          });
        }
        let lc = (() => {
          class n {
            getNameFromId(t) {
              switch (t) {
                case 'apple_itunes':
                  return 'Itunes';
                case 'google_play_movies':
                  return 'Google Play';
                case 'netflix':
                  return 'Netflix';
                default:
                  return t.replace(/_/gi, ' ');
              }
            }
            getNetflixUrl(t) {
              return de.WakoHttpRequestService.request(
                {
                  url: t.url,
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
                _a((o) => (302 === o.status ? (0, Ae.of)(o.response) : (0, Ae.throwError)(o))),
                $a((o) => {
                  if (o.match('Found') && null !== o.match(/href="([^"]*)/)) {
                    const s = o.match(/href="([^"]*)/);
                    if (s[1]) return s[1];
                  }
                  const a = new DOMParser()
                    .parseFromString(o, 'text/html')
                    .querySelector('meta[property="al:ios:url"]');
                  return a && a.getAttribute('content')
                    ? `http://www.netflix.com/watch/${a.getAttribute('content').split('/').pop().split('?').shift()}`
                    : t.url;
                }),
              );
            }
            setKnownPlatformUrl(t) {
              const o = [];
              return (
                t.forEach((i) => {
                  o.push(
                    'netflix' === i.id
                      ? this.getNetflixUrl(i).pipe(
                          _a((r) => (console.error(r), (0, Ae.of)(i.url))),
                          $a((r) => ((i.url = r), i)),
                        )
                      : (0, Ae.of)(i),
                  );
                }),
                (0, Ae.forkJoin)(o)
              );
            }
            getSources(t) {
              let o = null;
              return (
                t.movie
                  ? (o = `/movies/${t.movie.ids.trakt}`)
                  : t.show &&
                    t.episode &&
                    (o = `/shows/${t.show.ids.trakt}/seasons/${t.episode.seasonNumber}/episodes/${t.episode.number}`),
                de.WakoHttpRequestService.get('https://trakt.tv' + o, null, '3d').pipe(
                  $a((i) => {
                    const r = [];
                    try {
                      new DOMParser()
                        .parseFromString(i, 'text/html')
                        .querySelectorAll('.streaming-links .sources a')
                        .forEach((p) => {
                          try {
                            let m = p.getAttribute('data-source')?.trim();
                            const v = p.getAttribute('data-country')?.trim(),
                              I = p.getAttribute('href')?.trim();
                            if ('#' === I) return;
                            const k = p.querySelector('img')?.getAttribute('data-original');
                            !m && I.match('/watchnow') && (m = I.split('/').pop());
                            const C = m ? this.getNameFromId(m) : 'N/A';
                            r.push({
                              id: m,
                              name: C,
                              country: v,
                              url: 'https://trakt.tv' + I,
                              logoUrl: 'https://trakt.tv' + k,
                            });
                          } catch (m) {
                            console.error(m);
                          }
                        });
                    } catch (a) {
                      console.error(a);
                    }
                    return r;
                  }),
                  Wn((i) => this.setKnownPlatformUrl(i)),
                )
              );
            }
            static {
              this.ɵfac = function (o) {
                return new (o || n)();
              };
            }
            static {
              this.ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
            }
          }
          return n;
        })();
        function Kg(n, e) {
          1 & n && f.ɵɵelement(0, 'ion-spinner');
        }
        function Xg(n, e) {
          1 & n && (f.ɵɵelementStart(0, 'ion-text'), f.ɵɵtext(1), f.ɵɵpipe(2, 'translate'), f.ɵɵelementEnd()),
            2 & n && (f.ɵɵadvance(), f.ɵɵtextInterpolate(f.ɵɵpipeBind1(2, 1, 'noSourceFound')));
        }
        function Zg(n, e) {
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
        let Ji = (() => {
            class n {
              constructor(t) {
                (this.watchnowService = t), (this.type = 'button'), (this.sources = []), (this.loading = !0);
              }
              ngOnInit() {
                this.watchnowService
                  .getSources({ movie: this.movie, show: this.show, episode: this.episode })
                  .pipe(
                    (function _e(n) {
                      return oe((e, t) => {
                        try {
                          e.subscribe(t);
                        } finally {
                          t.add(n);
                        }
                      });
                    })(() => (this.loading = !1)),
                  )
                  .subscribe((t) => {
                    (this.sources = t), console.log({ sources: t });
                  });
              }
              goTo(t) {
                (function U(n, e) {
                  'FirebasePlugin' in window && window.FirebasePlugin.logEvent(n, e);
                })('addon_watchnow', { type: this.type, source: t.id }),
                  de.BrowserService.open(t.url, !1);
              }
              static {
                this.ɵfac = function (o) {
                  return new (o || n)(f.ɵɵdirectiveInject(lc));
                };
              }
              static {
                this.ɵcmp = f.ɵɵdefineComponent({
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
                      f.ɵɵtemplate(1, Kg, 1, 0, 'ion-spinner', 1)(2, Xg, 3, 3, 'ion-text', 1)(
                        3,
                        Zg,
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
                  dependencies: [W.NgIf, W.NgFor, W.TitleCasePipe, Z.TranslateModule, Z.TranslatePipe, hg, fg, pg],
                  styles: [
                    '.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--background: #e50914}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--background: #999}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--background: #607d8b}',
                  ],
                });
              }
            }
            return n;
          })(),
          cc = (() => {
            class n extends de.EpisodeDetailBaseComponent {
              setShowEpisode(t, o) {
                (this.show = t), (this.episode = o);
              }
              static {
                this.ɵfac = (() => {
                  let t;
                  return function (i) {
                    return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                  };
                })();
              }
              static {
                this.ɵcmp = f.ɵɵdefineComponent({
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
                  dependencies: [Ji],
                  encapsulation: 2,
                });
              }
            }
            return n;
          })(),
          dc = (() => {
            class n extends de.MovieDetailBaseComponent {
              setMovie(t) {
                this.movie = t;
              }
              static {
                this.ɵfac = (() => {
                  let t;
                  return function (i) {
                    return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                  };
                })();
              }
              static {
                this.ɵcmp = f.ɵɵdefineComponent({
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
                  dependencies: [Ji],
                  encapsulation: 2,
                });
              }
            }
            return n;
          })(),
          uc = (() => {
            class n extends de.PluginBaseService {
              constructor(t) {
                super(), (this.translate = t);
              }
              initialize() {
                $e('plugin initialized');
              }
              afterInstall() {
                $e('plugin installed');
              }
              afterUpdate() {
                $e('plugin updated');
              }
              setTranslation(t, o) {
                this.translate.setDefaultLang(t), this.translate.use(t), this.translate.setTranslation(t, o);
              }
              customAction(t, o) {}
              beforeMovieMiddleware(t) {
                throw new Error('Method not implemented.');
              }
              afterMovieMiddleware(t) {
                throw new Error('Method not implemented.');
              }
              beforeShowMiddleware(t) {
                throw new Error('Method not implemented.');
              }
              afterShowMiddleware(t) {
                throw new Error('Method not implemented.');
              }
              beforeEpisodeMiddleware(t, o) {
                throw new Error('Method not implemented.');
              }
              afterEpisodeMiddleware(t, o) {
                throw new Error('Method not implemented.');
              }
              fetchExplorerFolderItem() {
                throw new Error('Method not implemented.');
              }
              getFileActionButtons(t, o, i, r, a, s) {
                return (0, N.A)(function* () {
                  throw new Error('Method not implemented.');
                })();
              }
              static {
                this.ɵfac = function (o) {
                  return new (o || n)(f.ɵɵinject(Z.TranslateService));
                };
              }
              static {
                this.ɵprov = f.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
              }
            }
            return n;
          })(),
          pc = (() => {
            class n extends de.ShowDetailBaseComponent {
              setShow(t) {
                this.show = t;
              }
              static {
                this.ɵfac = (() => {
                  let t;
                  return function (i) {
                    return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                  };
                })();
              }
              static {
                this.ɵcmp = f.ɵɵdefineComponent({
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
                  dependencies: [Ji],
                  encapsulation: 2,
                });
              }
            }
            return n;
          })();
        var Sa = se(165);
        const hc = new f.InjectionToken('STORAGE_CONFIG_TOKEN');
        class Qg extends Sa.Storage {
          constructor() {
            super();
          }
          create() {
            var e = this;
            return (0, N.A)(function* () {
              return e;
            })();
          }
          defineDriver() {
            return (0, N.A)(function* () {})();
          }
          get driver() {
            return 'noop';
          }
          get(e) {
            return (0, N.A)(function* () {
              return null;
            })();
          }
          set(e, t) {
            return (0, N.A)(function* () {})();
          }
          remove(e) {
            return (0, N.A)(function* () {})();
          }
          clear() {
            return (0, N.A)(function* () {})();
          }
          length() {
            return (0, N.A)(function* () {
              return 0;
            })();
          }
          keys() {
            return (0, N.A)(function* () {
              return [];
            })();
          }
          forEach(e) {
            return (0, N.A)(function* () {})();
          }
          setEncryptionKey(e) {}
        }
        function Jg(n, e) {
          return (0, W.isPlatformServer)(n) ? new Qg() : new Sa.Storage(e);
        }
        let eb = (() => {
          class n {
            static forRoot(t = null) {
              return {
                ngModule: n,
                providers: [
                  { provide: hc, useValue: t },
                  { provide: Sa.Storage, useFactory: Jg, deps: [f.PLATFORM_ID, hc] },
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
        const tb = [dc, cc, pc, Ji];
        let fc = (() => {
          class n extends de.PluginBaseModule {
            static {
              this.pluginService = uc;
            }
            static {
              this.movieComponent = dc;
            }
            static {
              this.episodeComponent = cc;
            }
            static {
              this.showComponent = pc;
            }
            static {
              this.ɵfac = (() => {
                let t;
                return function (i) {
                  return (t || (t = f.ɵɵgetInheritedFactory(n)))(i || n);
                };
              })();
            }
            static {
              this.ɵmod = f.ɵɵdefineNgModule({ type: n });
            }
            static {
              this.ɵinj = f.ɵɵdefineInjector({
                providers: [uc, lc, ...de.WakoProviders, bg({ swipeBackEnabled: !0, backButtonText: '', mode: 'md' })],
                imports: [W.CommonModule, ae.FormsModule, Z.TranslateModule.forRoot(), eb.forRoot({}), tb],
              });
            }
          }
          return n;
        })();
        const nb = fc;
      })(),
      nr
    );
  })(),
);
