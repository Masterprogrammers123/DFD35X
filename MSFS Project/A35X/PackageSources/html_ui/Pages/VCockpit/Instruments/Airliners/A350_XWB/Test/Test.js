class A350_Testing{
    onUpdate(_deltaTime) {
        let speedKnots = SimVar.GetSimVarValue("E:AIRSPEED INDICATED", "knots");
        document.write("speedKnots");
    }
}