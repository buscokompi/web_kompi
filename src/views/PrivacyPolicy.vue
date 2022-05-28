<template>
    <TheHeader />
    <div class="main">
        <div class="container">
            <h1>Política de privacidad
            </h1>
            <h2>Protección de datos de carácter personal según la LOPD</h2>

            <p>En aplicación de la normativa vigente en materia de protección de datos de carácter personal
                se informa que los datos personales que se recogen a través de los formularios del sitio
                web <strong>adoptaunkompi.com</strong> se incluyen en los ficheros automatizados específicos de
                usuarios de los servicios del titular.
            </p>
            <br>
            <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el
                mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento
                y otras actividades propias del titular.
            </p>
            <br>
            <p>Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de
                dar cumplimiento a la finalidad anteriormente expuesta.
            </p>
            <br>
            <p>El titular adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de
                los datos conforme a lo dispuesto en la <strong> Ley Orgánica 15/1999 de 13 de diciembre, de Protección
                    de Datos
                    de Carácter Personal (LOPD)</strong>.
            </p>
            <br>
            <p> El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación y
                cancelación reconocidos en la citada LOPD. El ejercicio de estos derechos puede realizarlo el propio
                usuario a través de email a <strong class="mail">adoptaunkompi@gmail.com</strong>
            </p>
            <br>
            <p>
                El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se compromete a
                mantenerlos actualizados, comunicando los cambios al titular.
            </p>
            <br>
            <p>En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de
                alojamiento compartido, el titular no se hace responsable del incumplimiento por parte del usuario de la
                LOPD.
            </p>
            <h2>Retención de datos en conformidad a la LSSI</h2>
            <p>El titular informa de que, como prestador de servicio de alojamiento de datos y en virtud de lo
                establecido en la <strong>Ley34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de
                    Comercio Electrónico (LSSI)</strong>, retiene por un periodo máximo de 12 meses la información
                imprescindible
                para identificar el origen de los datos alojados y el momento en que se inició la prestación del
                servicio. La
                retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán ser utilizados en el
                marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a
                disposición de los jueces y/o tribunales o del Ministerio que así los requiera. La comunicación de datos
                a las Fuerzas y Cuerpos del Estado se hará en virtud a lo dispuesto en la normativa sobre protección de
                datos personales.
            </p>
            <br>
            <p> <i>Kompi</i> considera como objetivo básico garantizar la privacidad y confidencialidad de los datos
                personales de sus Usuarios recabados a través de cualquier sistema que permita la transmisión de los
                mismos.
            </p>
            <br>
            <p><i>Kompi</i> manifiesta su compromiso de cumplimiento con la legislación española que en esta materia se
                encuentre en cada momento vigente, en la actualidad, la <strong> Ley Orgánica 15/1999, de 13 de
                    diciembre, de
                    Protección de Datos de Carácter Personal</strong> y el nuevo Reglamento General Europeo de
                Protección de Datos de
                Carácter Personal.
            </p>
            <br>
            <p> Los datos recabados serán tratados con la finalidad de poder gestionar adecuadamente todo el proceso
                relativo a la adopción de un animal en <i>Kompi</i>.
            </p>
            <br>
            <p> La legitimación se realiza a través de su consentimiento expreso.</p>
            <br>
            <p>Los datos no podrán cedidos a terceros salvo en los supuestos previstos en la normativa vigente sobre
                protección de datos de carácter personal.
            </p>
        </div>
    </div>
    <TheFooter />

</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"
export default {
    name: "PrivacyPolicy",
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>
h1 {
    font-family: var(--text-font);
    font-size: 2rem;
    color: var(--green);
    font-weight: 600;
    margin: 3rem 0 0.5rem 0;

}

h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    color: var(--black);

}

p {
    font-size: 0.9rem;
    color: var(--black);
}

.mail {
    font-size: 0.85rem;
}

.main {
    padding: 7.5rem 0 2.5rem 0;
    width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: var(--lightgrey);
}

.container {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3rem;
}

@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {}

@media screen and (min-width: 1300px) {
    h1 {
        margin: 5rem 0 0.5rem 0;
    }

    p {
        font-size: 1rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        font-size: 1.6rem;
    }

    .mail {
        font-size: 1rem;
    }

}
</style>
