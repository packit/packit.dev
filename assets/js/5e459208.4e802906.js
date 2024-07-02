"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[37809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),_=s,d=m["".concat(p,".").concat(_)]||m[_]||u[_]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=_;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const i={title:"Research Openshift tests in Zuul alternatives",authors:"mmassari"},r=void 0,o={unversionedId:"testing/openshift-zuul-test-alternatives",id:"testing/openshift-zuul-test-alternatives",title:"Research Openshift tests in Zuul alternatives",description:"This research is about giving an answer to this card.",source:"@site/research/testing/openshift-zuul-test-alternatives.md",sourceDirName:"testing",slug:"/testing/openshift-zuul-test-alternatives",permalink:"/research/testing/openshift-zuul-test-alternatives",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/testing/openshift-zuul-test-alternatives.md",tags:[],version:"current",frontMatter:{title:"Research Openshift tests in Zuul alternatives",authors:"mmassari"},sidebar:"autogenerated",previous:{title:"How to make packit-service-tests-openshift OpenShift-less?",permalink:"/research/testing/openshift-to-podman-kube-play"},next:{title:"Zuul CI",permalink:"/research/testing/zuul"}},p={},l=[{value:"Openshift tests using podman kube play",id:"openshift-tests-using-podman-kube-play",level:2},{value:"Quick and dirty steps for make them running",id:"quick-and-dirty-steps-for-make-them-running",level:3},{value:"1. We need to convert jinja templates in pure yaml files",id:"1-we-need-to-convert-jinja-templates-in-pure-yaml-files",level:4},{value:"2. Tweak the generated yaml files and play our main pods locally",id:"2-tweak-the-generated-yaml-files-and-play-our-main-pods-locally",level:4},{value:"3. Run openshift packit-service tests locally",id:"3-run-openshift-packit-service-tests-locally",level:4},{value:"Summary",id:"summary",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This research is about giving an answer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/orgs/packit/projects/7/views/1?pane=issue&itemId=43441287"},"this card"),"."),(0,s.kt)("h2",{id:"openshift-tests-using-podman-kube-play"},"Openshift tests using podman kube play"),(0,s.kt)("p",null,"Following suggestions in ",(0,s.kt)("a",{parentName:"p",href:"https://packit.dev/research/testing/openshift-to-podman-kube-play"},"this research")," I have done a quick & dirty setup for running ",(0,s.kt)("em",{parentName:"p"},"packit-service openshift tests")," using pods created with ",(0,s.kt)("inlineCode",{parentName:"p"},"podman kube play"),"."),(0,s.kt)("h3",{id:"quick-and-dirty-steps-for-make-them-running"},"Quick and dirty steps for make them running"),(0,s.kt)("h4",{id:"1-we-need-to-convert-jinja-templates-in-pure-yaml-files"},"1. We need to convert jinja templates in pure yaml files"),(0,s.kt)("p",null,"This is a ",(0,s.kt)("strong",{parentName:"p"},"dirty")," ansible playbook for doing it"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# ansible-playbook -vv -c local -i localhost render_templates.yaml\n---\n- name: Render jinja2 templates\n  hosts: localhost\n  vars:\n    validate_certs: true\n    service: "{{ lookup(\'env\', \'SERVICE\') | default(\'packit\', True) }}"\n    deployment: "dev"\n    tenant: packit # MP+ tenant\n    with_tokman: true\n    with_fedmsg: true\n    with_redis_commander: false\n    with_flower: false\n    with_dashboard: true\n    with_beat: true\n    with_pushgateway: true\n    with_repository_cache: false\n    repository_cache_storage: 4Gi\n    push_dev_images: false\n    with_fluentd_sidecar: false\n    postgres_version: 13\n    image: quay.io/packit/packit-service:{{ deployment }}\n    image_worker: quay.io/packit/packit-worker:{{ deployment }}\n    image_fedmsg: quay.io/packit/packit-service-fedmsg:{{ deployment }}\n    image_dashboard: quay.io/packit/dashboard:{{ deployment }}\n    image_tokman: quay.io/packit/tokman:{{ deployment }}\n    image_fluentd: quay.io/packit/fluentd-splunk-hec:latest\n    # project_dir is set in tasks/project-dir.yml\n    path_to_secrets: "{{ project_dir }}/secrets/{{ service }}/{{ deployment }}"\n    # to be used in Image streams as importPolicy:scheduled value\n    auto_import_images: "{{(deployment != \'prod\')}}"\n    # used in dev/zuul deployment to tag & push images to cluster\n    # https://github.com/packit/deployment/issues/112#issuecomment-673343049\n    # container_engine: "{{ lookup(\'pipe\', \'command -v podman 2> /dev/null || echo docker\') }}"\n    container_engine: docker\n    celery_app: packit_service.worker.tasks\n    celery_retry_limit: 2\n    celery_retry_backoff: 3\n    workers_all_tasks: 1\n    workers_short_running: 0\n    workers_long_running: 0\n    distgit_url: https://src.fedoraproject.org/\n    distgit_namespace: rpms\n    sourcegit_namespace: "" # fedora-source-git only\n    pushgateway_address: http://pushgateway\n    # Check that the deployment repo is up-to-date\n    check_up_to_date: true\n    # Check that the current vars file is up-to-date with the template\n    check_vars_template_diff: true\n    deployment_repo_url: https://github.com/packit/deployment.git\n    # used by a few tasks below\n    k8s_apply: false\n    tokman:\n      workers: 1\n      resources:\n        requests:\n          memory: "88Mi"\n          cpu: "5m"\n        limits:\n          memory: "128Mi"\n          cpu: "50m"\n    appcode: PCKT-002\n    project: myproject\n    host: https://api.crc.testing:6443\n    api_key: ""\n    validate_certs: false\n    check_up_to_date: false\n    push_dev_images: false # pushing dev images manually!\n    check_vars_template_diff: false\n    with_tokman: false\n    with_fedmsg: false\n    with_redis_commander: false\n    with_flower: false\n    with_beat: false\n    with_dashboard: false\n    with_pushgateway: false\n    with_fluentd_sidecar: false\n    managed_platform: false\n    workers_all_tasks: 1\n    workers_short_running: 0\n    workers_long_running: 0\n    path_to_secrets: "{{ project_dir }}/secrets/{{ service }}/{{ deployment }}"\n    sandbox_namespace: "packit-dev-sandbox"\n    packit_service_project_dir: "/home/maja/PycharmProjects/packit-service"\n  tasks:\n  - include_tasks: tasks/project-dir.yml\n  - name: include variables\n    ansible.builtin.include_vars: "{{ project_dir }}/vars/{{ service }}/{{ deployment }}.yml"\n    tags:\n      - always\n\n  - name: Getting deploymentconfigs\n    include_tasks: tasks/set-facts.yml\n    tags:\n      - always\n\n  - name: Include extra secret vars\n    ansible.builtin.include_vars:\n      file: "{{ path_to_secrets }}/extra-vars.yml"\n      name: vault\n    tags:\n      - always\n\n    # to be able to read the github_app_id from the configuration file in tokman\n  - name: include packit-service configuration\n    ansible.builtin.include_vars:\n      file: "{{ path_to_secrets }}/packit-service.yaml"\n      name: packit_service_config\n    tags:\n      - tokman\n\n  - name: include extra secret vars\n    ansible.builtin.include_vars: "{{ path_to_secrets }}/extra-vars.yml"\n    tags:\n      - always\n\n\n  - name: render templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/redis.yml.j2"\n       dest: /tmp/redis.yaml\n  - name: render templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/postgres.yml.j2"\n       dest: /tmp/postgres.yaml\n  - name: render templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/packit-service.yml.j2"\n       dest: /tmp/packit-service.yaml\n  - name: render templates\n    vars:\n      component: packit-worker\n      queues: "short-running,long-running"\n      worker_replicas: "1"\n      worker_requests_memory: "384Mi"\n      worker_requests_cpu: "100m"\n      worker_limits_memory: "1024Mi"\n      worker_limits_cpu: "400m"\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/packit-worker.yml.j2"\n       dest: /tmp/packit-worker.yaml\n  - name: render postgres templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-postgres.yml.j2"\n       dest: /tmp/secret-postgres.yaml\n  - name: render packit-secrets templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-packit-secrets.yml.j2"\n       dest: /tmp/secret-packit-secrets.yaml\n  - name: render packit-config templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-packit-config.yml.j2"\n       dest: /tmp/secret-packit-config.yaml\n  - name: render secret sentry templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-sentry.yml.j2"\n       dest: /tmp/secret-sentry.yaml\n  - name: render secret splunk templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-splunk.yml.j2"\n       dest: /tmp/secret-splunk.yaml\n  - name: render secret ssh templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-packit-ssh.yml.j2"\n       dest: /tmp/secret-packit-ssh.yaml\n  - name: render secret aws templates\n    ansible.builtin.template:\n       src: "{{ project_dir }}/openshift/secret-aws.yml.j2"\n       dest: /tmp/secret-aws.yaml\n')),(0,s.kt)("h4",{id:"2-tweak-the-generated-yaml-files-and-play-our-main-pods-locally"},"2. Tweak the generated yaml files and play our main pods locally"),(0,s.kt)("p",null,"We are now able to run redis, postgres, service and worker locally using the Openshift configuration files and podman kube play."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'podman kube play /tmp/redis.yaml\npodman kube play /tmp/secret-postgres.yaml\npodman kube play /tmp/postgres.yaml\npodman kube play /tmp/secret-packit-secrets.yaml\npodman kube play /tmp/secret-packit-config.yaml\npodman kube play /tmp/secret-sentry.yaml\npodman kube play /tmp/secret-splunk.yaml\npodman kube play --replace /tmp/packit-service.yaml\npodman kube play /tmp/secret-packit-ssh.yaml\npodman kube play /tmp/secret-aws.yaml\nsed -i "s/resources:/securityContext:\\n            runAsUser: 1024\\\\n            runAsNonRoot: true\\\\n          resources:/" /tmp/packit-service.yaml\nsed -i "s/StatefulSet/Deployment/" /tmp/packit-worker.yaml\nsed -i "s/resources:/securityContext:\\n            runAsUser: 1024\\\\n            runAsNonRoot: true\\\\n          resources:/" /tmp/packit-worker.yaml\npodman kube play --replace /tmp/packit-worker.yaml\n')),(0,s.kt)("h4",{id:"3-run-openshift-packit-service-tests-locally"},"3. Run openshift packit-service tests locally"),(0,s.kt)("p",null,"Apply this patch to packit-service repo ",(0,s.kt)("strong",{parentName:"p"},"adjusting")," in it the ",(0,s.kt)("inlineCode",{parentName:"p"},"hostPath")," to where the packit-service repo is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'diff --git a/files/test-in-openshift.yaml b/files/test-in-openshift.yaml\nindex 0d555a13..2740aa4b 100644\n--- a/files/test-in-openshift.yaml\n+++ b/files/test-in-openshift.yaml\n@@ -1,9 +1,12 @@\n ---\n-kind: Job\n-apiVersion: batch/v1\n+kind: Deployment\n+apiVersion: apps/v1\n metadata:\n   name: packit-tests\n spec:\n+  replicas: 1\n+  strategy:\n+    type: Recreate\n   template:\n     spec:\n       volumes:\n@@ -12,10 +15,13 @@ spec:\n         - name: packit-config\n           secret: { secretName: packit-config }\n         - name: test-src-pv\n-          persistentVolumeClaim: { claimName: test-src-pvc }\n+          hostPath:\n+            path: "/home/maja/PycharmProjects/packit-service/"\n+            type: Directory\n+              #persistentVolumeClaim: { claimName: test-src-pvc }\n         - name: test-data-pv\n           persistentVolumeClaim: { claimName: test-data-pvc }\n-      restartPolicy: Never\n+            #restartPolicy: Never\n       containers:\n         - name: packit-tests\n           image: quay.io/packit/packit-service-tests:stg\n@@ -41,11 +47,15 @@ spec:\n             - name: packit-config\n               mountPath: /home/packit/.config\n             - name: test-src-pv\n-              mountPath: /src\n+              mountPath: /src:Z\n             - name: test-data-pv\n               mountPath: /tmp/test_data\n-          command: ["bash", "/src/files/run_tests.sh"]\n-  backoffLimit: 1\n+          #privileged: true\n+          #securityContext:\n+          #  runAsUser: 1024\n+          #  runAsNonRoot: true\n+          command: ["/bin/bash"]\n+          args: ["-c", "sleep 1800"]\n ---\n kind: PersistentVolumeClaim\n apiVersion: v1\ndiff --git a/files/test-src-mounter.yaml b/files/test-src-mounter.yaml\nindex 20ec681b..297064a5 100644\n--- a/files/test-src-mounter.yaml\n+++ b/files/test-src-mounter.yaml\n@@ -13,6 +13,6 @@ spec:\n     - name: packit-tests\n       image: quay.io/packit/packit-service-tests:stg\n       volumeMounts:\n-        - mountPath: /src\n+        - mountPath: /home/maja/PycharmProjects/packit-service/\n           name: test-src-pv\n       command: ["bash", "-c", "sleep 10000"]\n')),(0,s.kt)("p",null,"Now you can run the packit-service openshift tests using podman kube instead of starting the ",(0,s.kt)("em",{parentName:"p"},"service")," and the ",(0,s.kt)("em",{parentName:"p"},"worker"),"; remember of running a ",(0,s.kt)("inlineCode",{parentName:"p"},"podman kube play --down /tmp/xxx.yaml")," for every line above where you have used ",(0,s.kt)("inlineCode",{parentName:"p"},"podman kube play /tmp/xxx.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"podman kube play /tmp/redis.yaml\npodman kube play /tmp/secret-postgres.yaml\npodman kube play /tmp/postgres.yaml\npodman kube play /tmp/secret-packit-secrets.yaml\npodman kube play /tmp/secret-packit-config.yaml\npodman kube play --replace /home/maja/PycharmProjects/packit-service/files/test-src-mounter.yaml\npodman kube play --replace /home/maja/PycharmProjects/packit-service/files/test-in-openshift-get-data.yaml\npodman kube play --replace /home/maja/PycharmProjects/packit-service/files/test-in-openshift.yaml\npodman exec -ti packit-tests-pod-packit-tests /bin/bash\nsh /src/files/run_tests.sh\n")),(0,s.kt)("p",null,"There will be two failing tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"============================================== short test summary info ===============================================\nFAILED tests_openshift/openshift_integration/test_pkgtool.py::Pkgtool::test_pkgtool_clone - requre.exceptions.ItemNotInStorage: Keys not in storage:/src/tests_openshift/openshift_integration/test_data/test...\nFAILED tests_openshift/openshift_integration/test_sandcastle.py::test_get_api_client - kubernetes.config.config_exception.ConfigException: Invalid kube-config file. No configuration found.\n========================== 2 failed, 172 passed, 3 skipped, 37 warnings in 70.40s (0:01:10) ==========================\n")),(0,s.kt)("p",null,"I think the first one can be fixed improving this setup but not the second one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"________________________________________________ test_get_api_client _________________________________________________\n\n    def test_get_api_client():\n        \"\"\"let's make sure we can get k8s API client\"\"\"\n>       assert sandcastle.Sandcastle.get_api_client()\n\ntests_openshift/openshift_integration/test_sandcastle.py:9:\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n/usr/local/lib/python3.9/site-packages/sandcastle/api.py:324: in get_api_client\n    load_kube_config(client_configuration=configuration)\n/usr/local/lib/python3.9/site-packages/kubernetes/config/kube_config.py:792: in load_kube_config\n    loader = _get_kube_config_loader(\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\nfilename = '~/.kube/config', config_dict = None, persist_config = True\nkwargs = {'active_context': None, 'config_persister': <bound method KubeConfigMerger.save_changes of <kubernetes.config.kube_config.KubeConfigMerger object at 0x7ff3a1ea7d30>>}\nkcfg = <kubernetes.config.kube_config.KubeConfigMerger object at 0x7ff3a1ea7d30>\n\n    def _get_kube_config_loader(\n            filename=None,\n            config_dict=None,\n            persist_config=False,\n            **kwargs):\n        if config_dict is None:\n            kcfg = KubeConfigMerger(filename)\n            if persist_config and 'config_persister' not in kwargs:\n                kwargs['config_persister'] = kcfg.save_changes\n\n            if kcfg.config is None:\n>               raise ConfigException(\n                    'Invalid kube-config file. '\n                    'No configuration found.')\nE               kubernetes.config.config_exception.ConfigException: Invalid kube-config file. No configuration found.\n\n/usr/local/lib/python3.9/site-packages/kubernetes/config/kube_config.py:751: ConfigException\n")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/v4.4/markdown/podman-kube-play.1.html"},(0,s.kt)("inlineCode",{parentName:"a"},"podman kube play"))," can not be used to test:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"sandcastle"),"; we need a k8s cluster to be able to use the ",(0,s.kt)("inlineCode",{parentName:"li"},"kubernates")," library. We could deploy pods in the cluster using ",(0,s.kt)("a",{parentName:"li",href:"https://docs.podman.io/en/v4.4/markdown/podman-kube-apply.1.html"},(0,s.kt)("inlineCode",{parentName:"a"},"podman kube apply"))," but still we need an up and running cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"deployment"),"; the Openshift tests in the ",(0,s.kt)("em",{parentName:"li"},"deployment")," repo are checking that pods are up and running on an Openshift dev instance; we can not check the same using ",(0,s.kt)("inlineCode",{parentName:"li"},"podman kube play")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"podman kube apply")," (we would test different deployment settings...).")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"podman kube play")," can be used for openshift tests in ",(0,s.kt)("em",{parentName:"p"},"packit-service")," project not related with ",(0,s.kt)("em",{parentName:"p"},"sandcastle")," but ",(0,s.kt)("inlineCode",{parentName:"p"},"docker-compose")," should be enough for these as well; so I don't really see advantages in using ",(0,s.kt)("inlineCode",{parentName:"p"},"podman kube play"),"."),(0,s.kt)("p",null,"For tests in ",(0,s.kt)("em",{parentName:"p"},"deployment"),", ",(0,s.kt)("em",{parentName:"p"},"sandcastle")," and in ",(0,s.kt)("em",{parentName:"p"},"packit-service")," (which reference ",(0,s.kt)("em",{parentName:"p"},"sandcastle"),") we still need a running k8s cluster."),(0,s.kt)("p",null,"If I get it correctly, the ",(0,s.kt)("strong",{parentName:"p"},"strimzi")," project has tests running on Testing Farm using ",(0,s.kt)("em",{parentName:"p"},"minikube"),": ",(0,s.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2023/08/17/how-testing-farm-makes-testing-your-upstream-project-easier#"},"https://developers.redhat.com/articles/2023/08/17/how-testing-farm-makes-testing-your-upstream-project-easier#"),"\nFor this reason I think we can probably make something similar using Openshift (maybe using Openshift Local - I think it makes sense to test everything against an Openshift instance)."))}u.isMDXComponent=!0}}]);