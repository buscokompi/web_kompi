<template>
    <TheHeader />
    <div class="main">
        <div class="container">
            <h1>Política de Privacidad
            </h1>
            <h3>Protección de datos de carácter personal según la LOPD
            </h3>

            <p>En aplicación de la normativa vigente en materia de protección de datos de carácter personal
                se informa que los datos personales que se recogen a través de los formularios del sitio
                web <strong>www.app.adoptaunkompi.com</strong> se incluyen en los ficheros automatizados específicos de
                usuarios de
                los servicios del titular.
            </p>

            <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el
                mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento
                y otras actividades propias del titular.
            </p>

            <p>Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de
                dar cumplimiento a la finalidad anteriormente expuesta
            </p>

            <p>El titular adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de
                los datos conforme a lo dispuesto en la <strong> Ley Orgánica 15/1999 de 13 de diciembre, de Protección
                    de Datos
                    de Carácter Personal (LOPD)</strong>.
            </p>

            <p> El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación y
                cancelación reconocidos en la citada LOPD. El ejercicio de estos derechos puede realizarlo el propio
                usuario a través de email a <strong>buscokompi@gmail.com</strong>.
            </p>
            <p>
                El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se compromete a
                mantenerlos actualizados, comunicando los cambios al titular.
            </p>
            <p>En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de
                alojamiento compartido, el titular no se hace responsable del incumplimiento por parte del usuario de la
                LOPD.
            </p>
            <h3>Retención de datos en conformidad a la LSSI
            </h3>
            <p>El titular informa de que, como prestador de servicio de alojamiento de datos y en virtud de lo
                establecido en la <strong>Ley34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de
                    Comercio
                    Electrónico (LSSI)</strong>, retiene por un periodo máximo de 12 meses la información imprescindible
                para
                identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio. La
                retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán ser utilizados en el
                marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a
                disposición de los jueces y/o tribunales o del Ministerio que así los requiera. La comunicación de datos
                a las Fuerzas y Cuerpos del Estado se hará en virtud a lo dispuesto en la normativa sobre protección de
                datos personales
            </p>


            <p> Adoptaunkompi considera como objetivo básico garantizar la privacidad y confidencialidad de los datos
                personales de sus Usuarios recabados a través de cualquier sistema que permita la transmisión de los
                mismos.
            </p>

            <p>Adoptaunkompi manifiesta su compromiso de cumplimiento con la legislación española que en esta materia se
                encuentre en cada momento vigente, en la actualidad, la <strong> Ley Orgánica 15/1999, de 13 de
                    diciembre, de
                    Protección de Datos de Carácter Personal</strong> y el nuevo Reglamento General Europeo de
                Protección de Datos de
                Carácter Personal
            </p>

            <p> Los datos recabados serán tratados con la finalidad de poder gestionar adecuadamente todo el proceso
                relativo a la adopción de un animal en Adoptaunkompi.
            </p>
            <p> La legitimación se realiza a través de su consentimiento expreso.</p>
            <p>Los datos no podrán cedidos a terceros salvo en los supuestos previstos en la normativa vigente sobre
                protección de datos de carácter personal.
            </p>
        </div>
    </div>
    <FooterSection />

</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import FooterSection from "../components/FooterSection.vue"
export default {
    name: "PrivacyPolicy",
    components: {
        TheHeader,
        FooterSection
    }
}
</script>

<style scoped>
p {
    font-size: 18px;
}

h3 {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 25px;
}

h1 {
    margin: 0 0 16px 0;
    text-decoration: underline;
    color: #334e6f;
    font-weight: 580;

}

.main {
    padding: 120px 0 40px 0;
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: var(--lightgrey);

}

.container {
    width: 50%;
    margin-right: auto;
    margin-left: auto;
}
</style>
