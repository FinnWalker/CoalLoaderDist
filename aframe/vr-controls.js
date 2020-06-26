AFRAME.registerComponent("raycaster-listen", {
  init: function () {
    const el = this.el;
    el.target = null;
    el.target_parent = null;
    el.target_color = null;
    el.highlight_color = "red";

    el.intersecting_entities = [];

    el.ball = document.getElementById("ball");
    el.object3D.add(ball.object3D);
    el.scene = document.querySelector("a-scene");
    el.grabbed = false;
    el.pulling = false;
    el.pushing = false;
    el.gripping = false;
    el.linked = false;

    function findClosestIntersection() {
      let distances = [];
      for (let element of el.intersecting_entities) {
        distances.push(
          getDistance(
            el.components.raycaster.getIntersection(element).point,
            el.object3D.position
          )
        );
      }
      index = -1;
      let lowest_so_far = Infinity;
      for (let i = 0; i < distances.length; i++) {
        if (distances[i] < lowest_so_far) {
          lowest_so_far = distances[i];
          index = i;
        }
      }
      return index;
    }

    function clearTarget() {
      if (el.target == null) return;
      el.target.setAttribute("color", el.target_color);
      el.target.object3D.remove(el.ball.object3D);
      el.object3D.add(el.ball.object3D);
      el.ball.setAttribute("visible", false);
      el.ball.object3D.scale.set(0.1, 0.1, 0.1);

      el.target = null;
    }
    function selectTarget(index) {
      el.target = el.intersecting_entities[index];
      el.target_color = el.target.getAttribute("color");
      el.target.setAttribute("color", el.highlight_color);

      el.target.object3D.add(el.ball.object3D);
      el.ball.object3D.position.set(0, 0, 0);
      let ball_scale = el.ball.object3D.scale;
      let target_scale = el.target.object3D.scale;
      el.ball.setAttribute("visible", true);
    }

    function handleIntersection() {
      if (el.grabbed) return;
      clearTarget();
      if (el.intersecting_entities.length > 0) {
        selectTarget(findClosestIntersection());
      }
    }

    el.addEventListener("raycaster-intersection", function (evt) {
      for (let element of evt.detail.els) {
        if (!el.intersecting_entities.includes(element)) {
          el.intersecting_entities.push(element);
        }
      }
      handleIntersection();
    });

    el.addEventListener("raycaster-intersection-cleared", function (evt) {
      for (let element of evt.detail.clearedEls) {
        const index = el.intersecting_entities.indexOf(element);
        el.intersecting_entities.splice(index, 1);
      }
      handleIntersection();
    });

    el.addEventListener("triggerdown", function () {
      if (el.target) {
        el.grabbed = true;
        el.object3D.attach(el.ball.object3D);
        el.target_parent = el.target.object3D.parent;

        el.scene.object3D.attach(el.target.object3D);

        el.target.setAttribute("opacity", 0.5);
      }
    });

    el.addEventListener("triggerup", function () {
      if (el.grabbed) {
        if (el.target_parent) {
          el.scene.object3D.remove(el.target.object3D);
          el.target_parent.attach(el.target.object3D);
        }
        el.target.setAttribute("opacity", 1);
        el.ball.object3D.position.set(0, 0, 0);
        el.grabbed = false;
      }
      handleIntersection();
    });

    el.addEventListener("abuttondown", function () {
      if (el.grabbed) {
        el.pulling = true;
      }
    });
    el.addEventListener("abuttonup", function () {
      el.pulling = false;
    });
    el.addEventListener("bbuttondown", function () {
      if (el.grabbed) {
        el.pushing = true;
      }
    });
    el.addEventListener("bbuttonup", function () {
      el.pushing = false;
    });
    el.addEventListener("gripdown", function () {
      el.gripping = true;
    });
    el.addEventListener("gripup", function () {
      el.gripping = false;
      el.target_parent.attach(el.target.object3D);
    });
  },

  tick: function () {
    const el = this.el;
    if (el.grabbed) {
      if (!el.gripping) {
        el.scene.object3D.attach(el.target.object3D);
        var vector = new THREE.Vector3();
        vector.setFromMatrixPosition(el.ball.object3D.matrixWorld);
        el.target.setAttribute("position", vector);
      } else {
        el.object3D.attach(el.target.object3D);
      }

      if (el.gripping && (el.pulling || el.pushing)) {
        let newScale = el.target.getAttribute("scale");
        const direction = el.pulling ? -1 : 1;
        const speed = 0.01;

        newScale.x += speed * direction;
        newScale.x = Math.max(0.1, Math.min(newScale.x, 4));
        newScale.y = newScale.x;
        newScale.z = newScale.x;

        el.target.setAttribute("scale", newScale);
        el.ball.setAttribute("scale", {
          x: newScale.x * 0.1,
          y: newScale.y * 0.1,
          z: newScale.z * 0.1,
        });
      } else {
        if (el.pulling || el.pushing) {
          console.log("test");
          const direction = el.components.raycaster.attrValue.direction;
          const speed = 0.01 * (el.pulling ? -1 : 1);
          let newPos = el.ball.getAttribute("position");
          newPos.x += direction.x * speed;
          newPos.y += direction.y * speed;
          newPos.z += direction.z * speed;

          el.ball.setAttribute("position", newPos);
        }
      }
    }
  },
});
