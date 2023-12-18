1. install helm
2. helm version
3. helm create api
4. helm install my-app .
5. helm list
6. helm get manifest my-app
7. helm uninstall my-app
8. helm install my-app .
9. helm upgrade my-app . --dry-run
10. helm search hub wordpress
11. helm repo list
12. helm search repo kube-prometheus
13. helm show chart kube-prometheus
14. helm show values prometheus-community/kube-prometheus-stack > test-values.yaml
15. helm install prometheus prometheus-community/kube-prometheus-stack -f test-values.yaml
